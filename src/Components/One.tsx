import React from 'react'
 import "../Styles/One.css"
   import onetooneleft   from "../Assests/onetooneleft.webp";

const One = () => {
  return (
   <section  className="One main-heading main-padding"> 
   <div className="container">
    <div className="row">
        <div className="col-lg-6">
            <img src={onetooneleft} />



        </div>
  {/* right side one to one */}

  <div className="col-lg-6">
    <div className="onetoone">
                      <span className="one-head"> One-on-One</span>
                    <span className="discussion"> Discussions</span>

                    <p className="one-content">Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>


    </div>


  </div>

  {/* rightside end */}

  <div className="col-lg-12">
    <div className="btn-orange"> 
         <button className="round-button   classtoday">See more features</button>


     </div> 


  </div>

    </div>
    </div>   


   </section>
  )
}

export default One