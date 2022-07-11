import s from './OneProject.module.css'

export const OneProject = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <a className={s.button}>View the project</a>
            </div>
            <h5 className={s.pojectTitle}>{props.title}</h5>
            <p className={s.description}>{props.description}</p>

        </div>
    )
}