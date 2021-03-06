import React from "react";
import "../styles/styles.css";
import { DistrictRepository } from "../helpers/DistrictRepository";
import KinderData from "../../data/kindergartners_in_full_day_program";
import PropTypes from "prop-types";

const ComparisonCard = ({
  compareAverages,
  fullData,
  findAverage,
  selected
}) => {
  const district = new DistrictRepository(KinderData);
  const card1Average = district.findAverage(selected[0]);
  const card2Average = district.findAverage(selected[1]);
  const comparedRatio = district.compareDistrictAverages(
    selected[0],
    selected[1]
  );

  return (
    <article className="card comparison-card">
      <h3>
        {selected[0]}
        <span className="compare-data">
          {card1Average}
        </span>
      </h3>
      <h3>
        Ratio<span className="compare-data">{comparedRatio.compared}</span>
      </h3>
      <h3>
        {selected[1]}
        <span className="compare-data">
          {card2Average}
        </span>
      </h3>
    </article>
  );
};

ComparisonCard.propTypes = {
  compareAverages: PropTypes.func,
  fullData: PropTypes.object,
  findAverage: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string)
};

export default ComparisonCard;
