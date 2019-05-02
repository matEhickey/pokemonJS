import {getContext, getCanvas} from '../utils/render_utils.js';
import pokedex from '../UI/Pokedex';

import PlayerHudMode from '../modes/PlayerHudMode';

class SousMenu {
	constructor(title, display, validate){
		this.title = title;
		this.display = display;
		this.validate = validate;
	}
}

class Menu {
	constructor(player){
		this.player = player;
		this.options = [];
		this.selection = 0;//indice permettant de situer le curseur

		this.loadOptions();
	}

	loadOptions(){
		this.options = [
			new SousMenu(
				"Pokedex",
				() => {console.log("todo")},
				() => {this.player.hudMode = PlayerHudMode.POKEDEX}
			),
			new SousMenu(
				"Pokemon",
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUPOKEMON}
			),
			new SousMenu(
				"Inventaire",
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUINVENTAIRE}
			),
			new SousMenu(
				this.player.getName(),
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUDRESSEUR}
			),
			new SousMenu(
				"Carte",
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUCARTE}
			),
			new SousMenu(
				"Sauvegarde",
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUSAVE}
			),
			new SousMenu(
				"Options",
				()=>{console.log("todo")},
				()=>{this.player.hudMode = PlayerHudMode.MENUOPTIONS}
			),
		];
	}

	show(){
		switch(this.player.hudMode){
			case(0)://pause
				this.showTopMenu();
				break;
			case(1)://discussion
				this.showConversation();
				break;
			case(2)://mode pokedex
				this.displayPokedex();
				break;
			case(3)://mode pokemon
				this.displayPokemons(this.player.dresseur.pokemons);
				break;
			case(4)://mode inventaire
				this.displayInventaire();
				break;
			case(5)://mode infos
				this.displayInfosJoueur();
				break;
			case(6)://mode carte
				this.displayCarte();
				break;
			case(7)://mode sauv
				this.displaySauv();
				break;
			case(8)://mode carte
				this.displayOptions();
				break;
			case(9)://fail
				this.displayFail();
				break;
			case(10):	//informations simples, avec controle pour retour au plateau
				this.displayInfo();
				break;
			case(11):	//affichage bravo vous avez capturer tel pokemon
				this.displayWinCapture();
				break;
			case(12):	//attente + informations simples
				this.displayInfo();
				break;
		}
	}

	showTopMenu(){
		var context = getContext();
		context.fillStyle=this.player.couleurPrefere;
		context.fillRect(630,25,250,270);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		for(var i = 0;i<this.options.length;i++){
			context.fillText(this.options[i].title, 665, 80+(i*30));
		}
		this.afficheCurseur();
	}

	afficheCurseur(){
		var context = getContext();
		context.fillRect(645,72+this.selection*30,5,5);
	}

	selectP(){
		this.selection++;
		if(this.selection >= this.options.length ){
			this.selection = 0;
		}
	}

	selectM(){
		this.selection--;
		if(this.selection < 0 ){
			this.selection = this.options.length-1;
		}
	}

	valider(){
		this.options[this.selection].validate();
	}

	showConversation(pokemons){
		this.player.showCurrentMessage();
	}

	displayPokemons(pokemons ){
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

	displayCarte(){
		this.player.carte.displayCarte();
	}

	displayOptions(){
		var context = getContext();
		context.fillStyle=this.player.couleurPrefere;
		context.fillRect(50,50,800,550);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		context.fillText("'a' Changer la couleur des menus",65,300);
		context.fillText("'p' Retour au gris",65,330);
	}

	displayPokedex(){
		var context = getContext();
		context.fillStyle=this.player.couleurPrefere;
		context.fillRect(50,50,800,550);

		pokedex.affichePokemon();
	}

	displayInfosJoueur(){
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

	displaySauv(){
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

	displayInventaire(){
		var context = getContext();
		context.fillStyle=this.player.couleurPrefere;
		context.fillRect(50,50,800,550);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		context.fillText("Vous avez "+this.player.dresseur.inventaire.length+" objets dans votre inventaire",65,300);
	}

	displayFail(){
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

	displayInfo(){
		var context = getContext();
		context.fillStyle=this.player.couleurPrefere;
		context.fillRect(50,350,800,250);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		context.fillText(this.player.info,60,380);
	}

	displayWinCapture(){
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
}


export default Menu;
