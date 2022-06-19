import s from './OneProject.module.css'

export const OneProject = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <img src={"img_project.jpg"} alt={'project title image'}/>
                <a href={'projectAdress'} className={s.button}>View the project</a>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>

        </div>
    )
}