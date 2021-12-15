import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundvideo from "./video/videorickandmorty(corto).mp4"
import About from "../About/About";

export default function HomePage() {
  const [modalInfo,setModalInfo] = useState(null)
  return (
    <div className="home-container">
      <video autoPlay loop muted className="video-container" >
        <source src={backgroundvideo} type="video/mp4" />
      </video>
      <div className="links-container">
        <Link className="log-btn" to="/Characters/getAllChars">Characters</Link>
        <Link className="log-btn" to="/Locations/getAllLocations">Locations</Link>
        <About modalUp={modalInfo} setModalUp={setModalInfo}/>
      </div>
    </div>
  );
}
