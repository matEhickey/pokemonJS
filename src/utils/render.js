// @flow

import render from '../gameloop/main';
import PlayerController from '../gameloop/PlayerController';

function getCanvas(): HTMLElement {
  const context = document.getElementById('ecran');
  return context || document.createElement('canvas');
}

function getContext(): CanvasRenderingContext2D {
  const canvas = getCanvas();
  if (canvas instanceof HTMLCanvasElement) {
    return canvas.getContext('2d');
  }
  throw new Error('utils/render.getContext: can\'t get context of the canvas');
}

function animate(player: PlayerController) {
  const renderFunction = () => { render(player); };
  setInterval(renderFunction, player.fps);
}

export { getCanvas, getContext, animate };
