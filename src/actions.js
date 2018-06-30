import detectPitch from 'detect-pitch';
import { noteFromPitch } from './utils';

const updateFrequency = (signal) => (dispatch) => {
  let note;
  const period = detectPitch(signal, 0.2);
  let pitch = -1;

  if (period) {
    pitch = Math.round(44100.0 / period);
    note = noteFromPitch(pitch);
  };

  return dispatch({
    type: 'UPDATE_FREQUENCY',
    note: note,
  });
};

export {
  updateFrequency
}
