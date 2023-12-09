import * as React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

function sketch(p5) {
  let dots = [];
  let numDots = 7;
  let timeWarp = 0.0005;

  // size variables
  let pLength;
  let sDotMin = 20;
  let sDotMax = 60;
  let sCircleMin = 100;
  let sCircleMax = 450;
  let sVarMin = 10;
  let sVarMax = 50;

  // motion variables
  let ampMin = 0.3;
  let ampMax = 0.5;

  let colorPalette = ['#0096cc'];
  let hueVal;

  let canvas;

  p5.setup = () => {
    p5.frameRate(30);
    initSketch();
  };

  p5.windowResized = () => {
    initSketch();
  };

  p5.draw = () => {
    p5.randomSeed(90);
    p5.clear();

    // Update positions/size
    dots.forEach((d) => {
      d.run(p5.millis());
    });

    // Draw ring connections
    for (let i = 0; i < dots.length; i++) {
      let circle = dots[i];
      let next = dots[(i + 1) % dots.length];
      drawRing(circle, next);
    }

    // Draw dots
    p5.noStroke();
    dots.forEach((d) => {
      p5.fill(d.colorDot);
      p5.circle(d.position.x, d.position.y, d.sizeCircle);

      p5.fill(255);
      p5.circle(d.position.x, d.position.y, d.sizeDot);
    });
  };

  function initSketch() {
    let length = p5.windowWidth > p5.windowHeight ? p5.windowWidth : p5.windowHeight;
    canvas = p5.createCanvas(p5.windowWidth, length);
    canvas.position(0, 0);
    canvas.style('z-index', -20);
    p5.colorMode(p5.HSB, 100);

    // Distribute inital positions radially from screen mid point

    let inc = p5.TWO_PI / numDots;
    let delta = 0.3 * inc;

    pLength = 0.3 * length;
    sDotMin = 0.01 * length;
    sDotMax = 0.03 * length;
    sCircleMin = 0.05 * length;
    sCircleMax = 0.2 * length;
    sVarMin = 0.005 * length;
    sVarMax = 0.02 * length;

    dots = [];
    hueVal = p5.hue(p5.random(colorPalette));
    for (let i = 0; i < numDots; i++) {
      let theta = i * inc + p5.random(-delta, delta);
      let x = p5.windowWidth * (0.3 * p5.cos(theta) + 0.5);
      let y = p5.windowHeight * (0.3 * p5.sin(theta) + 0.5);
      let d = new Dottie(x, y);
      dots.push(d);
    }
  }

  function drawRing(a, b) {
    let centerX = (a.position.x + b.position.x) / 2;
    let centerY = (a.position.y + b.position.y) / 2;
    let diameter = p5.dist(a.position.x, a.position.y, b.position.x, b.position.y);

    let c = p5.color(hueVal, p5.random(0, 100), p5.random(20, 30), 50);
    p5.stroke(c);
    p5.strokeWeight(2);
    p5.noFill();

    p5.circle(centerX, centerY, diameter);
  }

  class Dottie {
    constructor(x, y) {
      // init positions
      this.origin = p5.createVector(x, y);
      this.position = p5.createVector(x, y);

      // init sizes
      let s = p5.floor(p5.random(sCircleMin, sCircleMax));
      this.sizeCircle = s;
      this.sizeCircleOG = s;
      this.sizeVar = p5.random(sVarMin, sVarMax);
      this.sizeDot = p5.floor(p5.random(sDotMin, sDotMax));

      // init color;
      this.colorDot = p5.color((hueVal + p5.random(-10, 10)) % 100, 100, 90, p5.random(10, 30));

      // init motion vars
      let ampX = (p5.random(0, 1) < 0.5 ? -1 : 1) * p5.random(ampMin, ampMax) * pLength;
      let ampY = (p5.random(0, 1) < 0.5 ? -1 : 1) * p5.random(ampMin, ampMax) * pLength;
      this.amplitude = p5.createVector(ampX, ampY);
      this.offset = p5.createVector(p5.random(0, p5.TWO_PI), p5.random(0, p5.TWO_PI));
      this.frequency = p5.random(0.5, 1.0) * timeWarp;
    }

    run(t) {
      this.position.x = this.origin.x + p5.sin(t * this.frequency + this.offset.x) * this.amplitude.x;
      this.position.y = this.origin.y + p5.cos(t * this.frequency + this.offset.y) * this.amplitude.y;
      this.sizeCircle = this.sizeCircleOG + (p5.sin(t * 0.0003 + this.offset.x) + 1) * this.sizeVar;
    }
  }
}

const BgSketch = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default BgSketch;
