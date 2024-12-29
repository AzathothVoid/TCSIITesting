import React from 'react'
import './ComingSoonStyles.css'
import {Link} from 'react-router-dom'
import { selectCurrentToken } from '../../features/authSlice'
import { useSelector } from 'react-redux'
function ComingSoon() {
  
  const token = useSelector(selectCurrentToken)

    return (

        <div className='comingsoon-wrapper'>
         <div className="div">
         <h2 className='text-center my-3 p-4 text-dark text-uppercase'>Coming <br /> Soon!</h2>
          <p className='text-center fw-bold px-2'>This product is coming soon. Stay tuned for updates.</p>
          {token ? (
            <p className='text-center fw-bold px-2'>You will be notified when the product is available.</p>
          ) : (
            <p className='text-center fw-bold px-2'>Please <Link className='text-dark fw-bolder text-decor' to="/account/login">Login</Link> to receive notifications when the product is available.</p>
          )}
         </div>
         <div className="btn"></div>
        </div>
      );
    };

export default ComingSoon