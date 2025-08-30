import React from 'react'
 import "../Styles/Classroom.css"
  import orangecircle from "../Assests/orangecircle.webp";
  import classroomrightpicplaybtn from "../Assests/classroomrightpicplaybtn.webp";
const Classroom = () => {
  return (
   <section  className="classroom main-heading main-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="orangecircle">
                    <img src={orangecircle}  width="60px"/>
              
                <div className="classroomleft">

          <span className="Everything">Everything you can do in a physical classroom,</span>
       <span className="youcando"> you can do with Skilline</span>
                </div>
  </div>


         {/* contentclassroomright */}

         <div className="classroomcontent">
            <p className="classroom-c">Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in<i className="ri-circle-fill  coloro"></i> one secure cloud-based system.</p>

            <div className="learn">
             <h2 className="learnbtn">Learn more</h2>


            </div>
         </div>

            </div>


            {/* left classroom pic */}


            <div className="col-lg-6">

               

             <img src={classroomrightpicplaybtn} />

              


            </div>

            {/* left  classroom pic */}



        </div>


    </div>


   </section>
  )
}

export default Classroom