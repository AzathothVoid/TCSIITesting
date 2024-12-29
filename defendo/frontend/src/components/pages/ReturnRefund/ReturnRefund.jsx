import React from 'react'
import { Link } from 'react-router-dom'
import './ReturnRefundStyles.css'

function ReturnRefund() {
  return (
    <div className="return-refund-wrapper p-5">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-12">
            <h4 className='text-center text-uppercase return-heading my-5'>returns and refunds</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className='para text-justify'>Our refund and returns policy lasts 15 days. If 15 days have passed since your purchase, we can’t offer you a <br /> full refund or exchange.</p>
            <p className='para text-justify'>To be eligible for a return, your item must be unused and in the same condition that you received it. It must <br /> also be in the original packaging.</p>
            <p className='para text-start'>To initiate your return, we require a receipt or proof of purchase.</p>
            <p className="para text-center">
              Your satisfaction is important to us. If for any reason you wish to return or request a refund for an item, please don't hesitate to reach out to us. Kindly send the relevant order details, including the order number and item details, to our dedicated email address at ShopDefendo@gmail.com. Our customer service team will promptly assist you and guide you through the return or refund process. We value your feedback and are committed to providing you with the best service possible. ITEMS PURCHASED ON SALE OR DISCOUNT CODES ARE NOT ELIGIBLE FOR RETURN, EXCHANGE OR REFUND.
            </p>
            <p className='para text-center'>Email us at</p><a class='text-decor para text-center' href='mailto:support@shopdefendo.com' target='_blank'>support@shopdefendo.com</a>

            
            


            <div className="situations">
              <div className="div">
                <h5 className='my-3'>There are certain situations where only partial refunds are granted:</h5>
                <ul>
                  <li>Any item not in its original condition, is damaged or missing parts for reasons not due to our error.</li>
                  <li>Any item that is returned more than 14 days after delivery.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnRefund