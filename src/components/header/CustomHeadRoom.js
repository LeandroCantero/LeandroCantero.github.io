import React from 'react'
import HeadRoom from 'react-headroom'
import styles from './Header.module.css'
import './HeadRoom.css'
import UseLanguage from '../../hooks/UseLanguage'

function CustomHeadRoom() {
    return (
        <HeadRoom className={styles.header} disableInlineStyles>
            <div className={`${styles.container}`}>
                <a href="/">
                    <h2>Cantero Leandro</h2>
                </a>
                <UseLanguage />
            </div>
        </HeadRoom>
    )
}

export default CustomHeadRoom