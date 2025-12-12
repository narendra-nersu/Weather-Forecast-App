import sunIcon from "../images/sun.png";
import moonIcon from "../images/moon.png";

const SunriseSunset = ({ sunrise, sunset }) => {
  return (
    <div className="card-box">
      <h3>Sunrise & Sunset</h3>

      <div className="sun-container">
        <img src={sunIcon} className="sun-icon" />
        <div>
          <h6>Sunrise</h6>
          <h6>{sunrise}</h6>
        </div>
      </div>

      <div className="sun-container">
        <img src={moonIcon} className="moon-icon" />
        <div>
          <h6>Sunset</h6>
          <h6>{sunset}</h6>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunset;
