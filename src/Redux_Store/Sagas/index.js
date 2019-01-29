import { takeLatest } from "redux-saga/effects";


import * as actionTypes from "../Action/actionTypes";
import  { createStreamData, getStreamList }  from './streamRelatedSaga';


export function* watchStreamCreation() {
    yield takeLatest(actionTypes.CREATE_STREAM, createStreamData)
    yield takeLatest(actionTypes.GET_STREAMS_LIST, getStreamList)
}