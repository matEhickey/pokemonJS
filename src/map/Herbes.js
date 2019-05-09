// @flow

import PlayerController from '../gameloop/PlayerController';
import devRenderer from '../renderers/DevModeRenderer';


class Herbe {
  posX: number;
  posY: number;
  tailleX: number;
  tailleY: number;
  puissance: number;

  constructor(posX: number, posY: number, tailleX: number, tailleY: number, puissance: number) {
    this.posX = posX;
    this.posY = posY;
    this.tailleX = tailleX;
    this.tailleY = tailleY;

    this.puissance = puissance;
    // pour qq niveau de pokemon presents,
    // pourra etre complexifier sur les types,
    // genre une liste de types possibles
  }

  walkOn(player: PlayerController) {
    return (player.dresseur.posX > this.posX && player.dresseur.posX < this.posX + this.tailleX)
      && (player.dresseur.posY > this.posY && player.dresseur.posY < this.posY + this.tailleY);
  }

  getPuissance() {
    return this.puissance;
  }

  showDebug(player: PlayerController) {
    devRenderer.renderHerbe(this, player);
  }
}

export default Herbe;
