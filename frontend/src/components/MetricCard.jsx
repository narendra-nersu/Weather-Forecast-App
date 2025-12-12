const MetricCard = ({ icon, label, value }) => {
  return (
    <div className="metric-card">
      <img src={icon} className="small-icon" />
      <h6>{label}</h6>
      <h6>{value}</h6>
    </div>
  );
};

export default MetricCard;
