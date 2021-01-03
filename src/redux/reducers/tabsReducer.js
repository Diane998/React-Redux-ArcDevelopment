import { SET_TAB_INDEX } from '../actions/tabsActionTypes';

const INITIAL_STATE = {
  tabIndex: 0
};

const tabsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TAB_INDEX:
      return { ...state, tabIndex: action.payload };
    default:
      return state;
  }
};

export default tabsReducer;
