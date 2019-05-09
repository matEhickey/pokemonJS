// @flow

import BUTTON from './touches';
import PlayerController from './PlayerController';

function keyPress(player: PlayerController, event) {
  player.actions(event.keyCode);
}

function releaseKey(player: PlayerController) {
  player.dresseur.idle = true;
}

function initInput(player: PlayerController) {
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
}


export default initInput;
