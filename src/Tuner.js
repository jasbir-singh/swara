import { Meter } from './Meter.js';

class Tuner {
  // {
  //   "note": "D",
  //   "octave": 6,
  //   "pitch": 1176,
  //   "cents": 2
  // }
  constructor() {
    this.$note = document.getElementById('musical-note');
    this.$frequency = document.getElementById('frequency');
    this.$octave = document.getElementById('octave');
    this.$meter = document.getElementById('meter');
    this.$cents = document.getElementById('cents');
    this.meter = new Meter(this.$meter);
  }

  dispatchNote(n) {
    const { octave , pitch, cents, note } = n;
    if (note) {
      this.$note.innerHTML = note;
      this.$frequency.innerHTML = pitch;
      this.$octave.innerHTML = octave;
      this.$cents.innerHTML = cents;
      this.meter.reDraw(cents);
    };
  }
};

export { Tuner };
