import React from 'react'
 import "../Styles/Companies.css"
   import googlelogo from "../Assests/googlelogo.webp";
   import netflixlogo from "../Assests/netflixlogo.webp";
   import airbnb3 from "../Assests/airbnb3.webp";
   import amazon4 from "../Assests/amazon4.webp";
   import facebook5 from "../Assests/facebook5.webp";
   import grab6 from "../Assests/grab6.webp";
const Companies = () => {
  return (
    <section  className="companies  main-heading  main-padding">
        <div className="container">
            <div className="row">

                <div className="col-lg-12">

        <h2  className="companies-h">Trusted by 5,000+ Companies Worldwide</h2>

                </div>

                {/* logos here */}
                <div className="col-lg-12">

                    <div className="company-logos">
                        <img src={googlelogo}   width="93px"  height="50px"/>
                        <img src={netflixlogo}  width="93px"  height="50px"/>
                        <img src={airbnb3} width="93px"  height="50px"/>
                        <img src={amazon4}width="93px"  height="50px" />
                        <img src={facebook5}width="93px"  height="50px" />
                        <img src={grab6} width="93px"  height="50px"/>


                    </div>


                </div>



            </div>



        </div>
    </section>
  )
}

export default Companies