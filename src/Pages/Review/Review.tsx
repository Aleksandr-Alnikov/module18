import style from './review.module.css';
import {FormEvent} from "react";
import {SubmitHandler, useForm} from "react-hook-form";


type FormType = {
    name: string,
    email: string,
    review: string,
};

const Review = () => {
    const {register, handleSubmit} = useForm<FormType>();

    const onSubmit: SubmitHandler<FormType> = (data) => {
        console.log(data)
    };

    // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const data = Object.fromEntries(formData);
    //
    //     const postData = async () => {
    //         const req = await fetch('https://jsonplaceholder.typicode.com/todos', {
    //             method: 'POST',
    //             body: JSON.stringify(data),
    //         });
    //         const answer = await req.json();
    //         console.log(answer)
    //     };
    //     postData();
    //
    //     console.log(data)
    // };

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                Имя<input className={style.input} type='text' {...register('name')} />
            </label>
            <label>
                Email<input className={style.input} type='email' {...register('email')} />
            </label>
            <textarea className={style.textarea} {...register('review')}></textarea>
            <button className={style.btn} type='submit'>Отправить</button>
        </form>
    );
};


export default Review;