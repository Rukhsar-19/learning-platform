import React from 'react'
 import "../Styles/Ourfeature.css"
   import Featurepicright from "../Assests/Featurepicright.webp";
   import uipic1 from "../Assests/uipic1.webp";
 
     import uipic2 from "../Assests/uipic2.webp";
      
     import uipic3 from "../Assests/uipic3.webp";
const Ourfeature = () => {
  return (
    <section  className="Ourfeature main-heading main-padding">
        <div className="container">

       <div className="row">

        <div className="col-lg-12">
            <div className="featureheading">
              
                  <span className="feature-B">Our </span>
                    <span className="feature-O">Features</span>
                    <p className="feature-content">This very extraordinary feature, can make learning activities more efficient</p>
            </div>


        </div>

 {/* col for put the pics in left side */}
 <div className="col-lg-7">
    <img src={Featurepicright} />


 </div>
 {/* end of pics in left side */}

 {/* start of festure round image */}

     <div className="col-lg-5">
      <div className="boxshadowpicsside">
        <div className="featurerightside">

             <span className="A">A </span>
                    <span className="UserInterface">user interface</span>
                    <span className="Designed"> designed for the classroom</span>
        </div>
       

        {/* now the piucs with text come 1st pic */}

        <div className="Allteachers">
    <div className="teachers">
      <div className="uipic1">
        <img src={uipic1}  width="40px"  height="30px" />
        </div>
        <div className="gridview"> 
            <p className="teachers-content">Teachers don’t get lost in the grid view and have a dedicated Podium space.
</p>

  </div> 




    </div>


    {/*   1st pic with text end */}


{/* 22222 */}

 <div className="teachers">
  <div className="uipic1">
        <img src={uipic2}  width="40px"  height="30px"   />
        </div>
        <div className="gridview"> 
            <p className="teachers-content">TA’s and presenters can be moved to the front of the class.

</p>

  </div> 




    </div>
{/* 2222 */}



{/* 33333 */}

  <div className="teachers">
    <div className="uipic1">
        <img src={uipic3}  width="40px"  height="30px"   />
        </div>
        <div className="gridview"> 
            <p className="teachers-content">Teachers can easily see all students and class data at one time.
</p>

  </div> 




    </div>
</div>
 {/* eee */}
        </div>

{/* 3333 */}

     </div>

       </div>


        </div>


    </section>
  )
}

export default Ourfeature