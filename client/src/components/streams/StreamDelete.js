import React from 'react';
import {connect} from 'react-redux';
import {getSingleStream, deleteStream} from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{

	componentDidMount() {
		const streamId = this.props.match.params.id;
		this.props.getSingleStream(streamId);
	}

	onDeleteStream = () => {
		const streamId = this.props.match.params.id;
		this.props.deleteStream(streamId);
	}

	onInputChange = (ev) => {
		const deleteId =ev.target.value;
		this.setState({
			deleteId
		})
	}

	onDismiss = () => {
		history.push('/');
	}

	renderActions = () => {
		// React.Fragments can also be used as <> </>
		return (
			<React.Fragment>
				<button className="ui button negative" onClick={this.onDeleteStream}>Delete</button>
				<button className="ui button" onClick={this.onDismiss}>Cancel</button>
			</React.Fragment>
		);
	}

	render() {
		return (
			<Modal
				title="Delete Stream"
				content={ this.props.stream ? `Are you sure you want to delete the stream: ${this.props.stream.title}?` : 'Are you sure you want to delete this stream?'}
				actions={this.renderActions()}
				onDismiss={this.onDismiss}
			/>
		);
	}
}

const mapStateToProps = ({streams}, ownProps)  => {
	return {
		stream: streams[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, {deleteStream, getSingleStream})(StreamDelete);
