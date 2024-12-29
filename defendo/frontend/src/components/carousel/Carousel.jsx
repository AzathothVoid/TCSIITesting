import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './CarouselStyles.css'
import mainWideCarousel from '../../imgs/mainWideCarousel.jpeg'
import mobileCarousel from '../../imgs/mobileCarousel.jpeg'
import mobileCarousel2 from '../../imgs/mobileCarousel2.jpeg'
import mobileCarousel3 from '../../imgs/mobileCarousel3.jpeg'
import carousel2 from '../../imgs/carousel-2.jpg'
import carousel3 from '../../imgs/carousel-3.jpg'
import { useGetHeroImagesQuery } from '../../features/HeroImages'
import { useLocation } from 'react-router-dom';


export default function Carousel() {
    const [heroImages, setHeroImages] = useState([]);
    const { data: heroImagesData, isLoading, isError } = useGetHeroImagesQuery();
    const baseUrl = 'http://localhost:7000';

    useEffect(() => {
        if (heroImagesData) {
            setHeroImages(heroImagesData);
        }
    }, [heroImagesData]);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])



    return (
        <div className="div">
            <div className="carousel-wrapper ">
                <div id="carouselExampleCaptions" class=" carousel slide carousel-fade" data-bs-ride="carousel" data-bs-target="#carouselExampleCaptions" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-sm-none d-md-none mob w-100" src={mobileCarousel} alt="" />
                            <div className="overlay"></div>
                            <img src={baseUrl + heroImages[2]?.url} alt="" className='wide d-none d-sm-block w-100 fade-in ' />
                            <div className="overlay"></div>
                            <div className="carousel-caption d-md-block">
                                <Link to="/new-releases" className="btn btn-light text-uppercase text-dark m-3">
                                    new releases
                                </Link>
                                <Link to="/limited-drops" className="btn btn-light text-uppercase text-dark m-3">
                                    limited drops
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-sm-none d-md-none mob w-100" src={mobileCarousel2} alt="" />
                            <div className="overlay"></div>
                            <img src={baseUrl + heroImages[1]?.url} className="wide d-none d-sm-block w-100 " alt="" />
                            <div className="overlay"></div>
                            <div className="carousel-caption d-md-block">
                                <Link to="/new-releases" className="btn btn-light text-uppercase text-dark m-3">
                                    Shop new releases
                                </Link>
                                <Link to="" className="btn btn-light text-uppercase text-dark m-3">
                                    limited drops
                                </Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img-mb" className="d-sm-none d-md-none mob w-100" src={mobileCarousel3} alt="" />
                            <div className="overlay"></div>
                            <img src={baseUrl + heroImages[0]?.url} className="wide d-none d-sm-block w-100 " alt="" />
                            <div className="overlay"></div>
                            <div className="carousel-caption d-md-block">
                                <Link to="/new-releases" className="btn btn-light text-uppercase text-dark m-2">
                                    Shop new releases
                                </Link>
                                <Link to="" className="btn btn-light text-uppercase text-dark m-2">
                                    limited drops
                                </Link>
                            </div>

                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>
    );

}
