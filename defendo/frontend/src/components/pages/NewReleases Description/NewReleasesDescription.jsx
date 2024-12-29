import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
import '../Product description/ProductDescriptionStyles.css'
import { Link, useParams } from 'react-router-dom'
import reviewStar from '../../../imgs/reviewStar.png'
import QuantitySelector from '../../quantitySelector/QuantitySelector'
import { useGetNewReleasesDetailsByIdQuery } from '../../../features/newReleases'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../features/cartSlice';
import BarLoader from "react-spinners/BarLoader";
import { handleScroll } from '../../../animation';


function NewReleasesDescription() {

    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();
    const { data: productData } = useGetNewReleasesDetailsByIdQuery(id)
    const baseUrl = 'http://localhost:7000';
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('default');
    const [selectedColor, setSelectedColor] = useState('default');
    const [loading, setLoading] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleAddToCart = () => {
        const product = {
            Name: productData?.name,
            price: productData?.price,
            img: productData?.img,
            id: productData?._id,
            quantity,
            size: selectedSize,
            color: selectedColor,
        };
        dispatch(addToCart(product));

    };

    const handleQuantityChange = (quantity) => {
        setQuantity(quantity);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    function getValue() {
        var textarea = document.getElementById("myTextarea");

        if (textarea) {
            var value = textarea.value;
            return value
        } else {
            
        }
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        handleScroll()
    }, []);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };



    return (
        <div className="product-description-wrapper p-4">
            <div className="row">
                <div className="col-md-3 left-col d-none d-md-block">
                    <div className="div">
                        { }
                        <a href="#silver">{loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <img className=' d-block mb-4' src={productData?.img[0]} alt="" />}</a>
                        <a href="#golden">{loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <img className=' d-block mb-4' src={productData?.img[1]} alt="" />}</a>
                    </div>
                </div>
                <div className="col-md-4 align-items-start mid-col d-none d-md-block">
                    {loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <Link to="" className='zoom-container'><img id='silver' className={`my-4 d-block zoom-image ${isZoomed ? 'zoomed' : ''}`} src={productData?.img[0]} alt="" onClick={handleImageClick} /></Link>}
                    {loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <Link to=""><img id='silver' className='my-4 d-block' ssrc={productData?.img[1]} alt="" /></Link>}

                </div>
                <div className="mob-col  col-md-4 d-sm-none">

                    <div className="carousel">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    {loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <img src={baseUrl + productData?.img} class="d-block w-100" alt="..." />}
                                </div>
                                <div class="carousel-item">
                                    {loading ? <BarLoader color="#000000" width={100} height={1} loading={loading} /> : <img src={baseUrl + productData?.img2} class="d-block w-100" alt="..." />}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 right-col align-items-start">
                    <h5 className="card-title text-start fw-bold">{productData?.name}</h5>
                    
                    <p className="card-text text-start price mt-4">{productData?.price}.00pkr</p>
                    <hr />
                    {productData?.variants && productData.variants.length > 0 &&  (
                        <div className="ring-size">
                            <p>Size: {selectedSize}</p>
                            <select
                                name=""
                                id=""
                                className="w-100 p-1"
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                            >
                                {productData.variants.map((variant, idx) => {
                                    if (variant.stock > 0) {
                                        return (
                                            <option key={idx} className="">
                                                {variant.size}" inches
                                            </option>
                                        );
                                    }
                                    return null;
                                })}
                            </select>
                        </div>
                    )}

                    {productData?.colors && productData.colors.length > 0 && (
                        <div className="ring-color mt-3">
                            <p>VARIANTS: {selectedColor}</p>
                            <div className="color-btn">
                                {productData.colors.map((color, idx) => (
                                    <a href="#" key={idx}>
                                        <button className="p-1 me-3 rounded-3" onClick={() => setSelectedColor(color)}>{color}</button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="quantity-selector mt-3 py-2">
                        <QuantitySelector onQuantityChange={handleQuantityChange} />
                    </div>
                    {
                        productData?.quantity == 0 ? (
                            <p className="buy-now text-center text-uppercase p-2 my-1">SOLD OUT!</p>
                        ) : (
                            <>
                            <Link className='text-decor' to="" onClick={handleAddToCart}><h5 className='add-cart text-center text-uppercase p-2 my-2 btn'>add to cart</h5></Link>
                            <Link className='text-decor' to="/checkout" onClick={handleAddToCart}> <h5 className='buy-now text-center text-uppercase p-2 my-1 btn'>buy it now</h5></Link>

                            </>
                        )}
                    <div className="description-wrapper">
                        <ul className='p-0 mt-4'>
                            <li className='list-none mx-0 fw-bold my-1 font-monospace'>Non-faded</li>
                            <li className='list-none mx-0 fw-bold my-1 font-monospace'>Stainless Steel</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row px-5">
                <div className="col-md-8 accordian-col px-4">
                    <div className="accordian-wrapper w-100">
                        <div class="accordion accordion-flush reveal" id="accordionFlushExample">

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        shipping details
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body"><p>We dispatch our orders directly from Islamabad,Pakistan.
                                        Delivery - leopard courier (Tracked 3-5 working days) please see checkout for cost information.</p></div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        product care
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body"><p> 1. To keep your rings, chains, and bracelets in good condition, avoid exposing
                                        them to harsh chemicals like cleaning products or perfumes. Store them in a dry place like a jewelry box or pouch
                                        to prevent scratches. Clean your jewelry regularly using a soft cloth and mild soap and water. Avoid wearing your
                                        jewelry in water, especially chlorinated water, as it can damage the metal and stones.</p>
                                        <p>2. When cleaning your jewelry, use a soft-bristled brush to gently scrub away dirt and grime. Be careful not to
                                            scratch the metal or damage any stones.</p> </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Size guides 
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">
                                        <p> 1. You can measure your ring size by using a piece of string or paper. Wrap it around your finger and mark where it overlaps. Then, measure the length of the string/paper and compare it to a ring size chart.</p>
                                        <p>2. You can also measure your ring size by using a ring that already fits you well. Place the ring on a ruler and measure the inside diameter. Then, compare the measurement to a ring size chart to find your size.</p> 
                                        <p>3. You can also measure your ring size by using a ring sizer app on your smartphone. Just follow the instructions on the app and it will help you find your ring size.</p> 
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default NewReleasesDescription;