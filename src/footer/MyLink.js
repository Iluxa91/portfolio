import React from "react";
import s from "./Footer.module.scss";

export const MyLink = ({href, image }) =>
    (
        <div className={s.myLink}>
            <a href={href}>
                <img src={image} alt=""/>
            </a>
        </div>
    );
