import axios, { Axios } from "axios";
import { useState } from "react";
import "./getChar.scss";

const baseUrl = "http://rickandmortyapi.com/api/character";
const GetChar = () => {
  const [character, setCharacter] = useState("");
  const [data, setData] = useState([]);
  const [char, setChar] = useState([]);
  const getCharacter = () => {
    axios.get(baseUrl).then((response) => {
      setData([...response.data.results]);
      data.map((element) => {
        if (element.name.includes(character)) {
          setChar(element);
          setCharacter("");
        }
      });
    });
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
          onChange={handleChar}
        />
        <button className="get-btn" onClick={getCharacter}>
          Get Character
        </button>
      </div>

      {
        <section className="card">
          <img className="card-img" src={char.image} alt="" />
          <h2 className="card-name">{char.name}</h2>
          <div className="card-char">
            <h4>Gender: {char.gender}</h4>
            <h4>Status: {char.status}</h4>
            <h4>Specie: {char.species}</h4>
          </div>
        </section>
      }
    </div>
  );
};

export default GetChar;
