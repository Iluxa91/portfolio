import s from './main.module.css'
import style from '../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Ilua Kisialiou</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>


        </div>
    )
}