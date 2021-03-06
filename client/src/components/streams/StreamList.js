import React from 'react';
import {connect} from 'react-redux';
import {getStreamsList, deleteStream} from '../../actions';
import {Link} from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount(){
		this.props.getStreamsList();
	}

	renderAdmin = (userId, id) => {
		if (userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link
						to={`/streams/edit/${id}`}
						className="ui button primary"
					>
						Edit
					</Link>
					<Link
						to={`/streams/delete/${id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			);
		}
	}

	renderList = () => {
		if (this.props.streams.length) {
			return this.props.streams.map(({title, description, id, userId})=>{
				return (
					<div key={id} className="item">
						{this.renderAdmin(userId, id)}
						<i className="large middle aligned icon camera"/>
						<div className="content">
							<Link to={`/streams/${id}`} className="header" >
								<b>{title}</b>
							</Link>
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

	renderCreate = ()=>{
		if (this.props.isSignedIn) {
			return (
				<div style={{"textAlign": "right"}}>
					<Link to="/streams/new" className="ui button primary">Create New</Link>
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = ({streams, auth}) => {
	return {
		streams: Object.values(streams),
		currentUserId: auth.userId,
		isSignedIn: auth.isSignedIn
	}
}

export default connect(mapStateToProps, {getStreamsList, deleteStream} )(StreamList);
