import React from "react";
import DistrictCard from "../../src/components/DistrictCard";
import MockData from "../../src/helpers/MockData";
import { shallow, render, mount } from "enzyme";

describe("DistrictCard Component", () => {
  let wrapper;
  let place = "COLORADO";
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(
      <DistrictCard
        location={place}
        data={[]}
        getData={mockFn}
        findDistrict={mockFn}
        className="card"
      />
    );
  });

  it("should render an article element with a class of card", () => {
    expect(wrapper.find("article.card").length).toEqual(1);
  });

  it("should render an h3 element", () => {
    expect(wrapper.find("h3").length).toEqual(1);
  });

  it("should render a ul element", () => {
    expect(wrapper.find("ul").length).toEqual(1);
  });

  it("should fire a function on click of card", () => {
    const card = wrapper.find("article");

    expect(mockFn).toHaveBeenCalledTimes(0);
    card.simulate("click");

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it.skip("should add a class to card on click", () => {
    const card = wrapper.find("article.card");

    console.log(card.debug());

    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(wrapper.find("article.clicked").length).toEqual(0);

    card.simulate("click");

    // expect(wrapper.find("article.clicked").length).toEqual(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
