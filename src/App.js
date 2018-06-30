import React, { Component } from 'react';
import styled from 'styled-components';
import detectPitch from 'detect-pitch';

const StyledApp = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNote = styled.p`
  font-size: 200px;
`
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
  }
};

const frequencyFromNoteNumber =  note =>  {
  return 440 * Math.pow(2,(note-57)/12);
};

let NUM_SAMPLES = 4096;
let signal = new Float32Array(NUM_SAMPLES);
let context = new (window.AudioContext || window.webkitAudioContext)();
let analyser = context.createAnalyser();
analyser.fftSize = NUM_SAMPLES;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: 'C#',
      pitch: 0,
    }
    this.setupAudio = this.setupAudio.bind(this);
    this.processAudio = this.processAudio.bind(this);
  }

  componentWillMount() {
    this.setupAudio();
    // navigator.mediaDevices.getUserMedia({
    //   audio: true
    // }).then(stream => {
    //   let mediaStreamSource = context.createMediaStreamSource(stream);
    //   mediaStreamSource.connect(analyser);
    //   setInterval(this.updatePitch, 250);
    //   /* requestAnimationFrame(this.updatePitch); */
    // }).catch(err => {
    //   // TODO: Handle err;
    //   console.log(err);
    // });
  }

  setupAudio() {
    let audio = new Audio()
    audio.src = 'audio/whistling3.ogg'
    audio.loop = true
    audio.addEventListener('canplay', () => {
      let stream = context.createMediaElementSource(audio);
      stream.connect(analyser);
      stream.connect(context.destination);
      this.processAudio();
    })
    this.processAudio();
    audio.play();
  }

  processAudio () {
    requestAnimationFrame(this.processAudio);
    analyser.getFloatTimeDomainData(signal);
    let period = detectPitch(signal, 0.2);
    let pitch = -1;
    /* console.log(`Period is ${period}`); */

    if (period) {
      pitch = Math.round(44100.0 / period);
      const note = noteFromPitch(pitch);
      console.log(`Note: ${note.note}`);
      this.setState({
        pitch: pitch,
        note: note.note
      });
    }
  }

  render() {
    return (
      <StyledApp className="App">
        <StyledNote>
          { this.state.note }
          <br/>
          <span>
            { this.state.pitch } Hz
          </span>
        </StyledNote>
      </StyledApp>
    );
  }
}

export default App;
