import React, { useEffect, useState } from 'react'
import SortingNavbar from '../sortingnavbar/SortingNavbar'
import ProductCard from '../productCard/ProductCard'
import { useGetRingDetailsQuery } from '../../features/rings';
import BarLoader from "react-spinners/BarLoader";
import RingSortingBar from '../ringSortingBar/RingSortingBar';

function RingGrid() {

    const [ringImages, setRingImages] = useState([]);
    const { data: ringImagesData } = useGetRingDetailsQuery();
    const routeName = 'product-description'
    const [loading, setLoading] = useState(false)
    const heading = 'Rings'


    useEffect(() => {
        if (ringImagesData) {
            setRingImages(ringImagesData);
        };
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [ringImagesData]);



    return (
        <div className="rings-wrapper">
            <RingSortingBar />
            <div className="row py-4 px-5">
                {
                    ringImages.map((ringImage, idx) => {
                        return (
                            <div key={idx} className="col-md-6 col-lg-6 col-sm-6">
                                {
                                    loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                        :
                                        <ProductCard data={ringImage} routeName={routeName} />
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RingGrid