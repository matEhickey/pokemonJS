// @flow

import { getContext } from '../utils/render';
import PlayerController from '../gameloop/PlayerController';
import type { Collision } from './Collision';

// Adapter pour creer automatiquement via devMode

class Batiment implements Collision {
  nom: string;
  texture: HTMLImageElement;
  posX: number;
  posY: number;
  tailleX: number;
  tailleY: number;
  context: CanvasRenderingContext2D;

  constructor(
    nom: string,
    texture: HTMLImageElement,
    posX: number,
    posY: number,
    tailleX: number,
    tailleY: number,
  ) {
    this.nom = nom;
    this.texture = texture;
    this.posX = posX;
    this.posY = posY;
    this.tailleX = tailleX;
    this.tailleY = tailleY;

    this.context = getContext();
  }

  displayName() {
    console.log(this.nom);
  }

  afficheToi(player: PlayerController): void {
    const { posX, posY } = player.dresseur;
    this.context.drawImage(
      this.texture,
      (this.posX - posX) * 3 + 340,
      (this.posY - posY) * 3 + 280,
      this.tailleX,
      this.tailleY,
    );
  }

  isWalkable(coords: {x: number, y: number}): bool {
    return (!this.isOnPosition(coords.x, coords.y));
  }

  isOnPosition(x: number, y: number): bool {
    if (x > this.posX && x < this.posX + (this.tailleX / 2.7)) {
      if (y > this.posY && y < this.posY + (this.tailleY / 2.5)) {
        return (true);
      }
    }
    return (false);
  }

  showDebug(player: PlayerController): void {
    const { posX, posY } = player.dresseur;
    const context = getContext();

    context.fillStyle = 'rgba(0, 0, 0, 0.5)';

    context.fillRect(
      this.posX * 3 - (posX * 3) + 340,
      this.posY * 3 - (posY * 3) + 280,
      this.tailleX,
      this.tailleY,
    );
  }
}

export default Batiment;
