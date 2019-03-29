import React from 'react';

class GoogleAuth extends React.Component{
	componentDidMount(){
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:'483596624757-jcoridsrclj4buphgu11s4g4ps9k1tsh.apps.googleusercontent.com',
				scope : 'email'
			});
		});
	}

	render () {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;