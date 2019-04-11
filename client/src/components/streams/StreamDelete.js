import React from 'react';
import {connect} from 'react-redux';
import {deleteStream} from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{
	state={deleteId: ''}

	onDeleteStream = () => {
		const streamId = this.props.match.params.id;
		console.log(streamId);
		this.props.deleteStream(streamId);
	}

	onInputChange = (ev) => {
		const deleteId =ev.target.value;
		this.setState({
			deleteId
		})
	}

	onDismiss = () => {
		console.log('dismissing');
		history.push('/');
	}

	renderActions = () => {
		// React.Fragments can also be used as <> </>
		return (
			<React.Fragment>
				<button className="ui button negative" onClick={this.onDeleteStream}>Delete</button>
				<button className="ui button">Cancel</button>
			</React.Fragment>
		);
	}

	render() {
		return (
			<div>
			<input autoFocus type="text" value={this.state.deleteId} onChange={this.onInputChange}/>
				<button onClick={this.onDeleteStream}>
					StreamDelete
				</button>
				<Modal
					title="Delete Stream"
					content="Are you sure you want to delete this stream?"
					actions={this.renderActions()}
					onDismiss={this.onDismiss}
				/>
			</div>
		);
	}
}

export default connect(null, {deleteStream})(StreamDelete);
