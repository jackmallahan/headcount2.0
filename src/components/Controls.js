import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { DistrictContainer } from './DistrictContainer';

class Controls extends Component {
	render() {
		return (
			<div className="controls-container">
				<input
					onChange={this.props.handleChange}
					className="search-input"
					placeholder="Search district"
					value={this.props.input}
				/>
			</div>
		);
	}
}

export default Controls;
