import DistrictContainer from '../../src/components/DistrictContainer';
import React from 'react';
import DistrictCard from '../../src/components/DistrictCard';
import MockData from '../../src/helpers/MockData';
import { shallow, render, mount } from 'enzyme';

describe('DistrictContainer Component', () => {
	let wrapper;
	let mockFn = jest.fn();
	let foundDataStub = ['COLORADO', 'ACADEMY 20', 'ARAPAHOE'];
	let selectedStub = ['COLORADO', 'ACADEMY 20'];
	let selectedCardKeys;
	let DCardPropsArray;
	let comparisonCardKeys;

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

		let selectedDiv = wrapper.find('div.selected-cards');

		DCardPropsArray = Object.keys(
			wrapper.find('DistrictCard').last().node.props
		);

		selectedCardKeys = Object.keys(
			selectedDiv.find('DistrictCard').first().node.props
		);

		comparisonCardKeys = Object.keys(wrapper.find('ComparisonCard').node.props);
	});

	it('should render section with a className of district-container', () => {
		expect(wrapper.find('section.district-container').length).toEqual(1);
	});

	it('should render one DistrictCard component for every element in the foundData prop and selected prop', () => {
		expect(wrapper.find('DistrictCard').length).toEqual(
			foundDataStub.length + selectedStub.length
		);
	});

	it('should receive 7 props from App component', () => {
		let selectedCardKeys = Object.keys(wrapper.unrendered.props);
		expect(selectedCardKeys.length).toEqual(7);
	});

	it('should receive a getData prop ', () => {
		let selectedCardKeys = Object.keys(wrapper.unrendered.props);
		expect(selectedCardKeys[0]).toEqual('getData');
	});

	it('should receive a foundData prop', () => {
		let selectedCardKeys = Object.keys(wrapper.unrendered.props);
		expect(selectedCardKeys[1]).toEqual('foundData');
	});

	it('should receive a fullData prop', () => {
		let selectedCardKeys = Object.keys(wrapper.unrendered.props);
		expect(selectedCardKeys[2]).toEqual('fullData');
	});

	it('should receive a findDistrict prop', () => {
		let selectedCardKeys = Object.keys(wrapper.unrendered.props);
		expect(selectedCardKeys[3]).toEqual('findDistrict');
	});

	it('should pass seven props to each DistrictCard component in the selected-cards div', () => {
		let selectedDiv = wrapper.find('div.selected-cards');

		let selectedCardKeys = Object.keys(
			selectedDiv.find('DistrictCard').first().node.props
		);

		expect(selectedCardKeys.length).toEqual(7);
	});

	it('should pass a location prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('location')).toBe(true);
	});

	it('should pass a data prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('data')).toBe(true);
	});

	it('should pass a getData prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('getData')).toBe(true);
	});

	it('should pass a findDistrict prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('findDistrict')).toBe(true);
	});

	it('should pass a className prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('className')).toBe(true);
	});

	it('should pass an order prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('order')).toBe(true);
	});

	it('should pass a findAverage prop to each DistrictCard component in the selected-cards div', () => {
		expect(selectedCardKeys.includes('findAverage')).toBe(true);
	});

	/////////

	it("should pass five props to each DistrictCard component that aren't in the selected-cards div ", () => {
		expect(DCardPropsArray.length).toEqual(5);
	});

	it('should pass a location prop to each DistrictCard component', () => {
		expect(DCardPropsArray.includes('location')).toBe(true);
	});

	it('should pass a data prop to each DistrictCard component', () => {
		expect(DCardPropsArray.includes('data')).toBe(true);
	});

	it('should pass a getData prop to each DistrictCard component', () => {
		expect(DCardPropsArray.includes('getData')).toBe(true);
	});

	it('should pass a findDistrict prop to each DistrictCard component', () => {
		expect(DCardPropsArray.includes('findDistrict')).toBe(true);
	});

	it('should pass a className prop to each DistrictCard component', () => {
		expect(DCardPropsArray.includes('className')).toBe(true);
	});

	it('should only display a ComparisonCard component if two cards are selected', () => {
		let selectedEmpty = [];
		wrapper = shallow(
			<DistrictContainer
				getData={mockFn}
				foundData={foundDataStub}
				fullData={MockData}
				findDistrict={mockFn}
				selected={selectedEmpty}
				compareAverages={mockFn}
				findAverage={mockFn}
			/>
		);

		expect(wrapper.find('ComparisonCard').length).toEqual(0);

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

		expect(wrapper.find('ComparisonCard').length).toEqual(1);
	});

	it('should pass four props to the ComparisonCard component', () => {
		expect(comparisonCardKeys.length).toEqual(4);
	});

	it('should pass a fullData prop to each CompareCard component', () => {
		expect(comparisonCardKeys.includes('fullData')).toBe(true);
	});

	it('should pass a findAverage prop to each CompareCard component', () => {
		expect(comparisonCardKeys.includes('findAverage')).toBe(true);
	});

	it('should pass a compareAverages prop to each CompareCard component', () => {
		expect(comparisonCardKeys.includes('compareAverages')).toBe(true);
	});

	it('should pass a selected prop to each CompareCard component', () => {
		expect(comparisonCardKeys.includes('selected')).toBe(true);
	});
});
