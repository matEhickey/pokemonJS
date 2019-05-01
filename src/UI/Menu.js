import {getContext, getCanvas} from '../utils/render_utils.js';
import Combat from '../combat/Combat';
import pokedex from '../UI/Pokedex';
import BUTTON from '../gameloop/touches';
import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';

class SousMenu {
	constructor(title, render, validate){
		this.title = title;
		this.render = render;
		this.validate = validate;

		this.isShown = false;
	}
	display(){
		if(this.isShown){
			this.render(this.toggle);
		}
	}
	toggle(){
		this.isShown = !this.isShown;
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
				(closeSousMenu) => { this.displayPokedex(); },
				() => {this.player.hudMode = PlayerHudMode.POKEDEX}
			),
			new SousMenu(
				"Pokemon",
				(closeSousMenu)=>{ this.displayPokemons(this.player.dresseur.pokemons); },
				()=>{this.player.hudMode = PlayerHudMode.MENUPOKEMON}
			),
			new SousMenu(
				"Inventaire",
				(closeSousMenu)=>{ this.displayInventaire(); },
				()=>{this.player.hudMode = PlayerHudMode.MENUINVENTAIRE}
			),
			new SousMenu(
				this.player.getName(),
				(closeSousMenu)=>{ this.displayInfosJoueur(); },
				()=>{this.player.hudMode = PlayerHudMode.MENUDRESSEUR}
			),
			new SousMenu(
				"Carte",
				(closeSousMenu)=>{ this.displayCarte(); },
				()=>{this.player.hudMode = PlayerHudMode.MENUCARTE}
			),
			new SousMenu(
				"Sauvegarde",
				(closeSousMenu)=>{ this.displaySauv(); },
				()=>{this.player.hudMode = PlayerHudMode.MENUSAVE}
			),
			new SousMenu(
				"Options",
				(closeSousMenu)=>{ this.displayOptions(); },
				()=>{this.player.hudMode = PlayerHudMode.MENUOPTIONS}
			),
		];
	}

	show(){
		if(this.lastSeen != this.player.hudMode){
			console.log("-------");
			console.log(`show, hudmode: ${this.player.hudMode}`);

			this.lastSeen = this.player.hudMode;
		}

		switch(this.player.hudMode){
			case(0)://pause
				this.showMainMenu();
			break;
			case(1)://discussion
				this.showConversation();
				break;
			case(10):	//informations simples, avec controle pour retour au plateau
				// console.log("dislpay info");
				// console.log(this.player);
				this.displayInfo();
				break;
			case(11):	//affichage bravo vous avez capturer tel pokemon
				this.displayWinCapture();
				break;
			case(12):	//attente + informations simples
				this.displayInfo();
				break;
		}

		// this.options.forEach((option)=>{ option.display(); });
		this.options[this.selection].display();
	}

	event(touche){
		console.log(`-----`);
		console.log(`event HUD : ${touche}`);
		console.log(`hudMode : ${this.player.hudMode}`);


		switch(this.player.hudMode){
			case(PlayerHudMode.PAUSE):
				console.log("mode pause");
				this.handleMainMenuEvent(touche);
				break;
			case(PlayerHudMode.DISCUSSION):
				console.log("mode discussion");
				if(touche == BUTTON.CONFIRM || touche == BUTTON.BACK){
					const isDiscussionOver = this.player.discussion.increaseMessage();

					if(isDiscussionOver){
						this.player.discussion = null;

						if(this.player.dresseur.adversaire){
							this.player.calculNextCase();
							var nextCaseX = this.player.nextCaseX;
							var nextCaseY = this.player.nextCaseY;

							if(this.player.grille.getDresseur(nextCaseX,nextCaseY)){	//on parlait directement au dresseur pour l attaquer
								if(!this.player.grille.getDresseur(nextCaseX,nextCaseY).asPerdu){
									this.player.mode = PlayerMode.FIGHT;
									this.player.adversaire = this.player.grille.getDresseur(nextCaseX,nextCaseY);

									this.player.combat = new Combat(this.player);
								}
								else{
									this.player.mode = PlayerMode.MAP;
								}
							}
							else{	//le dresseur nous attaquait
								if(this.player.getAdv().asPerdu){
									this.player.mode = PlayerMode.MAP;
								}
								else{
									this.player.mode = PlayerMode.FIGHT;
									this.player.combat = new Combat(this.player);
								}
							}
						}
						else{
							this.player.mode = PlayerMode.MAP;
						}
					}
				}
				break;
		    case(PlayerHudMode.FAIL):
		      sendDresseurToHealthCenter(this.player)
		      this.player.dresseur.adversaire = null;
		      break;
		    case(PlayerHudMode.INFO):
					console.log("event info");

		      this.player.mode = PlayerHudMode.PAUSE;
		      // this.player.mode = PlayerHudMode.PAUSE;
		    break;
		    case(PlayerHudMode.SUCCESS):
		      this.player.mode = PlayerHudMode.PAUSE;
		      this.player.dresseur.adversaire = null;
		      break;
		    case(PlayerHudMode.WAIT):
		      break;



	    case(PlayerHudMode.POKEDEX):
	      handlePokedexEvent(touche, this.player, ()=>{this.options[this.selection].toggle()});
	      break;
	    case(PlayerHudMode.MENUPOKEMON):
	      switch(touche){
	        case(BUTTON.BACK):
						this.options[this.selection].toggle();
	          this.player.hudMode = PlayerHudMode.PAUSE;
	          break;
	      }
	      break;
	    case(PlayerHudMode.MENUINVENTAIRE):
	      switch(touche){
	        case(BUTTON.BACK):
						this.options[this.selection].toggle();
	          this.player.hudMode = PlayerHudMode.PAUSE;
	        break;
	      }
	      break;
	    case(PlayerHudMode.MENUDRESSEUR):
	      switch(touche){
	        case(BUTTON.BACK):
						this.options[this.selection].toggle();
	          this.player.hudMode = PlayerHudMode.PAUSE;
	        break;
	      }
	      break;
	    case(PlayerHudMode.MENUCARTE):
	      handleCarteEvent(touche, this.player, ()=>{this.options[this.selection].toggle()});
	      break;
	    case(PlayerHudMode.MENUSAVE):
	      switch(touche){
	        case(BUTTON.CONFIRM):
						this.options[this.selection].toggle();
	          this.player.save();
	        break;
	        case(BUTTON.BACK):
						this.options[this.selection].toggle();
	          this.player.hudMode = PlayerHudMode.PAUSE;
	        break;
	      }
	      break;
	    case(PlayerHudMode.MENUOPTIONS):
	      switch(touche){
	        case(BUTTON.CONFIRM):
	          changeColorHUD(this.player);
	        break;
	        case(BUTTON.BACK):
						this.options[this.selection].toggle();
	          this.player.hudMode = PlayerHudMode.PAUSE;
	        break;
	        case(BUTTON.PAUSE):
	          this.player.couleurPrefere = "#bbbbbb";
	        break;
	      }
	      break;
			default:
				console.log("event mode not found")
		}
	}

	showMainMenu(){
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

	handleMainMenuEvent(touche){
	  switch(touche){
	    case(BUTTON.PAUSE):
	      this.player.mode = PlayerHudMode.PAUSE;
	      break;
	    case(BUTTON.CONFIRM):
	      //valide
	      this.player.menu.valider();
	      break;
	    case(BUTTON.BACK):
	      this.player.mode = PlayerHudMode.PAUSE;
	      break;
	    case(BUTTON.UP):
	      this.player.menu.selectM();
	      break;
	    case(BUTTON.DOWN):
	      this.player.menu.selectP();
	      break;
	  }
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
		this.options[this.selection].toggle();
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
		// context.fillText("Vous trouverez le bouton \"Charge Partie\" pour reprendre la ou vous en etiez",65,390);
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


function sendDresseurToHealthCenter(player){
  player.mode = PlayerHudMode.PAUSE;
  player.dresseur.aversaire = null;
  player.setPosX(-72);//---> devant centre pokemon
  player.setPosY(6);
}

function handlePokedexEvent(touche, player, toggle){
  switch(touche){
    case(BUTTON.BACK):
			toggle();
      player.hudMode = PlayerHudMode.PAUSE;
    break;
    case(BUTTON.UP):
      pokedex.getPokeInf()
    break;
    case(BUTTON.DOWN):
      pokedex.getPokeSup()
    break;
  }
}

function handleCarteEvent(touche, player, toggle){
  switch(touche){
    case(BUTTON.UP):
      player.carte.selectM();
    break;
    case(BUTTON.DOWN):
      player.carte.selectP();
    break;
    case(BUTTON.CONFIRM)://valider
			toggle();
      player.carte.voyage(player);
      player.mode = PlayerMode.MAP;
    break;
    case(BUTTON.BACK)://retour
			toggle();
      player.hudMode = PlayerHudMode.PAUSE;
    break;
  }
}

function changeColorHUD(player){
  player.couleurPrefere = '#'+Math.floor(Math.random()*16777215).toString(16);
}


export default Menu;
