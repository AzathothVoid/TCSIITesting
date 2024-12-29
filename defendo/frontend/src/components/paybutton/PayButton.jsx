import React from 'react'
import axios from 'axios'

function PayButton({ cartItems }) {
    console.log(cartItems);
    const baseUrl = 'http://localhost:7000'
    const user = {
        _id: 1,
        username: "Bilal",
        email: "ba1770490@gmail.com"
    }
    const handleCheckout = () => {
        axios.post(`${baseUrl}/stripe/create-checkout-session`, {
            cartItems,
            userId: user._id
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        }).catch((err) => console.log(err.message));
    }

    return (
        <button onClick={() => { handleCheckout() }}>Checkout</button>
    )
}

export default PayButton;