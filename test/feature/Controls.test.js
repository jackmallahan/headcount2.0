import App from "../../src/components/App";
import Controls from "../../src/components/Controls";
import KinderData from "../../data/kindergartners_in_full_day_program";
import React from "react";
import { DistrictRepository } from "../../src/helpers/DistrictRepository";
import { shallow, render, mount } from "enzyme";

describe("Controls", () => {
  let wrapper;
  const mockFn = jest.fn();
  const mockData = [
    {
      Data: 0.395,
      DataFormat: "Percent",
      Location: "COLORADO",
      TimeFrame: 2007
    }
  ];

  beforeEach(() => {
    wrapper = shallow(<Controls handleChange={mockFn} input="" />);
  });

  it("should render section with a className of controls-container", () => {
    expect(wrapper.find("section.controls-container").length).toEqual(1);
  });

  it("should render an input with a className of search-input", () => {
    expect(wrapper.find("input.search-input").length).toEqual(1);
  });

  it("should be passed two props from App", () => {
    let propKeys = Object.keys(wrapper.unrendered.props);
    expect(propKeys.length).toEqual(2);
  });

  it("should fire function on change", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "abc" } });

    expect(mockFn).toHaveBeenCalled();
  });

  it("should be passed an input prop that starts as an empty string", () => {
    expect(wrapper.unrendered.props.input).toEqual("");
  });
});
