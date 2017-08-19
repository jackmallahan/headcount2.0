import React from 'react';
import DistrictCard from './DistrictCard';
import ComparisonCard from './ComparisonCard';
import '../styles/DistrictRepository.css';

const DistrictContainer = props => {
	return (
		<div className="district-container">
			<div className="selected-cards">
				{props.selected.length > 0
					? props.selected.map((card, index) =>
							<DistrictCard
								location={card}
								data={props.fullData[card]}
								getData={props.getData}
								key={Math.random()}
								findDistrict={props.findDistrict}
								className="card selected-district-card"
								order={index * 2}
								findAverage={props.findAverage}
							/>
						)
					: <div>Select two districts to compare data</div>}
				{props.selected.length === 2
					? <ComparisonCard
							fullData={props.fullData}
							findAverage={props.findAverage}
							compareAverages={props.compareAverages}
							selected={props.selected}
						/>
					: null}
			</div>
			{props.foundData.map(place =>
				<DistrictCard
					location={place}
					data={props.fullData[place]}
					getData={props.getData}
					key={Math.random()}
					findDistrict={props.findDistrict}
					className="card"
				/>
			)}
		</div>
	);
};

export default DistrictContainer;
