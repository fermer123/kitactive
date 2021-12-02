const { createStore } = require('redux');
import authorizationReducer from './authorizationReducer';
import accountReducer from './accountReducer';
import registrationReducer from './registrationReducer';

let reducers = combineReducers({
  authorizationReducer,
  accountReducer,
  registrationReducer,
});

let store = createStore(reducers);
export default store;
