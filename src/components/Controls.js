import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { DistrictContainer } from './DistrictContainer';

class Controls extends Component {
	render() {
		return (
			<section className="controls-container">
				<input
					onChange={this.props.handleChange}
					className="search-input"
					placeholder="Search district"
					value={this.props.input}
				/>
			</section>
		);
	}
}

export default Controls;
