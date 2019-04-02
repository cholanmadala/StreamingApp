import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../../actions';

class GoogleAuth extends React.Component{
	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:'483596624757-jcoridsrclj4buphgu11s4g4ps9k1tsh.apps.googleusercontent.com',
				scope : 'email'
			}).then(()=>{
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = (isSignedIn) => {
		const currentUserId = this.auth.currentUser.get().getId();
		console.log('auth status changed', isSignedIn, currentUserId);
		if (isSignedIn) {
			this.props.signIn(currentUserId);
		} else {
			this.props.signOut();
		}
	}

	onSignOutClick = () => {
		console.log('signing out');
		this.auth.signOut();
	}

	onSignInClick = () => {
		console.log('signing in');
		this.auth.signIn();
	}

	renderAuth = () => {
		const {isSignedIn} = this.props;
		if(isSignedIn) {
			return (
				<button className="ui red google button" onClick={this.onSignOutClick}>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else if (isSignedIn === null) {
			return null;
		} else {
			return (
				<button className="ui red google button" onClick={this.onSignInClick}>
					<i className="google icon" />
					Sign In With Google
				</button>
			);
		}
	}

	render () {
		return <div>{this.renderAuth()}</div>;
	}
}

const mapStateToProps = ({auth}) => {
	console.log(auth.isSignedIn);
	return {
		isSignedIn: auth.isSignedIn
	}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);