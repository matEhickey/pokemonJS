// @flow

import render from '../gameloop/main';
import PlayerController from '../gameloop/PlayerController';


function createCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'ecran';
  canvas.width = 900;
  canvas.height = 680;

  if (document.body) {
    document.body.append(canvas);
  }
  return (canvas);
}

function getCanvas(): HTMLElement {
  const canvas = document.getElementById('ecran');
  return canvas || createCanvas();
}

function getContext(): CanvasRenderingContext2D {
  const canvas = getCanvas();
  if (canvas instanceof HTMLCanvasElement) {
    return canvas.getContext('2d');
  }
  throw new Error('utils/render.getContext: can\'t get context of the canvas');
}

function getWidthHeight():{width: number, height: number} {
  const canvas = getCanvas();
  const width = parseInt(canvas.getAttribute('width'), 10);
  const height = parseInt(canvas.getAttribute('height'), 10);
  return { width, height };
}

function animate(player: PlayerController): void {
  const renderFunction = () => { render(player); };
  setInterval(renderFunction, player.fps);
}

function clearCanvas() {
  const context = getContext();
  const canvas = getCanvas();
  const width = parseInt(canvas.getAttribute('width'), 10);
  const height = parseInt(canvas.getAttribute('height'), 10);

  context.save();
  context.clearRect(0, 0, width, height);
}

export { getCanvas, getContext, clearCanvas, getWidthHeight, animate };
