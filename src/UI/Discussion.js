// @flow

import Person from '../map/Person';
import PlayerController from '../gameloop/PlayerController';
import DiscussionRenderer from '../renderers/DiscussionRenderer';

class Discussion {
  person: Person;
  renderer: DiscussionRenderer;
  messages: Array<string>;
  showCount: number;

  constructor(person: Person) {
    this.person = person;
    this.renderer = new DiscussionRenderer(this);
    this.messages = person.isAgressive ? person.texteLooser : person.texte;
    this.showCount = 0;
  }

  increaseMessage() {
    this.showCount += 1;
    return (this.showCount === this.messages.length);
  }

  showCurrentMessage(player: PlayerController) {
    const message = this.messages[this.showCount];
    this.renderer.render(player, this.person.nom, message);
  }
}

export default Discussion;
