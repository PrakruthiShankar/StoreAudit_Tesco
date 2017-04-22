import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function taskReducers (state = initialState.tasks, action) {
	switch(action.type){
		case types.LOAD_TASKS_SUCCESS :
		return action.tasks;

		default:
		return state;
	}
}