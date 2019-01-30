import { takeLatest } from "redux-saga/effects";


import * as actionTypes from "../Action/actionTypes";
import  { createStreamData, getStreamList, fetchStream, editStream, deleteStream }  from './streamRelatedSaga';


export function* watchStreamCreation() {
    yield takeLatest(actionTypes.CREATE_STREAM, createStreamData)
    yield takeLatest(actionTypes.GET_STREAMS_LIST, getStreamList) 
    yield takeLatest(actionTypes.GET_STREAM_DATA, fetchStream)
    yield takeLatest(actionTypes.UPDATE_STREAM, editStream)
    yield takeLatest(actionTypes.DELETE_STREAM, deleteStream)
}