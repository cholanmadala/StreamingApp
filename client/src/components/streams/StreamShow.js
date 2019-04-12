import React from 'react';
import {connect} from 'react-redux';
import {getSingleStream} from '../../actions';

class StreamShow extends React.Component {
	componentDidMount() {
		const streamId = this.props.match.params.id;
		this.props.getSingleStream(streamId);
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>
		} else {
			const {title, description} = this.props.stream;
			return (
				<div>
					<div className="ui content">
							<h1>{title}</h1>
							<h5>{description}</h5>
						</div>
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

export default connect(mapStateToProps, {getSingleStream})(StreamShow);
