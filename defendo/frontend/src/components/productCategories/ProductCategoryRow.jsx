import React, {useEffect, useState} from 'react'
import './productCategoryRowStyles.css'
import ProductCardCover from '../productCardCover/ProductCardCover'
import {useGetCategoryImagesQuery} from '../../features/category'
import { handleScroll } from '../../animation'


function ProductCategoryRow() {

  const [categoryImages, setcategoryImages] = useState([]);
    const { data: categoryImagesData} = useGetCategoryImagesQuery();


    useEffect(() => {
        if (categoryImagesData) {
          setcategoryImages(categoryImagesData);
        }
        handleScroll()
      }, [categoryImagesData]);


  return (

    <div className="product-category-row-wrapper ps-4 pb-0 reveal">
       <div className="row p-2 m-0">
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover data={categoryImages[0]}/>
        </div>
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover data={categoryImages[1]} />
        </div>
        <div className="col-md-4 col-sm 4 p-2">
        <ProductCardCover data={categoryImages[2]} />
        </div>
       </div>
    </div>
  )
}

export default ProductCategoryRow