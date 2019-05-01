import {getContext, getCanvas} from '../utils/render_utils';
import {CombatContreSauvage} from '../combat/Sauvage';

var nbG = 0;
function Grille(player, terrain){
	this.player = player;

	this.terrain = terrain;
	this.objets = [];
	this.dresseurs = [];
	this.batiments = [];
	this.pnjs = [];
	this.portes = [];
	this.herbes = [];
	this.num = nbG;
	nbG++;
}

Grille.prototype.saveDresseurs= function(){
	// console.log("Sauvegardes dresseurs grille "+this.num);
	// var chaine = "";
	// for(var i=0;i<this.dresseurs.length;i++){
	// 	chaine+=getDresseurInfo(this.dresseurs[i])+"&";
	// }//-> false pour isController
	// console.log(chaine);
	// return(chaine);
}

Grille.prototype.ajouteObjet = function(objet) {
	this.objets.push(objet);
};

Grille.prototype.ajoutePNJ = function(objet) {
	this.pnjs.push(objet);
};

Grille.prototype.ajoutePorte = function(porte) {
	this.portes.push(porte);
};

Grille.prototype.ajouteHerbe = function(herbe) {

	this.herbes.push(herbe);

};

Grille.prototype.ajouteDresseur = function(objet) {
	this.dresseurs.push(objet);
	this.objets.push(objet);
};

Grille.prototype.ajouteBatiment = function(bati) {
	this.batiments.push(bati);
	this.objets.push(bati);
};

Grille.prototype.afficheBatiments = function(posiX,posiY) {
	for(var i = 0;i<this.batiments.length;i++){
		this.batiments[i].afficheToi(posiX,posiY);
	}
};

Grille.prototype.displayObjetConsole = function(){
	for(var i = 0;i<this.objets.length;i++){
		this.objets[i].displayName();
	}
}

Grille.prototype.displayDresseurConsole = function(){
	console.log(this.dresseurs.length+" dresseurs:");
	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].displayName();
		console.log(this.dresseurs[i].getOrientation());
	}
}


Grille.prototype.isWalkable = function(posX,posY){
	var retour = true;
	for(var i = 0;i<this.objets.length;i++){
		if(this.objets[i].isWalkable(posX,posY) == false){
		    retour = false;
		}
	}

	return retour;
}

Grille.prototype.checkWalkOnPorte = function(){
	for(var i = 0;i<this.portes.length;i++){
		if(this.portes[i].walkOn(this.player)){
			this.portes[i].rejoindreDestination(this.player);
		}
	}
}

Grille.prototype.checkWalkOnHerbes = function(){
	for(var i = 0;i<this.herbes.length;i++){
		if(this.herbes[i].walkOn(this.player)){
			//console.log("marche sur de l'herbe de puissance :"+this.herbes[i].getPuissance());
			var rand = Math.random();
			// console.log(rand);
			if(rand > 0.95){
				CombatContreSauvage(this.player, this.herbes[i].getPuissance());
			}
		}
	}
}

Grille.prototype.getDresseur = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.dresseurs.length;i++){
		if(this.dresseurs[i].isOnPosition(posX,posY)){
			retour = this.dresseurs[i];
		}
	}
	return(retour);
};

Grille.prototype.getPNJ = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.pnjs.length;i++){
		if(this.pnjs[i].isOnPosition(posX,posY)){
			retour = this.pnjs[i];
		}
	}
	return(retour);
};

Grille.prototype.getBatiment = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.batiments.length;i++){
		if(this.batiments[i].isOnPosition(posX,posY)){
			retour = this.batiments[i];
		}
	}
	return(retour);
};

Grille.prototype.drawDresseur = function(posX,posY){
	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].afficheToi(posX,posY);
	}
}

Grille.prototype.drawTerrain = function(){
		var context = getContext();
		var canvas = getCanvas();

		context.drawImage(this.terrain, this.player.getPosX()+250, this.player.getPosY()+250, canvas.width/3, canvas.height/3, 0,0, canvas.width, canvas.height);
}

Grille.prototype.drawMonDresseur= function(){
	var context = getContext();

	switch(this.player.getOrientation()){
							case(1):


									switch(this.player.dresseur.position){
									case(0):
										context.drawImage(this.player.dresseur.texture,0,0,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(this.player.dresseur.texture,32,0,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(this.player.dresseur.texture,64,0,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(this.player.dresseur.texture,96,0,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(this.player.dresseur.texture,0,0,32,48   ,320,240,32,48);
										break;
								}

							break;

							case(2):

									switch(this.player.dresseur.position){
									case(0):
										context.drawImage(this.player.dresseur.texture,0,48,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(this.player.dresseur.texture,32,48,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(this.player.dresseur.texture,64,48,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(this.player.dresseur.texture,96,48,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(this.player.dresseur.texture,0,48,32,48   ,320,240,32,48);
										break;
								}
							break;

							case(3):

									switch(this.player.dresseur.position){
									case(0):
										context.drawImage(this.player.dresseur.texture,0,96,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(this.player.dresseur.texture,32,96,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(this.player.dresseur.texture,64,96,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(this.player.dresseur.texture,96,96,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(this.player.dresseur.texture,0,96,32,48   ,320,240,32,48);
										break;
								}
							break;

							case(4):

									switch(this.player.dresseur.position){
									case(0):
										context.drawImage(this.player.dresseur.texture,0,144,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(this.player.dresseur.texture,32,144,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(this.player.dresseur.texture,64,144,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(this.player.dresseur.texture,96,144,32,48  ,320,240,32,48);
												//{x,y,taileX,tailleY} Portion , {x,y,tailleX,tailleY} Canvas
										break;
									case(5):
										context.drawImage(this.player.dresseur.texture,0,144,32,48   ,320,240,32,48);
										break;
								}
							break;
			}
}



Grille.prototype.checkZonesDresseurs = function(player){
	for(var i = 0;i<this.dresseurs.length;i++){
		if(this.dresseurs[i].walkOnZone(player)){
			if(!this.dresseurs[i].asPerdu){
				this.player.setAdv(this.dresseurs[i]);
				this.dresseurs[i].attaqueJoueur(this.player);
			}
		}
	}

}




Grille.prototype.load= function(){

	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].load();
	}
}

Grille.prototype.getDresseurByName= function(name){

	for(var i = 0;i<this.dresseurs.length;i++){
		if(this.dresseurs[i].getName() == name){
			return(this.dresseurs[i]);
		}
	}
	console.log("Probleme :"+name+"n'est pas dans la grille");
}

Grille.prototype.getDresseurByNum= function(num){

	for(var i = 0;i<this.dresseurs.length;i++){

		if(this.dresseurs[i].getNum() == num){
			return(this.dresseurs[i]);
		}
	}
	return(false);
}

export default Grille;
