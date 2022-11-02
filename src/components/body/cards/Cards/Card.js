import React from 'react'
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card_text}>
                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>
                <span>{props.date}</span>
                <div className={styles.desc}>
                    <p>{props.desc1}</p>
                    <p>{props.desc2}</p>
                </div>
            </div>
        </div>
    )
}

export default Card