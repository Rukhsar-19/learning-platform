import React from 'react'
// import "../Styles/Hero.css";
import "../Styles/Hero.css"
  import heroright from "../Assests/heroright.webp";
   import herorightpic1 from "../Assests/herorightpic1.webp";
     import calenderrighthero from "../Assests/calenderrighthero.webp";
       import manroundUE from "../Assests/manroundUE.webp";
        import emaillabel from "../Assests/emaillabel.webp";
               import greentick from "../Assests/greentick.webp";
 
const Hero = () => {
  return (
   <section  className="hero">
    <div className="container">

        <div className="row">
        
          
            
              <div className="col-lg-6">
   

        <div className="hero-left">
            <div className="hero-study">
  <span className="orange-text">Studying</span>
  <span className="blue-text">Online is now much easier</span>
  </div>
  <p className="hero-p">Skilline is an interesting platform that will teach you in more an interactive way</p>
  
  <div className="joinbtn">
     <button className="round-button">Join for free</button>
     {/* make a button with icon */}
  <button className="heroplaybtn"><i className="ri-arrow-right-s-fill"></i></button>

     {/* make a button with icon */}



      <p className="watch">Watch how it works</p>

  </div>
  </div>



             


              </div>

              {/* hero right */}


              <div className="col-lg-6">

                  <div className="righthero">
                        <img src={heroright} width="80%" />

                          {/* <div className="Alllabels"> */}
                            <div className="pinklabel">
                              <img src={herorightpic1}  />
                              </div>
                              
                              {/* next calender pic */}
                             
                                <div className="calenderlabel">
                                   <img src={calenderrighthero} />
                                   <div className="calender-text">
                                  <strong>250k</strong>
                               <h2 className="Assisted"> Assisted Student</h2>   
                                 </div>
                              </div>
                              {/* calender label ends */}


                              {/* UserExperience class */}

                              <div className="UserExperience">
                                 <img src={manroundUE} />
                                 <div className="UE-text">
                                  <h2 className="UE-h">User Experience Class</h2>
                                  <p className="UE-p">Today at 12.00 PM</p>
                                       <button className="round-button  pink">Join for free</button>


                                 </div>

                              </div>

                              {/* emaillabel */}


                              <div className="congrulation">
                                <div className="emaillabel">
                                  <img src={emaillabel} />

                                </div>
                                <div className="email-text">
                                  <h2 className="email-h">Congratulations</h2>
                                  <p className="email-p">Your admission completed</p>

                                </div>
                                <div className="greentick">
                                  <img src={greentick} />

                                </div>


                              </div>

                           {/* </div>  */}
                         

                  </div>



              </div>













        </div>

        </div>

  

   </section>
  )
}

export default Hero;