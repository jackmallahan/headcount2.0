import React from 'react';
import ComparisonCard from '../../src/components/ComparisonCard';
import MockData from '../../src/helpers/MockData';
import { shallow, render, mount } from 'enzyme';
import { DistrictRepository } from '../../src/helpers/DistrictRepository';

describe('ComparisonCard Component', () => {
	const district = new DistrictRepository(MockData);
	let wrapper;
	let mockFn;
	let selectedStub = ['COLORADO', 'ACADEMY 20'];

	beforeEach(() => {
		mockFn = jest.fn();
		wrapper = shallow(
			<ComparisonCard
				fullData={district.data}
				findAverage={mockFn}
				compareAverages={mockFn}
				selected={selectedStub}
			/>
		);
	});

	it('should render an article element with a class of card', () => {
		expect(wrapper.find('article.comparison-card').length).toEqual(1);
	});

	it('should render the locations of both cards being compared', () => {
		expect(wrapper.find('h3').first().node.props.children[0]).toEqual(
			'COLORADO'
		);
		expect(wrapper.find('h3').last().node.props.children[0]).toEqual(
			'ACADEMY 20'
		);
	});

	it('should render the average of both cards being compared', () => {
		console.log(wrapper.find('span.compare-data').nodes[0].props.children);
		expect(wrapper.find('span.compare-data').nodes[0].props.children).toEqual(
			0.53
		);
		expect(wrapper.find('span.compare-data').nodes[2].props.children).toEqual(
			0.407
		);
	});

	it("should render the ratio of the lower scoring school's average to the higher scoring school's average", () => {
		expect(
			wrapper.find('h3').nodes[1].props.children[1].props.children
		).toEqual(0.768);
	});
});
