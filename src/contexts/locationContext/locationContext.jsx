import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const LocationContext = createContext();

const locationUrl = "http://localhost:5002/locations/all"

const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [locationId, setLocationId] = useState(null);
    const [locationData, setLocationData] = useState({});
    //Pongo estado de filtro
    useEffect(() => {
        axios.get(locationUrl)
            .then(res => {
                console.log(res.data)
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







