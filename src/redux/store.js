import { createStore, combineReducers } from 'redux';
import contactReduser from './contacts/contactRedusers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  phonebook: contactReduser,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
