import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundvideo from "./video/video-bg.mp4";
import About from "../About/About";
import "../../scss/app.scss";
import "../../scss/base/_globales.scss";
import "../../scss/base/_home-bg.scss";

export default function HomePage() {
  const [modalInfo, setModalInfo] = useState(null);

  return (
    <div className="home-container">
      <div className="home-bg">
        {
          <video autoPlay loop muted className="video-container">
            <source src={backgroundvideo} type="video/mp4" />
          </video>
        }
        <div className="links-container">
          <Link className="primary-btn" to="/Characters/getAllChars">
            Characters
          </Link>
          <Link className="primary-btn" to="/Locations/getAllLocations">
            Locations
          </Link>
          <About modalUp={modalInfo} setModalUp={setModalInfo} />
        </div>
      </div>
    </div>

    //</div>
  );
}
