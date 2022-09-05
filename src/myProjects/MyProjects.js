import s from "./MyProjects.module.scss"
import {OneProject} from "./Project/OneProject";
import {Title} from "../common/components/title/Title";
import todoImage from "../assets/images/todos.jpg"
import socialImage from "../assets/images/socialImage.jpg"
import cardsImage from "../assets/images/cards.jpg"
import Fade from "react-reveal/Fade";

const socialNW = {
    backgroundImage: `url(${socialImage})`,
}
const todolist = {
    backgroundImage: `url(${todoImage})`,
}
const cards = {
    backgroundImage: `url(${cardsImage})`,
}

export const MyProjects = () => {

    return (
        <div id={"projects"} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Fade bottom>
                    <Title spanText={"Portfolio"} headText={"My Projects"}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                        <OneProject
                            style={todolist}
                            title={"To-do list"}
                            description={"Self-education project. Stack: TypeScript, React, Redux, Redux-toolkit, Redux-thunk, React-Router-Dom, Axios, Material-UI. Using TypeScript for better code control. Covering code with unit tests, bug fixing, refactoring, deploying."}
                            projectPath={'https://iluxa91.github.io/todolist-redux-toolkit'}
                            codePath={'https://github.com/Iluxa91/todolist-redux-toolkit'}
                        />
                        <OneProject
                            style={cards}
                            title={"Learning Cards"}
                            description={"Start-up project. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Material-UI. Using TypeScript for better code control, ESLint, Prettier for the best code style. Organizing correct app architecture. Team development:bug fixing, refactoring, deploying."}
                            projectPath={'https://VictorAdamovich.github.io/Card'}
                            codePath={'https://github.com/VictorAdamovich/Card'}
                        />
                        <OneProject
                            style={socialNW}
                            title={"Social Network"}
                            description={"Educational project. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Reselect. Using TypeScript for better code control. Creating unit tests, bug fixing, refactoring, deploying. Organizing correct app architecture."}
                            projectPath={'https://iluxa91.github.io/samurai-way-main'}
                            codePath={'https://github.com/Iluxa91/samurai-way-main'}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    )
}