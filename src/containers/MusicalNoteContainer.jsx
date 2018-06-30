import { connect } from 'react-redux';
import React, { Component } from 'react';
import MusicalNote from '../components/MusicalNote';
import { updateFrequency } from '../actions';

let NUM_SAMPLES = 4096;
let signal = new Float32Array(NUM_SAMPLES);
let context = new (window.AudioContext || window.webkitAudioContext)();
let analyser = context.createAnalyser();
analyser.fftSize = NUM_SAMPLES;

class MusicalNoteContainer extends Component {
  constructor(props) {
    super(props);
    this.setupAudio = this.setupAudio.bind(this);
    this.processAudio = this.processAudio.bind(this);
  }

  componentWillMount() {
    console.log('COMPONENT WILLL MOUNT');
    this.setupAudio();
  }

  setupAudio() {
    console.log("setup audio");
    let audio = new Audio();
    audio.src = 'audio/whistling3.ogg'
    audio.loop = true;
    /* audio.addEventListener('canplay', () => {
     *   console.log("CANPLAY");
     */
      let stream = context.createMediaElementSource(audio);
      stream.connect(analyser);
      stream.connect(context.destination);
      this.processAudio();
    /* }) */
    this.processAudio();
    audio.play();
  }

  processAudio () {
    requestAnimationFrame(this.processAudio);
    analyser.getFloatTimeDomainData(signal);
    this.props.updateFrequency(signal);
  }

  render() {
    return(
      <MusicalNote {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  ...state.note,
});

export default connect(
  mapStateToProps,
  { updateFrequency }
)(MusicalNoteContainer);
