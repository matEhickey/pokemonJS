import {getContext, getCanvas} from '../utils/render_utils.js';
import {monDresseur} from '../utils/globals.js';


class Discussion {
  constructor(nom, messages){
    this.nom = nom;
    this.messages = messages;
    this.showCount = 0;

    this.context = getContext();
  }
  increaseMessage(){
    this.showCount += 1;

    return(this.showCount === this.messages.length);
  }
  showCurrentMessage(){
  	this.context.font="20px Georgia";
  	this.context.fillStyle = monDresseur.couleurPrefere;
  	this.context.fillRect(50,480,800,150);
  	this.context.fillStyle="#ffffff";
  	this.context.fillText(`${this.nom} : `, 60,510,780);

    const message = this.messages[this.showCount];
    const lineheight = 25;
    // split message by \n
    var lines = message.split('\n');
    for (var i = 0; i<lines.length; i++)
      this.context.fillText(lines[i], 80, 550 + (i*lineheight) );
  }
}

export default Discussion;
