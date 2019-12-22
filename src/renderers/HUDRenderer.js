// @flow

import HUD from '../UI/HUD';
import Font from '../utils/Font';
import PlayerController from '../gameloop/PlayerController';

import { getContext, getWidthHeight } from '../utils/render';


class HUDRenderer {
  hud: HUD;

  constructor(hud: HUD) {
    this.hud = hud;
  }

  displayFail(player: PlayerController) {
    const context = getContext();
    const { width, height } = getWidthHeight();

    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    context.fillStyle = player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.medium;
    context.fillText('Vos pokemons sont tous K.O', 65, 250);
    context.font = Font.little;
    context.fillText('Vous avez perdu', 65, 300);
    context.font = '15px Georgia';
    context.fillText('(Appuyer sur une touche)', 65, 350);
  }

  displayInfo(player: PlayerController) {
    const infos = player.info;
    const context = getContext();

    if (infos) {
      context.fillStyle = player.couleurPrefere;
      context.fillRect(50, 350, 800, 250);
      context.fillStyle = '#000000';
      context.font = Font.little;
      context.fillText(infos, 60, 380);
      return;
    }
    throw new Error('HUDRenderer.displayInfo: no player.info');
  }

  displayWinCapture(player: PlayerController): void {
    const context = getContext();
    const pokemonCapture = player.getPokemonCapture();

    if (pokemonCapture) {
      context.fillStyle = player.couleurPrefere;
      context.fillRect(50, 350, 800, 250);
      context.fillStyle = '#000000';
      context.font = Font.little;
      context.fillText('Bravo, vous avez capturé un :', 160, 380);
      context.fillText(pokemonCapture.getName(), 200, 430);
      context.fillText(`Niveau ${pokemonCapture.lvl}`, 160, 480);

      pokemonCapture.afficheToiAt(550, 400);
    }
    else {
      throw new Error('HUDRenderer.pokemonCapture: no player.getPokemonCapture');
    }
  }
}

export default HUDRenderer;
