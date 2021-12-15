import { useState, useContext } from "react";
import "./getChar.scss";
import CharProvider from "../../../contexts/charContext/charContext";
import { motion } from "framer-motion";
import Modal from "../EditCharacter/presentantional/Modal";

const GetChar = () => {
  const { chars, setCharsId, setCharsData } = useContext(CharProvider);
  const [character, setCharacter] = useState("");
  const [data, setData] = useState([]);
  const getCharacter = () => {
    const wanted = chars.filter((element) => element.name.includes(character));
    setData(wanted);
    setCharacter("");
  };

  const setModal = (elem) => {
    setCharsData(elem);
    setCharsId(elem.id);
  };

  function handleChar(e) {
    console.log(character);
    setCharacter(e.target.value);
  }

  return (
    <div className="get-container">
      <div className="form-get">
        <input
          className="input"
          type="text"
          placeholder="Search for a character..."
          value={character}
          onChange={(e) => handleChar(e)}
        />
        <button className="get-btn" onClick={getCharacter}>
          Search
        </button>
      </div>

      <div className="bg">
        <article className="card-container">
          {data.map((elem, i) => {
            return (
              <motion.section layoutId={elem.id} key={i} className="card">
                <motion.button
                  onClick={() => setModal(elem)}
                  className="edit-btn"
                >
                  Edit
                </motion.button>
                <motion.img className="card-img" src={elem.image} alt="" />
                <motion.h2 className="card-name">{elem.name}</motion.h2>
                <motion.div className="card-data">
                  <motion.h4>Gender: {elem.gender}</motion.h4>
                  <motion.h4>Status: {elem.status}</motion.h4>
                  <motion.h4>Specie: {elem.species}</motion.h4>
                </motion.div>
              </motion.section>
            );
          })}
          <Modal />
        </article>
      </div>
    </div>
  );
};

export default GetChar;
