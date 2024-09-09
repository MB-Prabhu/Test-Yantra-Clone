import React from 'react'
import foot from './Footer.module.css'
import earth from './asset 17.png'
import footlogo from './asset 16.svg'
import { Link } from 'react-router-dom';
import { AiFillFacebook } from "react-icons/ai";

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
        <section className={foot.mainFooter}>
          <img src={earth} alt="" className={foot.earthImg} />
                <h1>Subscribe to our Newsletter!</h1>
                <div className={foot.searchCont}>
                    <input type="text" placeholder='Enter your Business Email'/>
                    <button>Subscribe</button>
                </div>

                <div className={foot.footCardCont}>
                  <div className={foot.footSubContainer}>
                  <div className={foot.footCard1}>
                    <div className={foot.imgContainer}>
                    <img src={footlogo} alt="" />
                    </div>

                    <div className={foot.cardDescrip}>
                      <p>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.</p>
                      <p>Let's get socially connected...</p>
                    </div>

                    <div className={foot.media}>  
                    
                    <p className={foot.socialmedia}><FaLinkedin /></p>
                    <p className={foot.socialmedia}><FaYoutube /></p>
                    <p className={foot.socialmedia}><FaTwitter /></p>
                    <p className={foot.socialmedia}><AiFillFacebook /></p>
                    <p className={foot.socialmedia}><IoLogoInstagram /></p>
                    </div>
                  </div>
                   

                <div className={foot.footCard2}>
                  <div className={foot.subCard}>
                  <div className={foot.cardTitle}>
                    <p>Services</p>
                  </div>
                  <div className={foot.listItems}>
                    <ul>
                      <li> <Link>Software Testing  (Taas)</Link> </li>
                      <li> <Link>Software Development </Link> </li>
                      <li> <Link>Software Enhancement </Link> </li>
                      <li> <Link>IT Consulting </Link> </li>
                      <li> <Link>Crowd Testing </Link> </li>
                    </ul>
                  </div>
                  </div>
                </div> 

                <div className={foot.footCard2}>
                  <div className={foot.subCard}>
                  <div className={foot.cardTitle}>
                    <p>Quick Links</p>
                  </div>
                  <div className={foot.listItems}>
                    <ul>
                      <li> <Link>About Us</Link> </li>
                      <li> <Link>Firelink</Link> </li>
                      <li> <Link>Article</Link> </li>
                      <li> <Link>Contact</Link> </li>
                    </ul>
                  </div>
                  </div>
                </div> 

                <div className={foot.footCard2}>
                  <div className={foot.subCard}>
                  <div className={foot.cardTitle}>
                    <p>Contacts</p>
                  </div>
                  <div className={foot.address}>
                    <ul>
                      <li><b>Address</b>: 120 Adelaide Street West, <br /> 
                      Suite 2500, Toronto, ON, M5H 1T1, Canada.
                      </li>
                      <li><b>Email: </b>hello@testyantraglobal.com</li>
                      <li><b>Phone: </b>1800 572 7905</li>
                      
                    </ul>
                  </div>
                  </div>
                </div> 

                </div>
                </div> 
                
                <div className={foot.copyright}>
                    <p>Copyright ©2024 Test Yantra Global. All rights reserved</p>
                </div>
        </section>
    </>
  )
}

export default Footer