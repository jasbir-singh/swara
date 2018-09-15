import { degreesToRadians, isEven } from './utils';
import { Tuner } from './Tuner';

class Meter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.dimensions = {
      height: this.canvas.height,
      width: this.canvas.width,
    };

    this.reDraw(0);
  }

  setupCanvas() {
    const { ctx, dimensions } = this;
    const { height, width } = dimensions;

    ctx.restore();
    ctx.clearRect (0, 0, width, height);
    ctx.save();

    // x = 200, y = 150
    // Move towards the centre
    ctx.translate(width / 2, height / 2);
    ctx.beginPath();

    // Centre dot
    ctx.arc(0, 0, 4, 0, 2 * Math.PI, false);
    ctx.lineWidth = 1.5;
    ctx.fill();


    // // Draw the meter
    ctx.save();
    ctx.rotate(degreesToRadians(90));
    Array.from({ length: 19 }, (x,j) => j*10).forEach(i => {
      const yCord = - (isEven(i/10) ? (height/2 - 10) : (height/2 - 5));
      ctx.moveTo(0, yCord);
      ctx.lineTo(0, - height/2);
      ctx.rotate(degreesToRadians(-10));
    });

    ctx.stroke();
    ctx.restore(); // Reset the roration
  }

  // An equally tempered semitone (the interval between two adjacent piano keys) spans 100 cents by definition
  drawNeedle(cents) {
    const { ctx, dimensions } = this;
    const { height, width } = dimensions;
    // Draw the needle
    ctx.rotate(degreesToRadians(90 * 2 * cents/100 ));
    ctx.moveTo(0,0);
    ctx.lineTo(0, - (height/2 - 20) );
    ctx.stroke();
  }

  reDraw(cents) {
    this.setupCanvas();
    this.drawNeedle(cents);
  }
}

export { Meter };
