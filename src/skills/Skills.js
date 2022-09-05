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
                <Fade bottom>
                    <Title spanText={"My resume"} headText={"My expertises"}/>
                </Fade>
                <div className={s.skills}>
                    <Fade bottom>
                        <Skill
                            style={jsImage}
                            title={"JavaScript"}
                            description={"The Programming Language for the Web that conforms to the ECMAScript specification."}/>
                        <Skill
                            style={tsImage}
                            title={"TypeScrypt"}
                            description={"A syntactic superset of JavaScript which adds static typing."}/>
                        <Skill
                            style={cssImage}
                            title={"CSS"}
                            description={"Stylesheet language used to describe the presentation of a document written in HTML."}/>
                        <Skill
                            style={reactImage}
                            title={"React"}
                            description={"JavaScript-based UI development library."}/>
                        <Skill
                            style={reduxImage}
                            title={"Redux"}
                            description={"JavaScript library for managing and centralizing application state."}/>
                        <Skill
                            style={htmlImage}
                            title={"HTML"}
                            description={"Hypertext Markup Language for describing the contents and appearance of Web pages."}/>
                        <Skill
                            style={sassImage}
                            title={"SASS"}
                            description={"CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS."}/>
                        <Skill
                            style={jestImage}
                            title={"Jest"}
                            description={"JavaScript library for creating, running, and structuring tests."}/>
                        <Skill
                            style={restImage}
                            title={"RestAPI"}
                            description={"Architectural style for an application program interface (API) that uses HTTP requests to access and use data."}/>
                        <Skill
                            style={axiosImage}
                            title={"Axios"}
                            description={"Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests."}/>
                        <Skill
                            style={muImage}
                            title={"Material UI"}
                            description={"Library that allows import and use different components to create a user interface in React applications."}/>
                        <Skill
                            style={storyImage}
                            title={"StoryBook"}
                            description={"Tool for building UI components and pages in isolation."}/>
                        <Skill
                            style={gitImage}
                            title={"Git"}
                            description={"DevOps tool used for source code management."}/>
                        <Skill
                            style={formikImage}
                            title={"Formik"}
                            description={"Small group of React components and hooks for building forms in React and React Native."}/>
                        <Skill
                            style={postmanImage}
                            title={"Postman"}
                            description={"API platform for building and using APIs"}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}