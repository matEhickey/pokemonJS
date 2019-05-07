// @flow
import Person from '../map/Person';
import PlayerController from '../gameloop/PlayerController';
import { getContext } from '../utils/render';
import { ColorDebug } from '../utils/Color';

class PersonRenderer {
  person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  render(player: PlayerController) {
    const context = getContext();
    const playerCoords = player.dresseur.getCoordinates();
    const coords = this.person.getCoordinates();

    // ---- animation personage
    const xClip = this.person.idle
      ? 0
      : this.person.animationPosition * 32;
    const yClip = this.person.orientation * 48;


    context.drawImage(
      this.person.texture,
      xClip,
      yClip,
      coords.tailleX,
      coords.tailleY,
      (coords.x - playerCoords.x) * 3 + 340,
      (coords.y - playerCoords.y) * 3 + 260,
      coords.tailleX,
      coords.tailleY,
    );
  }

  renderDebug(player: PlayerController) {
    const context = getContext();
    const playerCoords = player.dresseur.getCoordinates();
    const dresseurCoords = this.person.getCoordinates();

    context.fillStyle = ColorDebug.Person;
    context.fillRect(
      (dresseurCoords.x - playerCoords.x) * 3 + 340,
      (dresseurCoords.y - playerCoords.y) * 3 + 260,
      dresseurCoords.tailleX,
      dresseurCoords.tailleY,
    );

    context.fillStyle = 'black';

    // tryin to show cursor
    context.fillRect(
      (dresseurCoords.x - playerCoords.x) * 3 + 340 - 2,
      (dresseurCoords.y - playerCoords.y) * 3 + 260 - 2,
      4, 4,
    );

    context.fillRect(
      (dresseurCoords.mx - playerCoords.x) * 3 + 340 - 2,
      (dresseurCoords.my - playerCoords.y) * 3 + 260 - 2,
      4, 4,
    );


    this.person.zone.showDebug(player);
  }
}

export default PersonRenderer;
