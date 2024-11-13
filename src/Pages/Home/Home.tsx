import style from './style.module.css';
import image from '../../img/main.gif';



const Home = () => {

    return (
        <>
            <div className={style.home_container}>
                <img src={image} alt=""/>
                <div className={style.info}>
                    <h1>Welcome to the World of Jelly Belly</h1>
                    <p>A Rainbow of Flavor Awaits</p>
                </div>
            </div>
        </>
    );
};


export default Home;