// @flow

import Orientation from '../modes/Orientation';
import Person from './Person';
import PlayerController from '../gameloop/PlayerController';
import devRenderer from '../renderers/DevModeRenderer';

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
      case Orientation.North:
        addTailleCoords.y -= this.taille + 10;
        addTailleCoords.tailleY += this.taille;
        break;
      case Orientation.South:
        addTailleCoords.y += this.taille - 10;
        addTailleCoords.tailleY += this.taille;
        break;
      case Orientation.West:
        addTailleCoords.x -= this.taille + 10;
        addTailleCoords.tailleX += this.taille;
        break;
      case Orientation.East:
        addTailleCoords.x += this.taille - 10;
        addTailleCoords.tailleX += this.taille;
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
    devRenderer.renderZonePerson(this, player);
  }
}

export default ZonePerson;
