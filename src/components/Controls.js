import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Controls.propTypes = {
	handleChange: PropTypes.func,
	input: PropTypes.string
};

export default Controls;
