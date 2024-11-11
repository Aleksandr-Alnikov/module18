import style from './factsItem.module.css';


export const FactItem = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.description}>{item.description}</p>
            </article>
        </li>
    );
};