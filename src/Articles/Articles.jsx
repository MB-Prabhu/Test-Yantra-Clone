import React, { useEffect, useRef, useState } from 'react'
import art from './Articles.module.css'

import headimg from './assets8/asset 3.jpeg'
import img1 from './assets8/asset 4.jpeg'
import img2 from './assets8/asset 5.jpeg'
import img3 from './assets8/asset 6.jpeg'
import img4 from './assets8/asset 7.jpeg'
import img5 from './assets8/asset 8.jpeg'
import img6 from './assets8/asset 9.jpeg'
import img7 from './assets8/asset 10.jpeg'
import img8 from './assets8/asset 11.jpeg'
import img9 from './assets8/asset 12.jpeg'
import img10 from './assets8/asset 13.jpeg'
import img11 from './assets8/asset 14.jpeg'
import img12 from './assets8/asset 15.jpeg'
import img13 from './assets8/asset 16.jpeg'
import img14 from './assets8/asset 17.jpeg'
import img15 from './assets8/asset 18.jpeg'
import img16 from './assets8/asset 19.jpeg'


import calender from './assets8/asset 22.svg'
import search from './assets8/asset 24.svg'
import time from './assets8/asset 21.svg'
import arrow from './assets8/asset 23.svg'

import { IoIosSearch } from "react-icons/io";
import card from './cards.json'
import category from './categor.json'
import RecentArticles from './../Home/RecentArticles';
import Footer from './../Footer/Footer';

const Articles = () => {
  let [prod, setProd] = useState(card)
  const [searchVal, setSearchVal] = useState("")
  const [filteredcategory, setFilteredcategory] = useState(card)
  const [categTitle, setCategTitle] = useState(0)
  const [categ, setCateg] = useState(category)
  

// by default every product should be displayed
  useEffect(()=>{
    setFilteredcategory(prod)
  }, [])


  // searching functionality
  useEffect(()=>{
    if(searchVal.trim()!=""){
       let filteredProd=  filteredcategory.filter(({title})=>{
        return title.toLowerCase().includes(searchVal)
      })
      setFilteredcategory(filteredProd)
    }
    else{
      setFilteredcategory(prod)
    }
  }, [searchVal])



  // useEffect(()=>{
  //   setProd(card)m
  // },[])
  // let getCategory

  // selecting the category functionality
useEffect(()=>{
    if(categTitle!=0){
      let orgProd = prod
      let filteredCateg = orgProd.filter(({category, identity})=>{
        return identity==categTitle
      })
      setFilteredcategory(filteredCateg)
    }
    else{
      setFilteredcategory(prod)
    }
  }
   , [categTitle])


    //  setProd(card)
    // console.log(card)
//     console.log(idVal)
//    let filteredProd=  filteredcategory.filter(({identity})=>{
//       return identity==idVal
//     })
//     console.log(filteredProd)
//     setFilteredcategory(filteredProd)
// }

// let getVal = (searchVal)=>{
  // console.log(searchRef.current.value)
  // let refValue = searchRef.current.value
  // console.log(refValue)
  // console.log(searchVal)
  // let searchFilter = prod.filter(({title})=>{
    // console.log(typeof (title))
    // console.log(title.toLowerCase())
        // return title.toLowerCase()==searchVal
  // }
  // )
  // console.log(searchFilter)
  // setProd(searchFilter)
// }

// useEffect(()=>{
//   getVal(searchVal)
// },[searchVal])

// console.log(getVal())

  const getimage = (currimg) => require(`./assets8/${currimg}`)
  return (
    <main>
      <section className={art.head}>
        <img src={headimg} alt="" />
        <div className={art.mainContent}>
          <p>Articles</p>
        </div>
      </section>

      <section className={art.mainContainer}>

        <section className={art.cardContainer}>
          {filteredcategory.map(({ img, title, readtime, content, id ,logo, authorname, currdate }) => {
            return (
              <div className={art.card} key={id}>

                <div className={art.imgContainer}>
                  <div className={art.cardimg}>
                    <img src={getimage(img)} alt="" />
                  </div>
                  <div className={art.imgContent1}>
                    <h2>{title}</h2>
                  </div>

                  <div className={art.imgContent2}>
                    <div className={art.time}>
                      <img src={time} alt="" />
                      <p>{readtime}</p>
                    </div>
                  </div>
                  
                </div>
                <div className={art.mainDescription}>
                  <p>{content}</p>

                  <div className={art.cardFooter}>
                    <div className={art.namelogo}>
                      <p>{logo}</p>
                    </div>
                    <p>{authorname}</p>
                    <div className={art.separator}></div>
                    <img src={calender} alt="" />
                    <p>{currdate}</p>
                    <div className={art.cardfootbtn}>
                      <img src={arrow} alt=""  />                    
                    </div>
                  </div>
                </div>


              </div>
            )
          })}

        </section>

        <section className={art.searchCont}>
          <div className={art.searchbox}>
            <input type="text" placeholder='Search' onChange={(e)=>setSearchVal(e.target.value)}/>
            <button ><IoIosSearch /></button>
          </div>

          <div className={art.categoryCont}>
            <div className={art.categorytitle}>
                <p>Categories</p>
            </div>
           <ul>
            <li>
            {/* <li><p>All</p>  <p>(14)</p></li>
            <li><p>Software Testing</p>  <p>(1)</p></li>
            <li><p>Categories of Tests</p>  <p>(1)</p></li>
            <li><p>Test Data</p>  <p>(1)</p></li>
            <li><p>UI Element Locator</p>  <p>(1)</p></li>
            <li><p>Script Automation</p>  <p>(1)</p></li>
            <li><p>FireFlink Finder
            </p>  <p>(1)</p></li>
            <li><p>Debugging
            </p>  <p>(1)</p></li>
            <li><p>Test Automation</p>  <p>(2)</p></li>
            <li><p>UI Element Collector</p>  <p>(1)</p></li>
            <li><p>Scriptless testing
            </p>  <p>(1)</p></li>
            <li><p>Test Automation suite
            </p>  <p>(1)</p></li>
            <li><p>Software testing
            </p>  <p>(2)</p></li>
            <li><p>Crowd Testing</p>  <p>(1)</p></li>
            <li><p>Performance Testing
            </p>  <p>(1)</p></li> */}
</li>
            {categ.map(({catego, avail, id})=>{
                return (
                  <li onClick={(e)=> setCategTitle(id)}>
                    <p >{catego}</p>
                    <p>({avail})</p>
                  </li>
                )
            })}

            
           </ul>

          </div>


        </section>

      </section>
     <Footer />
    </main >
  )
}

export default Articles