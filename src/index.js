import './index.css';
import { signalToNote } from './utils';
import { Tuner } from './Tuner';

const NUM_SAMPLES = 4096;
class MusicalNote {
  constructor() {
    this.tuner = new Tuner();
    this.signal = new Float32Array(NUM_SAMPLES);
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.context.createAnalyser();
    this.analyser.fftSize = NUM_SAMPLES;

    this.setupAudio = this.setupAudio.bind(this);
    this.processAudio = this.processAudio.bind(this);
    this.setupAudio();
  }

  setupAudio() {
    const { context, analyser } = this;
    let audio = new Audio();
    audio.src = 'audio/whistling3.ogg';
    audio.loop = true;
    audio.addEventListener('canplay', () => {
      let stream = context.createMediaElementSource(audio);
      stream.connect(analyser);
      stream.connect(context.destination);
      this.processAudio();
    });
    audio.play();
  }

  processAudio () {
    const { analyser, signal } = this;

    requestAnimationFrame(this.processAudio);
    analyser.getFloatTimeDomainData(signal);
    const note = signalToNote(signal);

    if (note) this.tuner.dispatchNote(note);;
  }
}

window.addEventListener("load", () => {
  const musicalNote = new MusicalNote();
});
