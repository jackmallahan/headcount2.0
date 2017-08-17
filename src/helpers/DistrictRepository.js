// import React, { Component } from 'react';
// import KinderData from '../../data/kindergartners_in_full_day_program';
import "../styles/DistrictRepository.css";

export class DistrictRepository {
  constructor(data) {
    this.data = data;
  }

  getDataPairs(districtData) {
    console.log("hey");
    districtData = districtData.reduce((acc, item) => {
      if (item.Data === "N/A") {
        item.Data = 0;
      }
      acc[item.TimeFrame] = parseFloat(item.Data.toFixed(3));
      return acc;
    }, {});
    console.log("districtData", districtData);
    return districtData;
  }

  findAllMatches(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }

    const districtKeys = Object.keys(dataSet).map(key => {
      return key.toUpperCase();
    });

    if (!userInput) {
      return districtKeys;
    }

    let filteredMatches = districtKeys.filter(district =>
      district.includes(userInput)
    );

    return filteredMatches;
  }

  findByName(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }
    const districtKeys = Object.keys(newData).map(key => {
      return key.toUpperCase();
    });

    let districtName = newData[userInput];
    let answer;

    if (districtKeys.includes(userInput)) {
      return (answer = {
        location: userInput,
        data: this.cleanData(districtName)
      });
    }
  }
}
