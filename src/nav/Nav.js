import React from "react";
import s from './Nav.module.scss'
import { Link } from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.navbar}>
            <Link activeClass={s.active}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to="home">Home</Link>
            <Link activeClass={s.active}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to="skills">Expertises</Link>
            <Link activeClass={s.active}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to="projects">Projects</Link>
            <Link activeClass={s.active}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to="contact">Contact</Link>
        </div>
    )
}