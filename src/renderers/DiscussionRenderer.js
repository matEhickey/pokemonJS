// @flow

import Discussion from '../UI/Discussion';
import PlayerController from '../gameloop/PlayerController';
import Font from '../types/Font';
import { getContext } from '../utils/render';

class DiscussionRenderer {
  discussion: Discussion;
  context: CanvasRenderingContext2D;


  constructor(discussion: Discussion) {
    this.discussion = discussion;
    this.context = getContext();
  }

  render(player: PlayerController, nom: string, message: string) {
    this.context.font = Font.little;
    this.context.fillStyle = player.couleurPrefere;
    this.context.fillRect(50, 480, 800, 150);
    this.context.fillStyle = '#ffffff';
    this.context.fillText(`${nom} : `, 60, 510, 780);

    const lineheight: number = 25;
    // split message by \n
    const lines: Array<string> = message.split('\n');
    lines.forEach((line: string, index: number) => {
      this.context.fillText(line, 80, 550 + (index * lineheight));
    });
  }
}

export default DiscussionRenderer;
