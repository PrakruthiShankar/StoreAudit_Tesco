import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function answerReducer (state = initialState.answers, action) {
	switch(action.type){
		case types.LOAD_ANSWERS_SUCCESS :
		return action.answers;

		default:
		return state;
	}
}