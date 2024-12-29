import React from 'react';
import './cartStyles.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../features/cartSlice';
import QuantitySelector from '../quantitySelector/QuantitySelector'


function Cart() {
  const baseUrl = 'http://localhost:7000';
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    console.log(itemId)
  };


  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart(itemId));
    } else {
      dispatch(updateQuantity({ itemId, newQuantity }));
    }
  };

  return (
    <>
      <div className="cart-wrapper">

        {cartItems.length === 0 ? (
          <div className="body-text text-center">
            Your cart is empty
          </div>
        ) : (
          <>
            {cartItems.map((item, idx) => (
              <>
                <div key={idx}>
                  <div class="card border-0 border-bottom">
                    <div class="row g-0">
                      <div class="col-md-4 p-1">
                        <img src={item.img[0]} class="img-fluid rounded-start" alt="..." />
                      </div>
                      <div class="col-md-8 p-1">
                        <div class="card-body p-0 ">
                          <h5 class="card-title">{item.Name}</h5>
                          <p class="card-text">Quantity: {item.quantity}</p>
                          {item.color && (<p className="card-text">Colour: {item.color}</p>)}
                          {item.size && (<p className="card-text">Size: {item.size}</p>)}
                          <p class="card-text">{item.price} PKR</p>
                          <div className="display">
                            <div class="card-text"><small class="text-body-secondary">
                              <QuantitySelector quantity={item.quantity} onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)} />
                            </small></div>
                            <button className='remove-btn' onClick={() => handleRemoveFromCart(item.id)}><span className='border-bottom text-uppercase'>remove</span></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='total-price'>
              <Link to="/checkout"><h5 className='m-0 p-1'> Proceed to Checkout: {calculateTotalPrice()} </h5></Link>
            </div> */}
              </>

            ))}
          </>


        )}

      </div>


    </>




  );
}
export default Cart;
