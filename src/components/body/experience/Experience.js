import React, {useContext} from 'react'
import Card from '../cards/Cards/Card'
import { MdOutlineWork } from 'react-icons/md'
import experienceStyle from './Experience.module.css'
import containerStyle from '../../ContainerStyle.module.css'
import Fade from 'react-reveal/Fade';
import LanguageContext from '../../../context/language/LanguageProvider'

function Experience() {

    const { dictionary } = useContext(LanguageContext);

    return (
        <section className={experienceStyle.section}>
            <div className={containerStyle.container}>
                <Fade right>
                    <div>
                        <h2 className={containerStyle.title}><MdOutlineWork />{dictionary["experience-title"]}</h2>
                    </div>
                </Fade>
                <Fade left>
                    <a href="https://www.huenei.com/en/" target="_blank" rel="noopener noreferrer">
                        <Card
                            title={dictionary["experience-card-title"]}
                            subtitle={dictionary["experience-card-subtitle"]}
                            date={dictionary["experience-card-date"]}
                            desc1={dictionary["experience-card-p1"]}
                            desc2={dictionary["experience-card-p2"]}
                        />
                    </a>
                </Fade>
            </div>
        </section>
    )
}

export default Experience