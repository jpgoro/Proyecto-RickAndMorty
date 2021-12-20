import { useState, useEffect, useContext } from "react";
import LocationProvider from "../../../contexts/locationContext/locationContext";
import EditLocations from "../EditLocations/EditLocations";
import UserContext from "../../../contexts/userContext/UserContext";

const GetAllLocations = () => {
  const { locations, setLocationId, setLocationData } = useContext(LocationProvider)
  const {isLogged} = useContext(UserContext)
  const [seeLogged,setSeeLogged] = useState(isLogged)
  const [location, setLocation] = useState(locations);
  const setModal = (elem) => {
    console.log(isLogged,seeLogged)
    setLocationData(elem);
    setLocationId(elem.id);
  };
  
  useEffect(()=>{
    setSeeLogged(isLogged)
  },[isLogged])

  useEffect(() => {
    setLocation(locations);
  }, [locations]);

  const filter = (e) => {
    if (e.target.value == "") return setLocation(locations);
    let founded = locations.filter((elem) =>
      elem.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setLocation(founded);
  };

  return (
    <div className="bg">
      <div className="section-container">
        <input
          className="input"
          type="text"
          placeholder="Filter locations..."
          onKeyUpCapture={(e) => filter(e)}
        />
        <article className="card-container">
          {location.map((elem, i) => {
            return (
              <section
                key={i}
                className="card-button"
                onClick={(e) => e.currentTarget.classList.toggle("flipped")}
              >
                <div className="card-front">
                  <img
                    className="card-image"
                    src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg"
                    alt=""
                  />
                  <h2 className="card-name">{elem.name}</h2>
                </div>
                <div className="card-back">
                  <img
                    className="card-image-back"
                    src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg"
                    alt=""
                  />
                  <div className="card-description">
                    <h4>Type: {elem.type}</h4>
                    <h4>Dimension: {elem.dimension}</h4>
                  </div>
                  { seeLogged ?
                    <button onClick={() => setModal(elem)} className="secondary-btn">Edit</button>
                    :
                    <button style={{backgroundColor:"#cccccc",color: "#666666" }} className="secondary-btn">Edit</button>
                  }
                </div>
              </section>
            );
          })}
          <EditLocations />
        </article>
      </div>
    </div>
  );
};

export default GetAllLocations;
