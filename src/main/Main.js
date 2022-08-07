import s from "./main.module.scss"

export const Main = () => {
    // const avator = {
    //     backgroundImage: `url(${ava})`
    // }

    return (
        <div className={s.mainBlock}>
            <div className={s.mainContainer}>
                <div className={s.text}>
                    <span>Hello, I am</span>
                    <h1>Ilya Kisialiou</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={s.photo} ></div>
            </div>
        </div>
    )
}