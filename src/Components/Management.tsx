import React from 'react'
 import "../Styles/Management.css"
   import Managementrightpic   from "../Assests/Managementright.webp";

const Management = () => {
  return (
   <section  className="Management main-heading main-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="classmangage">
                                     <span className="manage-head"> Class Management</span>
                    <span className="Educators"> Tools for Educators</span>
                    <p className="manage-content">Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
</p>

                    
                </div>


            </div>


{/* right pic mangement */}

<div className="col-lg-6">
    <img src={Managementrightpic} />


</div>

{/* end pic right */}

        </div>


    </div>


   </section>
  )
}

export default Management