// @flow

import PlayerController from '../gameloop/PlayerController';
import type { Collision } from './Collision';
import devRenderer from '../renderers/DevModeRenderer';


class Objet implements Collision {
  nom: string;
  coordX: number;
  coordY: number;
  tailleX: number;
  tailleY: number;
  walkable: bool = false;

  // Pour collision quelquonque dans mode de deplacement
  constructor(nom: string, x: number, y: number, tX: number, tY: number) {
    this.nom = nom;
    this.coordX = x;
    this.coordY = y;
    this.tailleX = tX;
    this.tailleY = tY;
  }

  isWalkable(coords: {x: number, y: number}) {
    if (this.walkable) {
      return true;
    }

    if (coords.x + 11 > this.coordX && coords.x < this.coordX + this.tailleX) {
      if (coords.y + 8 > this.coordY && coords.y - 8 < this.coordY + this.tailleY) {
        return false;
      }
    }
    return true;
  }

  showDebug(player: PlayerController) {
    devRenderer.renderObjet(this, player);
  }
}

export default Objet;
