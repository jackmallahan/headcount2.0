import React, { Component } from "react";
import "../styles/styles.css";
import DistrictContainer from "./DistrictContainer";
import Controls from "./Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
import { DistrictRepository } from "../helpers/DistrictRepository";

const fullData = new DistrictRepository(KinderData);

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cards: [],
      data: {},
      input: "",
      selectedCards: []
    };
  }

  componentDidMount() {
    this.setState({
      cards: [...fullData.findAllMatches()],
      data: fullData.getDistrictData()
    });
  }

  handleChange(e) {
    this.setState({
      cards: [...fullData.findAllMatches(e.target.value)],
      input: e.target.value
    });
  }

  clickDistrictCard(e, location) {
    let card = e.currentTarget;
    let selected = this.state.selectedCards;
    if (selected.includes(location)) {
      return this.removeSelectedDistrict(location);
    }
    selected.length >= 2 ? selected.pop() : null;
    selected.push(location);
    this.setState({
      selectedCards: selected,
      input: ""
    });
    return card.classList.toggle("clicked");
  }

  removeSelectedDistrict(location) {
    let selected = this.state.selectedCards;
    if (location === selected[0]) {
      selected.shift();
      this.setState({
        selectedCards: selected
      });
    } else {
      selected.pop();
      this.setState({
        selectedCards: selected
      });
    }
  }

  render() {
    if (this.state.cards === []) {
      return (
        <div className="no-cards">There is no district data to display!</div>
      );
    } else {
      return (
        <div className="app-container">
          <Controls
            input={this.state.input}
            handleChange={this.handleChange}
            DistrictRepository={fullData}
          />
          <DistrictContainer
            getData={fullData.cleanData}
            foundData={this.state.cards}
            fullData={this.state.data}
            findDistrict={this.clickDistrictCard.bind(this)}
            selected={this.state.selectedCards}
            compareAverages={fullData.compareDistrictAverages}
            findAverage={fullData.findAverage}
          />
        </div>
      );
    }
  }
}

export default App;
