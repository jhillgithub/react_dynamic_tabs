import { ADD_TAB } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TAB:
      return [ action.payload, ...state ];
      break;
    default:
      return state;
  }
  return state;
}
