import React from "react";
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.navbar}>
            <a href={''}>Home</a>
            <a href={''}>Expertises</a>
            <a href={''}>Projects</a>
            <a href={''}>Contact</a>
        </div>
    )
}