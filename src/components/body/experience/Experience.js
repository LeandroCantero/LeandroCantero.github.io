import React from 'react'
import Card from '../cards/Cards/Card'
import { MdOutlineWork } from 'react-icons/md'
import experienceStyle from './Experience.module.css'
import containerStyle from '../../ContainerStyle.module.css'
import Fade from 'react-reveal/Fade';

function Experience() {
    return (
        <section className={experienceStyle.section}>
            <div className={containerStyle.container}>
                <Fade right>
                    <div>
                        <h2 className={containerStyle.title}><MdOutlineWork />Experience</h2>
                    </div>
                </Fade>
                <Fade left>
                    <a href="https://www.huenei.com/en/" target="_blank" rel="noopener noreferrer">
                        <Card
                            title="Huenei IT"
                            subtitle="Analista Programador"
                            date="Noviembre 2021 - Mayo 2022"
                            desc1="Trabajé cómo desarrollador Fullstack."
                            desc2="Utilicé .NET, Windows Form y SVN."
                        />
                    </a>
                </Fade>
            </div>
        </section>
    )
}

export default Experience