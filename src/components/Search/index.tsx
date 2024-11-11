import style from "./style.module.css"
import {ChangeEvent, Dispatch, useState} from "react";
import * as React from "react";

type  Props = {
    setFilterValue: Dispatch<React.SetStateAction<string>>
};


const Search: FC<Props> = ({setFilterValue}) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setFilterValue(inputValue);
        setInputValue('');
    };


    return (
        <div className={style.container}>
            <input type='text' value={inputValue} onChange={(event) => handleChange(event)} />
            <button onClick={handleClick}>Найти</button>
        </div>
    );
};


export default Search;