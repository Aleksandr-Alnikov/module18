import style from "./style.module.css"
import SwitchTheme from "../SwitchTheme";
import {Link} from "react-router-dom";
import {useState} from "react";
import ReviewModal from "../Modal/ReviewModal";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    
    return (
      <>
          <nav className={style.container}>
              <Link to='/module18/beans'>Beans</Link>
              <Link to='/module18/facts'>Facts</Link>
              <Link to='/module18/recipes'>Recipes</Link>
              <Link to='/module18/combinations'>Combinations</Link>
              <Link to='/module18/history'>History</Link>
              <button className={style.btn} onClick={openModal}>Review</button>
              {isOpen && <ReviewModal modal={isOpen} closeModal={closeModal}/>}
              <SwitchTheme />
          </nav>

      </>
    );
};


export default Nav;