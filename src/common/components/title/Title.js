import s from './title.module.scss'

export const Title = (props) => {
    return (
        <div className={s.titleContainer}>
            <span>{props.spanText}</span>
            <h2>{props.headText}</h2>
        </div>
    )
}