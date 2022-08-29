import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactImg from "../assets/images/reactImg.png"
import jsImg from "../assets/images/JS.png"
import cssImg from "../assets/images/scc.png"
import htmlImg from "../assets/images/html.png"
import tsImg from "../assets/images/typescript.png"
import rdxImg from "../assets/images/reduxend.png"
import sassImg from "../assets/images/sass.png"
import jestImg from "../assets/images/jest-logo.png"
import restImg from "../assets/images/rest.jpg"
import axiosImg from "../assets/images/axios.png"
import muImg from "../assets/images/material-ui-logo.png"
import storyImg from "../assets/images/sb.png"
import gitImg from "../assets/images/git.png"
import formikImg from "../assets/images/formik.png"
import postmanImg from "../assets/images/postman.png"
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
const sassImage = {
    backgroundImage: `url(${sassImg})`,
}
const jestImage = {
    backgroundImage: `url(${jestImg})`,
}
const restImage = {
    backgroundImage: `url(${restImg})`,
}
const axiosImage = {
    backgroundImage: `url(${axiosImg})`,
}
const muImage = {
    backgroundImage: `url(${muImg})`,
}
const storyImage = {
    backgroundImage: `url(${storyImg})`,
}
const gitImage = {
    backgroundImage: `url(${gitImg})`,
}
const postmanImage = {
    backgroundImage: `url(${postmanImg})`,
}
const formikImage = {
    backgroundImage: `url(${formikImg})`,
}

export const Skills = () => {
    return (
        <div id={"skills"} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Fade bottom>
                    <Title spanText={"My resume"} headText={"My expertises"}/>
                </Fade>
                <div className={s.skills}>
                    <Fade bottom>
                        <Skill
                            style={jsImage}
                            title={"JavaScript"}
                            description={"javascript description"}/>
                        <Skill
                            style={tsImage}
                            title={"TypeScrypt"}
                            description={"javascript description"}/>
                        <Skill
                            style={cssImage}
                            title={"CSS/SASS"}
                            description={"Css description"}/>
                        <Skill
                            style={reactImage}
                            title={"React"}
                            description={"react description"}/>
                        <Skill
                            style={reduxImage}
                            title={"Redux"}
                            description={"redux description"}/>
                        <Skill
                            style={htmlImage}
                            title={"HTML"}
                            description={"react description"}/>
                        <Skill
                            style={sassImage}
                            title={"SASS"}
                            description={"react description"}/>
                        <Skill
                            style={jestImage}
                            title={"Jest"}
                            description={"react description"}/>
                        <Skill
                            style={restImage}
                            title={"RestAPI"}
                            description={"react description"}/>
                        <Skill
                            style={axiosImage}
                            title={"Axios"}
                            description={"react description"}/>
                        <Skill
                            style={muImage}
                            title={"Material UI"}
                            description={"react description"}/>
                        <Skill
                            style={storyImage}
                            title={"StoryBook"}
                            description={"react description"}/>
                        <Skill
                            style={gitImage}
                            title={"Git"}
                            description={"react description"}/>
                        <Skill
                            style={formikImage}
                            title={"Formik"}
                            description={"react description"}/>
                        <Skill
                            style={postmanImage}
                            title={"Postman"}
                            description={"react description"}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}