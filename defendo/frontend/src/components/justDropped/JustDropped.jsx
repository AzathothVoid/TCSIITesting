import React, { useState, useEffect } from 'react'
import './justDroppedStyles.css'
import modelImg from '../../imgs/justDroppedModel.jpeg'
import droppedProduct from '../../imgs/droppedProduct.jpeg'
import { Link, useLocation } from 'react-router-dom'
import { useGetJustDroppedImagesQuery } from '../../features/justDropped'
import { handleScroll } from '../../animation'


function JustDropped() {


  const [justDroppedImages, setjustDroppedImages] = useState([]);
  const { data: justDroppedImagesData } = useGetJustDroppedImagesQuery();
  const baseUrl = 'http://localhost:7000';
  const location = useLocation();

  useEffect(() => {
    if (justDroppedImagesData) {
      setjustDroppedImages(justDroppedImagesData);
    }
  }, [justDroppedImagesData]);

  useEffect(() => {
    handleScroll()
  }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])



  return (
    <div className="just-dropped-wrapper reveal">
      <div className="title">
        <h3 className='text-uppercase text-center fs-6'><i className="bi bi-arrow-down-short"></i> Don't miss our New Arrivals <i className="bi bi-arrow-down-short"></i></h3>
      </div>
      <div className="container non-container mt-5 ">
        <div className="view-product-wrapper">
          <div className="row">
            <div className="col-md-6 m-1">
              <div className="model-img">
                <img src={baseUrl + justDroppedImages[0]?.url} alt="" />
                <Link to={`/bracelet-description/${justDroppedImages[0]?.productId}`}><div className="dot1"><i class="bi bi-circle-fill"></i></div></Link>
                <Link to={`/product-description/${justDroppedImages[0]?.productId3}`}><div className="dot2"><i class="bi bi-circle-fill"></i></div></Link>
                <Link to={`/bracelet-description/${justDroppedImages[0]?.productId2}`}><div className="dot3"><i class="bi bi-circle-fill"></i></div></Link>
              </div>


            </div>
            <div className="col-md-6 m-1">
              <div className="model-img">
                <img src={baseUrl + justDroppedImages[1]?.url} alt="" />
                <Link to={`/product-description/${justDroppedImages[1]?.productId}`}><div className="dot4"><i class="bi bi-circle-fill"></i></div></Link>
                <Link to={`/chain-description/${justDroppedImages[1]?.productId2}`}><div className="dot5"><i class="bi bi-circle-fill"></i></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default JustDropped