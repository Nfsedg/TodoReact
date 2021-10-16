import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChage = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <input className="input" placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChage}
        />
    )
}

export { TodoSearch };