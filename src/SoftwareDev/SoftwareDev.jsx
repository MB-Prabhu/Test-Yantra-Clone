import React from 'react'
import stdev from './softwareDev.module.css'

import headimg from './asset 15.jpeg'
import img1 from './asset 1.png'
import img2 from './asset 2.png'
import img3 from './asset 3.png'
import img4 from './asset 4.png'
import img5 from './asset 5.png'
import img6 from './asset 6.png'
import RecentArticles from '../Home/RecentArticles'
import Footer from '../Footer/Footer'
const SoftwareDev = () => {
  return (
    <main>  
        <section className={stdev.head}>
          <img src={headimg} alt="" />
    <div className={stdev.mainContent}>
    <p>Software Development)</p>
    <p>Our 1,100+ expert software developers utilize the latest technology stack to build and integrate leading applications across a variety of domains.</p>
    </div>
  </section>

  <section className={stdev.firelink}>
        <h1>Digital Transformation Services</h1>
        <p>A holistic range of services covering all aspects of software development life
        cycle (SDLC) with industry domain expertise</p>
        
        <div className={stdev.fireCont}>
        <div className={stdev.cardContainer}>
         
          <div className={stdev.card}>
            <img src={img1} alt="" />
            <h3>Cloud Services</h3>
            <p>Test Yantra Global excels in complex cloud migrations, enhancing features, and security. We offer custom cloud solutions and redesign architectures for cloud readiness. Our expertise includes seamless integration of cloud and on-premises systems while maintaining security and performance.</p>
          </div>

          <div className={stdev.card}>
            <img src={img1} alt="" />
            <h3>AWS Services</h3>
            <p>Test Yantra Global is an AWS consulting firm specializing in cloud-first solutions and serverless applications. Our services encompass AWS architecture optimization and proactive monitoring. Additionally, we emphasize Infrastructure as Code (IaC) using AWS CloudFormation for consistent infrastructure management.</p>
          </div>

          <div className={stdev.card}>
            <img src={img1} alt="" />
            <h3>IOT Services</h3>
            <p>The synergy of IoT connecting individuals and devices fosters enhanced efficiency and creativity. At Test Yantra Global, we are committed to delivering top-notch IoT consultancy.</p>
          </div>
          
          </div>
          </div>
</section>

<section className={stdev.firelink2}>
        <h1>Empowering Digital Success with Comprehensive
        Technology Expertise</h1>
       
        <div className={stdev.fireCont}>
        <div className={stdev.cardContainer}>
         
          <div className={stdev.card}>
            <img src={img4} alt="" />
            <h3>Frontend</h3>
            <p>At Test Yantra Global, we harness the power of cutting-edge front-end technologies to transform your digital presence. Our experts excel in React, React Native, Ionic, Angular, and Vue.js, crafting dynamic and responsive user interfaces that captivate your audience. We specialize in utilizing these frameworks to ensure your web and mobile applications are at the forefront of innovation.</p>
          </div>

          <div className={stdev.card}>
            <img src={img5} alt="" />
            <h3>Backend</h3>
            <p>With expertise in Java, Node.js, Python, and Ruby on Rails, our skilled developers architect secure and high-performance server-side systems. We tailor back-end solutions that empower your applications with reliability and scalability, ensuring your online presence remains seamless and efficient. We're adept at leveraging robust back-end technologies to drive your digital solutions.</p>
          </div>

          <div className={stdev.card}>
            <img src={img6} alt="" />
            <h3>Database</h3>
            <p>Test Yantra Global excels in harnessing diverse database technologies to optimize your data management needs. From relational databases like MySQL, Oracle, and PostgreSQL to NoSQL solutions such as MongoDB, SQLite, and neo4j, we offer tailored solutions for efficient data storage and retrieval. With our expertise, your data remains secure, organized, accessible, and ready to drive your business forward.</p>
          </div>
          
          </div>
          </div>
</section>

<RecentArticles />
<Footer />
  </main>
  )
}

export default SoftwareDev