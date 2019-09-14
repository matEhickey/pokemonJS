// @flow

import PlayerController from '../gameloop/PlayerController';
import devRenderer from '../renderers/DevModeRenderer';
import type { Collision } from './Collision';

class Spawn implements Collision {
  nom: string;
  posX: number;
  posY: number;
  tailleX: number;
  tailleY: number;

  constructor(posX: number, posY: number, tailleX: number, tailleY: number) {
    this.nom = 'Spawn';
    this.posX = posX;
    this.posY = posY;
    this.tailleX = tailleX;
    this.tailleY = tailleY;
  }

  walkOn(player: PlayerController) {
    return (player.dresseur.posX > this.posX && player.dresseur.posX < this.posX + this.tailleX)
      && (player.dresseur.posY > this.posY && player.dresseur.posY < this.posY + this.tailleY);
  }

  isWalkable(coords: {x: number, y: number}) {
    if (coords.x + 11 > this.posX && coords.x < this.posX + this.tailleX) {
      if (coords.y + 8 > this.posY && coords.y - 8 < this.posY + this.tailleY) {
        return false;
      }
    }
    return true;
  }

  showDebug(player: PlayerController) {
    devRenderer.renderSpawn(this, player);
  }
}

export default Spawn;
