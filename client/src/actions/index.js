import streams from '../apis/streams';
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
export const createStream = formValues => async dispatch =>  {
	const response = await streams.post('/streams', formValues);
	console.log('response of api', response);
	return dispatch({
		type: CREATE_STREAM,
		payload: response.data
	});
}

// delete a stream
export const deleteStream = streamId => async dispatch => {
	console.log(streamId);
	await streams.delete(`/streams/${streamId}`);
	return dispatch({
		type: DELETE_STREAM,
		payload: streamId
	});
}

//fetch all the streams
export const getStreamsList = () => async dispatch => {
	const response = await streams.get('/streams');
	console.log('response of api', response);
	return dispatch({
		type: GET_STREAMS_LIST,
		payload: response.data
	});
}

//fetch a particular stream
export const getSingleStream = streamId => async dispatch => {
	const response = await streams.get(`/streams/${streamId}`);
	console.log('response of api', response);
	return dispatch({
		type: GET_SINGLE_STREAM,
		payload: response.data
	});
}

//update a stream
export const updateStream = ({streamId, updatedData}) => async dispatch => {
	const response = await streams.put(`/streams/${streamId}`, updatedData);
	console.log('response of api', response);
	return dispatch({
		type: UPDATE_STREAM,
		payload: response.data
	});
}