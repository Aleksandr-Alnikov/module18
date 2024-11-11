import style from './history.module.css';


export const History = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.year}</h2>
                <p className={style.description}>{item.description}</p>
            </article>
        </li>
    );
};