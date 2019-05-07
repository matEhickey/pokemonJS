// @flow

import { getContext } from '../utils/render';
import PlayerController from '../gameloop/PlayerController';
import type { Collision } from './Collision';

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
    const { posX, posY } = player.dresseur;
    const context = getContext();

    context.fillStyle = 'rgba(0, 0, 0, 0.5)';

    context.fillRect(
      this.coordX * 3 - (posX * 3) + 340,
      this.coordY * 3 - (posY * 3) + 280,
      this.tailleX * 3,
      this.tailleY * 3,
    );
  }
}

export default Objet;
