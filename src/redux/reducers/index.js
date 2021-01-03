import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';

export default combineReducers({ tabs: tabsReducer });
