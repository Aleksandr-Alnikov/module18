import Cards from "../../components/Cards";
import Search from "../../components/Search";
import {useState} from "react";

const Beans = () => {
    const [filterValue, setFilterValue] = useState('');

    return (
        <>
            <Search setFilterValue={setFilterValue} />
            <Cards filterValue={filterValue} />
        </>
    );
};


export default Beans;