import React from 'react';
import '../styles/DistrictRepository.css';
import { DistrictRepository } from '../helpers/DistrictRepository';
import KinderData from '../../data/kindergartners_in_full_day_program';

const ComparisonCard = ({
	compareAverages,
	fullData,
	findAverage,
	selected
}) => {
	const district = new DistrictRepository(KinderData);
	const card1Average = district.findAverage(selected[0]);
	const card2Average = district.findAverage(selected[1]);
	const comparedRatio = district.compareDistrictAverages(
		selected[0],
		selected[1]
	);
	return (
		<div className="card comparison-card">
			<h3>
				{selected[0]} Average: {card1Average}
			</h3>
			<h3>
				Ratio: {comparedRatio.compared}
			</h3>
			<h3>
				{selected[1]} Average: {card2Average}
			</h3>
		</div>
	);
};

export default ComparisonCard;
