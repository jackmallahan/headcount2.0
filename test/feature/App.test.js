import App from "../../src/components/App";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { DistrictRepository } from "../../src/helpers/DistrictRepository";
import { shallow, render, mount } from "enzyme";

describe("App", () => {
  let wrapper;
  let DCPropsArray;
  let repository;

  beforeEach(() => {
    wrapper = shallow(<App />);
    DCPropsArray = Object.keys(wrapper.find("DistrictContainer").node.props);
    repository = new DistrictRepository(KinderData);
  });

  it("should render a div with a class of app-container", () => {
    expect(wrapper.find("div.app-container").length).toEqual(1);
  });

  it("should have a default state property of cards whose value is an array", () => {
    const componentState = wrapper.state();
    expect(componentState.cards).toBeInstanceOf(Array);
  });

  it("should have a default state property of data whose value is an object", () => {
    const componentState = wrapper.state();
    expect(componentState.data).toBeInstanceOf(Object);
  });

  it("should have a default state property of input whose value starts as an empty string", () => {
    const componentState = wrapper.state();
    expect(componentState.input).toEqual("");
  });

  it("should have a default state property of selectedCards that starts as an empty array", () => {
    const componentState = wrapper.state();
    expect(componentState.selectedCards).toEqual([]);
  });

  it("should render one Controls component", () => {
    expect(wrapper.find("Controls").length).toEqual(1);
  });

  it("should pass two props to Controls component", () => {
    let controlsPropsArray = Object.keys(wrapper.find("Controls").node.props);
    expect(controlsPropsArray.length).toEqual(2);
  });

  it("should pass an input prop to Controls component", () => {
    let controlsPropsArray = Object.keys(wrapper.find("Controls").node.props);
    expect(controlsPropsArray[0]).toEqual("input");
  });

  it("should pass a handleChange prop to Controls component", () => {
    let controlsPropsArray = Object.keys(wrapper.find("Controls").node.props);
    expect(controlsPropsArray[1]).toEqual("handleChange");
  });

  it("should render one DistrictContainer component", () => {
    expect(wrapper.find("DistrictContainer").length).toEqual(1);
  });

  it("should render 181 DistrictCards", () => {
    wrapper = mount(<App />);

    expect(wrapper.find("DistrictCard").length).toEqual(181);
  });

  it("should pass seven props to the DistrictContainer", () => {
    expect(DCPropsArray.length).toEqual(7);
  });

  it("should pass a getData prop", () => {
    expect(DCPropsArray.includes("getData"));
  });

  it("should pass a foundData prop", () => {
    expect(DCPropsArray.includes("foundData"));
  });

  it("should pass a fullData prop", () => {
    expect(DCPropsArray.includes("fullData"));
  });

  it("should pass a findDistrict prop", () => {
    expect(DCPropsArray.includes("findDistrict"));
  });

  it("should pass a selected prop", () => {
    expect(DCPropsArray.includes("selected"));
  });

  it("should pass a findAverage prop", () => {
    expect(DCPropsArray.includes("findAverage"));
  });

  it("should pass a compareAverages prop", () => {
    expect(DCPropsArray.includes("compareAverages"));
  });
});
