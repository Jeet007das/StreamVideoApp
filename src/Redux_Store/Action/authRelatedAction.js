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

export const getfetchStream = (obj) =>{
    return {
        type:actionTypes.GET_STREAM_DATA,
        payLoad : obj
    }
}

export const setfetchStream = (obj) =>{
    console.log(obj);
    return {
        type:actionTypes.SET_STREAM_DATA,
        payLoad : obj
    }
}

export const editStream = (id, obj) =>{
    console.log(obj);
    return {
        type:actionTypes.UPDATE_STREAM,
        id,
        formData : obj
    }
}

export const deleteStream = (id) =>{
    console.log(id);
    return {
        type:actionTypes.DELETE_STREAM,
        payLoad : id
    }
}

