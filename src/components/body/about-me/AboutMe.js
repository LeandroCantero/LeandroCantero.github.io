import React, {useContext}from 'react'
import styles from './AboutMe.module.css'
import { ImGithub, ImLinkedin, ImInstagram, ImDownload3 } from 'react-icons/im'
import DeveloperLottie from '../../animations/DeveloperLottie';
import { LanguageContext } from '../../../context/language/LanguageProvider';


function AboutMe() {

    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <section>
                <div className={styles.container}>
                    <div className={`${styles.containerChild} ${styles.leftContainer}`}>
                        <h2>{dictionary["home-title"]}</h2>
                        <p>{dictionary["home-text"]}</p>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/LeandroCantero" target="_blank" rel="noopener noreferrer"><ImGithub /></a>
                            <a href="https://www.linkedin.com/in/leandro-cantero/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a>
                            <a href="https://www.instagram.com/leandrobjs/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a>
                        </div>
                        <div className={styles.downloadBtn}>
                            <a className={styles.downloadCv} href="CV.pdf" download>
                                <span className={styles.downloadIcon}><ImDownload3 /></span>
                                <span className={styles.downloadText}>{dictionary["home-download-cv"]}</span>
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.containerChild} ${styles.rightContainer}`}>
                        <DeveloperLottie />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe