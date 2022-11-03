import React, { useContext } from 'react'
import styles from './Footer.module.css'
import './Footer.css'
import ContactLottie from '../animations/ContactLottie.js'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import {BiUpArrow} from 'react-icons/bi'
import Modal from 'react-modal'
import LanguageContext from '../../context/language/LanguageProvider'
import ScrollToTop from "react-scroll-to-top";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px'
  },
};

Modal.setAppElement('#root');


function Footer() {

  const { dictionary } = useContext(LanguageContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.footer}>
      <ScrollToTop smooth component={<BiUpArrow/>}/>
      <div className={styles.container}>
        <div className={styles.contacMe}>
          <div className={styles.text}>
            <h1>{dictionary["contact-form-title"]}</h1>
            <p>{dictionary["contact-form-dev"]}</p>
            <a className={styles.mail} href='mailto:lcantero18@gmail.com'>lcantero18@gmail.com</a>
          </div>
          <div className={styles.enviarMail}>
            <button className={styles.contact_btn} onClick={openModal}><HiMail /> <span>{dictionary["contact-form-send"]}</span></button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal form"
            >
              <div className={styles.modalArea}>
                <form id="myform" action="https://formsubmit.co/lcantero18@gmail.com" method="POST" className={styles.form}>
                  <div className={styles.element}>
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" id="fname" name="name" placeholder="Your name..." required />
                  </div>
                  <div className={styles.element}>
                    <label htmlFor="mail">Mail</label>
                    <input type="email" id="mail" name="email" placeholder="example@mail.com" required />
                  </div>
                  <div className={styles.element}>
                    <label htmlFor="msg">Message</label>
                    <textarea type="text" id="msg" name="msg" placeholder="Message..." required />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                </form>
                <div className={styles.buttons}>
                  <button style={{ border: "none" }} onClick={closeModal}>Cancel</button>
                  <button type="submit" form="myform" value="Send">Submit</button>
                </div>
              </div>
            </Modal>
          </div>
          <button
            className={styles.contact_btn}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://goo.gl/maps/cDyrgK3XN9prtkY99", '_blank');
            }}
          >
            <HiLocationMarker /> <span>Buenos Aires, Argentina</span>
          </button>

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