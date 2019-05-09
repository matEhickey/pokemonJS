// @flow

import Porte from '../map/Porte';
import PlayerController from '../gameloop/PlayerController';
import MenuRenderer from '../renderers/MenuRenderer';

class EndroitCarte {
  nom: string;
  x: number;
  y: number;
  porte: Porte;
  menuRenderer: MenuRenderer;

  constructor(nom: string, x: number, y: number, porte: Porte, menuRenderer: MenuRenderer) {
    this.nom = nom;
    this.x = x; // positions d affichage sur la carte
    this.y = y;
    this.porte = porte; // porte qui n a pas de coordonnées sur la grille
    this.menuRenderer = menuRenderer;
  }

  rejoindreDestination(player: PlayerController) {
    this.porte.rejoindreDestination(player);
  }

  displayOnCarte() {
    this.menuRenderer.displayEndroitCarte(this);
  }
}


export default EndroitCarte;
