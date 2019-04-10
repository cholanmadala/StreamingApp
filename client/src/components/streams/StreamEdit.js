import React from 'react';
import {connect} from 'react-redux';
import {getSingleStream} from '../../actions';

class StreamEdit extends React.Component {
	componentDidMount() {
		console.log(this.props);
		const streamId = this.props.match.params.id;
		this.props.getSingleStream(streamId);
	}

	componentDidUpdate() {
		console.log(this.props.streams[this.props.match.params.id])
	}

	render() {
		return (
			<div>
				StreamEdit
			</div>
		);
	}
};

const mapStateToProps = ({streams})  => {
	return {
		streams
	}
}

export default connect(mapStateToProps, {getSingleStream})(StreamEdit);