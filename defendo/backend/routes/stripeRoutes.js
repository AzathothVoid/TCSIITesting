import express from 'express';
import Stripe from 'stripe';
import dotenv from "dotenv";
import { Order } from '../model/orderSchema.js';
try {
  dotenv.config();
} catch (err) {

  console.error('Error loading .env file:', err);
}
const app = express();
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/stripe/create-checkout-session', async (req, res) => {

  const customer = await stripe.customers.create({
    metadata : {
      userId : req.body.userId,
      cart : JSON.stringify(req.body.cartItems)
    }
  })

  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: 'pkr',
        product_data: {
          name: item.Name,
          metadata: {
            id: item.id
          }
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
      quantity: item.quantity,
    }
  })
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['PK']
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 99 * 100,
            currency: 'pkr',
          },
          display_name: 'Standard Shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer :  customer.id,
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
});

//create Order
const createOrder = async(customer , data) =>{
  const Items = JSON.parse(customer.metadata.cart)

    const newOrder = new Order({
      userId : customer.metadata.userId,
      customerId : data.customer,
      paymentIntentId : data.payement_intent,
      products : Items,
      subtotal : data.amount_subtotal,
      total : data.amount_total,
      shipping : data.customer_details,
      payment_status : data.payment_status
    })

try {

   const savedOrder =  await newOrder.save()

  console.log(savedOrder);
} catch (error) {
    console.log(error);
}
};



// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
//  endpointSecret = "whsec_38ef3107e66e1286ed2e779930032b665fe370a19309579941f31bd36d0261fb";

router.post('/stripe/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let data;
  let eventType;


  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("webhook verified");
    } catch (err) {
      console.log(`webhook error : ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

      data = event.data.object;
      eventType = event.type;
  }else{
    data = req.body.data.object;
    eventType = req.body.type;
  }



  // Handle the event

  if(eventType === "checkout.session.completed"){
    stripe.customers.retrieve(data.customer)
    .then((customer)=>{
      
      createOrder(customer, data)
    })
    .catch(err => console.log(err.message));
  }
  // Return a 200 response to acknowledge receipt of the event
  res.send().end();
});

export default router;
