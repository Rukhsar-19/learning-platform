import React from 'react'
 import "../Styles/Quizes.css"
  import truefalse  from "../Assests/truefalse.webp";

const Quizes = () => {
   return (
   <section  className="Quizes  main-heading main-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">

                <img src={truefalse} />


            </div>

            {/* quizes left sude */}

            <div className="col-lg-6">
                <div className="Quizesright">
                                       <span className="Assestment">Assessments, </span>
                    <span className="Test"> Quizzes</span>
                    <span className="Assestment"> , Tests</span>

                    <p className="Quizcontent">Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</p>




                </div>



            </div>


        </div>


    </div>


   </section>
  )
}

export default Quizes