import style from "./style.module.css"
import {FC} from "react";
import {Types} from "../types/types";
import {Link} from "react-router-dom";

type Props = {
    data: Types
}


const Card: FC<Props> = ({data}) => {

    return (
        <Link to={`/module18/bean/${data.beanId}`} className={style.card}>
            <img src={data.imageUrl} alt={data.flavorName} />
            <h2>{data.flavorName}</h2>
            <p>{data.description}</p>
            {data.sugarFree === true ? <p>Not Sugar</p> : <p>With Sugar</p>}
        </Link>
    );
};


export  default Card;