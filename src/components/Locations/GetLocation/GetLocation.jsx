import { useState } from "react";
import { useContext } from "react";
import LocationContext from "../../../contexts/locationContext/locationContext";
import "./GetLocations.scss"

const SearchLocations = () => {
  const [location, setLocation] = useState([]);
  const { locations } = useContext(LocationContext)


  const filter = (e) => {
    if (e.target.value == "") return setLocation([])
    let founded = locations.filter(el => el.name.includes(e.target.value))
    setLocation(founded)
  }

  return (
    <div className="bg">
      <div className="form-container">
        <input
          className="input"
          type="text"
          placeholder="Search for locations..."
          onKeyUp={(e) => filter(e)}
        />
        <div className="filter-container">
          <section className="card-container">
            {location.map((elem, i) => {
              return (
                <section className="card-button" key={i}>
                  <div className="card-front">
                    <img className="card-image" src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" alt="" />
                    <h2 className="card-name">{elem.name}</h2>
                  </div>
                  <div className="card-back">
                    <img className="card-image-back" src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" alt="" />
                    <div className="card-description">
                      <h4>Type: {elem.type}</h4>
                      <h4>Dimension: {elem.dimension}</h4>
                    </div>
                  </div>
                </section>
              )
            })
            }
          </section>
        </div>
      </div>
    </div>
  );
};

export default SearchLocations;