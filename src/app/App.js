import "./App.css";
import {Header} from "../features/header/Header";
import {Main} from "../features/main/Main";
import {Skills} from "../features/skills/Skills";
import {MyProjects} from "../features/myProjects/MyProjects";
import {HireMe} from "../features/hireMe/HireMe";
import {Contacts} from "../features/contacts/Contacts";
import {Footer} from "../features/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <HireMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
