// @flow

import BUTTON from './touches';
import PlayerController from './PlayerController';
import DevMode from '../utils/DevMode';

import { getCanvas } from '../utils/render';
import Spawn from '../map/Spawn';

const keyPress = (player: PlayerController, event) => {
  player.actions(event.keyCode);
};

const releaseKey = (player: PlayerController) => {
  player.dresseur.idle = true;
};

const keyboardInputs = (player: PlayerController) => {
  window.addEventListener('keydown', (e) => {
    if (
      [
        BUTTON.UP,
        BUTTON.DOWN,
        BUTTON.LEFT,
        BUTTON.RIGHT,
        BUTTON.PAUSE,
        BUTTON.CONFIRM,
        BUTTON.BACK,
        BUTTON.C,
        BUTTON.H].indexOf(e.keyCode) > -1) {
      e.preventDefault();
      keyPress(player, e);
    }
  }, false);

  window.addEventListener('keyup', () => {
    releaseKey(player);
  }, false);
};

const mouseInputs = (player: PlayerController) => {
  const canvas = getCanvas();
  if (DevMode.dev) {
    canvas.addEventListener('mousedown', (e: MouseEvent) => {
      console.log(`down ${e.clientX} : ${e.clientY}`);
    }, false);
    canvas.addEventListener('mouseup', (e: MouseEvent) => {
      console.log(`up ${e.clientX} : ${e.clientY}`);
      player.grille.ajouteSpawn(
        new Spawn(
          (player.dresseur.posX + e.clientX) + 340,
          (player.dresseur.posY + e.clientY) + 280,
          100,
          100,
        ),
      );
      // grille.ajouteHerbe(new Herbe(1038, 18, 72, 42, 20));
    }, false);
  }
};

const initInput = (player: PlayerController) => {
  keyboardInputs(player);
  mouseInputs(player);
};

export default initInput;
