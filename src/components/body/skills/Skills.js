import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './Skills.module.css';
import ReactLottie from '../../animations/ReactLottie';

function Skills() {
    return (
        <div className={styles.skills_section}>
            <div className={styles.text_top}>
                <h1>Habilidades</h1>
                <p>Tecnologías aprendidas por el momento.</p>
            </div>

            <div className={styles.container}>
                <Fade left>
                    <div className={`${styles.left_content} ${styles.child}`}>
                        {/* <img src="https://simpleprogrammer.com/wp-content/uploads/2016/07/Technical-Skills-As-A-Software-Developer.png" alt="" /> */}
                        <ReactLottie/>
                    </div>

                </Fade>

                <Fade right>
                    <div className={`${styles.right_content} ${styles.child}`}>
                        <h3>Fullstack Development</h3>
                        <div className='languages'>
                            <p>icons...</p>
                        </div>
                        <div className='extra-skills'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quae praesentium ab, odit omnis nulla, maiores rem facere, tenetur nobis sequi? Rem sint dolorem dolor, rerum exercitationem aliquid ad aliquam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora modi suscipit illum fuga animi ullam reiciendis laudantium voluptatibus quae at! Mollitia repudiandae aperiam voluptas impedit pariatur blanditiis unde est nihil?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae dolorum dolore, sequi, provident nostrum nisi praesentium cumque molestiae voluptas ducimus est similique possimus, eos ut incidunt quas odio architecto laborum.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills