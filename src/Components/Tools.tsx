import React from 'react'
 import "../Styles/Tools.css"
  import Toolsrightside  from "../Assests/Toolsrightside.webp";
const Tools = () => {
  return (
   <section className="Tools main-heading main-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">

                <div className="Toolsleft">
                   <span className="tools">Tools </span>
                    <span className="For"> For Teachers And Learners</span>

                    <p className="Tools-content">Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>



                </div>

            </div>

            {/* right pic in tools */}

      <div className="col-lg-6">

        <img src={Toolsrightside} />




      </div>




            {/* right pic end */}



        </div>


    </div>


   </section>
  )
}

export default Tools