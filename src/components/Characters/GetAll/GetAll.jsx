import { useState, useEffect, useContext } from "react";
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
    let founded = chars.filter(elem => elem.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setCharacters(founded)
  }
  return (
    <div className="bg">
      <div className="section-container">
        <input
          className="input"
          type="text"
          placeholder="Filter characters..."
          onKeyUpCapture={(e) => filter(e)}
        />
        <article className="card-container">
          {characters.map((elem, i) => {
            return (
              <section
                key={i}
                className="card-button"
                onClick={(e) => e.currentTarget.classList.toggle("flipped")}
              >
                <div className="card-front">
                  <img className="card-image" src={elem.image} alt="" />
                  <h2 className="card-name">{elem.name}</h2>
                </div>
                <div className="card-back">
                  <img className="card-image-back" src={elem.image} alt="" />
                  <div className="card-description">
                    <h4>Gender: {elem.gender}</h4>
                    <h4>Status: {elem.status}</h4>
                    <h4>Specie: {elem.species}</h4>
                  </div>
                  <button onClick={() => setModal(elem)} className="secondary-btn">Edit</button>
                </div>
              </section>
            );
          })}
        </article>
        <Modal />
      </div>
    </div>
  );
};

export default GetAll;
