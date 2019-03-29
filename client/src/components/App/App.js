import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StreamDelete from '../streams/StreamDelete';
import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';
import Header from '../Header';

const App = () => {
	return (
		<div className="ui container">			
			<Router>
				<Header />
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/new"  exact component={StreamCreate} />
				<Route path="/streams/edit" exact component={StreamEdit} />
				<Route path="/streams/show" exact component={StreamShow} />
				<Route path="/streams/delete" exact component={StreamDelete} />
			</Router>
		</div>
	);
}

export default App;