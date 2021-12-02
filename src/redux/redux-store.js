import accountReducer from './accountReducer';
import authorizationReducer from './authorizationReducer';
import registrationReducer from './registrationReducer';
const { createStore, combineReducers } = require('redux');

let reducers = combineReducers({
  authorizationReducer,
  accountReducer,
  registrationReducer,
});

let store = createStore(reducers);
export default store;
