import React from 'react'

import "../Styles/Footer.css"
 import footerlogo  from "../Assests/footerlogo.webp";

export const Footer = () => {
  return (
    <section  className="Footer   main-heading  main-padding">

        <div className="container">

            <div className="footersec1">
                <img src={footerlogo}   width="80px"/>
                <div className="shortline"></div>
             <h2 className="virtual">Virtual Class for Zoom</h2>


            </div>

            {/* footer subscribe */}

            <div className="subscribe">
                <h2 className="newsletter">Subscribe to get our Newsletter</h2>
     
              <div className="subscribe-form">
    <input type="email" className="subscribe-input" placeholder="Your email"/>
    <button className=" round-button       subscribe-button">Subscribe</button>
  </div>

            </div>

            {/* lastsec3 */}
            <div className="footerlast">
                <h2 className="career">Carrers</h2>
                   <div className="shline"></div>
                   <p className="privacy">Privacy Policy</p>
                    <div className="shline"></div>
                    <p className="Terms">Terms & Conditions</p>
                   


            </div>
<div className="seclast">
    <p className="rights">© 2021 Class Technologies Inc. </p>

</div>

        </div>



    </section>
  )
}
