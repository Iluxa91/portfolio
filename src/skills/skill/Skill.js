import s from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from "@fortawesome/free-brands-svg-icons";


export const Skill = (props) => {
    return (
        <div className={s.skillContainer}>
            {/*<FontAwesomeIcon icon={faReact}/>*/}
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            {/*<span className={s.description}>{props.description}</span>*/}
        </div>
    )
}