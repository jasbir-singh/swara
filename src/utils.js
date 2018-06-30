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
    octave: Math.trunc(noteNum/12),
    pitch: frequency,
  };
};

const frequencyFromNoteNumber =  note =>  {
  return 440 * Math.pow(2,(note-57)/12);
};


export { noteFromPitch }
