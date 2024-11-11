import style from './style.module.css';
import {useEffect} from "react";
import {FactItem} from "../../components/FactItem/FactItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchFacts} from "../../Redux/factsSlice";

const Facts = () => {
    const dispatch = useDispatch();
    const {facts} = useSelector((state:RootState) => state.facts);

    useEffect(() => {
        dispatch(fetchFacts());
    }, [dispatch]);

    return (
        <>
            <h1 className={style.title}>Facts...</h1>
            <ul className={style.list}>
                {facts && facts.map(item => {
                    return <FactItem item={item} key={item.factId} />
                })}
            </ul>
        </>
    );
};


export default Facts;