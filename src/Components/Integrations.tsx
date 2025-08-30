import React from 'react'
import "../Styles/Integrations.css"
   import integrationpic1   from "../Assests/integrationpic1.webp";
   import integrationpic3  from "../Assests/integrationpic3.webp";
   import integrationpic2  from "../Assests/integrationpic2.webp";
   import integrationpic4  from "../Assests/integrationpic4.webp";
const Integrations = () => {
  return (
    <section  className="Integrations main-heading main-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
                <div className="whole">
                <div className="integrationleftpics">

                    <img src={integrationpic1}  width="140px" height="100px" />
                    <img src={integrationpic3}  width="70px" height="100px" />                    


                </div>

                {/* next */}

                    <div className="integrationremain">
                    <img src={integrationpic2}  width="70px" height="100px" />
                    <img src={integrationpic4}  width="140px" height="80px" />  


                </div> 

                </div>
      {/* nextend */}

            </div>

              {/* next colright start */}
              <div className="col-lg-6">

                <div className="integration-right">

                <h3 className="integration-heading">INTEGRATIONS</h3>


                <div className="200+">

                    <span className="int-h">200+ educational tools and platform</span>
                    <span className="int-two">integrations</span>
                    <p className="int-content">Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                              <button className="round-button   classtoday ">See All Integrations</button>

                </div>



                </div>



              </div>

   

            {/* end right  */}


          </div>

        </div>


    </section>
  )
}

export default Integrations