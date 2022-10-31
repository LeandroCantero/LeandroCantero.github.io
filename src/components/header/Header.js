import React from 'react'
import styles from './Header.module.css'
import { ImGithub, ImLinkedin, ImInstagram } from 'react-icons/im'

function Header() {

    return (
        <div className='header'>
            <header>
                <nav>
                    <div className={`${styles.container}`}>
                        <h2>Cantero Leandro</h2>
                        <div className='socials'>
                            <ul>
                                <li className={styles.nav_item}><a href="https://github.com/LeandroCantero" target="_blank" rel="noopener noreferrer"><ImGithub /></a></li>
                                <li className={styles.nav_item}><a href="https://www.linkedin.com/in/leandro-cantero/" target="_blank" rel="noopener noreferrer"><ImLinkedin /></a></li>
                                <li className={styles.nav_item}><a href="https://www.instagram.com/leandrobjs/" target="_blank" rel="noopener noreferrer"><ImInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header