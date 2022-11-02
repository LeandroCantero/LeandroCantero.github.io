import React from 'react'
import Card from '../cards/Cards/Card'
import { ImBooks } from 'react-icons/im'
import containerStyle from '../../ContainerStyle.module.css'
import educationStyle from './Education.module.css'
import Fade from 'react-reveal/Fade';

function Education() {
    return (
        <section className={educationStyle.education}>
            <div className={containerStyle.container}>
                <Fade left>
                    <div>
                        <h2 style={{ color: "white" }} className={containerStyle.title}><ImBooks />Education</h2>
                    </div>
                </Fade>

                <Fade right>
                    <a href="https://unahur.edu.ar/tecnicatura-universitaria-en-programacion/" target="_blank" rel="noopener noreferrer">
                        <Card
                            title="Universidad Nacional de Hurlingham"
                            subtitle="Tec. en Programación"
                            date="Febrero 2017 - Actualidad"
                            desc1="Carrera dedicada al mundo IT, enfocada en programación."
                            desc2="Cursando el segundo año de la carrera."
                        />
                    </a>
                </Fade>
            </div>
        </section>
    )
}

export default Education