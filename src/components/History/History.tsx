import style from './history.module.css';
import {FC} from "react";


interface Item {
    year: string;
    description: string;
}

interface HistoryProps {
    item: Item;
}

export const History: FC<HistoryProps> = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.year}</h2>
                <p className={style.description}>{item.description}</p>
            </article>
        </li>
    );
};