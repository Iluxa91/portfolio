import React from "react";
import s from "./Header.module.scss"
import {Nav} from "../nav/Nav";
import {Link} from "react-scroll";

export const Header = () => {
    return (
        <div className={s.header}>
            <Link className={s.name}
                  duration={500}
                  spy={true}
                  smooth={true}
                  to="home">Ilya Kisialiou</Link>
            <Nav/>
        </div>
    )
}