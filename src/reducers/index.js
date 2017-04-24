import {combineReducers} from 'redux';
import tasks from './taskReducers';
import answers from './answerReducer';
import questions from './questionReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	tasks,
	answers,
	questions,
	ajaxCallsInProgress
});

export default rootReducer;