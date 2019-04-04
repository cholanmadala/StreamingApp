import React from 'react';
import {connect} from 'react-redux';
import {getStreamsList} from '../../actions';

class StreamList extends React.Component {
	componentDidMount(){
		this.props.getStreamsList();
	}
	render() {
		return (
			<div>
				StreamList
			</div>
		);
	}
}

export default connect(null, {getStreamsList} )(StreamList);