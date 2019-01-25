import * as actionTypes from '../Action/actionTypes';

const initState = {
    isSignedIn: null,
    userId: null
}


export default function (state = initState, action) {
    switch (action.type) {
        case actionTypes.SIGNED_IN:
            return { ...state, isSignedIn : true, userId: action.userId};
        case actionTypes.SIGNED_OUT:
            return { ...state, isSignedIn : false, userId: null };
        default:
            return state;
    }
}