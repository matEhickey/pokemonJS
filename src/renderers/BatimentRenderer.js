// @flow

import Batiment from '../map/Batiment';
import PlayerController from '../gameloop/PlayerController';
import { getContext } from '../utils/render';

class BatimentRenderer {
  batiment: Batiment;

  constructor(batiment: Batiment) {
    this.batiment = batiment;
  }

  render(player: PlayerController) {
    const context = getContext();
    const { posX, posY } = player.dresseur;

    context.drawImage(
      this.batiment.texture,
      (this.batiment.posX - posX) * 3 + 340,
      (this.batiment.posY - posY) * 3 + 280,
      this.batiment.tailleX,
      this.batiment.tailleY,
    );
  }
}

export default BatimentRenderer;
