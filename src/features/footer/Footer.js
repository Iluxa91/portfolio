import s from "./Footer.module.scss"
import {myLinks} from "./index";
import {MyLink} from "./MyLink";

export const Footer = () =>
    (
        <div className={s.footerBlock}>
            <div className={s.container}>
                <div className={s.myLinks}>
                    {myLinks.map((l,i) => <MyLink key={i} href={l.href} image={l.imageSrc}/>)}
                </div>
                <p className={s.copyright}>© Ilua Kisialiou 2022 | All Rights Reserved</p>
            </div>
        </div>
    )
