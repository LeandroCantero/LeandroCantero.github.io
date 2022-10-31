import React from 'react'
import styles from './Header.module.css'

function Header() {    

    return (
        <div className='header'>
            <header>
                <nav>
                    <div className={`${styles.container}`}>
                        <h2>Cantero Leandro</h2>
                        <div className='socials'>
                            <ul>
                                <li className='nav-item'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Ig</a></li>
                                <li className='nav-item'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li className='nav-item'><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Github</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header