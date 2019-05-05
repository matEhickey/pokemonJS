// @flow

import render from '../gameloop/main';
import PlayerController from '../gameloop/PlayerController';

function getCanvas() {
  const context = document.getElementById('ecran');
  if (context) return context;
}

function getContext() {
  return getCanvas().getContext('2d');
}

function animate(player: PlayerController) {
  const renderFunction = () => { render(player); };
  setInterval(renderFunction, player.fps);
}

export { getCanvas, getContext, animate };
