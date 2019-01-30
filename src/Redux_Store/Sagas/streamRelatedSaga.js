import { put, call } from "redux-saga/effects";
import * as actions from "../Action";
import { createStream, getStreamData, fetchStreamData, editStreamData, deleteStreamData } from "../StreamApi's/streamRelatedApi's";
import swal from 'sweetalert';
import history from '../../routingHistory';


export function* createStreamData(action) {
    try {
        let response = yield call(createStream, {url: '/streams', body: action.payLoad}) 
        if(response.status === 201)
        {
            swal("Stream Created successfully", {
                icon: "success",
              });
            history.push('/')
        }
        else{
            swal("Network Connection Problem",{
                icon: "warning",
              });
        }
    } catch (err) {
        swal("Network Connection Problem",{
            icon: "warning",
          });
    }
}

export function* getStreamList(action) {
    try{
        let response = yield call(getStreamData, {url:'/streams'})
        if(response.status === 200){
            yield put(actions.setStreamLists(response.data))
        }
    }catch(err){
        console.error(err);
        swal("Network Connection Problem",{
            icon: "warning",
          });
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
        console.error(err);
        swal("Network Connection Problem");
    }
}

export function* editStream(action) {
    try {
        if (action.formData) {
            let response1 = yield call(editStreamData, { url: `/streams/${action.id}`, body: action.formData })
            if (response1.status === 200) {
                
                swal("Stream Updated Successfully", {
                    icon: "success",
                });
                history.push('/')    
            }else{
                swal("Stream Not Found", {
                    icon: "warning",
                });
            }
        }

    } catch (err) {
        console.error(err);
        swal("Network Connection Problem", {
            icon: "warning",
        });
    }
}

export function* deleteStream(action) {
     console.log(action);
    
    try{
        
        if(action.payLoad){
            let response = yield call(deleteStreamData, {url:`/streams/${action.payLoad}`})
            if(response.status === 200)
            {
                swal("Stream Deleted Successfully", {
                    icon: "success",
                  });
                history.push('/')
            }else{
                swal("Stream Not Found", {
                    icon: "warning",
                });
            }
        }
   
    }catch(err){
        console.error(err);
        swal("Network Connection Problem",{
            icon: "warning",
          });
    }
}

