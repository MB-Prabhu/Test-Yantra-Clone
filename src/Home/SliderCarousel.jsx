import React from 'react'
import Slider from "react-slick";
import Style from './SliderCarousel.module.css'
import img1 from './asset 18.png'
import img2 from './asset 19.png'
import img3 from './asset 20.png'
import arrow from './asset 24.svg'
import { FaArrowAltCircleRight } from "react-icons/fa";

const SliderCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000
  };
  return (
    <div>
      <Slider {...settings}>

          <div className={Style.cont}>
              <div className={Style.innercontener}>
                <div className={Style.innercont}>
                  <h2>Turn your Manual Testers</h2>
                  <h2>into Automation Testers</h2>
                </div>
                <div className={Style.conticon}>
                  <p><FaArrowAltCircleRight className={Style.icon}/> Easy to use</p>
                  <p> <FaArrowAltCircleRight className={Style.icon}/> No code Natural Language Processing</p>
                  <p><FaArrowAltCircleRight className={Style.icon}/>  Begin automating in hours</p>
                </div>
              </div>
            <div className={Style.img}>
              <img src={img1} alt=""/>
            </div>
          </div>


          <div className={Style.cont}>
              <div className={Style.innercontener}>
                <div className={Style.innercont}>
                  <h2>Automatate Across Multiple Test</h2>
                  <h2>Applications and Platforms</h2>
                </div>
                <div className={Style.conticon}>
                  <p><FaArrowAltCircleRight className={Style.icon}/> Web automation</p>
                  <p> <FaArrowAltCircleRight className={Style.icon}/>Android and IOS</p>
                  <p><FaArrowAltCircleRight className={Style.icon}/> Step based API's</p>
                </div>
              </div>
            <div className={Style.img}>
              <img src={img2} alt=""/>
            </div>
          </div>


          <div className={Style.cont}>
              <div className={Style.innercontener}>
                <div className={Style.innercont}>
                  <h2>Scalable On-Demand</h2>
                  <h2>Test Management Platform</h2>
                </div>
                <div className={Style.conticon}>
                  <p><FaArrowAltCircleRight className={Style.icon}/>Execute across cloud services</p>
                  <p> <FaArrowAltCircleRight className={Style.icon}/>Automated test distribution</p>
                  <p><FaArrowAltCircleRight className={Style.icon}/> Emulators, simulators, and real devices</p>
                </div>
              </div>
            <div className={Style.img}>
              <img src={img3} alt=""/>
            </div>
          </div>
          
          
      </Slider>
    </div>
  )
}

export default SliderCarousel