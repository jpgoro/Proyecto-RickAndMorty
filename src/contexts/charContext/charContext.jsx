import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const CharContext = createContext();

const urlGetApi = "https://rickandmortyapi.com/api/character";

const urlGetDB = "https://serverprueba2.herokuapp.com/characters/all"

const CharProvider = ({ children }) => {
    const [chars, setChars] = useState([]);
    const [charsId, setCharsId] = useState(null);
    const [charsData, setCharsData] = useState({})

    useEffect(() => {
        axios.get(urlGetApi)
            .then(res => {
                setChars([...chars,...res.data.results])
            })
            .catch(err => console.log(err))
        axios.get(urlGetDB)
        .then(res => {
            setChars([...chars,...res.data.data])
        })
        .catch(err => console.log(err))    

    }, [])

    const data = { chars, setChars, charsId, setCharsId, charsData, setCharsData}

    return (
        <CharContext.Provider value = { data }>
            {children}
        </CharContext.Provider>
    )

}
export { CharProvider };
export default CharContext
