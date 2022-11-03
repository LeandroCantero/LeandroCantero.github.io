import React, {useContext} from 'react'
import Fade from 'react-reveal/Fade';
import styles from './Skills.module.css';
import SkillsLottie from '../../animations/SkillsLottie';
import ReactTooltip from 'react-tooltip'
import emoji from 'react-easy-emoji'
import LanguageContext from '../../../context/language/LanguageProvider';

function Skills() {

    const { dictionary } = useContext(LanguageContext);

    return (
        <div className={styles.skills_section}>
            <div className={styles.text_top}>
                <h1>{dictionary["skills-title"]}</h1>
                <p>{dictionary["skills-subtitle"]}</p>
            </div>

            <div className={styles.container}>
                <Fade left>
                    <div className={`${styles.left_content} ${styles.child}`}>
                        <SkillsLottie />
                    </div>

                </Fade>

                <Fade right>
                    <div className={`${styles.right_content} ${styles.child}`}>
                        <h3>{dictionary["skills-stack"]}</h3>
                        <div className={styles.technologies}>
                            <iconify-icon icon="vscode-icons:file-type-html" data-tip="HTML"></iconify-icon>
                            <iconify-icon icon="vscode-icons:file-type-css" data-tip="CSS"></iconify-icon>
                            <iconify-icon icon="logos:javascript" data-tip="Javascript"></iconify-icon>
                            <iconify-icon icon="logos:react" width="40" height="40" data-tip="React"></iconify-icon>
                            <iconify-icon icon="logos:nodejs-icon" width="40" height="40" data-tip="Node"></iconify-icon>
                            <iconify-icon icon="logos:vitejs" data-tip="Vite Js"></iconify-icon>
                            <iconify-icon icon="logos:nextjs-icon" data-tip="Next Js"></iconify-icon>
                            <iconify-icon icon="logos:dotnet" width="40" height="40" data-tip=".NET"></iconify-icon>
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
                            <p>{emoji('🛠️')} {dictionary["skills-what-i-do"][0]}</p>
                            <p>{emoji('🛠️')} {dictionary["skills-what-i-do"][1]}</p>
                            <p>{emoji('🛠️')} {dictionary["skills-what-i-do"][2]}</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills