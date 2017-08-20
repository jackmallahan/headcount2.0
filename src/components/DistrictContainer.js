import React from "react";
import DistrictCard from "./DistrictCard";
import ComparisonCard from "./ComparisonCard";
import "../styles/styles.css";
import PropTypes from "prop-types";

const DistrictContainer = props => {
  return (
    <section className="district-container">
      <div className="selected-cards">
        {props.selected.length > 0
          ? props.selected.map((card, index) =>
              <DistrictCard
                location={card}
                data={props.fullData[card]}
                getData={props.getData}
                key={card}
                findDistrict={props.findDistrict}
                className="card selected-district-card"
                order={index * 2}
                findAverage={props.findAverage}
              />
            )
          : <div className="compare-message">
              Select two districts to compare data
            </div>}
        {props.selected.length === 2
          ? <ComparisonCard
              fullData={props.fullData}
              findAverage={props.findAverage}
              compareAverages={props.compareAverages}
              selected={props.selected}
            />
          : null}
      </div>
      {props.foundData.map(place =>
        <DistrictCard
          location={place}
          data={props.fullData[place]}
          getData={props.getData}
          key={place}
          findDistrict={props.findDistrict}
          className={props.selected.includes(place) ? "card clicked" : "card"}
        />
      )}
    </section>
  );
};

DistrictContainer.propTypes = {
  compareAverages: PropTypes.func,
  findAverage: PropTypes.func,
  foundData: PropTypes.arrayOf(PropTypes.string),
  findDistrict: PropTypes.func,
  fullData: PropTypes.object,
  getData: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string)
};

export default DistrictContainer;
