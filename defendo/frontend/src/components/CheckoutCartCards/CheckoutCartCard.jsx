import React from 'react'
import './CheckoutCartCardStyles.css'
import img from '../../../src/imgs/droppedProduct.jpeg'

function CheckoutCartCard() {
    return (
        <div className="CheckoutCartCard-wrapper">
            <div class="card border-1" >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title text-center fw-bold">Card title</h5>
                    <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="btn">
                    <a href="#" class="btn btn-primary px-5">Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutCartCard