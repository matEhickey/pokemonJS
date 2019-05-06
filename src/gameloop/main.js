// @flow

import { getCanvas, getContext } from '../utils/render';
import DevMode from '../utils/DevMode';
import PlayerMode from '../types/PlayerMode';
import PlayerController from './PlayerController';

export default function render(player: PlayerController) { // Moteur d affichage
  const context = getContext();
  const canvas = getCanvas();
  const width = parseInt(canvas.getAttribute('width'), 10);
  const height = parseInt(canvas.getAttribute('height'), 10);

  context.save();
  context.clearRect(0, 0, width, height);

  player.grille.show();

  switch (player.mode) {
    case PlayerMode.MAP:
      player.update();
      if (DevMode.dev) { player.grille.showDebug(); }
      break;

    case PlayerMode.HUD:
      player.hud.show();
      break;

    case PlayerMode.FIGHT:
      const { combat } = player;
      if (combat) {
        combat.drawCombat();
        combat.runTour();
        break;
      }
      throw new Error('main.render: no combat in combat mode');

    default:
      console.error(`main.render: no compatible option ${player.mode.toString()}`);
  }

  context.restore();
}
