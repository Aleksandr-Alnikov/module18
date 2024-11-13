import style from './recipe.module.css';
import {Link} from "react-router-dom";
import {FC} from "react";


interface Item {
    recipeId: number;
    name: string;
    description: string;
    cookTime: string;
    makingAmount: string;
}

interface RecipeProps {
    item: Item;
}

export const Recipe: FC<RecipeProps> = ({item}) => {

    return (
        <Link to={`/recipe/${item.recipeId}`} className={style.item}>
            <article>
                <h2 className={style.title}>{item.name}</h2>
                <p className={style.description}>{item.description}</p>
                {item.cookTime && <p className={style.time}>{`Time: ${item.cookTime}`}</p>}
                {item.makingAmount && <p className={style.time}>{`Making: ${item.makingAmount}`}</p>}
            </article>
        </Link>
    );
};