// @flow

import { getContext } from '../utils/render';
import Porte from '../map/Porte';
import PlayerController from '../gameloop/PlayerController';

class EndroitCarte {
  nom: string;
  x: number;
  y: number;
  porte: Porte;

  constructor(nom: string, x: number, y: number, porte: Porte) {
    this.nom = nom;
    this.x = x; // positions d affichage sur la carte
    this.y = y;
    this.porte = porte; // porte qui n a pas de coordonnées sur la grille
  }

  rejoindreDestination(player: PlayerController) {
    this.porte.rejoindreDestination(player);
  }

  displayOnCarte() {
    const context = getContext();
    // console.log(this.nom+" en x:"+this.x+"  y:"+this.y);
    context.fillRect(this.x, this.y, 12, 12);
    context.fillText(this.nom, 650, 550);
  }
}


export default EndroitCarte;
