import * as types from './actionTypes';
import questionApi from '../api/mockQuestionApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export function loadQuestionSuccess(questions) {
	return { type : types.LOAD_QUESTION_SUCCESS, questions};
}

export function createQuestionSuccess (question) {
	return {type: types.CREATE_QUESTION_SUCCESS, question};
}

export function updateQuestionSuccess (question) {
	return {type: types.UPDATE_QUESTION_SUCCESS, question};
}
export function loadQuestions() {
	return function  (dispatch) {
		dispatch(beginAjaxCall());
		return questionApi.getAllQuestions().then(questions => {
			dispatch(loadQuestionSuccess(questions));
		}).catch(error => {
			throw(error);
		});
	};
}
export function saveQuestion(question){
	return function (dispatch, getState) {
		dispatch(beginAjaxCall());
		return questionApi.saveQuestion(question).then(savedQuestion => {
			question.id ? dispatch(updateQuestionSuccess(savedQuestion)):
			dispatch(createQuestionSuccess(savedQuestion));
		}).catch(error => {
			dispatch(ajaxCallError(error));
			throw(error);
		});
	};
}