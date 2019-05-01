function Herbe(posX,posY,tailleX,tailleY,puissance){
	this.posX=posX;
	this.tailleX=tailleX;
	this.posY=posY;
	this.tailleY=tailleY;
	this.puissance = puissance;//pour qq niveau de pokemon presents, pourra etre complexifier sur les types, genre une liste de types possibles
}

Herbe.prototype.walkOn = function(player){
	var retour = false;
	if(player.getPosX()>this.posX && player.getPosX()<this.posX+this.tailleX){
		if(player.getPosY()>this.posY && player.getPosY()<this.posY+this.tailleY){
			//console.log("marche sur des hautes herbes");
			retour = true;
		}
	}
	return(retour);
}

Herbe.prototype.getPuissance= function(){
	return(this.puissance);
}

export default Herbe;
