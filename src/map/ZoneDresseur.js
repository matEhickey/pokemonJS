class ZoneDresseur{
  constructor(dresseur){
  	this.taille = 40;

  	this.dresseur = dresseur;
  }
  isWalkOn(player){
  	var x = player.getPosX();
  	var y = player.getPosY();

  	var orientation = this.dresseur.getOrientation();
  	if(this.dresseur.nom == "Mathias"){
  		//console.log(" check if walk on "+this.dresseur.nom);
  	}

  	switch(orientation){

  		case(0)://de face seul Y+
  			if((x>(this.dresseur.getPosX())) && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
  				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3+this.taille))  ){

  					return(true);
  				}
  			}
  		break;
  		case(1)://de gauche seul X-
  			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3-this.taille))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
  				if((y>(this.dresseur.getPosY())) && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

  					return(true);
  				}
  			}
  		break;
  		case(2)://de droite seul X+
  			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3)) && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
  				if((y>(this.dresseur.getPosY())) && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

  					return(true);
  				}
  			}
  		break;
  		case(3)://de derriere seul Y-
  			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3)) && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
  				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3-this.taille))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

  					return(true);
  				}
  			}
  		break;
  	}
  	return(false);
  }
}

export default ZoneDresseur;
