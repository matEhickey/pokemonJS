function Herbe(posX,posY,tailleX,tailleY,puissance){
	this.posX=posX;
	this.tailleX=tailleX;
	this.posY=posY;
	this.tailleY=tailleY;
	this.puissance = puissance;//pour qq niveau de pokemon presents, pourra etre complexifier sur les types, genre une liste de types possibles
}

Herbe.prototype.walkOn = function(){
	var retour = false;
	if(monDresseur.getPosX()>this.posX && monDresseur.getPosX()<this.posX+this.tailleX){
		if(monDresseur.getPosY()>this.posY && monDresseur.getPosY()<this.posY+this.tailleY){
			//console.log("marche sur des hautes herbes");
			retour = true;
		}
	}
	return(retour);
}

Herbe.prototype.getPuissance= function(){
	return(this.puissance);
}