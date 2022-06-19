import s from './OneProject.module.css'

export const OneProject = (props) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <img src={"img_project.jpg"} alt={'project title image'}/>
                <button className={s.button}>View the project</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>

        </div>
    )
}