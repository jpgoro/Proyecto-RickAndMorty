import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Modal from "../EditCharacter/presentantional/Modal";
import CharProvider from '../../../contexts/charContext/charContext';


const GetAll = () => {

  const { chars, setCharsId, setCharsData } = useContext(CharProvider)
  const setModal = (elem) => {
    setCharsData(elem);
    setCharsId(elem.id);
  };
  const [characters, setCharacters] = useState(chars);

  const filter = (e) => {
    if (e.target.value === "") return setCharacters(chars)
    let founded = characters.filter(elem => elem.name.includes(e.target.value))
    setCharacters(founded)
  }

  return (
    <div className="bg">
      <div className="section-container">
        <input
          className="input"
          type="text"
          placeholder="Filter characters..."
          onKeyUp={(e) => filter(e)}
        />
        <div className="filter-container">
          <article className="card-container">
            {characters.map((elem, i) => {
              return (
                <motion.section
                  layoutId={elem.id}
                  key={i}
                  className="card-button"
                  onClick={(e) => e.currentTarget.classList.toggle("flipped")}
                >
                  <motion.div className="card-front">
                    <motion.img className="card-image" src={elem.image} alt="" />
                    <motion.h2 className="card-name">{elem.name}</motion.h2>
                  </motion.div>
                  <motion.div className="card-back">
                    <motion.img className="card-image-back" src={elem.image} alt="" />
                    <motion.div className="card-description">
                      <motion.h4>Gender: {elem.gender}</motion.h4>
                      <motion.h4>Status: {elem.status}</motion.h4>
                      <motion.h4>Specie: {elem.species}</motion.h4>
                    </motion.div>
                    <motion.button onClick={() => setModal(elem)} className="secondary-btn">Edit</motion.button>
                  </motion.div>
                </motion.section>
              );
            })}
          </article>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default GetAll;
