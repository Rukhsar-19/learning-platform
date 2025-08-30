import React from 'react'
 import "../Styles/Skillline.css"
   import ladypic1 from "../Assests/ladypic1.webp";

      import allpeoplepic2 from "../Assests/allpeoplepic2.webp";
const Skillline = () => {
  return (
    <section className="section3 main-heading main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="skilllinecontentsec3">
                       <span className="what">What is </span>
                    <span className="isend">Skilline?</span>

                         </div>

                         <div className="platformallow">

                            <p className="sec3allcontent">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>


                         </div>



                </div>

{/* start of col6 forv1st image */}


    <div className="col-lg-6">

        <div className="bothimageposition">


                <img src={ladypic1} />
                    <div className="forallinstruction">
                <h2 className="ladypichead">FOR INSTRUCTORS</h2>
                   <button className="round-button   whitebtn">Start a class today</button>


            </div>


        </div>



    </div>

{/* end of lady pic  */}

{/* start of all people pic */}

 <div className="col-lg-6">

        <div className="bothimageposition">


                <img src={allpeoplepic2} />
                    <div className="forallinstruction">
                <h2 className="ladypichead">FOR STUDENTS</h2>
                   <button className="round-button  bluecolorbtn">Enter access code</button>


            </div>


        </div>



    </div>



{/* end of all people pic */}



            </div>


        </div>


    </section>
  )
}

export default Skillline