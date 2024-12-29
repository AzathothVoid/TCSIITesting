import React, { useState, useEffect } from 'react'
import SortingNavbar from '../../sortingnavbar/SortingNavbar'
import ProductCard from '../../productCard/ProductCard'
import { useGetChainDetailsQuery } from '../../../features/chains';
import BarLoader from "react-spinners/BarLoader";
import ChainSortingBar from '../../chainsSortingBar/ChainSortingBar';

function Chains() {
    const [chainImages, setChainImages] = useState([]);
    const { data: chianImagesData } = useGetChainDetailsQuery()
    const routeName = 'chain-description'
    const [loading, setLoading] = useState(false)
    const heading = 'Chains'


    useEffect(() => {
        if (chianImagesData) {
            setChainImages(chianImagesData);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000)
    
    }, [chianImagesData]);

    return (
        <div className="chains-wrapper">
            <ChainSortingBar/>
            <div className="row py-4 px-5">
                {
                    chainImages.map((chainImage, idx) => {
                        return (
                            <div key={idx} className="col-md-3 col-lg-3 col-sm-6 ">
                                {
                                    loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                                    :
                                    <ProductCard data={chainImage} routeName={routeName} />
                                }
                                
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Chains