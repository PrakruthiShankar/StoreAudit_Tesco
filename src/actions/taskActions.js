import * as types from './actionTypes';
import taskApi from '../api/mockTaskApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadTasksSuccess(tasks) {
	return { type : types.LOAD_TASKS_SUCCESS, tasks};
}

export function createTaskSuccess (task) {
	return {type: types.CREATE_TASK_SUCCESS, task};
}

export function updateTaskSuccess (task) {
	return {type: types.UPDATE_TASK_SUCCESS, task};
}
export function loadTasks() {
	return function  (dispatch) {
		dispatch(beginAjaxCall());
		return taskApi.getAllTasks().then(tasks => {
			dispatch(loadTasksSuccess(tasks));
		}).catch(error => {
			throw(error);
		});
	};
}
export function saveTask(task){
	return function (dispatch, getState) {
		dispatch(beginAjaxCall());
		return taskApi.saveTask(task).then(savedTask => {
			task.id ? dispatch(updateTaskSuccess(savedTask)):
			dispatch(createTaskSuccess(savedTask));
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}