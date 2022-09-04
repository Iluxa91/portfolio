import s from "./main.module.scss"
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-tilt"

const particleOptions = {
    fullScreen: {enable: true},
    fpsLimit: 120,
    interactivity: {
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {min: 1, max: 5},
        },
    },
    detectRetina: true,
}

export const Main = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div id={"home"} className={s.mainBlock}>
            <Particles
                init={particlesInit}
                className={s.particles}
                options={particleOptions}
            />
            <Fade top>
                <div className={s.mainContainer}>
                    <div className={s.text}>
                        <span>Hello, I am</span>
                        <h1>Ilya <h1>Kisialiou</h1></h1>
                        <ReactTypingEffect text={"Front-end Developer"}/>
                    </div>
                    <div className={s.photo}>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className={s.image}/>
                        </Tilt>
                        <div className={s.baget}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}