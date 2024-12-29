import React, { useState, useEffect } from 'react'
import './OurInstaReviewsStyles.css'
import instaVideo from '../../../src/videos/insta-video.mp4'
import skull from '../../imgs/skull.png'
import { Link } from 'react-router-dom'
import { useGetInstaDetailsQuery } from '../../features/instaDetails'
import { handleScroll } from '../../animation'



function OurInstaReviews() {

    const [instaDetails, setinstaDetails] = useState([]);
    const { data: instaDetailsData } = useGetInstaDetailsQuery();
    const baseUrl = 'http://localhost:7000';


    useEffect(() => {
        if (instaDetailsData) {
            setinstaDetails(instaDetailsData);
        }
        handleScroll()
    }, [instaDetailsData]);



    return (
        <div className="our-insta-reviews-wrapper py-2 reveal">
            <div className="row">
                <h5 className='text-center p-4'>Don't miss out, follow us on instagram <span><img className='skull' src={skull} alt="" /></span></h5>
                <div className="row vid-row p-3">
                    <div className="col-md-6 video">
                        <div className="row row-video py-3">
                            <div className="col-md-6 p-0">
                                <video src={instaVideo} className="" controls muted >
                                    
                                            Your browser does not support the video tag.
                                        </video>
                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-1">
                            <div className="row row-imgs px-3">
                                <div className="col-md-6">
                                    <Link className='' to="https://www.instagram.com/p/Cr1YIGZNbA2/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"><img className=' review w-85  my-2 ' src={baseUrl + instaDetails[0]?.url} alt="" /></Link>
                                    <Link to="https://www.instagram.com/p/CqqlMCKN2dv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"><img className=' review w-85  my-2 ' src={baseUrl + instaDetails[1]?.url} alt="" /></Link>
                                </div>
                                <div className="col-md-6">
                                    <Link className='' to="https://www.instagram.com/p/CfD-T1mt7Q6/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"><img className=' review w-85 my-2 ' src={baseUrl + instaDetails[2]?.url} alt="" /></Link>
                                    <Link to="https://www.instagram.com/p/CmJPu2nsz5-/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA%3D%3D"><img className=' review w-85 mt-3 ' src={baseUrl + instaDetails[3]?.url} alt="" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default OurInstaReviews