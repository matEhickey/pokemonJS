// @flow

import { getContext } from '../utils/render';
import Font from '../types/Font';
import Person from '../map/Person';
import PlayerController from '../gameloop/PlayerController';

class Discussion {
  person: Person;
  messages: Array<string>;
  showCount: number;
  context: CanvasRenderingContext2D;

  constructor(person: Person) {
    this.person = person;
    this.messages = person.isAgressive ? person.texteLooser : person.texte;
    this.showCount = 0;

    this.context = getContext();
  }

  increaseMessage() {
    this.showCount += 1;
    return (this.showCount === this.messages.length);
  }

  showCurrentMessage(player: PlayerController) {
    this.context.font = Font.little;
    this.context.fillStyle = player.couleurPrefere;
    this.context.fillRect(50, 480, 800, 150);
    this.context.fillStyle = '#ffffff';
    this.context.fillText(`${this.person.nom} : `, 60, 510, 780);

    const message = this.messages[this.showCount];
    const lineheight = 25;

    // split message by \n
    const lines = message.split('\n');
    lines.forEach((line, index) => {
      this.context.fillText(line, 80, 550 + (index * lineheight));
    });
  }
}

export default Discussion;
