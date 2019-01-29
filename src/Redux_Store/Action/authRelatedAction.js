import * as actionTypes from "./actionTypes";

export const signIn = (userId) => {
    return {
        type: actionTypes.SIGNED_IN,
        userId : userId
   }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGNED_OUT,
    }
}

export const createStream = (obj) => {
    return {
        type: actionTypes.CREATE_STREAM,
        payLoad : obj
    }
}

export const getStreamLists = () =>{
    return {
        type:actionTypes.GET_STREAMS_LIST,
    }
}

export const setStreamLists = (obj) =>{
    return {
        type:actionTypes.SET_STREAMS_LIST,
        payLoad : obj
    }
}

export const editStream = (obj) =>{
    console.log(obj);
    return {
        type:actionTypes.UPDATE_STREAM,
        payLoad : obj.id
    }
}

export const deleteStream = (obj) =>{
    console.log(obj);
    return {
        type:actionTypes.DELETE_STREAM,
        payLoad : obj.id
    }
}

