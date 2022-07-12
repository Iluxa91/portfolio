import s from "./MyProjects.module.scss"
import style from "../common/styles/container.module.css";
import {OneProject} from "./Project/OneProject";
import {Title} from "../common/components/title/Title";
import todoImage from "../assets/images/todolist.jpg"
import socialImage from "../assets/images/socialImage.jpg"


export const MyProjects = () => {
    const socialNW = {
        backgroundImage: `url(${socialImage})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    }
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <Title spanText={'Portfolio'} headText={'My Projects'}/>
                <div className={s.projects}>
                    <OneProject
                        style={todolist}
                        title={'To-do list'}
                        description={'React-redux single page application, storybook, materialUI decoration'}/>
                    <OneProject
                        style={socialNW}
                        title={'Social Network'}
                        description={'Collaborate with creative and development teams on the execution of ideas.'}/>
                </div>
            </div>
        </div>
    )
}