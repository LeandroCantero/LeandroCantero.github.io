import React from 'react'
import styles from './AboutMe.module.css'
import { ImGithub, ImLinkedin, ImInstagram, ImDownload3 } from 'react-icons/im'
import DeveloperLottie from '../../animations/DeveloperLottie';

function AboutMe() {
    return (
        <div>
            <section>
                <div className={styles.container}>
                    <div className={`${styles.containerChild} ${styles.leftContainer}`}>
                        <h2>Hola mundo, soy Leandro</h2>
                        <p>
                            Soy desarrollador full-stack, un apasionado del mundo IT.
                            Decidí estudiar la carrera de Lic. en Informática a los 18 años, en paralelo a esto aprendo a través de cursos y plataformas online.
                            Me divierte mucho usar el pensamiento lógico y crear soluciones.

                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://github.com/LeandroCantero" target="_blank" rel="noopener noreferrer"><ImGithub /></a>
                            <a href="https://www.linkedin.com/in/leandro-cantero/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a>
                            <a href="https://www.instagram.com/leandrobjs/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a>
                        </div>
                        <div className={styles.downloadBtn}>
                            <a className={styles.downloadCv} href="CV.pdf" download>
                                <span className={styles.downloadIcon}><ImDownload3 /></span>
                                <span className={styles.downloadText}>Descargar CV</span>
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