import style from './factsItem.module.css';
import {FC} from "react";


interface Item {
    title: string;
    description: string;
}

interface FactProps {
    item: Item;
}

export const FactItem: FC<FactProps> = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.description}>{item.description}</p>
            </article>
        </li>
    );
};