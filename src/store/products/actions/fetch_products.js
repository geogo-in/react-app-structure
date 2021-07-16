import axios from 'axios';
import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILURE
} from '../constants';

import { API_BASE_URL } from '../../../config/constants';



export default function fetchProducts() {
  return function fetch (dispatch) {
    dispatch({
      type: PRODUCTS_FETCH_REQUEST
    })
    axios.get(`${API_BASE_URL}/products.json`)
      .then(response => {
        dispatch({
          type: PRODUCTS_FETCH_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: PRODUCTS_FETCH_FAILURE,
          payload: 'Something went wrong'
        })
      })
  }
}