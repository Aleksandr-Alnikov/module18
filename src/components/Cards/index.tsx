import style from "./style.module.css"
import Card from "../Card";
import {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {fetchBeans, filterBeans} from "../../Redux/beansSlice";
import {RootState, useAppDispatch} from "../../Redux/store";


type Props = {
    filterValue: string,
};


const Cards: FC<Props> = ({filterValue}) => {
    const dispatch = useAppDispatch();
    const {updateBeans, isLoading, isError} = useSelector((state:RootState) => state.beans);

    useEffect(() => {
        dispatch(fetchBeans());
    }, [dispatch]);

    useEffect(() => {
        dispatch(filterBeans(filterValue));
    }, [dispatch, filterValue]);


    return (
        <div className={style.container}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error</p>}
            {updateBeans && updateBeans.map((bean) => {
                return <Card data={bean} key={bean.beanId} />;
            })}
        </div>
    );
};


export default Cards;