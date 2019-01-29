import * as actionTypes from '../Action/actionTypes';

const initState = {
    streamLists: []
}


export default function (state = initState, action) {
    switch (action.type) {
     case actionTypes.GET_STREAMS_LIST:
            return{ ...state, streamLists:action.payLoads}
       default:
            return state;
    }
}