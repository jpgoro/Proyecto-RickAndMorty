import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundvideo from "./video/videorickandmorty(corto).mp4"
import About from "../About/About";
import "../../scss/app.scss"
import "../../scss/base/_globales.scss"

export default function HomePage() {
  const [modalInfo, setModalInfo] = useState(null)

  return (
    <div className="home-img-back">
      <div className="home-container">
        {<video autoPlay loop muted className="video-container" >
          <source src={backgroundvideo} type="video/mp4" />
        </video>}
        <div className="links-container">
          <button className="primary-btn">
            <Link style={{color: "#95ff00dc"}} to="/Characters/getAllChars">Characters</Link>
          </button>
          <button  className="primary-btn">
            <Link style={{color: "#95ff00dc"}} to="/Locations/getAllLocations">Locations</Link>
          </button>
          <About modalUp={modalInfo} setModalUp={setModalInfo} />
        </div>
      </div>
    </div>
  );
}
