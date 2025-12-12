const AQI = ({ aqi }) => {
  if (!aqi) {
    return <div>Loading...</div>;
  }

  return (
    <div className="aqi-card">
      <h5 className="aqi-title">Air Quality Index (AQI)</h5>

      <div className="aqi-grid">
        <div>
          <h6>CO</h6>
          <h6>{aqi.co ?? "-"}</h6>
        </div>

        <div>
          <h6>SO₂</h6>
          <h6>{aqi.so2 ?? "-"}</h6>
        </div>

        <div>
          <h6>O₃</h6>
          <h6>{aqi.o3 ?? "-"}</h6>
        </div>

        <div>
          <h6>NO₂</h6>
          <h6>{aqi.no2 ?? "-"}</h6>
        </div>
      </div>
    </div>
  );
};

export default AQI;
