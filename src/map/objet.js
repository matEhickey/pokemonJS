function Objet(nom,x,y,tX,tY){		//Pour collision quelquonque dans mode de deplacement 
	this.nom=nom;
	this.coordX = x;
	this.coordY = y;
	this.tailleX = tX;
	this.tailleY = tY;
	this.walkable = false;
}

Objet.prototype.displayName = function(){
	console.log("Objet: "+this.nom);
}


Objet.prototype.isWalkable = function(posX,posY){
	var retour = true;
	
	if(posX>this.coordX && posX< this.coordX+this.tailleX){
		if(posY>this.coordY && posY<this.coordY+this.tailleY){
			retour = false;
		}
	}
	if(this.walkable){
		retour = true;
	}
	return(retour);
}