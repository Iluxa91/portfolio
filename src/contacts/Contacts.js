import style from '../common/styles/container.module.css'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.contactForm}>
                    <input type='text' className={s.input}/>
                    <input type='text' className={s.input}/>
                    <textarea className={s.textArea}/>
                    <button type='submit' className={s.button}>Send</button>
                </form>
            </div>
        </div>
    )
}