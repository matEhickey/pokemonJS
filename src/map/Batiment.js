// @flow

import PlayerController from '../gameloop/PlayerController';
import BatimentRenderer from '../renderers/BatimentRenderer';
import devRenderer from '../renderers/DevModeRenderer';
import type { Collision } from './Collision';

// Adapter pour creer automatiquement via devMode
class Batiment implements Collision {
  nom: string;
  texture: HTMLImageElement;
  posX: number;
  posY: number;
  tailleX: number;
  tailleY: number;
  renderer: BatimentRenderer

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
    this.renderer = new BatimentRenderer(this);
    // this.context = getContext();
  }

  afficheToi(player: PlayerController): void {
    this.renderer.render(player);
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
    devRenderer.renderBatiment(this, player);
  }
}

export default Batiment;
