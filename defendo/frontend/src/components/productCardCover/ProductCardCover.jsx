import React from 'react'
import './productCardCoverStyles.css'
import pendantsmain from '../../imgs/pendantsmain.JPG'
import {Link} from 'react-router-dom'

function ProductCardCover({data: categoryImagesData}) {
    return (
        
        <div className="product-card-cover-wrapper">
            <Link to={`/${categoryImagesData?.name}`}>
            <div className="card mb-3 border-0">
                <div className="img-container">
               <div className="zoom-in">
               <div className="cover-pic">
                    <img src={'http://localhost:7000' + categoryImagesData?.url} alt=""/>
                    </div>
               </div>
                </div>
                <div className="card-body">
                    <h3 className="card-title text-light text-uppercase fs-16 m-0">{categoryImagesData?.name}</h3>
                    <div className="btn btn-light text-uppercase text-dark mt-2">View products</div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCardCover