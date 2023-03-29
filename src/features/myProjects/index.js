import todoImage from "../../assets/images/todos.jpg"
import socialImage from "../../assets/images/socialImage.jpg"
import cardsImage from "../../assets/images/cards.jpg"
import actionImage from "../../assets/images/dates.jpg"
import planetsImage from "../../assets/images/planets_bg.jpg"

const socialNW = {
    backgroundImage: `url(${socialImage})`,
}
const todolist = {
    backgroundImage: `url(${todoImage})`,
}
const cards = {
    backgroundImage: `url(${cardsImage})`,
}
const actionRange = {
    backgroundImage: `url(${actionImage})`,
}
const blazingPlanets = {
    backgroundImage: `url(${planetsImage})`,
}

export const projects = [
    {
        style: blazingPlanets,
        title: "Blazing Planets",
        description: "Commercial project. TypeScript, React, Redux, Saga, Redux-toolkit, Axios, Rest API, OOP,\n" +
            "Phaser. Building 2D games according to design mock-ups, close\n" +
            "collaboration with 2D artisits, backend developers and QA team. Introduction\n" +
            "of new features in games and in game engine. Style adaptive, creating\n" +
            "animations, refactoring, code review, deploying, bug-fixing, engine performance\n" +
            "improving, exhibition preparing",
        projectPath: "https://templeofslots.com/game/blazing-planets-slot-demo-play-free",
        codePath: ""
    },
    {
        style: cards,
        title: "Learning Cards",
        description: "Start-up project. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Material-UI. Using TypeScript for better code control, ESLint, Prettier for the best code style. Organizing correct app architecture. Team development:bug fixing, refactoring, deploying.",
        projectPath: "https://VictorAdamovich.github.io/Card",
        codePath: "https://github.com/VictorAdamovich/Card"
    },
    {
        style: actionRange,
        title: "Action Range",
        description: "Self-education project. Stack: Webpack, TypeScript, React, SCSS, Swiper. Using TypeScript for better code control. Bug fixing, refactoring, deploying. Organizing correct app architecture.",
        projectPath: "https://iluxa91.github.io/historical_dates",
        codePath: "https://github.com/Iluxa91/historical_dates"
    },
    {
        style: todolist,
        title: "To-do list",
        description: "Self-education project. Stack: TypeScript, React, Redux, Redux-toolkit, Redux-thunk, React-Router-Dom, Axios, Material-UI. Using TypeScript for better code control. Covering code with unit tests, bug fixing, refactoring, deploying.",
        projectPath: "https://iluxa91.github.io/todolist-redux-toolkit",
        codePath: "https://github.com/Iluxa91/todolist-redux-toolkit"
    },
    {
        style: socialNW,
        title: "Social Network",
        description: "Educational project. Stack: TypeScript, React, Redux, Redux-thunk, React-Router-Dom, Axios, Formik, Reselect. Using TypeScript for better code control. Creating unit tests, bug fixing, refactoring, deploying. Organizing correct app architecture.",
        projectPath: "https://iluxa91.github.io/samurai-way-main",
        codePath: "https://github.com/Iluxa91/samurai-way-main"
    },
]