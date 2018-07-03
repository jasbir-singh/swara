import React, { Component } from 'react';

const degreesToRadians = (d) => (d * Math.PI/180);
const isEven = (n) => (n % 2 == 0);
const isOdd = (n) => (Math.abs(n % 2) == 1);

class Meter extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');


    ctx.beginPath();
    ctx.translate(300, 200)

    ctx.arc(0, 0, 4, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fill();

    ctx.moveTo(0,0);
    ctx.lineTo(0, -80);

    ctx.rotate(degreesToRadians(-90));
    Array.from({ length: 19 }, (x,j) => j*10).forEach(i => {
      const yCord = isEven(i/10) ? -90 : -95;
      ctx.moveTo(0, yCord);
      ctx.lineTo(0, -100);
      ctx.rotate(degreesToRadians(10));
    });

    ctx.stroke();


    /* ctx.arc(150, 150, 100, 0, Math.PI, true); */
    /* ctx.ellipse(200, 200, 200, 75, 0, 0, 2 * Math.PI); */
  }

  render() {
    return(
      <div>
        <canvas ref='canvas' width='600px' height='400px'>
        </canvas>
      </div>
    )
  }
}

export default Meter;
