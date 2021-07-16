import { PlaylistAddOutlined } from '@material-ui/icons';
import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAILURE,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILURE
} from '../constants';

const INITIAL_STATE = {
  all: [],
  selected: null,
  isFetching: false,
  isError: false,
  errorMessage: ''
}

export function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        all: action.payload
      }      
    case PRODUCTS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload
      }    
    case PRODUCT_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case PRODUCT_FETCH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        isFetching: false,
        selected: action.payload
      }      
    case PRODUCT_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        errorMessage: action.payload
      }                  
    default:
      return state
  }
}

// Selectors
export const getAllProducts = state => state.product.all
export const getIsProductFetching = state => state.product.isFetching
export const getSelectedProduct = state => state.product.selected