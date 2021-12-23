import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const LocationContext = createContext();

const urlLocation = "https://serverprueba2.herokuapp.com/characters/all"

const urlLocationApi = "https://rickandmortyapi.com/api/location"



const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [locationId, setLocationId] = useState(null);
    const [locationData, setLocationData] = useState({});
    //Pongo estado de filtro
    useEffect(() => {
        axios.get(urlLocationApi)
            .then(res => {
                setLocations([...locations, ...res.data.results])
            })
            .catch(err => console.error(err))
        axios.get(urlLocation)
            .then(res => {
                setLocations([...locations, ...res.data.data])
            })
            .catch(err => console.error(err))
    }, [])

    const data = { locations, setLocations, locationId, setLocationId, locationData, setLocationData }

    return (
        <LocationContext.Provider value={data}>
            {children}
        </LocationContext.Provider>
    )
}
export { LocationProvider }
export default LocationContext







