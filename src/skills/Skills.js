import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {skills} from "./";


export const Skills = () => {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade bottom>
                    <Title spanText={"My resume"} headText={"My expertises"}/>
                </Fade>
                <div className={s.skills}>
                    <Fade bottom>
                        {skills.map(s=><Skill style={s.style} title={s.title} description={s.description}/>)}
                    </Fade>
                </div>
            </div>
        </div>
    )
}