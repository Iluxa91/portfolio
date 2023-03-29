import s from "./MyProjects.module.scss"
import {OneProject} from "./Project/OneProject";
import {Title} from "../../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {projects} from "./";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Keyboard, Navigation, Pagination, EffectCoverflow} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

export const MyProjects = () => (
    <div id={"projects"} className={s.projectsBlock}>
        <div className={s.projectsContainer}>
            <Fade>
                <Title spanText={"Portfolio"} headText={"My Projects"}/>
            </Fade>
            <div className={s.projects}>
                <Fade bottom>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        keyboard={{enabled: true}}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{clickable: true}}
                        modules={[EffectCoverflow, Keyboard, Navigation, Pagination]}
                        className={s.mySwiper}
                    >
                        {projects.map((p, i) => <SwiperSlide key={i}>
                            <OneProject
                                style={p.style}
                                title={p.title}
                                description={p.description}
                                projectPath={p.projectPath}
                                codePath={p.codePath}/>
                        </SwiperSlide>)}
                    </Swiper>
                </Fade>
            </div>
        </div>
    </div>
)
