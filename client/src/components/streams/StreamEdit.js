import React from 'react';
import {connect} from 'react-redux';
import {getSingleStream, updateStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		const streamId = this.props.match.params.id;
		this.props.getSingleStream(streamId);
	}

	onSubmit = (formValues) => {
		const streamId = parseInt(this.props.match.params.id);
		this.props.updateStream({streamId, updatedData: formValues});
	}

	render() {

		if (!this.props.stream) {
			return <div>Loading...</div>
		} else {
			return (
				<div>
					<h3>Edit a Stream</h3>
					<StreamForm
						onSubmit={this.onSubmit}
						initialValues = {{title:this.props.stream.title, description: this.props.stream.description }}
					/>
					</div>
			);
		}
	}
};

const mapStateToProps = ({streams}, ownProps)  => {
	return {
		stream: streams[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, {getSingleStream, updateStream})(StreamEdit);
