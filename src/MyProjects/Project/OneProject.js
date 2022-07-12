import s from './OneProject.module.scss'

export const OneProject = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer} style={props.style}>
                <a className={s.button}>View the project</a>
            </div>
            <div className={s.pojectInfo}>
                <h5 className={s.pojectTitle}>{props.title}</h5>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    )
}