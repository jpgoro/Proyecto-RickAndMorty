import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
    const url = "https://rickandmortyapi.com/api/location";
    const [locations, setLocations] = useState([]);
    const [locationId, setLocationId] = useState(null);
    const [locationData, setLocationData] = useState({});
    //Pongo estado de filtro
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setLocations([...locations, ...res.data.results])
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







