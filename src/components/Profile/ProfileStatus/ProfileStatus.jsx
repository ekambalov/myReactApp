import React from 'react';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activateEditdeMode = () => {
		this.setState({
			editMode: true,
		});
	};
	deActivateEditdeMode = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};
	onStatusChange = e => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status,
			});
		}
	}
	render() {
		return (
			<>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activateEditdeMode}>
							{this.props.status ? this.props.status : 'no status'}
						</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deActivateEditdeMode}
							value={this.state.status}
						/>
					</div>
				)}
			</>
		);
	}
}

export default ProfileStatus;
