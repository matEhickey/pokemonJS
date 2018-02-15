function Menu(){
	this.boutons = [];
	this.boutons[0] = new SousMenu("Pokedex");
	this.boutons[1] = new SousMenu("Pokemon");
	this.boutons[2] = new SousMenu("Inventaire");
	this.boutons[3] = new SousMenu(monDresseur.getName());
	this.boutons[4] = new SousMenu("Carte");
	this.boutons[5] = new SousMenu("Sauvegarde");
	this.boutons[6] = new SousMenu("Options");
	this.selection = 0;//indice permettant de situer le curseur
}

Menu.prototype.afficheMenu = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(630,25,250,270);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	for(var i = 0;i<this.boutons.length;i++){
		context.fillText(this.boutons[i].getTitre(),665,80+(i*30));
	}
	this.afficheCurseur();
}


Menu.prototype.afficheCurseur= function(){
	context.fillRect(645,72+this.selection*30,5,5);
}

Menu.prototype.selectP = function(){
	this.selection++;
	if(this.selection >= this.boutons.length ){
		this.selection = 0;
	}
}

Menu.prototype.selectM = function(){
	this.selection--;
	if(this.selection < 0 ){
		this.selection = this.boutons.length-1;
	}
}

Menu.prototype.valider = function(){
	switch(this.selection){
		case(0):
			console.log("affiche pokedex");
			monDresseur.hudMode = 2;
		break;
		case(1):
			console.log("affiche pokemon");
			var pokemons = monDresseur.dresseur.pokemons;
			console.log(pokemons.length);
			monDresseur.hudMode = 3;
		break;
		case(2):
			monDresseur.hudMode = 4;
			console.log("affiche inventaire");
			
		break;
		case(3):
			monDresseur.hudMode = 5;
			console.log("affiche infos joueur");
		break;
		case(4):
			console.log("affiche carte");
			monDresseur.hudMode = 6;
			
								
		break;
		case(5):
			console.log("sauvegarde");
			monDresseur.hudMode = 7;
		break;
		case(6):
			console.log("affiche options");
			monDresseur.hudMode = 8;
		break;
	
	}

}

Menu.prototype.displayPokemons = function(pokemons ){
	
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.font="20px Georgia";
	
	for(var i = 0;i<pokemons.length;i++){
		context.fillStyle="#eeeeee";
		context.fillRect(55,(i*80)+95,780,35);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		context.fillText("Nom: "+pokemons[i].getName(),65,120+(i*80));
		context.fillText("Niveau: "+pokemons[i].lvl,230,120+(i*80));
		context.fillText("Pdv: "+pokemons[i].pdv+"/"+pokemons[i].pdvMax,370,120+(i*80));
		
		context.font="18px Georgia";
		context.fillText("XP: "+pokemons[i].exp,100,160+(i*80));
		context.fillText("Prochain Niveau : "+pokemons[i].expMax,350,160+(i*80));
		
	}
	
}

Menu.prototype.displayCarte = function(){
	
	carte.displayCarte();							
								
}

Menu.prototype.displayOptions = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("'a' Changer la couleur des menus",65,300);
	context.fillText("'p' Retour au gris",65,330);
}

Menu.prototype.displayPokedex = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	
	pokedex.affichePokemon();

								
}

Menu.prototype.displayInfosJoueur = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Nom : "+monDresseur.getName(),65,270);
	context.fillText("Argent : "+monDresseur.dresseur.argent,65,300);
	context.fillText("Badges : "+monDresseur.dresseur.badges,65,330);
	context.fillText("Objets : "+monDresseur.dresseur.inventaire.length,65,360);
	context.fillText("Pokemon capturés : "+(monDresseur.dresseur.pokemons.length+monDresseur.dresseur.pcDeLeo.length),65,390);
	//try{
		//console.log(monDresseur.getGTX());
		context.drawImage(monDresseur.charSprites,0+(80*monDresseur.getGTX()),0+(80*monDresseur.getGTY()), 80, 80, 400,200,250,250);
	// } catch(e) {
           // console.error(e.message);
        //}
	//pokedex.length quand il sera implementé
}

Menu.prototype.displaySauv = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Voulez vous sauvegarder votre partie ?",65,240);
	context.fillText("'A' : Oui",65,270);
	context.fillText("'B' :Retour",65,300);
	
	context.fillText("(Aussi, il faut un compte pour pouvoir sauvegarder)",65,360);
	
	context.fillText("Vous trouverez le bouton \"Charge Partie\" pour reprendre la ou vous en etiez",65,390);
}

Menu.prototype.displayInventaire = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Vous avez "+monDresseur.dresseur.inventaire.length+" objets dans votre inventaire",65,300);
}

Menu.prototype.displayFail = function(){
	context.fillStyle="#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="30px Georgia";
	context.fillText("Vos pokemons sont tous K.O",65,250);
	context.font="20px Georgia";
	context.fillText("Vous avez perdu",65,300);
	context.font="15px Georgia";
	context.fillText("(Appuyer sur une touche)",65,350);
	
}

Menu.prototype.displayInfo = function(){
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText(monDresseur.info,60,380);
}


Menu.prototype.displayWinCapture = function(){
	
	context.fillStyle=monDresseur.couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Bravo, vous avez capturé un :",160,380);
	context.fillText(monDresseur.getPokemonCapture().getName(),200,430);
	context.fillText("Niveau "+monDresseur.getPokemonCapture().lvl,160,480);
	monDresseur.getPokemonCapture().afficheToiAt(550,400);
}





//----------------------------------------------


function SousMenu(titre){
	this.titre = titre;
}

SousMenu.prototype.getTitre= function(){
	return(this.titre);
}

SousMenu.prototype.getSelect= function(){
	return(this.selection);
}

SousMenu.prototype.setSelect= function(select){
	this.selection = select;
}