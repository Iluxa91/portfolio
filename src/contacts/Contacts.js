import s from "./Contacts.module.scss"
import Fade from "react-reveal/Fade";
import {useForm} from "react-hook-form";
import axios from "axios";

export const Contacts = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        axios.post('https://smtp-server-mails.herokuapp.com/sendMessage', {data})
            .then((res) => {
                alert('Your message has been send');
            });
        e.target.reset()
    }

    return (
        <div id={'contact'} className={s.contactsBlock}>
            <div className={s.container}>
                <Fade bottom>
                <span>say Hello</span>
                <h2>Contact</h2>
                </Fade>
                <Fade bottom>
                <form onSubmit={handleSubmit(onSubmit)} id={'contact-form'} className={s.contactForm}>
                    <input {...register('name', {required: true})} type='text' placeholder={'Your Name *'} className={s.input}/>
                    {errors.name && <p style={{color: '#fff'}}>Name is required</p>}
                    <input {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} type='text' className={s.input} placeholder={'Your Email *'}/>
                    {errors.email && <p style={{color: '#fff'}}>E-mail is required</p>}
                    <textarea {...register('message', {required: true})} className={s.textArea} placeholder={'Your message...'}/>
                    <button type='submit' className={s.submitBtn}>SEND MESSAGE</button>
                </form>
                </Fade>
            </div>
        </div>
    )
}