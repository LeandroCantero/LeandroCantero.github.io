import React from 'react'
import Header from '../header/Header'
import AboutMe from './about-me/AboutMe'
import Footer from '../footer/Footer'
import Skills from './skills/Skills'
import Education from './education/Education'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import styles from './MainBg.module.css'

function Body() {
  return (
    <div>
      <main>
        <div className={`${styles.headerAbout} ${styles.fontColor}`}>
          <Header />
          <AboutMe />
        </div>
      </main>
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default Body