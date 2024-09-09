import React from 'react'
import consul from './ItConsulting.module.css'

import headimg from './asset 18.jpeg'
import img1 from './asset 1.png'
import img2 from './asset 2.png'
import img3 from './asset 3.png'
import img4 from './asset 4.png'
import img5 from './asset 5.png'
import img6 from './asset 6.png'
import img7 from './asset 7.png'
import img8 from './asset 8.png'
import img9 from './asset 9.png'
import RecentArticles from '../Home/RecentArticles'
import Footer from '../Footer/Footer'
const ItConsulting = () => {
  return (
    <main>
    <section className={consul.head}>
    <img src={headimg} alt="" />
<div className={consul.mainContent}>
<p>IT Consulting</p>
<p>Test Yantra Global offers IT consulting services with a seasoned team of 12,000+ engineers, boasting 15 years of experience, 3,000+ satisfied clients, and 180+ successful enterprise deployments, ensuring a smooth digital transformation for businesses.</p>
</div>
</section>

<section className={consul.firelink}>
  <h1>Our Range of Services</h1>
  <p>Test Yantra Global offers a comprehensive range of IT consulting services to meet your unique needs.</p>
  
  <div className={consul.fireCont}>
  <div className={consul.cardContainer}>
   
    <div className={consul.card}>
      <img src={img1} alt="" />
      <h3>Strategic IT Planning</h3>
      <p>We work closely with your organization to understand your unique business goals and challenges. Based on this understanding, we leverage our CoE to develop a customized IT strategy that aligns technology investments with your long-term objectives.</p>
    </div>

    <div className={consul.card}>
      <img src={img2} alt="" />
      <h3>Technology Assessment and Auditing</h3>
      <p>Our team of experts conducts thorough assessments and audits of your existing IT infrastructure and systems to identify areas for improvement, cost-saving opportunities, and potential vulnerabilities.</p>
    </div>

    <div className={consul.card}>
      <img src={img3} alt="" />
      <h3>Infrastructure Optimization</h3>
      <p>We help you streamline your IT infrastructure, enhance scalability, and improve performance, all while reducing costs. Our consultants provide practical guidance for hardware, software, and cloud solutions.</p>
    </div>

    <div className={consul.card}>
      <img src={img4} alt="" />
      <h3>Cybersecurity and Compliance</h3>
      <p>In an era of escalating cyber threats characterized by increasing sophistication, safeguarding your data and adhering to industry regulations has become imperative. Test Yantra Global provides comprehensive cybersecurity solutions and expert compliance consulting services to ensure the security and regulatory compliance of your business.</p>
    </div>

    <div className={consul.card}>
      <img src={img5} alt="" />
      <h3>Digital Transformation</h3>
      <p>In today's dynamic business landscape, organizations must continually adapt and evolve to maintain their competitive edge. Our CoE-based expert guidance empowers you to navigate digital transformation initiatives, harness emerging technologies, and streamline processes, all contributing to your sustained competitive advantage.</p>
    </div>

    <div className={consul.card}>
      <img src={img6} alt="" />
      <h3>Project Management</h3>
      <p>Our PMO and project management services ensure your IT initiatives are completed successfully, on time, and within budget. We apply best practices and methodologies to minimize risks and ensure successful project delivery.</p>
    </div>
    
    </div>
    </div>
</section>

    
    <section className={consul.firelink2}>
  <h1>Partnering with Test Yantra Global for your IT consulting needs offers numerous benefits</h1>

    <div className={consul.fireCont2}>
  <div className={consul.cardContainer}>
   
    <div className={consul.card}>
      <img src={img7} alt="" />
      <h3>Tailored Solutions</h3>
      <p>Test Yantra Global provides IT consulting services that are customized to meet the unique needs of an organization.</p>
    </div>

    <div className={consul.card}>
      <img src={img8} alt="" />
      <h3>Cost Efficiency</h3>
      <p>Our expert advisors identify cost-saving opportunities and optimize your IT investments, ensuring you get the most value from your technology spend.</p>
    </div>

    <div className={consul.card}>
      <img src={img9} alt="" />
      <h3>Risk Mitigation</h3>
      <p>In an era where cybersecurity takes center stage, our services are dedicated to proactively mitigating risks and fortifying the protection of your sensitive data.</p>
    </div>
    </div>
    </div>
  </section>

  <RecentArticles />
  <Footer />

</main>
  )
}

export default ItConsulting