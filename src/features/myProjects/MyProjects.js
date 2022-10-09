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
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";


export const MyProjects = () => (
    <div id={"projects"} className={s.projectsBlock}>
        <div className={s.projectsContainer}>
            <Fade bottom>
                <Title spanText={"Portfolio"} headText={"My Projects"}/>
            </Fade>
            <div className={s.projects}>
                <Fade bottom>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {projects.map(p => <SwiperSlide><OneProject style={p.style}
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
