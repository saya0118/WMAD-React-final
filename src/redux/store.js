import {createStore, createStore as reduxCreateStore, applyMiddleware, combineReducers} from "redux";
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducer from './root-reducer';
import editReducers from './reducer';
import {connectRouter, routerMiddleware} from "connected-react-router";

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

export const editStore = () => {
    return reduxCreateStore(
        combineReducers({
            issue: editReducers
        })
    )
}

// export const editStore = () => {
//     return getState()
// }