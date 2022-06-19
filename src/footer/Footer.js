import s from './Footer.module.css'
import style from '../common/styles/container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2>Kisialiou Ilya</h2>
                <div className={s.myLinks}>
                  <div><a href="">Facebook</a></div>
                  <div><a href="">Linkedin</a></div>
                  <div><a href="">Facebook</a></div>
                  <div><a href="">Facebook</a></div>
                </div>
                <h3>2022 All right reserved</h3>
            </div>


        </div>
    )
}