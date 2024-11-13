import style from './combinations.module.css';
import {FC} from "react";


interface Item {
    name: string;
    tag: string[];
}

interface CombinationsProps {
    item: Item;
}

export const Combinations: FC<CombinationsProps> = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <h2 className={style.title}>{item.name}</h2>
                <p className={style.combo}>{item.tag.map((item) => item + " ")}</p>
            </article>
        </li>
    );
};