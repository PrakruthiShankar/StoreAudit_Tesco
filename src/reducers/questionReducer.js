import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function QuestionReducer (state = initialState.questions, action) {
	switch(action.type){
		case types.LOAD_QUESTION_SUCCESS :
		return action.questions;

		case types.CREATE_QUESTION_SUCCESS:
		return [
		...state,
		Object.assign({}, action.question)
		];

		case types.UPDATE_QUESTION_SUCCESS:
		return [
		...state.filter(question => question.id !== action.question.id),
		Object.assign({}, action.question)
		];

		default:
		return state;
	}
}