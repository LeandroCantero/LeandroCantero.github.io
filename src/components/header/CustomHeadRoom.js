import React from 'react'
import HeadRoom from 'react-headroom'
import styles from './Header.module.css'
import './HeadRoom.css'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'
import UseLanguage from '../../hooks/UseLanguage'

function CustomHeadRoom() {
    return (
        <HeadRoom className={styles.header} disableInlineStyles>
            <div className={`${styles.container}`}>
                <a href="/">
                    <h2>Cantero Leandro</h2>
                </a>
                <div className='socials'>
                    <ul>
                        <li className={styles.nav_item}><a href="https://github.com/LeandroCantero" target="_blank" rel="noopener noreferrer"><ImGithub /></a></li>
                        <li className={styles.nav_item}><a href="https://www.linkedin.com/in/leandro-cantero/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a></li>
                        <li className={styles.nav_item}><a href="https://www.instagram.com/leandrobjs/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a></li>
                    </ul>
                </div>
                <UseLanguage />
                <div className={styles.menu_responsive }>
                    .
                    .
                    .
                </div>
            </div>
        </HeadRoom>
    )
}

export default CustomHeadRoom