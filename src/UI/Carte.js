import Porte from '../map/Porte';
import {monDresseur} from '../utils/globals';
import {getContext} from '../utils/render_utils';
import pokeworldmap from '../../assets/imgs/pokeworldmap.png';


var Carte = function(){
	this.endroits = [];
	this.selection = 0;
}

Carte.prototype.displayCarte = function(){
	var context = getContext();

	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";


	var pokeworldmap_img = document.createElement("img");
	pokeworldmap_img.src = pokeworldmap;
	context.drawImage(pokeworldmap_img, 0, 0, 240, 160,  70,70,760,510);

	if(this.endroits.length > 0){
		this.endroits[this.selection].displayOnCarte();
	}
}

Carte.prototype.addEndroit= function(endroit){
	this.endroits.push(endroit);
}

Carte.prototype.selectP = function(){
	this.selection++;
	if(this.selection >= this.endroits.length){
		this.selection = 0;
	}
}

Carte.prototype.selectM = function(){
	this.selection--;
	if(this.selection < 0){
		this.selection = this.endroits.length -1;
	}
}

Carte.prototype.voyage = function(){
	this.endroits[this.selection].rejoindreDestination();
}


//-----------------------------------------------------------------------------------------------------------------------------------


var EndroitCarte = function(nom,x,y,porte){
	this.nom = nom;
	this.x=x;		//positions d affichage sur la carte
	this.y=y;
	this.porte = porte;//porte qui n a pas de coordonnées sur la grille
}

EndroitCarte.prototype.rejoindreDestination= function(){
	this.porte.rejoindreDestination();
}


EndroitCarte.prototype.displayOnCarte = function(){
	var context = getContext();
	// console.log(this.nom+" en x:"+this.x+"  y:"+this.y);
	context.fillRect(this.x,this.y,12,12);
	context.fillText(this.nom,650,550);

}

function ChargeCarte(carte){
	carte.addEndroit(new EndroitCarte("Foret",240,220,new Porte(0,0,0,0,"foret1", monDresseur)));
	carte.addEndroit(new EndroitCarte("Ville",320,295,new Porte(-102,30,712,692,"ville2", monDresseur)));
	carte.addEndroit(new EndroitCarte("Argenta",310,395,new Porte(-102,30,18,198,"argenta", monDresseur)));
	carte.addEndroit(new EndroitCarte("Arene Argenta (debug)",310,395,new Porte(-102,30,-60,42,"areneArgenta", monDresseur)));
	return(carte);
}


export default Carte;
export {ChargeCarte};
