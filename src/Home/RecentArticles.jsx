import React from 'react'
import rcnt from './Recentarticles.module.css'
import arrow from './asset 23.svg'
import softwareTesting from './asset 10.jpeg'
import categories from './asset 11.jpeg'
import testData from './asset 12.jpeg'

const RecentArticles = () => {
  return (
    <section className={rcnt.articleCont}>
    <div className={rcnt.articleHeading}>
      <p>Our Recent Articles</p>
    </div>

    <div className={rcnt.articleCardCont}>
      <div className={rcnt.articleCard}>
            <div className={rcnt.artiImg}>
              <img src={softwareTesting} alt="" />
            </div>
            <div className={rcnt.artiDescrip}>
              <div className={rcnt.blog}>
                <p>Blog</p>
                <div className={rcnt.separator}></div>
                <p>Software Testing</p>
              </div>

              <div className={rcnt.mainDescrip}>
                <p>Comprehensive Guide to Developing Test Scripts for Software Testing</p>
                <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              </div>

              <button className={rcnt.artiBtn}>
              Read More
              <img src={arrow} alt="" />
            </button>

            </div>


            
      </div>
      <div className={rcnt.articleCard}>
            <div className={rcnt.artiImg}>
              <img src={categories} alt="" />
            </div>
            <div className={rcnt.artiDescrip}>
              <div className={rcnt.blog}>
                <p>Blog</p>
                <div className={rcnt.separator}></div>
                <p>Categories of Tests</p>
              </div>

              <div className={rcnt.mainDescrip}>
                <p>Guidelines for Writing Effective Unit Tests</p>
                <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              </div>

              <button className={rcnt.artiBtn}>
              Read More
              <img src={arrow} alt="" />
            </button>
            
            </div>

            
      </div>

      <div className={rcnt.articleCard}>
            <div className={rcnt.artiImg}>
              <img src={testData} alt="" />
            </div>
            <div className={rcnt.artiDescrip}>
              <div className={rcnt.blog}>
                <p>Blog</p>
                <div className={rcnt.separator}></div>
                <p>Test Data</p>
              </div>

              <div className={rcnt.mainDescrip}>
                <p>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</p>
                <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              </div>

              <button className={rcnt.artiBtn}>
              Read More
              <img src={arrow} alt="" />
            </button>
            
            </div>

            
      </div>
    </div>
  </section>
  )
}

export default RecentArticles