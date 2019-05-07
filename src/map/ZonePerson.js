// @flow

import { getContext } from '../utils/render';
import { ColorDebug } from '../utils/Color';
import Orientation from '../types/Orientation';
import Person from './Person';
import PlayerController from '../gameloop/PlayerController';

class ZonePerson {
  taille: number = 20;
  dresseur: Person;

  constructor(dresseur: Person) {
    this.taille = 20;
    this.dresseur = dresseur;
  }

  getCoordinates() {
    const dresseurCoords = this.dresseur.getCoordinates();
    const addTailleCoords = {
      x: 0,
      y: 0,
      tailleX: 0,
      tailleY: 0,
    };

    switch (this.dresseur.orientation) {
      case Orientation.South:
        addTailleCoords.y += this.taille - 5;
        addTailleCoords.tailleY += this.taille;
        break;
      case Orientation.West:
        addTailleCoords.x -= this.taille;
        addTailleCoords.tailleX += this.taille;
        break;
      case Orientation.East:
        addTailleCoords.x += this.taille - 5;
        addTailleCoords.tailleX += this.taille;
        break;
      case Orientation.North:
        addTailleCoords.y -= this.taille;
        addTailleCoords.tailleY += this.taille;
        break;
      default:
        console.warn('ZonePerson.showDebug: no orientation option');
    }

    const { x, y, tailleX, tailleY } = {
      x: dresseurCoords.x + addTailleCoords.x,
      y: dresseurCoords.y + addTailleCoords.y,
      tailleX: dresseurCoords.tailleX / 3 + addTailleCoords.tailleX,
      tailleY: dresseurCoords.tailleY / 3 + addTailleCoords.tailleY,
    };

    return {
      x,
      y,
      tailleX,
      tailleY,
      mx: x + tailleX,
      my: y + tailleY,
    };
  }

  isWalkOn(player: PlayerController) {
    const zoneCoords = this.getCoordinates();
    const playerCoords = player.dresseur.getCoordinates();

    return (
      (playerCoords.x + (playerCoords.tailleX / 3) > zoneCoords.x)
      && (playerCoords.x < zoneCoords.mx)

      && (playerCoords.y + (playerCoords.tailleY / 3) > zoneCoords.y)
      && (playerCoords.y < zoneCoords.my)
    );
  }

  showDebug(player: PlayerController) {
    const context = getContext();
    context.fillStyle = ColorDebug.ZonePerson;

    const playerCoords = player.dresseur.getCoordinates();
    const zoneCoords = this.getCoordinates();

    context.fillRect(
      (zoneCoords.x - playerCoords.x) * 3 + 340,
      (zoneCoords.y - playerCoords.y) * 3 + 260,
      zoneCoords.tailleX * 3,
      zoneCoords.tailleY * 3,
    );
  }
}

export default ZonePerson;
