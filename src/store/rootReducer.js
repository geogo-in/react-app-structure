import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user/reducers/user';
import thunk from 'redux-thunk'
import { productReducer } from './products/reducers/product';

export const store = createStore(
  combineReducers({
    user: userReducer,
    product: productReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);