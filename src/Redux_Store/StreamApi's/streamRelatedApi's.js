
import axios from 'axios';
import {baseUrl} from '../../Config/config';

export const createStream = (action) => {
    return axios({
      method: 'POST',
      url: `${baseUrl}${action.url}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data:action.body
    })
  }

  export const getStreamData = (action) => {
    return axios({
      method: 'GET',
      url: `${baseUrl}${action.url}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  export const fetchStreamData = (action) => {
    return axios({
      method: 'GET',
      url: `${baseUrl}${action.url}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  