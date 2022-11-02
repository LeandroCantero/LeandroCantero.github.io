import React, {useContext} from 'react'
import projectsStyle from './Projects.module.css'
import containerStyle from '../../ContainerStyle.module.css'
import ProjectCard from '../cards/ProjectsCards/ProjectCard'
import ProjectCardNoDemo from '../cards/ProjectsCards/ProjectCardNoDemo'
import { FaClipboardList } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper';
import Fade from 'react-reveal/Fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LanguageContext from '../../../context/language/LanguageProvider'

function Projects() {

    const { dictionary } = useContext(LanguageContext);

    return (
        <section className={projectsStyle.section}>
            <Fade bottom>
                <div className={containerStyle.container}>
                    <div>
                        <h2 className={containerStyle.title}><FaClipboardList /> {dictionary["project-title"]}</h2>
                    </div>
                </div>
                <div>
                    <Swiper
                        modules={[Autoplay, Pagination, Scrollbar, A11y, Mousewheel]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true
                        }}
                        className={projectsStyle.mySwiper}
                    >
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][0]}
                                src="https://user-images.githubusercontent.com/42678932/192650728-f0dc13af-ebaa-437f-86ce-fc87b3fc5a01.png"
                                desc={dictionary["project-card-desc"][0]}
                                git="https://github.com/LeandroCantero/KioscoApp"
                                demo="https://kioscoapp.up.railway.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCardNoDemo
                                title={dictionary["project-card-title"][1]}
                                src="https://user-images.githubusercontent.com/42678932/186787483-90c6a21c-3555-43fc-ae97-1f1707a54fbe.png"
                                desc={dictionary["project-card-desc"][1]}
                                git="https://github.com/LeandroCantero/GuitarLA_Strapi"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][2]}
                                src="https://user-images.githubusercontent.com/42678932/199384441-5d99eddb-8eb8-4b2e-9c14-01f594e104f4.png"
                                desc={dictionary["project-card-desc"][2]}
                                git="https://github.com/LeandroCantero/citas_react"
                                demo="https://fluffy-crostata-415f64.netlify.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][3]}
                                src="https://camo.githubusercontent.com/0fa63bb25e8fb31eed716411108158af641702409a6425a45bd08b5b6604f3d4/68747470733a2f2f692e696d6775722e636f6d2f364469554547692e706e67"
                                desc={dictionary["project-card-desc"][3]}
                                git="https://github.com/LeandroCantero/Criptos-React"
                                demo="https://criptocotizador-leandrocantero.netlify.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][4]}
                                src="https://user-images.githubusercontent.com/42678932/186785447-2ff926c7-cf1e-4a53-bfa7-bdfed2e4617a.png"
                                desc={dictionary["project-card-desc"][4]}
                                git="https://github.com/LeandroCantero/Cotizador-Seguros"
                                demo="https://cotizador-seguros-five.vercel.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][5]}
                                src="https://user-images.githubusercontent.com/42678932/188517107-7ccaf787-818d-434e-9637-c050b8d356e0.png"
                                desc={dictionary["project-card-desc"][5]}
                                git="https://github.com/LeandroCantero/Buscador-Bebidas"
                                demo="https://buscador-bebidas-leandrocantero.vercel.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCard
                                title={dictionary["project-card-title"][6]}
                                src="https://user-images.githubusercontent.com/42678932/188520478-444db81f-7513-4b46-ad58-e96a9584c9dd.png"
                                desc={dictionary["project-card-desc"][6]}
                                git="https://github.com/LeandroCantero/Control-Gastos"
                                demo="https://control-gastos-leandrocantero.netlify.app/"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCardNoDemo
                                title={dictionary["project-card-title"][7]}
                                src="https://user-images.githubusercontent.com/42678932/187789379-c2e229e5-850f-4b6e-b632-76de830e8d27.png"
                                desc={dictionary["project-card-desc"][7]}
                                git="https://github.com/LeandroCantero/Noticias_API"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCardNoDemo
                                title={dictionary["project-card-title"][8]}
                                src="https://user-images.githubusercontent.com/42678932/187529301-ce801294-0b42-4cb6-9f8c-9d5d067b362f.png"
                                desc={dictionary["project-card-desc"][8]}
                                git="https://github.com/LeandroCantero/Clima_App"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={projectsStyle.swipersSlide}>
                            <ProjectCardNoDemo
                                title={dictionary["project-card-title"][9]}
                                src="https://user-images.githubusercontent.com/42678932/187294736-3cdaafce-d265-45ba-a3dd-06dd6cc4f0f0.png"
                                desc={dictionary["project-card-desc"][9]}
                                git="https://github.com/LeandroCantero/Buscador_Letras_Canciones"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Fade>
        </section >
    )
}

export default Projects