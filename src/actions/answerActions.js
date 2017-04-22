import answersApi from '../api/mocktestApi';
import * as types from './actionTypes';

export function loadAnswersSuccess(answers) {
  return {type: types.LOAD_ANSWERS_SUCCESS, answers};
}

export function loadAnswers() {
  return dispatch => {
    return answersApi.getAllAnswers().then(answers => {
      dispatch(loadAnswersSuccess(answers));
    }).catch(error => {
      throw(error);
    });
  };
}
