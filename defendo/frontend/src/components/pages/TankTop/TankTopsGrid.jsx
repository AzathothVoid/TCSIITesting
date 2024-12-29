import React, { useState, useEffect } from 'react'
import ProductCard from '../../productCard/ProductCard'
import BarLoader from "react-spinners/BarLoader";
import TankTopsortingBar from './TankTopsSortingBar';
import { useGetTankTopsDetailsQuery } from '../../../features/TankTops'


function TankTopsGrid() {


    const [TankTopsImages, setTankTopsImages] = useState([]);
    const { data: TankTopsImagesData } = useGetTankTopsDetailsQuery()
    const routeName = 'TankTops-description'
    const [loading, setLoading] = useState(false)
    const heading = 'TankTops'


    useEffect(() => {
        if (TankTopsImagesData) {
            setTankTopsImages(TankTopsImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)

    }, [TankTopsImagesData]);

    return (
        <div className="TankTops-wrapper">
            <TankTopsortingBar />
            <div className="row py-4 px-5">
                {
                    TankTopsImages.map((TankTopsImage, idx) => {
                        return (
                            <div key={idx} className="col-md-6 col-lg-6 col-sm-6 ">
                                {
                                    loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                        :
                                        <ProductCard data={TankTopsImage} routeName={routeName} />
                                }

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default TankTopsGrid;