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

const cents = (f1, f2) => (Math.round(1200 * Math.log(f1/f2)/Math.log(2)));

const frequencyFromNoteNumber =  note =>  {
  return 440 * Math.pow(2,(note-57)/12);
};

// A4  is 440 Hz
// C0 is key 0
// C#0 is key 1
export const noteFromPitch = frequency => {
  const key = 12 * Math.log(frequency/440)/Math.log(2) + 57;
  const noteNum = Math.round(key % 12);

  return {
    note: noteStrings[noteNum],
    octave: Math.trunc(key/12),
    pitch: frequency,
    cents: cents(frequency, frequencyFromNoteNumber(Math.round(key)))
  };
};


export const degreesToRadians = (d) => (d * Math.PI/180);
export const isEven = (n) => (n % 2 === 0);
export const isOdd = (n) => (Math.abs(n % 2) === 1);
