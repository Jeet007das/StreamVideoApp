import { put, call, all } from "redux-saga/effects";
import * as actions from "../Action";
import { createStream, getStreamData } from "../StreamApi's/streamRelatedApi's";
import swal from 'sweetalert';


export function* createStreamData(action) {
    try {
        let response = yield call(createStream, {url: '/streams', body: action.payLoad}) 
        if(response.status === 201)
        {
            swal("Stream connected successfully");
        }
        else{
            swal("Network Connection Problem");
        }
    } catch (err) {
        swal("Network Connection Problem");
    }
}

export function* getStreamList(action) {
    try{
        let response = yield call(getStreamData, {url:'/streams'})
        if(response.status === 200){
            yield put(actions.setStreamLists(response.data))
        }
    }catch(err){
        console.log(err);
        swal("Network Connection Problem");
    }
}
