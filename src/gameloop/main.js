import {getCanvas, getContext} from '../utils/render_utils';
import {monDresseur, combat} from '../utils/globals.js';

export default function render(){	//Moteur d affichage

	var canvas = getCanvas();
	var context = getContext();

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	monDresseur.grille.drawTerrain();

	monDresseur.grille.afficheBatiments(monDresseur.dresseur.posX,monDresseur.dresseur.posY);


	monDresseur.grille.drawDresseur(monDresseur.dresseur.posX,monDresseur.dresseur.posY);// Dessines tout les dresseurs   posXY sont les coord du controller


			if(monDresseur.mode != 2){ //si on est pas en combat

					//test colision nextCase
					monDresseur.calculNextCase();
					var nextCaseX = monDresseur.nextCaseX;
					var nextCaseY = monDresseur.nextCaseY;
					monDresseur.walkable = monDresseur.grille.isWalkable(nextCaseX,nextCaseY);

          monDresseur.goToNextPosition()
					//dessine joueur
					monDresseur.grille.drawMonDresseur();

			}//fin si mode != combat

		switch(monDresseur.mode){ //--------------------------------------------------Affichage
			case(0):
				monDresseur.grille.checkZonesDresseurs();
				monDresseur.grille.checkWalkOnPorte();

			break;
			case(1)://hud

				switch(monDresseur.hudMode){
					case(0)://pause
						//console.log("jeu en pause");
						monDresseur.menu.afficheMenu();

					break;

					case(1)://discussion
						monDresseur.menu.showConversation()
					break;
					case(2)://mode pokedex
						monDresseur.menu.displayPokedex();
						break;
					case(3)://mode pokemon
						monDresseur.menu.displayPokemons(monDresseur.dresseur.pokemons);

					break;
					case(4)://mode inventaire
							monDresseur.menu.displayInventaire();
					break;
					case(5)://mode infos
							monDresseur.menu.displayInfosJoueur();
					break;
					case(6)://mode carte
							monDresseur.menu.displayCarte();
					break;
					case(7)://mode sauv
							monDresseur.menu.displaySauv();
					break;
					case(8)://mode carte
							monDresseur.menu.displayOptions();
					break;
					case(9)://fail
							monDresseur.menu.displayFail();
					break;
					case(10):	//informations simples, avec controle pour retour au plateau
						monDresseur.menu.displayInfo();
					break;
					case(11):	//affichage bravo vous avez capturer tel pokemon
						monDresseur.menu.displayWinCapture();
					break;
					case(12):	//attente + informations simples
						monDresseur.menu.displayInfo();
					break;

				}
			break;//mode hud

			case(2)://combat
				monDresseur.combat.drawCombat();
				monDresseur.combat.runTour();
			break;
	}

	context.restore();
}
