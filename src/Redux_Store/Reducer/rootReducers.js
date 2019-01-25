import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

const reducer =  combineReducers({
    auth : authReducer,
    form : formReducer 


})

export default reducer;
