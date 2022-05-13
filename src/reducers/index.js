import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer';
import errorReducer from './errorReducer';
import accountsReducer from './accountsReducer';
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
  tasks: tasksReducer,
  errors: errorReducer,
  accounts: accountsReducer,
  transactions: transactionsReducer
});