"use strict";

module.exports = function() {
	const React = require("react");

	class ToggleGroup extends React.Component {
		constructor(props) {
			super(props);

			this.state = { value: this.props.value };
		}

		onChange(e) {
			this.setState({ value: e.target.value });

			if (typeof this.props.onChange === "function") {
				this.props.onChange(e);
			}
		}

		get value() {
			return this.state.value;
		}

		render() {
			return (
				<div {...this.props}>
					{this.props.items.map(item => {
						return (
							<label key={item.value}>
								<input
									type="radio"
									checked={this.state.value === item.value}
									value={item.value}
									name={this.props.name}
									onChange={this.onChange.bind(this)}
								/>
								<span>{item.label}</span>
							</label>
						);
					})}
				</div>
			);
		}
	}

	ToggleGroup.propTypes = {
		 name: React.PropTypes.string.isRequired,
		 value: React.PropTypes.string.isRequired,
		 items: React.PropTypes.arrayOf(React.PropTypes.shape({
			  value: React.PropTypes.string.isRequired,
			  label: React.PropTypes.string.isRequired
		 })).isRequired,
		 onChange: React.PropTypes.func
	};

	return ToggleGroup;
};
