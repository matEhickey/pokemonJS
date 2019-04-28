import {monDresseur} from '../utils/globals';

function Porte(posX,posY,joueurX,joueurY,destination){

	this.posX=posX;
	this.posY=posY;
	this.tailleX=5;
	this.tailleY=5;
	this.joueurX=joueurX;//nouvelles position a la fin du voyage
	this.joueurY=joueurY;
	this.destination=destination;

}

Porte.prototype.walkOn = function(){
	var retour = false;
	if((monDresseur.getPosX()>=this.posX) && (monDresseur.getPosX()<=(this.posX+this.tailleX)) ){
		if((monDresseur.getPosY()>=this.posY) && (monDresseur.getPosY()<=(this.posY+this.tailleY)) ){
			retour = true;
		}
	}
	return(retour);
}


Porte.prototype.setLargeur = function(value){

	this.tailleX = value;

	return(this);
}



Porte.prototype.rejoindreDestination = function(){
	// console.log("voyage");
	switch(this.destination){
		case("foret1"):
			monDresseur.setGrille(0);
			monDresseur.dresseur.grille = 0;


		break;
		case("ville2"):
			monDresseur.setGrille(1);
			monDresseur.dresseur.grille = 1;

		break;
		case("centreP1"):	//foret1
			monDresseur.setGrille(2);
			monDresseur.dresseur.grille = 2;
		break;
		case("centreP2"):	//argenta
			monDresseur.setGrille(3);
			monDresseur.dresseur.grille = 3;
		break;
		case("argenta"):
			monDresseur.setGrille(4);
			monDresseur.dresseur.grille = 4;
		break;
		case("pokeshopArgenta"):
			monDresseur.setGrille(5);
			monDresseur.dresseur.grille = 5;
		break;
		case("areneArgenta"):
			monDresseur.setGrille(6);
			monDresseur.dresseur.grille = 6;
		break;
	}
	monDresseur.setPosX(this.joueurX);
	monDresseur.setPosY(this.joueurY);
}

export default Porte;
