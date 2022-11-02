import React from 'react'
import style from './ProjectCard.module.css'
import { BsGithub } from 'react-icons/bs'
import { BiTestTube } from 'react-icons/bi'

function ExperienceCard(props) {
    return (
        <div className={style.card}>
            <div className={style.text}>
                <h2>{props.title}</h2>
                <img src={props.src} alt="" />
                <p>{props.desc}</p>
            </div>
            <div className={style.buttons}>
                <button
                    className={style.git}
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`${props.git}`, '_blank');
                    }}
                >
                    <BsGithub />
                </button>
                <button
                    className={style.demo}
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`${props.demo}`, '_blank');
                    }}
                >
                    <BiTestTube /><span>Demo</span>
                </button>
            </div>
        </div>
    )
}

export default ExperienceCard