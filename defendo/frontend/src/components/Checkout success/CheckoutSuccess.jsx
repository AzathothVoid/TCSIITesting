import React from 'react'
import './CheckoutSuccessStyles.css'
import success from '../../../src/imgs/success.png'
import { Link } from 'react-router-dom'

function CheckoutSuccess() {
  return (
    <div className="checkout-success-wrapper m-3 p-5">
      <div className="card p-5">
        <div className="img-div">
          <img className='img' src={success} class="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h2 className="card-title mt-4">Success</h2>
          <p className="card-text">
            Thank you for placing your order with us. We have received your order. <br /> Our team will carefully review your order details, and you can expect a confirmation from us within the next approximately 24 hours.
           
            
          </p>
          <Link to='/'><button className='bg-dark btn text-white p-2'>Continue Shopping!</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess;