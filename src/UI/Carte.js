// @flow

import Porte from '../map/Porte';
import EndroitCarte from './EndroitCarte';

import PlayerController from '../gameloop/PlayerController';

class Carte {
  player: PlayerController;
  endroits: Array<EndroitCarte> = [];
  selection: number = 0;

  constructor(player: PlayerController) {
    this.player = player;
  }

  addEndroit(endroit: EndroitCarte) {
    this.endroits.push(endroit);
  }

  selectP() {
    this.selection += 1;
    if (this.selection >= this.endroits.length) {
      this.selection = 0;
    }
  }

  selectM() {
    this.selection -= 1;
    if (this.selection < 0) {
      this.selection = this.endroits.length - 1;
    }
  }

  voyage() {
    this.endroits[this.selection].rejoindreDestination(this.player);
  }
}

function ChargeCarte(player: PlayerController) {
  player.carte.addEndroit(new EndroitCarte(
    'Foret',
    240,
    220,
    new Porte(0, 0, 5, 5, 0, 0, 'foret1'),
    player.hud.menu.renderer,
  ));

  player.carte.addEndroit(new EndroitCarte(
    'Argenta',
    310,
    395,
    new Porte(-102, 30, 5, 5, 18, 198, 'argenta'),
    player.hud.menu.renderer,
  ));
}

export default Carte;
export { ChargeCarte };
