import s from "./HireMe.module.scss"
import {Link} from "react-scroll";

export const HireMe = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <h2>Let's work together!</h2>
                <Link to="contact" duration={500}
                      spy={true}
                      smooth={true}>Hire me!</Link>
            </div>
        </div>
    )
}