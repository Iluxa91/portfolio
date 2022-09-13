import React from "react";
import s from "./Nav.module.scss"
import {Link} from "react-scroll";

const linksTo = [
    {to: "home", title: "Home"},
    {to: "skills", title: "Expertises"},
    {to: "projects", title: "Projects"},
    {to: "contact", title: "Contact"},
]

export const Nav = () => {
    return (
        <div className={s.navbar}>
            {linksTo.map(l => <Link activeClass={s.active}
                                    duration={500}
                                    spy={true}
                                    smooth={true}
                                    to={l.to}>{l.title}</Link>)}
        </div>
    )
}