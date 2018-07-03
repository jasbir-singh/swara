import { React, { Component } } from 'react';

class CircleOfNotes extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
  }

  render() {
    <div>
      <canvas>
      </canvas>
    </div>
  }
}
