import React from 'react';
import DistrictCard from '../../src/components/DistrictCard';
import MockData from '../../src/helpers/MockData';
import { shallow, render, mount } from 'enzyme';

describe('DistrictCard Component', () => {
	let wrapper;
	let place = 'COLORADO';
	let mockFn;

	beforeEach(() => {
		mockFn = jest.fn();
		wrapper = shallow(
			<DistrictCard
				location={place}
				data={MockData.Colorado}
				getData={mockFn}
				findDistrict={mockFn}
				className="card"
			/>
		);
	});

	it('should render an article element with a class of card', () => {
		expect(wrapper.find('article.card').length).toEqual(1);
	});

	it('should render an h3 element', () => {
		expect(wrapper.find('h3').length).toEqual(1);
	});

	it('should render the location in the h3', () => {
		expect(wrapper.find('h3').node.props.children).toEqual('COLORADO');
	});

	it('should render an average in an h5 element', () => {
		expect(wrapper.find('h5').length).toEqual(1);
		expect(wrapper.find('h5').node.props.children[1]).toEqual(0.53);
	});

	it('should render a ul element with 11 list items', () => {
		expect(wrapper.find('ul').length).toEqual(1);
		expect(wrapper.find('li').length).toEqual(11);
	});

	it('should render the correct data sorted chronologically', () => {
		expect(
			wrapper.find('li').first().find('span.card-year').node.props.children[0]
		).toBe(2004);
		expect(
			wrapper.find('li').first().find('span.year-data').node.props.children
		).toBe(0.24);
		expect(
			wrapper.find('li').last().find('span.card-year').node.props.children[0]
		).toBe(2014);
		expect(
			wrapper.find('li').last().find('span.year-data').node.props.children
		).toBe(0.741);
	});

	it('should fire a function on click of card', () => {
		const card = wrapper.find('article');

		expect(mockFn).toHaveBeenCalledTimes(0);
		card.simulate('click');

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	it.skip('should add a class to card on click', () => {
		const card = wrapper.find('article.card');

		expect(mockFn).toHaveBeenCalledTimes(0);
		expect(wrapper.find('article.clicked').length).toEqual(0);

		card.simulate('click');

		expect(mockFn).toHaveBeenCalledTimes(1);
		expect(wrapper.find('article.clicked').length).toEqual(1);
	});
});
