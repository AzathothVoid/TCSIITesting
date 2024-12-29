import React, {useEffect, useState} from 'react'
import './warrantyCoverageStyles.css'
import {Link} from 'react-router-dom'
import {useGetWarrantyDetailsQuery} from '../../features/warrantyDetails'
import { handleScroll } from '../../animation';

function WarrantyCoverage() {

    const [warrantyDetails, setWarrantyDetails] = useState([]);
    const { data: warrantyDetailsData} = useGetWarrantyDetailsQuery();

    
    useEffect(() => {
        if (warrantyDetailsData) {
            setWarrantyDetails(warrantyDetailsData);
        }
        handleScroll()
      }, [warrantyDetailsData]);
      

    return (
        <div className="warranty-coverage-wrapper py-3 ">
            <div className="container m-0">
                <div className="div reveal">
                    <h3 className='mb-3'>{warrantyDetails[0]?.heading}</h3>
                    <p>{warrantyDetails[0]?.body}</p>
                    <p>{warrantyDetails[0]?.description}</p>

                        <div className="read-more">
                            <Link to="/warranty-coverage" className='text-center text-white text-decor'>Read More</Link>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default WarrantyCoverage