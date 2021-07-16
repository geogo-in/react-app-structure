
import { AUTH_USER, UNAUTH_USER } from "../constants";
const INITIAL_STATE = {
  name: '',
  isAuth: false
}

export function userReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case AUTH_USER:
      return {...state, isAuth: true, name: action.payload}
    case UNAUTH_USER:
      return {...state, isAuth: false, name: ''}
    default:
      return state;
  }
}

// Selectors
export const getName = state => state.user.name
export const getIsAuthenticated = state => state.user.isAuth
