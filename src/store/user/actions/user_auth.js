import {
  AUTH_USER,
  UNAUTH_USER
} from '../constants';

export function authUser() {
  return function authUserThunk(dispatch) {
    dispatch({
      type: AUTH_USER,
      payload: 'Avishek Jana'
    })
  }
}

export function unauthUser() {
  return function unauthUserThunk(dispatch) {
    dispatch({
      type: UNAUTH_USER
    })
  }
}