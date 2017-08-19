import React from "react";
import DistrictCard from "./DistrictCard";
import "../styles/DistrictRepository.css";

const DistrictContainer = props => {
  return (
    <div className="district-container">
      <div className="selected-cards">
        {props.selected.length > 0
          ? props.selected.map(card =>
              <DistrictCard
                location={card}
                data={props.fullData[card]}
                getData={props.getData}
                key={Math.random()}
                findDistrict={props.findDistrict}
                className="card selected-district-card"
              />
            )
          : <div>Select two districts to compare data</div>}
      </div>
      {props.foundData.map(place =>
        <DistrictCard
          location={place}
          data={props.fullData[place]}
          getData={props.getData}
          key={Math.random()}
          findDistrict={props.findDistrict}
          className="card"
        />
      )}
    </div>
  );
};

export default DistrictContainer;
