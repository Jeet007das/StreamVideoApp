import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

const reducer =  combineReducers({
    auth : authReducer,
    form : formReducer,
    stream: streamReducer
})

export default reducer;
