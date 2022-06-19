import s from './MyProjects.module.css'
import style from "../common/styles/container.module.css";
import {OneProject, Project} from "./Project/OneProject";


export const MyProjects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${style.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <OneProject title={'Social Network'}
                                description={'react-redux single page application'}/>
                    <OneProject title={'Todolist'}
                                description={'react-redux single page application, storybook, materialUI decoration'}/>
                </div>

            </div>

        </div>
    )
}