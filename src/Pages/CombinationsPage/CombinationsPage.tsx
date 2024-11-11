import style from './combinationsPage.module.css';
import {useEffect} from "react";
import {Combinations} from "../../components/Combinations/Combinations";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchCombination} from "../../Redux/combinationSlice";


const CombinationsPage = () => {
    const dispatch = useDispatch();
    const {combination, isLoading, isError} = useSelector((state:RootState) => state.combination);

    useEffect(() => {
        dispatch(fetchCombination())
    }, [dispatch]);

    return (
        <>
            <h1 className={style.title}>Combinations...</h1>
            <ul className={style.list}>
                {combination && combination.map(item => {
                    return <Combinations item={item} key={item.combinationId} />
                })}
            </ul>
        </>
    );
};


export default CombinationsPage;