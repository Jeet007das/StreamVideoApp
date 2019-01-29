import { put, call } from "redux-saga/effects";
import * as actions from "../Action";
import { createStream, getStreamData, fetchStreamData } from "../StreamApi's/streamRelatedApi's";
import swal from 'sweetalert';
import history from '../../routingHistory';


export function* createStreamData(action) {
    try {
        let response = yield call(createStream, {url: '/streams', body: action.payLoad}) 
        if(response.status === 201)
        {
            swal("Stream Submitted successfully");
            history.push('/')
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

export function* fetchStream(action) {
    try{
        if(action.payLoad){
            let response = yield call(fetchStreamData, {url:`/streams?id=${action.payLoad.id}` })
            if(response.status === 200)
            {
                yield put(actions.setfetchStream(response.data))
            }
        }
       
    }catch(err){
        console.log(err);
        swal("Network Connection Problem");
    }
}
