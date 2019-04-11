import streams from '../apis/streams';
import history from '../history';
import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	DELETE_STREAM,
	UPDATE_STREAM,
	GET_STREAMS_LIST,
	GET_SINGLE_STREAM
} from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	}
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	}
}

// create a  new stream
export const createStream = formValues => async (dispatch, getState) =>  {
	const {userId} = getState().auth;
	const response = await streams.post('/streams', {...formValues, userId});
	dispatch({
		type: CREATE_STREAM,
		payload: response.data
	});
	//navigate to streamsList page programmatically
	//using our own history object on successful api call
	history.push('/');
}

// delete a stream
export const deleteStream = streamId => async dispatch => {
	await streams.delete(`/streams/${streamId}`);
	dispatch({
		type: DELETE_STREAM,
		payload: streamId
	});
}

//fetch all the streams
export const getStreamsList = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({
		type: GET_STREAMS_LIST,
		payload: response.data
	});
}

//fetch a particular stream
export const getSingleStream = streamId => async dispatch => {
	const response = await streams.get(`/streams/${streamId}`);
	dispatch({
		type: GET_SINGLE_STREAM,
		payload: response.data
	});
}

//update a stream
export const updateStream = ({streamId, updatedData}) => async dispatch => {
	const response = await streams.patch(`/streams/${streamId}`, updatedData);
	dispatch({
		type: UPDATE_STREAM,
		payload: response.data
	});
	//navigate to streamsList page programmatically
	//using our own history object on successful api call
	history.push('/');
}
