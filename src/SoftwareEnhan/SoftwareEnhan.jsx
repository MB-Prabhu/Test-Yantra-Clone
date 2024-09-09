import React from 'react'
import sten from './SoftwareEnhan.module.css'

import headimg from './asset 12.jpeg'
import img1 from './asset 1.png'
import img2 from './asset 2.png'
import img3 from './asset 3.png'
import RecentArticles from '../Home/RecentArticles'
import Footer from '../Footer/Footer'
const SoftwareEnhan = () => {
  return (
    <main>  
    <section className={sten.head}>
      <img src={headimg} alt="" />
<div className={sten.mainContent}>
<p>Skill Enhancement</p>
<p>Unlock Your Potential - Explore Skill Enhancement Opportunities with Test Yantra Global.</p>
</div>
</section>

<section className={sten.firelink}>
    <h1>Elevate Your Team's Skills with Test Yantra Global:
    Your Gateway to Excellence.</h1>
    <p>Benefits of Choosing Test Yantra Global</p>
    
    <div className={sten.fireCont}>
    <div className={sten.cardContainer}>
     
      <div className={sten.card}>
        <img src={img1} alt="" />
        <h3>Expert IT Consultants</h3>
        <p>Test Yantra Global has trained 670,000+ learners since its inception. Our team of 400+ trainers provides invaluable domain expertise and insight into their specific topics.</p>
      </div>

      <div className={sten.card}>
        <img src={img2} alt="" />
        <h3>Practical Learning</h3>
        <p>Our experiential learning methodology emphasizes practical training to ensure that you acquire real-world hands-on skills that enable immediate engagement.</p>
      </div>

      <div className={sten.card}>
        <img src={img3} alt="" />
        <h3>Industry Recognition</h3>
        <p>We work closely with 2,500+ companies to ensure our programs meet the precise evolving needs of the industry. With 17,000 people registered in our day-to-day IT-related training courses, Test Yantra Global’s training programs are highly respected and sought after by employers.</p>
      </div>
      
      </div>
      </div>
</section>

<RecentArticles />
<Footer />
</main >
  )
}

export default SoftwareEnhan