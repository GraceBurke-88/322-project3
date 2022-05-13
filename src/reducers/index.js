import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import accountsReducer from './accountsReducer';
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
  errors: errorReducer,
  accounts: accountsReducer,
  transactions: transactionsReducer
});