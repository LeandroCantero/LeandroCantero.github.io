import React from 'react'
import AboutMe from './about-me/AboutMe'
import Footer from '../footer/Footer'
import Skills from './skills/Skills'
import Education from './education/Education'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import CustomHeadRoom from '../header/CustomHeadRoom'
import styles from './MainBg.module.css'


function Body() {
  return (
    <div>
      <CustomHeadRoom className={styles.fontColor}/>
      <main>
        <div className={`${styles.headerAbout} ${styles.fontColor}`}>
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