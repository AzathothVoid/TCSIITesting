import React, { useState, useEffect } from 'react'
import ProductCard from '../../productCard/ProductCard'
import BarLoader from "react-spinners/BarLoader";
import PendantSortingBar from './PendantsSortingBar';
import { useGetPendantDetailsQuery } from '../../../features/pendants'


function Pendants() {


    const [pendantImages, setPendantImages] = useState([]);
    const { data: PendantImagesData } = useGetPendantDetailsQuery()
    const routeName = 'pendant-description'
    const [loading, setLoading] = useState(false)
    const heading = 'Pendants'


    useEffect(() => {
        if (PendantImagesData) {
            setPendantImages(PendantImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)

    }, [PendantImagesData]);

    return (
        <div className="pendants-wrapper">
            <PendantSortingBar />
            <div className="row py-4 px-5">
                {
                    pendantImages.map((pendantImage, idx) => {
                        return (
                            <div key={idx} className="col-md-3 col-lg-3 col-sm-6 ">
                                {
                                    loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                        :
                                        <ProductCard data={pendantImage} routeName={routeName} />
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Pendants;