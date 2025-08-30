import React from 'react'

    import skillinegrouppic from "../Assests/skillline grouppic.webp";
    import "../Styles/Header.css"

const Header = () => {
  return (
   <section className="header">
    <div className="container">
        <div className="row">
      <div className="col-lg-12">
        <div className="headerdesign">
          <div className="herologo">
        <img src={skillinegrouppic} alt="logo" width="90px" />
      </div>
      {/* <div className="skillline">
        <img src={skilline} alt="skill line" width="40px" />
      </div> */}



      {/* </div> */}

      {/* <div className="col-lg-4"> */}
        <div className="header-menu">
           <ul className="nav-list"  id="nav-list" >
    <li><a href="#home">Home</a></li>
    <li><a href="#career">Careers</a></li>
    <li><a href="#Blog">Blog</a></li>
    <li><a href="#Aboutus">AboutUS</a></li>
   

  </ul>
   <div className="header-btn">
          <button className="round-button   border-btn">Login</button>
          <button className="round-button">Sign Up</button>
          </div>


         </div> 
        

</div>
      </div>



        </div>


    </div>


   </section>
  )
}

export default Header