import {combineReducers} from 'redux';
import tasks from './taskReducers';
import answers from './answerReducer';

const rootReducer = combineReducers({
	tasks,
	answers
});

export default rootReducer;