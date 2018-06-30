// import { combineReducers } from 'redux';

const initialState = {
  note: {
    note: 'A#',
    octave: 4,
    frequency: 440
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
  case 'UPDATE_FREQUENCY':
    return {
      ...state,
      note: action.note
    };
  default:
    return state;
  }
};
