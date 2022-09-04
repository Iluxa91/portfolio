import s from './OneProject.module.scss'
import {Button} from "../../common/components/button/Button";

export const OneProject = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imageContainer} style={props.style}>
                <Button href={props.projectPath} text={'view project'}/>
                <Button href={props.codePath} text={'view code'}/>
            </div>
            <div className={s.pojectInfo}>
                <h5 className={s.pojectTitle}>{props.title}</h5>
                <p className={s.description}>{props.description}</p>
            </div>
        </div>
    )
}