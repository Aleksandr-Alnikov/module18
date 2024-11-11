import style from "./cardRecipe.module.css"
import {FC, useEffect, useState} from "react";
import {Types} from "../types/types";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchRecipesId} from "../../Redux/recipesSlice";



const CardRecipe = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {recipeData} = useSelector((state: RootState) => state.recipes);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchRecipesId(params.id));
        }
    }, [dispatch, params.id]);


    return (
    <div>
        {recipeData &&
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1 className={style.title}>{recipeData.name}</h1>
                    <p className={style.description}>{recipeData.description}</p>
                    <p className={style.total}>{`Recipe makes: ${recipeData.makingAmount}`}</p>
                    <img src={recipeData.imageUrl} alt={recipeData.flavorName} />
                    <p className={style.text}><span>Ingredients: </span>{recipeData.ingredients.join('\n')}</p>
                    <p className={style.text}><span>Directions: </span>{recipeData.directions}</p>
                </div>
            </div>}
    </div>
    );
};


export  default CardRecipe;