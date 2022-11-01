import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './Skills.module.css';
import SkillsLottie from '../../animations/SkillsLottie';
import ReactTooltip from 'react-tooltip'
import emoji from 'react-easy-emoji'

function Skills() {
    return (
        <div className={styles.skills_section}>
            <div className={styles.text_top}>
                <h1>Habilidades</h1>
                <p>Tecnologías aprendidas por el momento y que puedo hacer con ellas.</p>
            </div>

            <div className={styles.container}>
                <Fade left>
                    <div className={`${styles.left_content} ${styles.child}`}>
                        <SkillsLottie />
                    </div>

                </Fade>

                <Fade right>
                    <div className={`${styles.right_content} ${styles.child}`}>
                        <h3>Fullstack Development</h3>
                        <div className={styles.technologies}>
                            <iconify-icon icon="vscode-icons:file-type-html" data-tip="HTML"></iconify-icon>
                            <iconify-icon icon="vscode-icons:file-type-css" data-tip="CSS"></iconify-icon>
                            <iconify-icon icon="logos:javascript" data-tip="Javascript"></iconify-icon>
                            <iconify-icon icon="logos:react" data-tip="React"></iconify-icon>
                            <iconify-icon icon="logos:nodejs-icon" data-tip="Node"></iconify-icon>
                            <iconify-icon icon="logos:vitejs" data-tip="Vite Js"></iconify-icon>
                            <iconify-icon icon="logos:nextjs-icon" data-tip="Next Js"></iconify-icon>
                            <iconify-icon icon="logos:dotnet" data-tip=".NET"></iconify-icon>
                            <iconify-icon icon="logos:java" width="40" height="40" data-tip="Java"></iconify-icon>
                            <iconify-icon icon="logos:spring-icon" data-tip="Spring"></iconify-icon>
                            <iconify-icon icon="vscode-icons:file-type-mongo" data-tip="MongoDB"></iconify-icon>
                            <iconify-icon icon="logos:npm-icon" data-tip="NPM"></iconify-icon>
                            <iconify-icon icon="logos:git-icon" data-tip="Git"></iconify-icon>
                            <ReactTooltip 
                                place="bottom"
                                effect="solid"
                                padding="8px"
                            />
                        </div>
                        <div className={styles.extra_skills}>
                            <p>{ emoji('🛠️') } Construir sitios web responsive en React.</p>
                            <p>{ emoji('🛠️') } Crear servicios REST con Spring</p>
                            <p>{ emoji('🛠️') } Construir RESTful APIs con el MERN stack.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills