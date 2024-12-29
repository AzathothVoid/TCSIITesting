import React from 'react'
import './FooterStyles.css'
import visa from '../../imgs/visa.png'
import creditCard from '../../imgs/credit-card.png'
import {Link, useLocation} from 'react-router-dom'
import { useEffect } from 'react'
function Footer() {

        const  location = useLocation();

        useEffect(()=>{
            window.scrollTo(0, 0);
        },[location.pathname])

    return (
        <div className="footer-wrapper p-4 mt-3">
            <div className="row p-5  align-items-start ">
                <div className="div display d-none">
                <div className="col-md-4 col-sm-4 text-start">
                    <p className='text-uppercase'>company</p>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/warranty-coverage">Warranty Coverage</Link></li>
                        <li><Link to="/return-refund">Returns & Refunds</Link></li>
                        <li><Link to="/return-refund"> Refund policy</Link></li>
                        <li><Link to="/admin-panel">Account</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 text-start">
                    <p className='text-uppercase'>shop</p>
                    <ul>
                        <li><Link to="/Bracelets">Bracelets</Link></li>
                        <li><Link to="/chains">Chains</Link></li>
                        <li><Link to="/Pendants">Pendants</Link></li>
                        <li><Link to="/Rings">Rings</Link></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-4 col-sm-4 text-start comapny">
                    <p className='text-uppercase'>company</p>
                    <ul>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/warranty-coverage">Warranty Coverage</Link></li>
                        <li><Link to="/return-refund">Returns & Refunds</Link></li>
                        <li><Link to="/faq">Terms of Service</Link></li>
                        <li><Link to="/return-refund"> Refund policy</Link></li>
                        <li><Link to="/admin-panel">Account</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 text-start shop">
                    <p className='text-uppercase'>shop</p>
                    <ul>
                        <li><Link to="/Bracelets">Bracelets</Link></li>
                        <li><Link to="/chains">Chains</Link></li>
                        <li><Link to="/Pendants">Pendants</Link></li>
                        <li><Link to="/Rings">Rings</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 align-items-center">
                    <p className='text-uppercase'>join the team</p>
                    <p className='p-text'>Subscribe to receive updates, access to <br /> exclusive deals, and more.</p>
                    <input className='d-block p-2' type="email" placeholder='Enter Your Email address' />
                    <Link to="" className="btn text-uppercase my-3">subscribe</Link>
                </div>
            </div>
            <div className="row copyright-row px-5 py-4">
                <div className="col-md-6">
                    <p className='text-uppercase copyright'><i className="bi bi-c-circle text-light "></i> defendo</p>
                </div>
                <div className="col-md-6">
                    <div className="payments">
                    <img className='mx-2' src={visa}  alt=""/>
                    <img className='mx-2' src={creditCard}  alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer