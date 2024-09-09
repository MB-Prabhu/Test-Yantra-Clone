import React from 'react'
import Style from './Navbar.module.css'
import { Link } from 'react-router-dom';
import  logo  from './logo.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <nav className={Style.navContainer}>
        <div className={Style.secContainer}>
            <div className={Style.logo}>
                <img src={logo} alt="" />
            </div>
            <div>
                <ul className={Style.list}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        {/* <Link to='/Services'> */}
                        Services <RiArrowDropDownLine className={Style.arrow}/>
                        {/* </Link> */}
                        <div className={Style.serviceLink}>
                            <ul>
                                <li><Link to='/SoftwareTesting'>Software Testing (TAAS)</Link></li>
                                <li><Link to='/SoftwareDev'>Software Development</Link></li>
                                <li><Link to='/SoftwareEnhancement'>Software Enhancement</Link></li>
                                <li><Link to='/ITConsulting'>IT Consulting</Link></li>
                                <li><Link to='/CrowdTesting'>Crowd Testing</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        {/* <Link to='/Partners'> */}
                        Partners <RiArrowDropDownLine className={Style.arrow}/>
                        {/* </Link> */}
                        <div className={Style.partnerlink}>
                            <ul>
                                <li><Link to='/Firelink'>Firelink</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to='/Articles'>Articles</Link>
                    </li>
                    <li>
                        <Link to='/GetTouch'>
                        <div className={Style.gettouch}>
                            <p>Get In Touch</p>
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar