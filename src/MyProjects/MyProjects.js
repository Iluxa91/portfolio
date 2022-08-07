import s from "./MyProjects.module.scss"
import {OneProject} from "./Project/OneProject";
import {Title} from "../common/components/title/Title";
import todoImage from "../assets/images/todos.jpg"
import socialImage from "../assets/images/socialImage.jpg"
import Fade from "react-reveal/Fade";


export const MyProjects = () => {
    const socialNW = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Fade bottom>
                <Title spanText={'Portfolio'} headText={'My Projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                    <OneProject
                        style={todolist}
                        title={'To-do list'}
                        description={'React-redux single page application, storybook, materialUI decoration'}/>
                    <OneProject
                        style={socialNW}
                        title={'Social Network'}
                        description={'Collaborate with creative and development teams on the execution of ideas.'}/>
                    </Fade>
                </div>

            </div>
        </div>
    )
}