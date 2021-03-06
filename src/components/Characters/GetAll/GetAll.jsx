import { useState, useEffect, useContext } from "react";
import EditCharacter from "../EditCharacter/EditCharacter";
import CharProvider from "../../../contexts/charContext/charContext";
import UserContext from "../../../contexts/userContext/UserContext";
const GetAll = () => {
  const { chars, setCharsId, setCharsData } = useContext(CharProvider);
  const {isLogged} = useContext(UserContext)
  const [seeLogged,setSeeLogged] = useState(isLogged)
  const setModal = (elem) => {
    setCharsData(elem);
    setCharsId(elem._id);
  };
  const [characters, setCharacters] = useState(chars);

  useEffect(()=>{
    setSeeLogged(isLogged)
  },[isLogged])

  useEffect(() => {
    setCharacters(chars);
  }, [chars]);

  const filter = (e) => {
    if (e.target.value === "") return setCharacters(chars);
    let founded = chars.filter((elem) =>
      elem.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCharacters(founded);
  };
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
                  { seeLogged ?
                    <button onClick={() => setModal(elem)} className="secondary-btn">Edit</button>
                    :
                    <button style={{backgroundColor:"#cccccc",color: "#666666" }} className="secondary-btn">Edit</button>
                  }
                </div>
              </section>
            );
          })}
        </article>
        <EditCharacter />
      </div>
    </div>
  );
};

export default GetAll;
