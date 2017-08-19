import React from "react";
import "../styles/DistrictRepository.css";

const DistrictCard = ({
  location,
  data,
  getData,
  findDistrict,
  className,
  order
}) => {
  const stylez = {
    color: "white",
    backgroundColor: "green"
  };
  const underFive = {
    color: "white",
    backgroundColor: "red"
  };
  const cardOrder = {
    order: order
  };

  return (
    <div
      className={className}
      onClick={e => findDistrict(e, location)}
      style={cardOrder}
    >
      <h3>
        {location}
      </h3>
      <ul className="card-list">
        {data.map((year, i) => {
          year.Data =
            typeof year.Data === "number"
              ? parseFloat(year.Data.toFixed(3))
              : 0;

          return (
            <li key={i} style={year.Data < 0.5 ? underFive : stylez}>
              {`${year.TimeFrame}: ${year.Data}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DistrictCard;
