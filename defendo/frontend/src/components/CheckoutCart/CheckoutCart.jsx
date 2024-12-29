import React from 'react'
import './CheckoutCartStyles.css'
import CheckoutCartCard from '../CheckoutCartCards/CheckoutCartCard'
import {Link} from 'react-router-dom'

function CheckoutCart() {
    return (
        <div className="checkout-cart-wrapper">
            <div className="container">
                <div className="title">
                    <h1 className='mt-4'>Store</h1>
                </div>
                <div className="description mb-5">
                    <p className='text-center'> Your Collection</p>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                        <CheckoutCartCard />
                        </div>
                    </div>
                </div>

            </div>
            <div className="cart-btn m-3">
               <Link to="/checkout" class="btn btn-dark text-light px-3 fw-bold"><i class=" fs-5 bi bi-cart-check"></i></Link>
               </div>
        </div>
    )
}

export default CheckoutCart