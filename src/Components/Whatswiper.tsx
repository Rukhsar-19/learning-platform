import React from "react";
// import React from 'react';
import "../Styles/Whatswiper.css"
import "swiper/css";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation } from 'swiper/modules';
 import 'swiper/css/navigation';
  import swiperlady  from "../Assests/swiperlady.webp";


const Whatswiper = () => {
  return (
    <section className="whatswiper main-heading main-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="what-left">
                        <h3 className="what-heading">TESTIMONIAL</h3>

                        <h2 className="what-h">What They Say?</h2>
                        <div className="what-p">
                            <p className="what-content">Skilline has got more than 100k positive ratings from our users around the world. </p>


                        </div>



                          <div className="what-p">
                            <p className="what-content">Some of the students and teachers were greatly helped by the Skilline. </p>


                        </div>

                        {/* ll */}

  <div className="what-p">
                            <p className="what-content">Are you too? Please give your assessment </p>


                        </div>
                        {/* nnn */}

                        {/* btn */}

    <button className="round-button  orangebutton">
  <span  className="write">Write your assessment</span>
  <span className="circle-icon">
    <i className="ri-arrow-right-line"></i>
  </span>
</button>


                        {/* btn */}


                    </div>


                </div>


{/* start of swiper column  woman with card */}


<div className="col-lg-6">

  <Swiper
            

            
              // navigation={true}
                   modules={[Navigation]}

 
                  //  
              spaceBetween={2}
              slidesPerView={2}
              centeredSlides={true}
            //   navigation
              //   pagination={{ clickable: true }}
              //   autoplay={{ delay: 5000 }}
              loop={true}
               navigation={{
    nextEl: '.custom-next',
    // prevEl: '.custom-prev',
  }}
              className="mySwiper ladyswiper"
              // breakpoints  
  //                           breakpoints={{
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   430: {
  //     slidesPerView: 1,
  //     spaceBetween: 15,
  //   },
  //   932: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  // }}
// end breakpoints
 
  
            >
            
              <SwiperSlide>
                {/* slide1  */}
              <div className="testimonial-image">
     <img src={swiperlady} />
             
              </div>
              {/* butttonsnext */}
           <div className="picbtn">
            <i className="ri-arrow-right-s-line  navbtn  custom-next"></i>

           </div>

              {/* buttonsnext */}


               <div className="testimonial-card">
                {/* linesadd */}
         <div className="highlight-lines">
    <div className="red-line"></div>
     </div>
     {/* grey */}
     <div className="greyll">
    <div className="grey-line"></div>
   </div> 
   {/* grey */}
            {/* linesend */}
            <p className="testimonial-text">
              "Thank you so much for your help. It's exactly what I've been looking for.
              You won't regret it. It really saves me time and effort. Skilline is exactly
              what our business has been lacking."
            </p>
            <p className="testimonial-author">Gloria Rose</p>
            <div className="testimonial-rating">
                 <div className="starfill">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
              <span className="review-count">12 reviews at Yelp</span>
            </div>
          </div>

                  {/* endimage */}
               
                {/* end slide1  */}
              </SwiperSlide>
            {/* 2nd slide start */}
            
              <SwiperSlide>
            
        
               
              </SwiperSlide>
{/* 2nd swiper end */}
              <SwiperSlide>
         
               
              </SwiperSlide>
              <SwiperSlide>

                  
              </SwiperSlide>
              <SwiperSlide>
            
              </SwiperSlide>
            </Swiper>
  

</div>














{/* end of swipercolll */}





            </div>


        </div>


    </section>
  )
}

export default Whatswiper