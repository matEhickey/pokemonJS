import {monDresseur} from "../utils/globals";
import Discussion from "../UI/Discussion";

var PNJ = function(nom,posX,posY,tailleX,tailleY,isInfirmiere){
	this.nom = nom;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = tailleX;
	this.tailleY = tailleY;
	this.discussion = ["Je ne suis qu'un pnj"];
	this.isInfirmiere = isInfirmiere;
	if(isInfirmiere){
		this.discussion = ["Bienvenue au centre pokémon, nous avons soigné vos pokemons"];
	}
}

PNJ.prototype.isInfirmiere = function(){
	return(this.isInfirmiere);
}

PNJ.prototype.getDiscuss = function(){
	monDresseur.discussion = new Discussion(this.nom, this.discussion);
}

PNJ.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX && posX < this.posX + (this.tailleX/2.7)){
			if(posY>this.posY && posY < this.posY + (this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}


export default PNJ;
