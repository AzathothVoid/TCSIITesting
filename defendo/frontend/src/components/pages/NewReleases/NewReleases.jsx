import React, { useEffect, useState } from 'react'
import './NewReleasesStyles.css'
import ProductCard from '../../productCard/ProductCard';
import SortingNavbar from '../../sortingnavbar/SortingNavbar';
import {useGetNewReleasesDetailsQuery} from '../../../features/newReleases'
import BarLoader from "react-spinners/BarLoader";
import NewReleaseSortingBar from '../../newReleaseSortingBar/NewReleaseSortingBar';

function NewReleases() {


    const [newReleasesImages, setNewReleasesImages] = useState([]);
    const { data: newReleasesImagesData } = useGetNewReleasesDetailsQuery()
    const routeName = 'newReleases-description'
    const [loading, setLoading] = useState(false)
    const heading = 'New Releases'
  
    useEffect(() => {
      if (newReleasesImagesData) {
        setNewReleasesImages(newReleasesImagesData);
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000)
    }, [newReleasesImagesData]);
  
  
    return (
      <div className="bracelets-wrapper">
        <NewReleaseSortingBar/>
        <div className="row py-4 px-5">
  
          {newReleasesImages.map((newReleasesImage, idx) => (
            <div key={idx} className="col-md-3 col-lg-3 col-sm-6">
              {
                loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                  :
                  <ProductCard data={newReleasesImage} routeName={routeName} />
              }
  
            </div>
          ))
          }
        </div>
      </div>
    )
}

export default NewReleases