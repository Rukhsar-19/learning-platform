import React from 'react'
 import "../Styles/Cloud.css"
   import billingpic1 from "../Assests/billingpic1.webp";
   import billingpic2 from "../Assests/billingpic2.webp";
   import billingpic3 from "../Assests/billingpic3.webp";
const Cloud = () => {
  return (
   <section className="cloud main-heading main-padding">
   <div className="container">
    <div className="row">
        <div className="col-lg-12">
                       <div className="cloud-all">
  <span className="All-one">All-In-One</span>
  <span className="cloudsoftware">Cloud Software.</span>
  </div>


  {/* content */}
      <div className="cloud-content">
        <p   className="cloud-text">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
</p>



      </div>

        </div>

{/* start of software panels 3 */}

  <div className="col-lg-4">

    <div className="allmidpic">
        <div className="software">
            <img src={billingpic1}  width="80px"  className="rounded-img"  />
            </div>
            <div className="billingcontent">
                <h2 className="softwarehead">Online Billing, Invoicing, & Contracts</h2>
                <p className="softwarecontent">Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>


            </div>


        {/* </div> */}


    </div>



  </div>
{/* end of billing col 1 */}


{/* start of col2 easy schelduing */}

 <div className="col-lg-4">

    <div className="allmidpic">
        <div className="software">
            <img src={billingpic2}  width="80px"  className="rounded-img" />
            </div>
            <div className="billingcontent">
                <h2 className="softwarehead">Easy Scheduling & Attendance Tracking</h2>
                <p className="softwarecontent">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>


            </div>


        {/* </div> */}


    </div>



  </div>


{/* end   scheduling col2 */}



{/* start of col3 coustomer tracking */}


<div className="col-lg-4">

    <div className="allmidpic">
        <div className="software">
            <img src={billingpic3}  width="80px"  className="rounded-img" />
            </div>
            <div className="billingcontent">
                <h2 className="softwarehead">Customer Tracking</h2>
                <p className="softwarecontent">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization</p>


            </div>


        {/* </div> */}


    </div>



  </div>


{/* end of coustomer tracking */}


    </div>



   </div>


   </section>
  )
}

export default Cloud