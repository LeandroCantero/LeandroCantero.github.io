import React, { useContext } from 'react'
import Card from '../cards/Cards/Card'
import { ImBooks } from 'react-icons/im'
import containerStyle from '../../ContainerStyle.module.css'
import educationStyle from './Education.module.css'
import Fade from 'react-reveal/Fade';
import LanguageContext from '../../../context/language/LanguageProvider'

function Education() {

    const { dictionary } = useContext(LanguageContext);

    return (
        <section className={educationStyle.education}>
            <div className={containerStyle.container}>
                <Fade left>
                    <div>
                        <h2 style={{ color: "white" }} className={containerStyle.title}><ImBooks />{dictionary["education-title"]}</h2>
                    </div>
                </Fade>

                <Fade right>
                    <a href="https://unahur.edu.ar/tecnicatura-universitaria-en-programacion/" target="_blank" rel="noopener noreferrer">
                        <Card
                            title={dictionary["education-card-title"]}
                            subtitle={dictionary["education-card-subtitle"]}
                            date={dictionary["education-card-date"]}
                            desc1={dictionary["education-card-p1"]}
                            desc2={dictionary["education-card-p2"]}
                        />
                    </a>
                </Fade>
            </div>
        </section>
    )
}

export default Education