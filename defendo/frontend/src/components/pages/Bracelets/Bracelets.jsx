import React, { useState, useEffect } from 'react'
import './BraceletsStyles.css'
import SortingNavbar from '../../sortingnavbar/SortingNavbar'
import ProductCard from '../../productCard/ProductCard'
import { useGetBaraceletDetailsQuery } from '../../../features/bracelets'
import BarLoader from "react-spinners/BarLoader";
import ReactPaginate from 'react-paginate';
import BraceletSortingBar from '../../braceletSortingBar/BraceletSortingBar'

function Bracelets() {

    const [braceletImages, setBraceletImages] = useState([]);
    const { data: braceletImagesData } = useGetBaraceletDetailsQuery();
    const routeName = 'bracelet-description';
    const [loading, setLoading] = useState(false);
    const heading = 'Bracelets';



    useEffect(() => {
        if (braceletImagesData) {
            setBraceletImages(braceletImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [braceletImagesData]);


    return (
        <div className="bracelets-wrapper">
            <BraceletSortingBar />
            <div className="row py-4 px-5">

                {braceletImages.map((braceletImage, idx) => (
                    <div key={idx} className="col-md-3 col-lg-3 col-sm-6">
                        {
                            loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                :
                                <ProductCard data={braceletImage} routeName={routeName} />
                        }

                    </div>
                ))
                }

            </div>
        </div>
    )
}

export default Bracelets