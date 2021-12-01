const { createStore } = require('redux');
import authorization from './authorization';
import account from './account';
import registration from './registration';

let reducers = combineReducers({
  account: account,
  authorization: authorization,
  registration: registration,
});

let store = createStore(reducers);
export default store;
