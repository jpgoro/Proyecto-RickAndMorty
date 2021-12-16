import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import LocationContext from "../../../contexts/locationContext/locationContext";
import "./GetLocations.scss"

const SearchLocations = () => {
  const [char, setChar] = useState([]);
  const {locations} = useContext(LocationContext)


  const filter = (e)=>{
    if (e.target.value == "") return setChar([])  
    let founded = locations.filter(el=> el.name.includes(e.target.value))
    setChar(founded)
  }

  return (
    <div className="get-container">
      <div className="form-get">
        <input
          className="input"
          type="text"
          placeholder="Search for locations..."
          onKeyUp={(e)=>filter(e)}
        />
      </div>
    <div className="a">
    <section className="locations-grid">
      { char.length != 0 && char.map((el,i)=>{
        return( 
          <section className="card" key={i}>
          <img className="card-img" src={el.image} alt="" />
          <h2 className="card-name">{el.name}</h2>
          <div className="card-char">
            <h4>Gender: {el.type}</h4>
            <h4>Status: {el.dimension}</h4>
          </div>
        </section>
        )
      })
      }
      </section>
      </div>
    </div>
  );
};

export default SearchLocations;