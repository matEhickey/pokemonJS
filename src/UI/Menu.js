import {getContext, getCanvas} from '../utils/render_utils.js';
import pokedex from '../UI/Pokedex';

import PlayerHudMode from '../modes/PlayerHudMode';

function Menu(player){
	this.player = player;
	this.boutons = [
		new SousMenu("Pokedex"),
		new SousMenu("Pokemon"),
		new SousMenu("Inventaire"),
		new SousMenu(this.player.getName()),
		new SousMenu("Carte"),
		new SousMenu("Sauvegarde"),
		new SousMenu("Options"),
	];
	this.selection = 0;//indice permettant de situer le curseur
}

Menu.prototype.afficheMenu = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(630,25,250,270);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	for(var i = 0;i<this.boutons.length;i++){
		context.fillText(this.boutons[i].getTitre(),665,80+(i*30));
	}
	this.afficheCurseur();
}

Menu.prototype.afficheCurseur= function(){
	var context = getContext();
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
			this.player.hudMode = PlayerHudMode.POKEDEX;
		break;
		case(1):
			this.player.hudMode = PlayerHudMode.MENUPOKEMON;
		break;
		case(2):
			this.player.hudMode = PlayerHudMode.MENUINVENTAIRE;
		break;
		case(3):
			this.player.hudMode = PlayerHudMode.MENUDRESSEUR;
		break;
		case(4):
			this.player.hudMode = PlayerHudMode.MENUCARTE;
		break;
		case(5):
			this.player.hudMode = PlayerHudMode.MENUSAVE;
		break;
		case(6):
			this.player.hudMode = PlayerHudMode.MENUOPTIONS;
		break;
	}
}

Menu.prototype.showConversation = function(pokemons){
	this.player.showCurrentMessage();
}

Menu.prototype.displayPokemons = function(pokemons ){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
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

	this.player.carte.displayCarte();

}

Menu.prototype.displayOptions = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("'a' Changer la couleur des menus",65,300);
	context.fillText("'p' Retour au gris",65,330);
}

Menu.prototype.displayPokedex = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,50,800,550);

	pokedex.affichePokemon();


}

Menu.prototype.displayInfosJoueur = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Nom : "+this.player.getName(),65,270);
	context.fillText("Argent : "+this.player.dresseur.argent,65,300);
	context.fillText("Badges : "+this.player.dresseur.badges,65,330);
	context.fillText("Objets : "+this.player.dresseur.inventaire.length,65,360);
	context.fillText("Pokemon capturés : "+(this.player.dresseur.pokemons.length+this.player.dresseur.pcDeLeo.length),65,390);
	context.drawImage(this.player.charSprites,0+(80*this.player.getGTX()),0+(80*this.player.getGTY()), 80, 80, 400,200,250,250);
}

Menu.prototype.displaySauv = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
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
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Vous avez "+this.player.dresseur.inventaire.length+" objets dans votre inventaire",65,300);
}

Menu.prototype.displayFail = function(){
	var context = getContext();
	var canvas = getCanvas();
	context.fillStyle="#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle=this.player.couleurPrefere;
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
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText(this.player.info,60,380);
}

Menu.prototype.displayWinCapture = function(){
	var context = getContext();
	context.fillStyle=this.player.couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Bravo, vous avez capturé un :",160,380);
	context.fillText(this.player.getPokemonCapture().getName(),200,430);
	context.fillText("Niveau "+this.player.getPokemonCapture().lvl,160,480);
	this.player.getPokemonCapture().afficheToiAt(550,400);
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


export default Menu;
