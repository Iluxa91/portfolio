import s from "./Contacts.module.scss"
import Fade from "react-reveal/Fade";

export const Contacts = () => {
    return (
        <div id={'contact'} className={s.contactsBlock}>
            <div className={s.container}>
                <Fade bottom>
                <span>say Hello</span>
                <h2>Contact</h2>
                </Fade>
                <Fade bottom>
                <form className={s.contactForm}>
                    <input type='text' placeholder={'Your Name *'} className={s.input}/>
                    <input type='text' className={s.input} placeholder={'Your Email *'}/>
                    <textarea className={s.textArea} placeholder={'Your message...'}/>
                    <button type='submit' className={s.submitBtn}>SEND MESSAGE</button>
                </form>
                </Fade>
            </div>
        </div>
    )
}