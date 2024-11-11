import style from './recipes.module.css';
import {useEffect} from "react";
import {Recipe} from "../../components/Recipe/Recipe";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchRecipes} from "../../Redux/recipesSlice";


const Recipes = () => {
    const dispatch = useDispatch();
    const{recipes} = useSelector((state:RootState) => state.recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    return (
        <>
            <h1 className={style.title}>Recipes...</h1>
            <div className={style.list}>
                {recipes && recipes.map(item => {
                    return <Recipe item={item} key={item.recipeId} />
                })}
            </div>
        </>
    );
};


export default Recipes;