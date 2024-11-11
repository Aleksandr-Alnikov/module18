import style from './historyPage.module.css';
import {useEffect, useState} from "react";
import {History} from "../../components/History/History";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchHistory} from "../../Redux/historySlice";


const HistoryPage = () => {
    const dispatch = useDispatch();
    const {history} = useSelector((state: RootState) => state.history);


    useEffect(() => {
        dispatch(fetchHistory());
    }, [dispatch]);
    // const [history, setHistory] = useState(null);
    //
    // const getHistory = async () => {
    //     try {
    //         const res = await fetch('https://jellybellywikiapi.onrender.com/api/mileStones');
    //         const data = await res.json();
    //         setHistory(data.items)
    //         console.log(data.items)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    // useEffect(() => {
    //     getHistory();
    // }, []);


    return (
        <>
            <h1 className={style.title}>History...</h1>
            <ul className={style.list}>
                {history && history.map(item => {
                    return <History item={item} key={item.mileStoneId} />
                })}
            </ul>
        </>
    );
};


export default HistoryPage;