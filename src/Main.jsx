import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Services from './Services/Services';
import Partners from './Partners/Partners';
import GetTouch from './GetTouch/GetTouch';
import Articles from './Articles/Articles';
import './Global.css'
import SoftwareTest from './Softwaretest/SoftwareTest';
import SoftwareDev from './SoftwareDev/SoftwareDev';
import SoftwareEnhan from './SoftwareEnhan/SoftwareEnhan';
import ItConsulting from './ItConsultant/ItConsulting';
import CrowdTest from './CrowdTesting/CrowdTest';
import Firelink from './Partners/Firelink';
const Main = () => {
  return (
    <div>
       <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/Services' element={<Services />} >  */}
                
            {/* </Route> */}

            {/* <Route path='/Partners' element={<Partners />} /> */}
            <Route path='/Articles' element={<Articles />} />
            <Route path='/GetTouch' element={<GetTouch />} />
        </Routes>

        <Routes>
                  <Route path='/SoftwareTesting' element={<SoftwareTest />} />
                  <Route path='/SoftwareDev' element={<SoftwareDev />} />
                  <Route path='/SoftwareEnhancement' element={<SoftwareEnhan />} />
                  <Route path='/ITConsulting' element={<ItConsulting />} />
                  <Route path='/CrowdTesting' element={<CrowdTest />} />
                </Routes>

        <Routes>
          <Route path='/Firelink' element={<Firelink />}/>
       </Routes>
       </Router>

      
       
    </div>
  )
}

export default Main