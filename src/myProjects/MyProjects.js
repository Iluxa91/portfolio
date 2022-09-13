import s from "./MyProjects.module.scss"
import {OneProject} from "./Project/OneProject";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {projects} from "./";


export const MyProjects = () => (
        <div id={"projects"} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Fade bottom>
                    <Title spanText={"Portfolio"} headText={"My Projects"}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                        {projects.map(p=><OneProject style={p.style} title={p.title} description={p.description} projectPath={p.projectPath} codePath={p.codePath}/>) }
                    </Fade>
                </div>
            </div>
        </div>
    )