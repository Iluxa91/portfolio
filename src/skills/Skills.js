import s from './Skills.module.scss'
import style from './../common/styles/container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactImg from "../assets/images/reactImg.png"
import jsImg from "../assets/images/JS.png"
import cssImg from "../assets/images/scc.png"
import htmlImg from "../assets/images/html.png"
import tsImg from "../assets/images/typescript.png"

const reactImage = {
    backgroundImage: `url(${reactImg})`,
}
const jsImage = {
    backgroundImage: `url(${jsImg})`,
}
const tsImage = {
    backgroundImage: `url(${tsImg})`,
}
const cssImage = {
    backgroundImage: `url(${cssImg})`,
}
const htmlImage = {
    backgroundImage: `url(${htmlImg})`,
}

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title spanText={'My resume'} headText={'My expertises'}/>
                <div className={s.skills}>
                    <Skill
                        style={jsImage}
                        title={'JavaScript'}
                        description={'javascript description'}/>
                    <Skill
                        style={tsImage}
                        title={'TypeScrypt'}
                        description={'javascript description'}/>
                    <Skill
                        style={cssImage}
                        title={'CSS/SASS'}
                        description={'Css description'}/>
                    <Skill
                        style={reactImage}
                        title={'React/Redux'}
                        description={'react description'}/>
                    <Skill
                        style={htmlImage}
                        title={'HTML'}
                        description={'react description'}/>
                </div>
            </div>
        </div>
    )
}