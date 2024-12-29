import React, { useState } from 'react'
import './QuantitySelectorStyles.css'

function QuantitySelector({ onQuantityChange }) {
    const [state, setState] = useState(1)


    const handleIncrement = () => {
        setState(state + 1);
        onQuantityChange(state + 1);
    }
    const handleDecrement = () => {
        if (state > 0) {
            setState(state - 1)
            onQuantityChange(state - 1);
        }
    }

    return (
        <div className="quantity-selector-wrapper">
            <div className="delete mx-3">
                <button onClick={handleDecrement}> <i class="bi bi-dash fs-5"></i></button>
            </div>
            <div className="state">{state}</div>
            <div className="add mx-3">
                <button onClick={handleIncrement}><i class="bi bi-plus fs-5"></i></button>
            </div>

        </div>
    )
}

export default QuantitySelector
