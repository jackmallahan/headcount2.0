import React, { Component } from "react";
import "../App.css";
import DistrictContainer from "./DistrictContainer";
import { Controls } from "./Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
// import { DistrictRepository } from "../helpers/DistrictRepository";

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: "",
      cleanData: null,
      districtKeys: null
    };
  }

  componentDidMount() {
    this.morphData(KinderData);
    console.log("new data", this.state.newData);
  }

  morphData(data) {
    const cleanData = data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = [];
      }
      if (acc[obj.Location]) {
        acc[obj.Location].push(obj);
      }
      return acc;
    }, {});
    this.getLocationsArray(cleanData);
    return this.setState({ cleanData: cleanData });
  }

  getLocationsArray(cleanedData) {
    const keys = Object.keys(cleanedData);
    this.setState({ districtKeys: keys });
  }

  findByName(userInput) {
    if (userInput) {
      userInput = userInput.toUpperCase();
    }
    const dataSet = this.state.cleanData;
    const districtKeys = Object.keys(dataSet).map(key => {
      return key.toUpperCase();
    });

    let districtName = dataSet[userInput];
    let answer;

    if (districtKeys.includes(userInput)) {
      return (answer = {
        location: userInput,
        data: this.getData(districtName)
      });
    }
  }

  handleChange(e) {
    this.setState({
      districtKeys: [...this.findAllMatches(e.target.value)],
      input: e.target.value
    });
  }

  findAllMatches(searchInput) {
    if (searchInput) {
      searchInput = searchInput.toUpperCase();
    }

    const dataSet = this.state.cleanData;
    const districtKeys = Object.keys(dataSet).map(key => {
      return key.toUpperCase();
    });

    if (!searchInput) {
      return districtKeys;
    }

    let filteredMatches = districtKeys.filter(district =>
      district.includes(searchInput)
    );

    return filteredMatches;
  }

  render() {
    if (this.state.districtKeys === null || this.state.cleanData === null) {
      return <div> hello</div>;
    } else {
      return (
        <div className="app-container">
          <Controls
            findDistrict={this.state.districtKeys.findByName}
            handleChange={this.handleChange}
          />
          <DistrictContainer
            getData={this.state.districtKeys.getDataPairs}
            foundData={this.state.districtKeys}
            fullData={this.state.cleanData}
          />
        </div>
      );
    }
  }
}

export default App;
