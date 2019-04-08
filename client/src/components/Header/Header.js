import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';
import {connect} from 'react-redux';
import {getStreamsList} from '../../actions';

class Header extends React.Component {
	componentDidMount(){
		this.props.getStreamsList();
	}

	render() {
		return (
			<div className="ui secondary pointing menu">
					<Link to="/" className="item">
						Header
					</Link>
					<div className="right menu">
						<Link to="/" className="item">
							All Streams
						</Link>
						<GoogleAuth />
					</div>
			</div>
		);
	}
}

export default connect(null, {getStreamsList} )(Header);