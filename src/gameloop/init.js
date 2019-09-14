// @flow

import PlayerController from './PlayerController';

import DevMode from '../utils/DevMode';
import initInput from './inputs';
import Grille from '../map/Grille';

import { animate, getContext } from '../utils/render';
import initMusique from '../UI/music';

function loadingScreen() {
  const context = getContext();

  context.save();
  context.fillStyle = '#000000';
  context.fillText('Chargement', 250, 250);
  context.restore();
}

export default function init() {
  loadingScreen();
  initMusique();

  DevMode.init();

  const player = new PlayerController();
  Grille.loadGrilles(player);
  player.setGrille(0);
  Grille.loadObjects();

  initInput(player);
  animate(player);
}
