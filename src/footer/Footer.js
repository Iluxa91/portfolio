import s from "./Footer.module.scss"
import telegramImg from "../assets/images/telegram.webp"
import linkedImg from "../assets/images/linkedin.png"
import gitImg from "../assets/images/github.png"
import codewarsImg from "../assets/images/codewars.webp"

export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={s.container}>
                {/*<h2>Kisialiou Ilya</h2>*/}
                <div className={s.myLinks}>
                  <div className={s.myLink}><a href="https://t.me/iluaKiselev"><img src={telegramImg} alt=""/></a></div>
                    <div className={s.myLink}><a href="https://www.linkedin.com/in/iluakisialiou/"><img src={linkedImg} alt=""/></a></div>
                    <div className={s.myLink}><a href="https://github.com/Iluxa91"><img src={gitImg} alt=""/></a></div>
                    <div className={s.myLink}><a href="https://www.codewars.com/users/Iluxa91"><img src={codewarsImg} alt=""/></a></div>
                </div>
                <p className={s.copyright}>© Ilua Kisialiou 2022 | All Rights Reserved</p>
            </div>
        </div>
    )
}