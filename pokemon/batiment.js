
//penser a virer ce fichier qui n est utilisé que sur le centreP de la premiere grille (foret1)
//donc gimp l image du centreP a l endroit voulu


var Batiment = function(nom,texture,posX,posY,tailleX,tailleY){
	this.nom = nom;
	this.texture = texture;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = tailleX;
	this.tailleY = tailleY;
}

Batiment.prototype.afficheToi = function(posiX,posiY){
	context.drawImage(this.texture,this.posX*3 -(posiX*3)+340,this.posY*3-(posiY*3)+280,this.tailleX,this.tailleY);
	//console.log(posiX+"/"+posiY);
} 


Batiment.prototype.isWalkable = function(posX,posY){
	return(!this.isOnPosition(posX,posY));
}



Batiment.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX&& posX< this.posX+(this.tailleX/2.7)){
			if(posY>this.posY && posY<this.posY+(this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}





