import React from 'react'
import headimg from './asset 11.png'
import gt from './GetTouch.module.css'

import img1 from './assets7/asset 3.jpeg'
import img2 from './assets7/asset 4.jpeg'
import img3 from './assets7/asset 5.jpeg'
import img4 from './assets7/asset 6.jpeg'
import img5 from './assets7/asset 7.jpeg'
import img6 from './assets7/asset 8.jpeg'

import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Footer from '../Footer/Footer';
const GetTouch = () => {
  return (
    <main>  
    <section className={gt.head}>
      <img src={headimg} alt="" />
<div className={gt.mainContent}>
<p>Contact</p>
<p>Please complete the form below and we will get back to you soon.</p>
</div>
</section>

<section className={gt.logincontainer}>
    <section className={gt.loginbox}>
      <div className={gt.part1}>
      
          <input type="text" placeholder='Name *'/>
          <input type="=email" placeholder='Subject *' />
          <select name="" id="" >
              <option value="Select Topic">Select Topic</option>
              <option value="Software Development">Software Development</option>
              <option value="Software Testing">Software Testing</option>
              <option value="IT Skill Enhancement">IT Skill Enhancement</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Career Opportunities">Career Opportunities</option>
              <option value="Other Topics">Other Topics</option>
          </select>
          <input type="number" placeholder='' value={+91}/>
          </div>

          <div className={gt.part2}>
          <input type="text" placeholder='Subject *'/>
          <textarea name="" id="" cols={60} rows={10} placeholder='Write your message...'></textarea>
          </div>

            <div className={gt.btncont}>
              <button >submit</button>
            </div>
    </section>

    <div className={gt.contactCont}>
      <div>
        <p>Contact us by phone</p>
        <p>Number Or Email Address</p>
      </div>
      <div></div>
      <div>
        <p> <FiPhone /> 1800 572 7905</p>
        <p><MdOutlineEmail /> hello@testyantraglobal.com</p>
      </div>
    </div>

</section>

<section className={gt.countryCont}>
    <h1>Reach out to us at your nearest office.</h1>

    <div className={gt.countryCardCont}>
      <div className={gt.countryCard}>
        <img src={img1} alt="" />
        <h2>United States of America</h2>
        <p>99 South Almaden Blvd, Suite 600, San Jose, California, CA 95113</p>

      <p>Ph: 1800 572 7905</p>
      </div>

      <div className={gt.countryCard}>
        <img src={img2} alt="" />
        <h2>Canada
        </h2>
        <p>120 Adelaide Street West, Suite 2500 Toronto, ON, M5H 1T1, Canada</p>

      <p>Ph: 1800 572 7905</p>
      </div>

      <div className={gt.countryCard}>
        <img src={img3} alt="" />
        <h2>United Kingdom</h2>
        <p>1 Elmfield Park, Bromley - BR1 1LU, United Kingdom</p>

      <p>Ph: 0800 949 6909</p>
      </div>


      <div className={gt.countryCard}>
        <img src={img4} alt="" />
        <h2>Ireland</h2>
        <p>The black church, St. Mary’s place, Dublin, Ireland - D07 P4AX</p>

      <p>Ph: 1800 851 886</p>
      </div>

      <div className={gt.countryCard}>
        <img src={img5} alt="" />
        <h2>Netherlands</h2>
        <p>Vliegend Hertlaan 15-97, 3526 KT Utrecht, Netherlands</p>

      <p>Ph: +31 308 992 386</p>
      </div>

      <div className={gt.countryCard}>
        <img src={img6} alt="" />
        <h2>India</h2>
        <p>#88, 3rd Floor, Brigade Chambers, Gandhi Bazaar Main Rd, Basavanagudi, Bangalore-560004 Karnataka, India</p>

      <p>Ph: 1800 203 9989</p>
      </div>

      
    </div>
</section>

<Footer />
</main >
  )
}

export default GetTouch