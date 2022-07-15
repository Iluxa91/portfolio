import s from './Footer.module.scss'
import style from '../common/styles/container.module.css'
import facebookImg from '../assets/images/facebook.png'
import linkedImg from '../assets/images/linkedin.png'
import gitImg from '../assets/images/github.png'
import codewarsImg from '../assets/images/codewars.webp'

export const Footer = () => {
    const facebook = {
        backgroundImage: `url(${facebookImg})`,
    }
    const linkedin = {
        backgroundImage: `url(${linkedImg})`,
    }
    const github = {
        backgroundImage: `url(${gitImg})`,
    }
    const codewars = {
        backgroundImage: `url(${codewarsImg})`,
    }

    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.container}`}>
                {/*<h2>Kisialiou Ilya</h2>*/}
                <div className={s.myLinks}>
                  <div style={facebook}><a href=""></a></div>
                  <div style={linkedin}><a href=""></a></div>
                  <div style={github}><a href=""></a></div>
                  <div style={codewars}><a href=""></a></div>
                </div>
                <p>© Ilua Kisialiou 2022 | All Rights Reserved</p>
            </div>
        </div>
    )
}