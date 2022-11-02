import React from 'react'
import styles from './Footer.module.css'
import ContactLottie from '../animations/ContactLottie.js'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import { HiLocationMarker } from 'react-icons/hi'

function Footer() {

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contacMe}>
          <div className={styles.text}>
            <h1>Contacto</h1>
            <p>Fullstack Developer</p>
            <a className={styles.mail} href='mailto:lcantero18@gmail.com'>lcantero18@gmail.com</a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://goo.gl/maps/cDyrgK3XN9prtkY99", '_blank');
              }}
            ><HiLocationMarker /> <span>Buenos Aires, Argentina</span></button>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/LeandroCantero" target="_blank" rel="noopener noreferrer"><ImGithub /></a>
            <a href="https://www.linkedin.com/in/leandro-cantero/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a>
            <a href="https://www.instagram.com/leandrobjs/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a>
          </div>
        </div>
        <div className={styles.lottie}>
          <ContactLottie />
        </div>
      </div>
    </div>
  )
}

export default Footer