import './CheckoutStyles.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextareaAutosize, TextField } from '@mui/material';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useCreateOrderMutation } from '../../features/orders'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Checkout() {


    const form = useRef();


    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart);


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice + 99;
    };

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        zip: '',
        paymentMethod: '',
        phoneNumber: '',
        orderNotes: '',
        termsAndConditions: ''
    }


    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        address: Yup.string().required('Address is required'),
        country: Yup.string().required('Country is required'),
        city: Yup.string().required('City is required'),
        zip: Yup.string().required('Zip code is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        orderNotes: Yup.string(),
        termsAndConditions: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required('Terms and conditions is required')
    });

    const [createOrder] = useCreateOrderMutation()

    const handleSubmit = async (values, { resetForm }) => {

        const newOrder = {

            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            address: values.address,
            country: values.country,
            city: values.city,
            zip: values.zip,
            phoneNumber: values.phoneNumber,
            orderNotes: '' || values.orderNotes,
            products: cartItems.map((item) => ({
                id: item.id,
                Name: item.Name,
                price: item.price,
                quantity: item.quantity,
                size: item.size,
                itemPrice: item.price * item.quantity,
            })),
            total: calculateTotalPrice(),
        }

        try {
            await createOrder(newOrder);

            const emailResult = emailjs.send('service_ghnch3b', 'template_7vfcs8a', newOrder, 'kKQ4i9t_9NkfBYBtO')
                .then((result) => { console.log(result.text) },
                    (error) => { console.log(error.text) });
            console.log(emailResult.text);

            resetForm();

            navigate('/checkout-success');

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched, values }) => (
                <Form ref={form}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-4 order-md-last your-cart p-5">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-primary">Your Cart</span>
                                    <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
                                </h4>
                                <ul className="list-group mb-3">
                                    {
                                        cartItems.map((item, idx) => {
                                            return (
                                                <li key={idx} className="list-group-item d-flex justify-content-between lh-sm">
                                                    <div>
                                                        <h6 className="my-0">{item.Name}</h6>
                                                        <small className="text-body-secondary">Quantity {item.quantity}</small>
                                                    </div>
                                                    <span className="text-body-secondary">Rs {item.price}</span>
                                                </li>
                                            )
                                        })
                                    }

                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (PKR)</span>
                                        <strong>Rs {calculateTotalPrice()}</strong>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-md-7 col-lg-8 p-5 ">
                                <h4 className="mb-3 fw-bold">Billing address</h4>
                                <div className="row g-3">

                                    <div className="col-sm-6">
                                        <label htmlFor="firstName" className="form-label">First name</label>
                                        <Field as={TextField} type="text" className="p-1 my-2 form-control" name="firstName" placeholder="First Name" required />
                                        {errors.firstName && <ErrorMessage name="firstName" component="div" className="error-message" />}
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="lastName" className="form-label">Last name</label>
                                        <Field as={TextField} type="text" className="p-1 my-2 form-control" name="lastName" placeholder="Last Name" required />
                                        {errors.lastName && <ErrorMessage name="lastName" component="div" className="error-message" />}
                                    </div>



                                    <div className="col-12">
                                        <label htmlFor='email' className="form-label">Email</label>
                                        <Field as={TextField} className="p-1 my-2 form-control" type="text" placeholder="you@example.com" name="email" required />
                                        {errors.email && <ErrorMessage className="error-message" name="email" component="div" />}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor='address' className="form-label">Address</label>
                                        <Field as={TextField} className="p-1 my-2 form-control" type="text" name="address" placeholder="123 main st...." required />
                                        {errors.address && <ErrorMessage className="error-message" name="address" component="div" />}
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor='country' className="form-label">Country</label>
                                        <Field as={TextField} className="p-1 my-2 form-control" type="text" placeholder='country' name="country" required />
                                        {errors.country && <ErrorMessage className="error-message" name="country" component="div" />}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='city' className="form-label">City</label>
                                        <Field as={TextField} className="p-1 my-2 form-control" type="text" placeholder='city' name="city" required />
                                        {errors.city && <ErrorMessage className="error-message" name="city" component="div" />}
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor='zip' className="form-label">Zip</label>
                                        <Field as={TextField} className="p-1 my-2 form-control" type="text" placeholder='zip' name="zip" required />
                                        {errors.zip && <ErrorMessage className="error-message" name="zip" component="div" />}
                                    </div>

                                    <div className="col-12 form-check">
                                        <input id="cashondelivery" name="paymentMethod" type="radio" className="form-check-input" defaultChecked />
                                        <label className="form-check-label" htmlFor="paymentMethod">Cash on delivery</label>
                                    </div>


                                    <div className="col-12">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <Field className="form-control" as={TextField} type="text" name="phoneNumber" placeholder="Phone Number" required />
                                        <ErrorMessage name="phoneNumber" component="div" className="invalid-feedback" />
                                    </div>

                                    <div className="col-12 py-3">
                                        <label htmlFor="orderNotes" className="form-label">Order Notes (optional)</label>

                                        <Field className="form-control" name="orderNotes" placeholder="Add any specific instructions or notes for your order" />
                                        {errors.orderNotes && <ErrorMessage className="error-message" name="orderNotes" component="div" />}
                                    </div>
                                    <div className="order-summary py-3">
                                        <h4 className="mb-3">Order Summary</h4>
                                        <ul className="list-group mb-3">
                                            {
                                                cartItems.map((item) => (
                                                    <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                                        <div>
                                                            <h6 className="my-0">{item.Name}</h6>
                                                            <small className="text-body-secondary">Quantity {item.quantity}</small>
                                                        </div>
                                                        <span className="text-body-secondary">Rs {item.price}</span>

                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-12 form-check mb-3 py-3 ms-4 terms" id='terms'>
                                        <Field type="checkbox" id="termsAndConditions" name="termsAndConditions" className="form-check-input" required />
                                        <label className="form-check-label" htmlFor="termsAndConditions">I agree to the terms and conditions</label>
                                        {errors.orderNotes && <ErrorMessage name="termsAndConditions" component="div" className="invalid-feedback" />}
                                    </div>

                                    <button className='login-btn my-3 p-2 py-2 m-0 rounded' type="submit" >Place your Order!</button>


                                </div>
                            </div>
                        </div>
                    </div>

                </Form>
            )
            }
        </Formik >

    )


}

export default Checkout;