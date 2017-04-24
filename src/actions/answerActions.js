import answersApi from '../api/mocktestApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusAction';

export function loadAnswersSuccess(answers) {
  return {type: types.LOAD_ANSWERS_SUCCESS, answers};
}

export function loadAnswers() {
  return dispatch => {
		dispatch(beginAjaxCall());
    return answersApi.getAllAnswers().then(answers => {
      dispatch(loadAnswersSuccess(answers));
    }).catch(error => {
      throw(error);
    });
  };
}
