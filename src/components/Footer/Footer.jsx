import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="logo" src={assets.logo} alt="" />
                    <p>
                    Enjoy delicious meals crafted with care at AVWM. Whether you're picking up, getting it delivered, or reserving a table to dine in, we’re here to make every experience flavorful and convenient. Fresh ingredients, quick service, and a welcoming atmosphere. that’s the AVWM promise 
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                    <li><a href="#top">Home</a></li>
                        <li>About Us</li>
                        <li>Reserve Table</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+93-3167890112</li>
                        <li>contact@avwm.com</li>
                    </ul>

                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 © AVWM.com - All Rights Reserved.</p>

        </div>
    )
}

export default Footer
