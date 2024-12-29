import React, {useState, useEffect} from 'react'
import './LimitedDropsStyles.css'
import SortingNavbar from '../../sortingnavbar/SortingNavbar'
import ProductCard from '../../productCard/ProductCard'
import {useGetLimitedDropsDetailsQuery} from '../../../features/limitedDrops'
import BarLoader from "react-spinners/BarLoader";
import LimitedDropGridSortingBar from '../../limitedDropGridSortingBar/LimitedDropGridSortingBar'

function LimitedDrops() {

  const [limitedDropsImages, setLimitedDropsImages] = useState([]);
  const { data: limitedDropsImagesData } = useGetLimitedDropsDetailsQuery()
  const routeName = 'limitedDrop-description'
  const [loading, setLoading] = useState(false)
  const heading = 'Limited Drops'

  useEffect(() => {
    if (limitedDropsImagesData) {
      setLimitedDropsImages(limitedDropsImagesData);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [limitedDropsImagesData]);

  return (
    <div className="bracelets-wrapper">
      <LimitedDropGridSortingBar/>
      <div className="row py-4 px-5">

        {limitedDropsImages.map((limitedDropsImage, idx) => (
          <div key={idx} className="col-md-3 col-lg-3 col-sm-6">
            {
              loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} />
                :
                <ProductCard data={limitedDropsImage} routeName={routeName} />
            }

          </div>
        ))
        }
      </div>
    </div>
  )
}

export default LimitedDrops