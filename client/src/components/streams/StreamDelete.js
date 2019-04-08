import React from 'react';
import {connect} from 'react-redux';
import {deleteStream} from '../../actions';

class StreamDelete extends React.Component{
	state={deleteId: ''}

	onDeleteStream = () => {
		this.props.deleteStream(this.state.deleteId);
	}

	onInputChange = (ev) => {
		const deleteId =ev.target.value;
		this.setState({
			deleteId
		})
	}

	render() {
		return (
			<div>
			<input autoFocus type="text" value={this.state.deleteId} onChange={this.onInputChange}/>
				<button onClick={this.onDeleteStream}>
					StreamDelete
				</button>
			</div>
		);
	}
}

export default connect(null, {deleteStream})(StreamDelete);
