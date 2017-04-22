import * as types from './actionTypes';
import taskApi from '../api/mockTaskApi';

export function loadTasksSuccess(tasks) {
	return { type : types.LOAD_TASKS_SUCCESS, tasks};
}

export function loadTasks() {
	return function  (dispatch) {
		return taskApi.getAllTasks().then(tasks => {
			dispatch(loadTasksSuccess(tasks));
		}).catch(error => {
			throw(error);
		});
	};
}