import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactImg from "../assets/images/reactImg.png"
import jsImg from "../assets/images/JS.png"
import cssImg from "../assets/images/scc.png"
import htmlImg from "../assets/images/html.png"
import tsImg from "../assets/images/typescript.png"
import rdxImg from "../assets/images/reduxend.png"
import Fade from "react-reveal/Fade";

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
const reduxImage = {
    backgroundImage: `url(${rdxImg})`,
}

export const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Fade bottom>
                <Title spanText={'My resume'} headText={'My expertises'}/>
                </Fade>
                <div className={s.skills}>
                    <Fade bottom>
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
                        title={'React'}
                        description={'react description'}/>
                    <Skill
                        style={reduxImage}
                        title={'Redux'}
                        description={'redux description'}/>
                    <Skill
                        style={htmlImage}
                        title={'HTML'}
                        description={'react description'}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}