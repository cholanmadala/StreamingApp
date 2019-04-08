import React from 'react';
import {connect} from 'react-redux';
import {getStreamsList} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount(){
		this.props.getStreamsList();
	}

	renderAdmin = (userId) => {
		if (userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<button className="ui button primary">Edit</button>
					<button className="ui button negative">Delete</button>
				</div>
			);
		}
	}

	renderList = () => {
		if (this.props.streams.length) {
			return this.props.streams.map(({title, description, id, userId})=>{
				return (
					<div key={id} className="item">
						{this.renderAdmin(userId)}
						<i className="large middle aligned icon camera"/>
						<div className="content">
							{title}
							<div className="description">{description}</div>
						</div>						
					</div>
				);
			});
		} else {
			return <h3>
				No Records!!! Wanna add something? <Link to="/streams/new" className="item">Add here</Link>
			</h3>
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({streams, auth}) => {
	return {
		streams: Object.values(streams),
		currentUserId: auth.userId
	}
}

export default connect(mapStateToProps, {getStreamsList} )(StreamList);
