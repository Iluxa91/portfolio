import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
// http://preview.themeforest.net/item/justin-personal-portfolio/full_screen_preview/24925181?_ga=2.97787423.141526012.1657536796-1345479033.1655483804
        // https://elito-next.netlify.app/
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
