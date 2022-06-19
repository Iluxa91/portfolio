import s from './Skills.module.css'
import style from './../common/styles/container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'javascript description'}/>
                    <Skill title={'CSS'} description={'Css description'}/>
                    <Skill title={'React'} description={'react description'}/>
                </div>
            </div>
        </div>
    )
}