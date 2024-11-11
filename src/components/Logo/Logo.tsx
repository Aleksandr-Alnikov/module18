import logo from '../../img/logo.png'
import style from './style.module.css'
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <Link to='/' className={style.logo}>
            <img src={logo} alt={"jelly"} />
            <span className={style.logo}>Jelly Belly</span>
        </Link>
    )
};


export default Logo;