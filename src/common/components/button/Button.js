import React from "react";
import s from "./Button.module.scss"

export const Button = (props) => {
    return (
        <a href={props.href} className={s.btn}>{props.text}</a>
    );
};