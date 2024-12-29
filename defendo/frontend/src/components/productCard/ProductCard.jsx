import React from 'react'
import './ProductCardStyles.css'
import cardimg from '../../imgs/card1.png'
import { Link } from 'react-router-dom'
import reviewStar from '../../imgs/reviewStar.png'
import { useEffect } from 'react'
import { handleScroll } from '../../animation'

function ProductCard({ data: ProductData, routeName }) {

    const baseUrl = 'http://localhost:7000';

    useEffect(() => {
        handleScroll()
    }, [])
    return (
        <div className="product-card-wrapper reveal">
            <div className="card border-0">
                <Link to={`/${routeName}/${ProductData?._id}`}>
                    {ProductData?.quantity == 0 && (    
                        <span className="sold-out-badge">SOLD OUT</span> 
                    )}
                    <img src={ProductData?.img[0]} className="card-img-top" alt="" height='' />
                </Link>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">{ProductData?.name}</h5>
                    
                    <p className="card-text text-center price">{ProductData?.price} pkr</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard