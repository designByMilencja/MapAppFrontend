import React, {useState} from 'react';
import {Header} from "./components/layout/Header";
import {Map} from "./components/Map/Map";
import './App.css'
import { SearchContext } from './context/search.context';

export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <>
            <div className="wrapper">
                <SearchContext.Provider value={{search, setSearch}}>
                    <Header/>
                    <Map></Map>
                </SearchContext.Provider>
            </div>

        </>
    );
}


