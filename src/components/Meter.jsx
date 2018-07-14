// https://github.com/brucemcpherson/canvas-meter/blob/master/src/lib/meter.js
import React, { Component } from 'react';
import { degreesToRadians, isEven } from '../utils';

class Meter extends Component {
  setupCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const width= canvas.width;
    let height = canvas.height;
    ctx.clearRect (0,0,width,height);
    ctx.save();

    ctx.translate(300, 200);
    ctx.beginPath();

    ctx.arc(0, 0, 4, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fill();


    // Draw the metere
    ctx.rotate(degreesToRadians(-90));
    Array.from({ length: 19 }, (x,j) => j*10).forEach(i => {
      const yCord = isEven(i/10) ? -90 : -95;
      ctx.moveTo(0, yCord);
      ctx.lineTo(0, -100);
      ctx.rotate(degreesToRadians(10));
    });
  }

  draw() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const cents = this.props.cents || 0;

    // Draw the needle
    ctx.rotate(degreesToRadians(-90)); // Reset the roration

    ctx.rotate(degreesToRadians(90 * 2 * cents/100 ));
    ctx.moveTo(0,0);
    ctx.lineTo(0, -80);
    ctx.rotate(degreesToRadians(- 90 * 2 * cents/100 ));

    ctx.stroke();
  }

  animate() {
    this.setupCanvas();
    this.draw();
  }

  componentDidMount() {
    this.animate();
    requestAnimationFrame(this.animate.bind(this));
  }

  componentDidUpdate() {
    this.setupCanvas();
    this.draw();
  }

  render() {
    return(
      <div>
        <canvas ref='canvas' width='600px' height='400px'>
        </canvas>
      </div>
    )
  }
};

export default Meter;
