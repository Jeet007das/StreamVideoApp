import * as actionTypes from '../Action/actionTypes';

const initState = {
    streamLists: []
}


export default function (state = initState, action) {
    switch (action.type) {
     case actionTypes.GET_STREAMS_LIST:
            return {...state}
     case actionTypes.SET_STREAMS_LIST:
            return{...state, streamLists : action.payLoad }
     case actionTypes.UPDATE_STREAM:
            return{...state, streamLists : action.payLoad }
     case actionTypes.DELETE_STREAM:
            return{...state, streamLists: action.payLoad }
       default:
            return state;
    }
}