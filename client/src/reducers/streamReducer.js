import {
	CREATE_STREAM,
	DELETE_STREAM,
	UPDATE_STREAM,
	GET_STREAMS_LIST,
	GET_SINGLE_STREAM
} from '../actions/types';

import _ from 'lodash';

const streamReducer = (state={}, action) => {

	switch (action.type) {

		case GET_STREAMS_LIST:
		return {
			...state,
			..._.mapKeys(action.payload, 'id')
		};

		case GET_SINGLE_STREAM: 
		return {
			...state,
			[action.payload.id]:action.payload
		}

		case CREATE_STREAM:
		return {
			...state,
			[action.payload.id]:action.payload
		}

		case UPDATE_STREAM: 
		return {
			...state,
			[action.payload.id]:action.payload
		}

		case DELETE_STREAM:
		return _.omit(state, action.payload);

		default :
		return state;
	}

};

export default streamReducer;