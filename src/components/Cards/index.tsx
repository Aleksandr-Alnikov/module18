import style from "./style.module.css"
import allBeans from '../../../beans.json';
import Card from "../Card";
import {useEffect, useState} from "react";
import {Types} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {fetchBeans, filterBeans} from "../../Redux/beansSlice";
import {RootState} from "../../Redux/store";


type Props = {
    filterValue: string
};


const Cards: Props = ({filterValue}) => {
    const dispatch = useDispatch();
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