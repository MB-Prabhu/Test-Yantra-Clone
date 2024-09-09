import React, { useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import home from './Home.module.css'
import arrow from './asset 23.svg'
// import { Link } from 'react-router-dom';

import CountUp from 'react-countup';

import { CgPlayButtonO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import video from './asset 25.svg'
import thumbnail from './asset 21.png'
import location from './asset 6.png'
import global from './asset 7.png'
import team from './asset 8.png'
import people from './asset 9.png'

import software from './asset 1.png'
import skills from './asset 2.png'
import deployment from './asset 3.png'
import design from './asset 4.png'
import testing from './asset 5.png'
import Footer from '../Footer/Footer';

import SliderCarousel from './SliderCarousel.jsx';
import RecentArticles from './RecentArticles.jsx';



const Home = () => {
const iframeDiv = useRef()
// const videoBtn = useRef()

// console.log(iframeDiv.current.style.fontSize)

let clickVideo=()=>{
  iframeDiv.current.style.display="flex"
  document.body.classList.add(home.noScroll)
}

  let closeFunc = ()=>{
    iframeDiv.current.style.display="none"
  document.body.classList.remove(home.noScroll)
  }

  return (
    <div>
      <section className={home.main}>

        <div className={home.subcontainer}>

          <section className={home.description}>
            <div className={home.subdescription}>
            <div className={home.animation}>
              <p>With Test Yantra Global</p>
           
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Accelerate Business Efficency...',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Achieve Digital transformation...',
                  1000,
                  'Drive AI Automation Testing...',
                  1000,
                  'Build Custom Application...',
                  1000,
                  'Access 1000\'s of Expert Test Engineers...',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>

            <div >
              <p>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</p>
            </div>
            <div >
              <p>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.</p>
            </div>

                <button >
                {/* <Link to='/'> */}
                  Get Started Free
                  <img src={arrow} alt="" />
                  {/* </Link> */}
                </button>
            </div>
          </section>

          <section className={home.image}>
                <div className={home.subImageCont}>
                {/* <Slider /> */}
                <SliderCarousel />
                </div>
          </section>

        </div>
      </section>

      <section className={home.services}>
      <div className={home.heading}>
                <p>Leverage Test Yantra Global's range
                of Professional Services</p>
      </div>

      <div className={home.cardContainer}>
                <div className={home.card}>
                <div className={home.cardImg}>
                <img src={software} alt="" />
                </div>
                <p>software testing service</p>
                <p>We offer cost-effective, reliable and scalble software testing services</p>
                </div>
                <div className={home.card}>
                <div className={home.cardImg}>
                <img src={skills} alt="" />
                </div>
                <p>It Software Sklls Enhancement</p>
                <p>Our customized and curated training models help organizations elevant their IT quotient</p>
                </div>
                <div className={home.card}>
                <div className={home.cardImg}>
                <img src={deployment} alt="" />
                </div>
                <p>Deployment & Support Services</p>
                <p>Our team of exports help you craft a winning IT strategy for your organization</p>
                </div>
                <div className={home.card}>
                <div className={home.cardImg}>
                <img src={design} alt="" />
                </div>
                <p>Software Design & Devlopment</p>
                <p>We deliver IT solutions in a wide variety of verticals and elevate business to the next level</p>
                </div>
                <div className={home.card}>
                <div className={home.cardImg}>
                <img src={testing} alt="" />
                </div>
                <p>Crowd Testing</p>
                <p>We offer comprehensive crowd-testing sercives, leveraging a global netsork of skilled testers</p>
                </div>
      </div>

      <div className={home.videoCont}>
        <div className={home.video}>
                <img src={thumbnail} alt="" />
               {/* <img src={video} alt="" /> */}
               <CgPlayButtonO  className={home.videobtn}  onClick={clickVideo} />
               <div className={home.circle1}></div>
               <div className={home.circle2}></div>
               <div className={home.circle3}></div>
        </div>
        <div className={home.iframe} ref={iframeDiv}>
          <div className={home.close} onClick={closeFunc} ><IoMdClose /></div>
          <iframe width="1160" height="315" src="https://www.youtube.com/embed/tuwxrL7Kh4E?si=A6umbBw4CSoIY7q5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </div>
      </div>

      </section>

      <section className={home.achieveCount}>
            <div className={home.achieveCount}>
                <p>The numbers speak for themselves</p>
            </div>

            <div className={home.numberCardCont}>
                <div className={home.numberCard}>
                <div className={home.icon}>
                  <img src={location} alt="" />
                </div>
                <p><CountUp start={0} end={6}  suffix="" duration={3}/></p>

                  <p>Countries & Growing</p>
                </div>
                <div className={home.numberCard}>
                <div className={home.icon}>
                  <img src={global} alt="" />
                </div>
                <p><CountUp start={0} end={1000}  suffix="+"duration={3}/></p>
                  <p>Clients Across Globe</p>
                </div>
                <div className={home.numberCard}>
                <div className={home.icon}>
                  <img src={team} alt="" />
                </div>
                <p><CountUp start={0} end={5000}  suffix="+"duration={3}/></p>

                  <p>Total Team Members</p>
                </div>
                <div className={home.numberCard}>
                <div className={home.icon}>
                  <img src={people} alt="" />
                </div>
                <p><CountUp start={0} end={12000}  suffix="+"duration={3}/></p>

                  <p>On Demand Test Engineers</p>
                </div>
            </div>
      </section>

     
      <RecentArticles />
      <Footer />
    </div>
  )
}

export default Home