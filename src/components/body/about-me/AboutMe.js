import React from 'react'
import styles from './AboutMe.module.css'

function AboutMe() {
  return (
    <div>
        <section>
            <div className={styles.container}>
                <div className={`${styles.containerChild} ${styles.leftContainer}`}>
                    <h2>Hola mundo, soy Leandro</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit mollitia accusantium labore vitae repudiandae cum atque! Dolor harum neque numquam inventore. Porro dolorum impedit architecto molestiae voluptates deleniti facilis molestias!</p>
                    <div className='social-links'>
                        <a href="git">a</a>
                        <a href="in">a</a>
                        <a href="ig">a</a>
                    </div>
                    <div className='resume'><a href="https://www.instagram.com/">Download CV</a></div>
                </div>
                <div className={`${styles.containerChild} ${styles.rightContainer}`}>
                    <img id="programming-gif" src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMe