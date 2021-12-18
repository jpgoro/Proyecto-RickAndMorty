import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import LocationProvider from '../../../contexts/locationContext/locationContext';
import EditLocations from "../EditLocations/EditLocations";

const GetAllLocations = () => {
  
  const { locations, setLocationId, setLocationData } = useContext(LocationProvider)
  const setModal = (elem) => {
    setLocationData(elem);
    setLocationId(elem.id);
  };
  const [location, setLocation] = useState([]);

  const filter = (e) => {
    if (e.target.value == "") return setLocation(locations)
    console.log(e)
    console.log(e.target.value)
    let founded = locations.filter(elem => elem.name.includes(e.target.value))
    setLocation(founded)
  }
  
 
  return (
    <div className="bg">
      <div className="section-container">
        <input
          className="input"
          type="text"
          placeholder="Filter locations..."
          onKeyUpCapture={(e) => filter(e)}
        />
        <div className="filter-container">
          <article className="card-container">
            {location.map((elem, i) => {
              return (
                <motion.section
                  layoutId={elem.id}
                  key={i}
                  className="card-button"
                  onClick={(e) => e.currentTarget.classList.toggle("flipped")}
                >
                  <motion.div className="card-front">
                    <motion.img className="card-image" src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" alt="" />
                    <motion.h2 className="card-name">{elem.name}</motion.h2>
                  </motion.div>
                  <motion.div className="card-back">
                    <motion.img className="card-image-back" src="https://i.ytimg.com/vi/BSymgfwoAmI/maxresdefault.jpg" alt="" />
                    <motion.div className="card-description">
                      <motion.h4>Type: {elem.type}</motion.h4>
                      <motion.h4>Dimension: {elem.dimension}</motion.h4>
                    </motion.div>
                    <motion.button onClick={() => setModal(elem)} className="secondary-btn">Edit</motion.button>
                  </motion.div>
                </motion.section>
              );
            })}
            <EditLocations />
          </article>
        </div>

      </div>
    </div>
  );
};

export default GetAllLocations;
