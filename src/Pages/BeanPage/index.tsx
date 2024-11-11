import style from './style.module.css';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {fetchBeanId} from "../../Redux/beansSlice";


const BeanPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {beanData} = useSelector((state: RootState) => state.beans);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchBeanId(params.id));
        }
    }, [dispatch, params.id]);
    
    return (
        <div>
            {beanData &&
                <div className={style.wrapper}>
                    <img src={beanData.imageUrl} alt={beanData.flavorName} />
                    <h1>{beanData.flavorName}</h1>
                    <p>{beanData.description}</p>
                </div>}
        </div>
    );
};


export default BeanPage;