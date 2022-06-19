import style from '../common/styles/container.module.css'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.container}`}>
                <h2>Contacts</h2>
                <form className={s.form} action="">
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textArea}></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}