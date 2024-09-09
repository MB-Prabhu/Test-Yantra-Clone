import React from 'react'
import part from './Firelink.module.css'

import headimg from './asset 16.jpeg'
import img1 from './assets/asset 1.png'
import img2 from './assets/asset 2.png'
import img3 from './assets/asset 3.png'
import img4 from './assets/asset 4.png'
import img5 from './assets/asset 5.png'
import img6 from './assets/asset 6.png'
import img7 from './assets/asset 7.png'
import RecentArticles from '../Home/RecentArticles'
import Footer from '../Footer/Footer'

const Firelink = () => {
  return (
    <>
    <main>
      <section className={part.head}>
        <img src={headimg} alt="" />
        <div className={part.mainContent}>
        <p>FireFlink - Extreme test automation.</p>
        <p>As the 'Exclusive Service Platinum Partner' of FireFlink, Test Yantra Global facilitates efficient Digital Transformation, ensuring a superior return on investment.</p>
        </div>
      </section>


      <section className={part.firelink}>
        <h1>FireFlink Solutions</h1>
        <p>FireFlink is an all-in-one solution that comes with a simple interface, enabling effortless automation for everyone.</p>
        
        <div className={part.fireCont}>
        <div className={part.cardContainer}>
          <div className={part.card}>
            <img src={img1} alt="" />
            <h3>WEB AUTOMATION TESTING</h3>
            <p>The automation of web applications is moving towards a codeless approach using straightforward NLP-based scripts that can easily handle various actions and verifications. FireFlink combines all the commonly used test automation framework types and more, making it the ideal solution.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img2} alt="" />
            <h3>MOBILE AUTOMATION TESTING</h3>
            <p>Web application automation is moving towards processes that do not require coding, instead relying on easy-to-use NLP-based scripts to manage various actions and verifications. FireFlink incorporates a wide range of test automation frameworks, as well as additional features, to create the ideal solution.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img3} alt="" />
            <h3>API Automation Testing</h3>
            <p>Effortlessly generate test scripts for Web Services. Our Web Service testing solution enables you to rapidly and thoroughly test the intricate layers of Web Services in just a matter of minutes. Get ready to dive deep into testing with ease.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img4} alt="" />
            <h3>Visual Testing</h3>
            <p>The familiarity of developers, marketers, and product owners with a website may cause them to overlook issues that actual users may notice. It is crucial to gather such feedback from real users as it helps improve the quality of products and services offered to customers. FireFlink provides convenient solutions for UX testing.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img5} alt="" />
            <h3>UI Performance Testing
            </h3>
            <p>The quality of a website or app's user interface directly affects its success. With FireFlink's visual testing capabilities, users can discover efficient testing techniques that enhance the usability of the user interface and eliminate any problems that could cause customer dissatisfaction.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img6} alt="" />
            <h3>Manual Test Case management
            </h3>
            <p>FireFlink simplifies the management of manual test cases by offering a user-friendly interface that enables test engineers to easily understand and fulfill testing requirements. It allows for efficient test case management by providing a one-to-one mapping of manual test case entries with their corresponding automation test scripts.</p>
          </div>
        {/* </div> */}

        {/* <div className={part.fireCont}> */}
          <div className={part.card}>
            <img src={img7} alt="" />
            <h3>Defect Management</h3>
            <p>FireFlink's defect management system offers essential feedback to enhance the software development process. It provides a reliable solution for tracking bugs and ensuring software quality assurance, enabling smooth software releases.</p>
          </div>
        </div>
        </div>
      </section>

      <RecentArticles />
      <Footer />
    </main>
    </>
  )
}

export default Firelink