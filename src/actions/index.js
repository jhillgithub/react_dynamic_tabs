export const ADD_TAB = 'ADD_TAB';

export function add_tab(newTabData) {
  return {
    type: ADD_TAB,
    payload: newTabData
  }
}
