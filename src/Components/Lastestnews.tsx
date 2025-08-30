import React from 'react'
 import "../Styles/Lastestnews.css"
    import lastestleftpic   from "../Assests/lastestleftpic.webp";
     import lastestrightcorrectpic1   from "../Assests/lastestrightcorrectpic1.webp";
     import lastestrightpic2  from "../Assests/lastestrightpic2.webp";
     import lastestrightpic3   from "../Assests/lastestrightpic3.webp";

export const Lastestnews = () => {
  return (
    <section className="Lastestnews  main-heading  main-padding">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <div className="Lastesth">
              <h2 className="lastest-h">Lastest News and Resources</h2>
              <p className="lastest-c">See the developments that have occurred to Skillines in the world</p>


            </div>




          </div>

          {/* lastest left */}
        
        <div className="col-lg-5">
          <img src={lastestleftpic} />

          <div className="lastestleft">
            <div className="lastesttag">NEWS</div>
        <h2 className="lastestleft-head">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h2>

         <p className="lastestleft-para">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
        
        <p className="readmore">Read more</p>

          </div>


        </div>

          {/* lastest left */}

          {/* right pics rightcol */}
          <div className="col-lg-7">
            <div className="rr">
            <div className="imagewrapp">
            <img src={lastestrightcorrectpic1}      width="768px"  height= "212px"/>
           {/* <div className="taginpic"> */}
      <div className="bothtagandpic"> 
 <div className="lastesttag">PRESS RELEASE</div>
 </div>
           {/* </div> */}
           </div>
            <div className="lastestright">
              <h2 className="lastestright-hh">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</h2>
              <p className="lastestright-cc">Class Technologies Inc., the company that created Class,...</p>
                  
            </div>
            </div>
            {/* pressrelease label finsh */}

            {/* start of 2nd label */}

 <div className="rr">
            
             <div className="imagewrapp">
            <img src={lastestrightpic2}      width="768px"  height= "212px"/>
       <div className="bothtagandpic">     {/* <div className="taginpic"> */}

 <div className="lastesttag">NEWS</div>
 </div> 
 </div>
           {/* </div> */}
            <div className="lastestright">
              <h2 className="lastestright-hh">Zoom’s earliest investors are betting millions on a better Zoom for schools</h2>
              <p className="lastestright-cc">Zoom was never created to be a consumer product. Nonetheless, the...</p>
                  
            </div>
            </div>


            {/* end 2nd label */}


            {/* start 3rd label */}
        
        
 <div className="rr">
             

            <div className="imagewrapp">
            <img src={lastestrightpic3}      width="736px"  height= "212px"/>
           {/* <div className="taginpic"> */}
     <div className="bothtagandpic">
 <div className="lastesttag">NEWS</div>
 </div>
 </div>
           {/* </div> */}
            <div className="lastestright">
              <h2 className="lastestright-hh">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</h2>
              <p className="lastestright-cc">This year, investors have reaped big financial returns from betting on Zoom...</p>
                  
            </div>
            </div>


            {/* end 3rd label */}


          </div>





          {/* end right */}


        </div>


      </div>


    </section>
  )
}
