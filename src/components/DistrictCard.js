import React from "react";
import "../styles/styles.css";
import PropTypes from "prop-types";
import { DistrictRepository } from "../helpers/DistrictRepository";
import KinderData from "../../data/kindergartners_in_full_day_program";

const DistrictCard = ({
  location,
  data,
  getData,
  findDistrict,
  className,
  order
}) => {
  const stylez = {
    color: "rgb(255, 255, 250)"
  };
  const underFive = {
    color: "red"
  };
  const cardOrder = {
    order: order
  };
  const district = new DistrictRepository(KinderData);

  return (
    <article
      className={className}
      onClick={e => findDistrict(e, location)}
      style={cardOrder}
    >
      <h3>
        {location}
      </h3>
      <h5>
        Average: {district.findAverage(location)}
      </h5>
      <ul className="card-list">
        {data.sort((a, b) => a.TimeFrame - b.TimeFrame).map((year, i) => {
          year.Data =
            typeof year.Data === "number"
              ? parseFloat(year.Data.toFixed(3))
              : 0;

          return (
            <li key={i}>
              <span
                className="card-year"
                style={year.Data < 0.5 ? underFive : stylez}
              >
                {year.TimeFrame}:{" "}
              </span>
              <span
                className="year-data"
                style={year.Data < 0.5 ? underFive : stylez}
              >
                {year.Data}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  getData: PropTypes.func,
  findDistrict: PropTypes.func,
  className: PropTypes.string,
  order: PropTypes.number
};

export default DistrictCard;
