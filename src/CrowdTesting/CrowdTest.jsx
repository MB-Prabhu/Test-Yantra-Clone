import React from 'react'
import cwd from './CrowdTesting.module.css'


import headimg from './asset 12.png'
import img1 from './asset 1.png'
import img2 from './asset 2.png'
import img3 from './asset 3.png'
import RecentArticles from '../Home/RecentArticles'
import Footer from '../Footer/Footer'
const CrowdTest = () => {
  return (
    <main>
    <section className={cwd.head}>
    <img src={headimg} alt="" />
<div className={cwd.mainContent}>
<p>Crowd Testing</p>
<p>Experience the Power of Crowd Testing with Test Yantra Global. Key features include access to 65,000 test engineers, a unique status as the only major player with 'Dedicated labs' for crowd-testing, utilization of real devices and networks, and meticulous management of the crowd.</p>
</div>
</section>

<section className={cwd.definition}>
  <div className={cwd.defsubcontainer}>
  <h1>What is Crowd Testing?</h1>
  <p>Crowd Testing is a dynamic testing methodology that leverages a diverse and distributed group of testers. It enables testing across various devices, operating systems, and geographical locations, providing unparalleled coverage and real-user insights.</p>
  </div>
</section>

<section className={cwd.firelink}>
  <h1>Type's of Crowd Testing</h1>
  <p>Our multichannel testing expertise allows us to provide a holistic service to fulfill all your testing needs in one place.</p>
  
  <div className={cwd.fireCont}>
  <div className={cwd.cardContainer}>
   
    <div className={cwd.card}>
      <img src={img1} alt="" />
      <h3>Web Crowd Testing</h3>
      <p>Involves crowd-sourced testing for web applications, ensuring compatibility across platforms and browsers like Chrome, Firefox, and Microsoft Edge. It includes cross-browser tests, trials on various operating systems and versions, diverse testing approaches, and participation from test engineers of all age groups.</p>
    </div>

    <div className={cwd.card}>
      <img src={img2} alt="" />
      <h3>Mobile Crowd Testing</h3>
      <p>Focuses on crowd-sourced testing for mobile apps, identifying compatibility issues across a range of Android and iOS devices. It encompasses platform variations, compatibility-driven tests, diverse testing methodologies, and engagement with test engineers from different demographics.</p>
    </div>

    <div className={cwd.card}>
      <img src={img3} alt="" />
      <h3>Web and Mobile Crowd</h3>
      <p>Testing via FireFlink involves ensuring reliability, alignment with business requirements, and user-friendliness of web and mobile apps. This process includes tests for devices like Android TV, Google TV, and Fire TV Stick, evaluating across different brands and models, reproducing defects using video recordings and screenshots, and offering re-test support for identified issues.</p>
    </div>
    </div>
    </div>
    </section>

<RecentArticles />
<Footer />
</main>
  )
}

export default CrowdTest