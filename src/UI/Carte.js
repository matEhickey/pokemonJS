import Porte from '../map/Porte';
import EndroitCarte from './EndroitCarte';
import Font from '../types/Font';

import { getContext } from '../utils/render';
import ImageLoader from '../utils/ImageLoader';
import pokeworldmap from '../../assets/imgs/pokeworldmap.png';

class Carte {
  constructor(player) {
    this.player = player;
    this.endroits = [];
    this.selection = 0;
  }

  displayCarte() {
    const context = getContext();

    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;

    const pokeworldmapImg = ImageLoader.load(pokeworldmap);
    context.drawImage(pokeworldmapImg, 0, 0, 240, 160, 70, 70, 760, 510);

    if (this.endroits.length > 0) {
      this.endroits[this.selection].displayOnCarte();
    }
  }

  addEndroit(endroit) {
    this.endroits.push(endroit);
  }

  selectP() {
    this.selection += 1;
    if (this.selection >= this.endroits.length) {
      this.selection = 0;
    }
  }

  selectM() {
    this.selection -= 1;
    if (this.selection < 0) {
      this.selection = this.endroits.length - 1;
    }
  }

  voyage(player) {
    this.endroits[this.selection].rejoindreDestination(player);
  }
}

function ChargeCarte(player) {
  player.carte.addEndroit(new EndroitCarte(
    'Foret',
    240,
    220,
    new Porte(0, 0, 5, 5, 0, 0, 'foret1', player),
  ));

  player.carte.addEndroit(new EndroitCarte(
    'Argenta',
    310,
    395,
    new Porte(-102, 30, 5, 5, 18, 198, 'argenta', player),
  ));
}


export default Carte;
export { ChargeCarte };
