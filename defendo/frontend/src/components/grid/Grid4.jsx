import React from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import SortingNabar from '../sortingnavbar/SortingNavbar';

function Grid4() {
    return (
        <div className="new-releases-wrapper">
            <SortingNabar />
            <div className="row py-4 px-5">
                <div className="col-md-6">
                    <ProductCard />
                </div>
                <div className="col-md-6">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-6">
                    <ProductCard />
                </div>
                <div className="col-md-6">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-6">
                    <ProductCard />
                </div>
                <div className="col-md-6">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-6">
                    <ProductCard />
                </div>
                <div className="col-md-6">
                    <ProductCard />
                </div>
            </div>
            <div className="row py-4 px-5">
                <div className="col-md-6">
                    <ProductCard />
                </div>
                <div className="col-md-6">
                    <ProductCard />
                </div>
            </div>
        </div>

    )
}



export default Grid4