import detectPitch from 'detect-pitch';

const noteStrings = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

// A4  is 440 Hz
const noteFromPitch = frequency => {
  const noteNum = 12 * Math.log(frequency/440)/Math.log(2) + 57;

  return {
    note: noteStrings[Math.round(noteNum % 12)],
    octave: Math.trunc(noteNum/12)
  };
};

const frequencyFromNoteNumber =  note =>  {
  return 440 * Math.pow(2,(note-57)/12);
};

const updateFrequency = (signal) => {
  let note;
  const period = detectPitch(signal, 0.2);
  let pitch = -1;
  /* console.log(`Period is ${period}`); */

  if (period) {
    pitch = Math.round(44100.0 / period);
    note = noteFromPitch(pitch);
    console.log(`Note: ${note.note}`);
  };

  return {
    type: 'UPDATE_FREQUENCY',
    note: note,
    pitch: pitch,
  };
};

export {
  updateFrequency
}
