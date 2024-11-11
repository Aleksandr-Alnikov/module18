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
              <Link to='/beans'>Beans</Link>
              <Link to='/facts'>Facts</Link>
              <Link to='/recipes'>Recipes</Link>
              <Link to='/combinations'>Combinations</Link>
              <Link to='/history'>History</Link>
              <button className={style.btn} onClick={openModal}>Review</button>
              {setIsOpen && <ReviewModal modal={isOpen} closeModal={closeModal}/>}
              <SwitchTheme />
          </nav>

      </>
    );
};


export default Nav;