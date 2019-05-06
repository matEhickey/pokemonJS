// @flow

import { getContext } from '../utils/render';
import { ColorDebug } from '../utils/Color';
import PlayerController from '../gameloop/PlayerController';

class Porte {
  posX: number;
  posY: number;
  tailleX: number;
  tailleY: number;
  joueurX: number;
  joueurY: number;
  destination: string;

  constructor(
    posX: number,
    posY: number,
    tailleX: number,
    tailleY: number,
    joueurX: number,
    joueurY: number,
    destination: string,
  ) {
    this.posX = posX;
    this.posY = posY;
    this.tailleX = tailleX;
    this.tailleY = tailleY;

    this.joueurX = joueurX; // where the player is after teleportation
    this.joueurY = joueurY;
    this.destination = destination;
  }

  getCoordinates() {
    return {
      x: this.posX,
      y: this.posY,
      tailleX: this.tailleX,
      tailleY: this.tailleY,
      mx: this.posX + this.tailleX,
      my: this.posY + this.tailleY,
    };
  }

  walkOn(player: PlayerController) {
    const porteCoords = this.getCoordinates();
    const playerCoords = player.dresseur.getCoordinates();

    return (
      (playerCoords.x + (playerCoords.tailleX / 3) > porteCoords.x)
   && (playerCoords.x < porteCoords.mx)

   && (playerCoords.y + (playerCoords.tailleY / 3) > porteCoords.y)
   && (playerCoords.y < porteCoords.my)
    );
  }

  setLargeur(value: number) {
    this.tailleX = value;
    return this;
  }

  rejoindreDestination(player: PlayerController) {
    console.log(`Voyage to: '${this.destination}'`);

    switch (this.destination) {
      case 'foret1':
        player.setGrille(0);
        break;
      case 'ville2':
        player.setGrille(1);
        break;
      case 'centreP1': // foret1
        player.setGrille(2);
        break;
      case 'centreP2': // argenta
        player.setGrille(3);
        break;
      case 'argenta':
        player.setGrille(4);
        break;
      case 'pokeshopArgenta':
        player.setGrille(5);
        break;
      case 'areneArgenta':
        player.setGrille(6);
        break;
      default:
        console.warn('rejoindreDestination: no compatible option');
    }
    player.dresseur.posX = this.joueurX;
    player.dresseur.posY = this.joueurY;
  }

  showDebug(player: PlayerController) {
    const context = getContext();
    context.fillStyle = ColorDebug.Porte;

    const playerCoords = player.dresseur.getCoordinates();
    const porteCoords = this.getCoordinates();

    context.fillRect(
      (porteCoords.x - playerCoords.x) * 3 + 340,
      (porteCoords.y - playerCoords.y) * 3 + 260,
      porteCoords.tailleX * 3,
      porteCoords.tailleY * 3,
    );
  }
}

export default Porte;
