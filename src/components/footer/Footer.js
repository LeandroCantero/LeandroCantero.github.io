import React from 'react'
import styles from './Footer.module.css'
import ContactLottie from '../animations/ContactLottie.js'

function Footer() {

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contacMe}>
          <h1>Contactame</h1>
          <p>emojis etc...</p>
        </div>
        <div className={styles.lottie}>
          <ContactLottie/>
        </div>
      </div>
    </div>
  )
}

export default Footer