import {combineReducers} from 'redux';
import issueReducers from './reducer';

const rootReducer = combineReducers({
    issue: issueReducers,
})

export default rootReducer;