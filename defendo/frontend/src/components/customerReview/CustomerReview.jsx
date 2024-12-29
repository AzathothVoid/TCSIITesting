import React, { useState, useEffect } from "react";
import './CustomerReviewStyles.css'
import reviewStar from '../../imgs/reviewStar.png'
import upArrow from '../../imgs/up-arrow.png'
import downArrow from '../../imgs/down-arrow.png'
import { handleScroll } from "../../animation";
import { useGetCustomerReviewsQuery } from '../../features/customerReviews'

function CustomerReview() {


    const [customerReviews, setCustomerReviews] = useState([]);
    const { data: customerReviewsData } = useGetCustomerReviewsQuery()
    

    useEffect(()=>{
        if(customerReviewsData){
            setCustomerReviews(customerReviewsData)
        }
    },[customerReviewsData])

    const [currentReview, setCurrentReview] = useState(0);
    const [currentCustomer, setCurrentCustomer] = useState(0)


    const handlePreviousCustomer = () => {
        setCurrentCustomer((currentCustomer - 1 + customerReviews?.length) % customerReviews?.length);
        setCurrentReview((currentReview - 1 + customerReviews?.length) % customerReviews?.length);
    };

    const handleNextCustomer = () => {
        setCurrentCustomer((currentCustomer + 1) % customerReviews?.length);
        setCurrentReview((currentReview + 1) % customerReviews?.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCustomer((currentCustomer + 1) % customerReviews?.length)
            setCurrentReview((currentReview + 1) % customerReviews?.length);
        }, 3000);
        return () => clearInterval(interval);
        handleScroll()
    }, [currentReview, customerReviews, currentCustomer]);



    return (
        <div className="customer-review-wrapper reveal">
            <div className="container d-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="customer-says">
                            <div className="left px-3 p-1">
                                <h5 className=" w-100 text-center m-0 p-1"> See What Our Customer Have To Say</h5>
                            </div>
                            <div className="right">
                                <h5 className="m-0 p-0 me-1">
                                    <div className="icons b mx-2">
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                        <img className="star" src={reviewStar} alt="" />
                                    </div>
                                    Based On {customerReviews?.length} reviews
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 p-4">
                        <div className="reviews">
                            <div className="customer">
                                <p className="fw-bold">{customerReviews[currentCustomer]?.customerName}</p>
                            </div>
                            <div className="icons b mx-2">
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                                <img className="star" src={reviewStar} alt="" />
                            </div>
                        </div>
                        <div className="msg"><p>{customerReviews[currentReview]?.comment}</p></div>
                        <div className="d-flex justify-content-between mt-4 arrows">
                            <button className="bg-white  justify-content-end" onClick={handlePreviousCustomer}><img src={upArrow} alt="" /></button>
                            <button className="bg-white " onClick={handleNextCustomer}> <img src={downArrow} alt="" /> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CustomerReview