import style from './combinations.module.css';


export const Combinations = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.name}</h2>
                <p className={style.combo}>{item.tag.map((item) => item + " ")}</p>
            </article>
        </li>
    );
};