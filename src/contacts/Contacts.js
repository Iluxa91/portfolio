import style from '../common/styles/container.module.css'
import s from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.container}`}>
                <span>say Hello</span>
                <h2 >Contact</h2>
                <form className={s.contactForm}>
                    <input type='text' placeholder={'Your Name *'} className={s.input}/>
                    <input type='text' className={s.input} placeholder={'Your Email *'}/>
                    <textarea className={s.textArea} placeholder={'Your message...'}/>
                    <button type='submit' className={s.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    )
}