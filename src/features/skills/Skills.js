import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {skills} from "./index";


export const Skills = () => {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Fade>
                    <Title spanText={"My resume"} headText={"My expertises"}/>
                </Fade>
                <div className={s.skills}>
                    {skills.map((s, i) =>
                        <Fade key={i}>
                            <Skill style={s.style}
                                   title={s.title}
                                   description={s.description}/>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    )
}