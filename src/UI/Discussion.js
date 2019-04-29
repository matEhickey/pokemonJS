import {getContext, getCanvas} from '../utils/render_utils.js';
import {monDresseur} from '../utils/globals.js';


class Discussion {
  constructor(nom, messages){
    this.nom = nom;
    this.messages = messages;
    this.showCount = 0;

    this.context = getContext();

    // this.showCurrentMessage = this.showCurrentMessage.bind(this);
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
  	this.context.fillText(this.nom + " : " + this.messages[this.showCount], 60,510,780);
  }
}

export default Discussion;
