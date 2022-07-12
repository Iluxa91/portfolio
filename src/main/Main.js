import s from './main.module.scss'
import style from '../common/styles/container.module.css'

export const Main = () => {
    // const avator = {
    //     backgroundImage: `url(${ava})`
    // }

    return (
        <div className={s.mainBlock}>
            <div className={`${style.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hello, I am</span>
                    <h1>Ilua Kisialiou</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo} ></div>
            </div>
        </div>
    )
}