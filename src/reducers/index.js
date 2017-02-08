import { combineReducers } from 'redux';

import tabsReducer from './reducer_tabs';

const rootReducer = combineReducers({
  tabs: tabsReducer
});

export default rootReducer;
