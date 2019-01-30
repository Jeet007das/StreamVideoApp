import * as actionTypes from '../Action/actionTypes';

const initState = {
    streamLists: [],
    streamData:{}
}


export default function (state = initState, action) {
switch (action.type) {
     case actionTypes.GET_STREAMS_LIST:
            return {...state, streamData: {}}
     case actionTypes.SET_STREAMS_LIST:
            return{...state, streamLists : action.payLoad }
     case actionTypes.GET_STREAM_DATA:
            return{...state}
     case actionTypes.SET_STREAM_DATA:
            return{...state, streamData: action.payLoad}
     case actionTypes.UPDATE_STREAM:
            return{...state, streamLists : action.payLoad }
     case actionTypes.DELETE_STREAM:
            return{...state, streamLists: null }
     default:
            return state;
    }
}