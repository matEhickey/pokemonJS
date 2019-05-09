// @flow

import { getContext } from '../utils/render';
import { ColorDebug } from '../utils/Color';
import PlayerController from '../gameloop/PlayerController';
import Porte from '../map/Porte';
import Objet from '../map/Objet';
import Herbe from '../map/Herbes';
import Batiment from '../map/Batiment';
import ZonePerson from '../map/ZonePerson';


class DevModeRenderer {
  renderPorte(porte: Porte, player: PlayerController) {
    const context = getContext();
    context.fillStyle = ColorDebug.Porte;

    const playerCoords = player.dresseur.getCoordinates();
    const porteCoords = porte.getCoordinates();

    context.fillRect(
      (porteCoords.x - playerCoords.x) * 3 + 340,
      (porteCoords.y - playerCoords.y) * 3 + 260,
      porteCoords.tailleX * 3,
      porteCoords.tailleY * 3,
    );
  }

  renderObjet(objet: Objet, player: PlayerController) {
    const context = getContext();
    const { posX, posY } = player.dresseur;

    context.fillStyle = 'rgba(0, 0, 0, 0.5)';

    context.fillRect(
      objet.coordX * 3 - (posX * 3) + 340,
      objet.coordY * 3 - (posY * 3) + 280,
      objet.tailleX * 3,
      objet.tailleY * 3,
    );
  }

  renderHerbe(herbe: Herbe, player: PlayerController) {
    const context = getContext();
    const { posX, posY } = player.dresseur;

    context.fillStyle = 'rgba(0, 255, 0, 0.5)';
    context.fillRect(
      herbe.posX * 3 - (posX * 3) + 340,
      herbe.posY * 3 - (posY * 3) + 280,
      herbe.tailleX * 3,
      herbe.tailleY * 3,
    );
  }

  renderBatiment(batiment: Batiment, player: PlayerController) {
    const { posX, posY } = player.dresseur;
    const context = getContext();

    context.fillStyle = 'rgba(0, 0, 0, 0.5)';

    context.fillRect(
      batiment.posX * 3 - (posX * 3) + 340,
      batiment.posY * 3 - (posY * 3) + 280,
      batiment.tailleX,
      batiment.tailleY,
    );
  }

  renderZonePerson(zonePerson: ZonePerson, player: PlayerController) {
    const context = getContext();
    context.fillStyle = ColorDebug.ZonePerson;

    const playerCoords = player.dresseur.getCoordinates();
    const zoneCoords = zonePerson.getCoordinates();

    context.fillRect(
      (zoneCoords.x - playerCoords.x) * 3 + 340,
      (zoneCoords.y - playerCoords.y) * 3 + 260,
      zoneCoords.tailleX * 3,
      zoneCoords.tailleY * 3,
    );
  }
}

const devRenderer = new DevModeRenderer();
export default devRenderer;
