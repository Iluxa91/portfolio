import s from './MyProjects.module.css'
import style from "../common/styles/container.module.css";
import {OneProject} from "./Project/OneProject";
import {Title} from "../common/components/title/Title";


export const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <Title spanText={'Portfolio'} headText={'My Projects'}/>
                <div className={s.projects}>
                    <OneProject title={'Todolist'}
                                description={'React-redux single page application, storybook, materialUI decoration'}/>
                    <OneProject title={'Social Network'}
                                description={'Collaborate with creative and development teams on the execution of ideas.'}/>
                </div>
            </div>
        </div>
    )
}