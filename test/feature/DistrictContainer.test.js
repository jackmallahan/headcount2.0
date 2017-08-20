import DistrictContainer from "../../src/components/DistrictContainer";
import React from "react";
import DistrictCard from "../../src/components/DistrictCard";
import MockData from "../../src/helpers/MockData";
import { shallow, render, mount } from "enzyme";

describe("DistrictContainer Component", () => {
  let wrapper;
  let mockFn = jest.fn();
  let foundDataStub = ["COLORADO", "FARTVILLE", "ARAPAHOE"];
  let DCardPropsArray;
  let selectedStub = ["COLORADO", "FARTVILLE"];
  let propKeys;

  beforeEach(() => {
    wrapper = shallow(
      <DistrictContainer
        getData={mockFn}
        foundData={foundDataStub}
        fullData={MockData}
        findDistrict={mockFn}
        selected={selectedStub}
        compareAverages={mockFn}
        findAverage={mockFn}
      />
    );

    DCardPropsArray = Object.keys(
      wrapper.find("DistrictCard").first().node.props
    );

    let selectedDiv = wrapper.find("div.selected-cards");

    propKeys = Object.keys(selectedDiv.find("DistrictCard").first().node.props);
  });

  it("should render section with a className of district-container", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("section.district-container").length).toEqual(1);
  });

  it("should render one DistrictCard component for every element in the foundData prop and selected prop", () => {
    expect(wrapper.find("DistrictCard").length).toEqual(
      foundDataStub.length + selectedStub.length
    );
  });

  it("should receive 7 props from App component", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys.length).toEqual(7);
  });

  it("should receive a getData prop ", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[0]).toEqual("getData");
  });

  it("should receive a foundData prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[1]).toEqual("foundData");
  });

  it("should receive a fullData prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[2]).toEqual("fullData");
  });

  it("should receive a findDistrict prop", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys[3]).toEqual("findDistrict");
  });

  it("should pass seven props to each DistrictCard component in the selected-cards div", () => {
    let selectedDiv = wrapper.find("div.selected-cards");

    let propKeys = Object.keys(
      selectedDiv.find("DistrictCard").first().node.props
    );

    expect(propKeys.length).toEqual(7);
  });

  it("should pass a location prop to each DistrictCard component in the selected-cards div", () => {
    console.log(propKeys);
    expect(propKeys[0]).toEqual("location");
  });

  it("should pass a data prop to each DistrictCard component in the selected-cards div", () => {
    expect(propKeys[1]).toEqual("data");
  });

  it("should pass a getData prop to each DistrictCard component in the selected-cards div", () => {
    expect(propKeys[2]).toEqual("getData");
  });

  it("should pass a findDistrict prop to each DistrictCard component in the selected-cards div", () => {
    expect(propKeys[3]).toEqual("findDistrict");
  });

  it("should pass a className prop to each DistrictCard component in the selected-cards div", () => {
    expect(propKeys[4]).toEqual("className");
  });

  it("should pass an order prop to each DistrictCard component in the selected-cards div", () => {
    expect(propKeys[5]).toEqual("order");
  });

  it("should pass a findAverage prop to each DistrictCard component in the selected-cards div", () => {
    expect(DCardPropsArray[6]).toEqual("findAverage");
  });

  /////////

  it("should pass five props to each DistrictCard component that aren't in the selected-cards div ", () => {
    console.log(DCardPropsArray.length);
  });

  it("should pass a data prop to each DistrictCard component", () => {
    expect(DCardPropsArray[1]).toEqual("data");
  });

  it("should pass a getData prop to each DistrictCard component", () => {
    expect(DCardPropsArray[2]).toEqual("getData");
  });

  it("should pass a findDistrict prop to each DistrictCard component", () => {
    expect(DCardPropsArray[3]).toEqual("findDistrict");
  });
});
