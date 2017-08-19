import React from 'react';
import '../styles/DistrictRepository.css';

const DistrictCard = ({
	location,
	data,
	getData,
	findDistrict,
	className,
	order
}) => {
	const stylez = {
		color: 'rgb(25, 52, 65)'
	};
	const underFive = {
		color: 'red'
	};
	const cardOrder = {
		order: order
	};

	return (
		<article
			className={className}
			onClick={e => findDistrict(e, location)}
			style={cardOrder}
		>
			<h3>
				{location}
			</h3>
			<ul className="card-list">
				{data.map((year, i) => {
					year.Data =
						typeof year.Data === 'number'
							? parseFloat(year.Data.toFixed(3))
							: 0;

					return (
						<li key={i}>
							<span
								className="card-year"
								style={year.Data < 0.5 ? underFive : stylez}
							>
								{year.TimeFrame}:{' '}
							</span>
							<span
								className="year-data"
								style={year.Data < 0.5 ? underFive : stylez}
							>
								{year.Data}
							</span>
						</li>
					);
				})}
			</ul>
		</article>
	);
};

export default DistrictCard;
