import React, {FormEvent, useContext, useState} from "react";
import './Header.css';
import {Button} from "../common/Button";
import {SearchContext} from "../../context/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputValue, setInputValue] = useState(search);

    function setSearchFromLocalState(e:FormEvent) {
        e.preventDefault();
        setSearch(inputValue);
    }

    return (
        <>
            <header>
                <h1>
                    <strong>Mega </strong> ogłoszenia
                </h1>
                <Button text="Dodaj ogłoszenie"/>
                <form className="search" onSubmit={setSearchFromLocalState}>
                    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/><Button
                    text="Szukaj"></Button>
                </form>
            </header>
        </>
    );
};

