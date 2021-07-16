import axios from 'axios';
import {
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE
} from '../constants';

import { API_BASE_URL } from '../../../config/constants';



export default function fetchProduct(id) {
  return function fetch (dispatch) {
    dispatch({
      type: PRODUCT_FETCH_REQUEST
    })
    axios.get(`${API_BASE_URL}/products/${id}.json`)
      .then(response => {
        dispatch({
          type: PRODUCT_FETCH_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: PRODUCT_FETCH_FAILURE,
          payload: 'Something went wrong'
        })
      })
  }
}