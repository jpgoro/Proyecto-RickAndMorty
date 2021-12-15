import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import  CharProvider  from '../../../contexts/locationContext/locationContext';
import EditLocations from "../EditLocations/EditLocations";


const GetAllLocations = () => {
  const { locations, setLocationId, setLocationData} = useContext(CharProvider)

  const setModal = (elem) => {
    setLocationData(elem);
    setLocationId(elem.id);
  };

  return (
    <div className="bg">
      <article className="card-container">
        {locations.map((elem, i) => {
          return (
            <motion.section
              layoutId={elem.id}
              key={i}
              className="card-button"
            >
              <motion.button onClick={() => setModal(elem)} className="edit-btn">Edit</motion.button>
              {/* <motion.img className="card-img" src={elem.image} alt="" />    */}
              <motion.h2 className="card-name">{elem.name}</motion.h2>
              <motion.div className="card-data">
                <motion.h4>Type: {elem.type}</motion.h4>
                <motion.h4>Dimension: {elem.dimension}</motion.h4>
              </motion.div>
            </motion.section>
          );
        })}
        <EditLocations/>
      </article>
    </div>
  );
};

export default GetAllLocations;
