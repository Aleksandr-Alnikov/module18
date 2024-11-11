import style from './review.module.css';
import ReactDOM from "react-dom";
import {FC} from "react";
import Review from "../../Pages/Review/Review";


type TProps = {
    closeModal: () => void,
};

const ModalReview:FC<TProps> = ({closeModal, modal}) => {
    if (!modal) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={style.overlay}>
            <div className={style.modal}>
                <button className={style.btn} onClick={closeModal}>&times;</button>
                <Review />
            </div>
        </div>,
        document.getElementById('root-portal')
    )
}

export default ModalReview;