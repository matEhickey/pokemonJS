import {getCanvas, getContext} from '../utils/render_utils';

export default function render(player){	//Moteur d affichage

	var canvas = getCanvas();
	var context = getContext();

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	player.grille.drawTerrain();

	player.grille.afficheBatiments(player.dresseur.posX,player.dresseur.posY);


	player.grille.drawDresseur(player.dresseur.posX,player.dresseur.posY);// Dessines tout les dresseurs   posXY sont les coord du controller


			if(player.mode != 2){ //si on est pas en combat

					//test colision nextCase
					player.calculNextCase();
					var nextCaseX = player.nextCaseX;
					var nextCaseY = player.nextCaseY;
					player.walkable = player.grille.isWalkable(nextCaseX,nextCaseY);

          player.goToNextPosition()
					//dessine joueur
					player.grille.drawMonDresseur();

			}//fin si mode != combat

		switch(player.mode){ //--------------------------------------------------Affichage
			case(0):// map
				player.grille.checkZonesDresseurs(player);
				player.grille.checkWalkOnPorte();

			break;
			case(1)://hud
				switch(player.hudMode){
					case(0)://pause
						player.menu.afficheMenu();

					break;

					case(1)://discussion
						player.menu.showConversation();
					break;
					case(2)://mode pokedex
						player.menu.displayPokedex();
						break;
					case(3)://mode pokemon
						player.menu.displayPokemons(player.dresseur.pokemons);

					break;
					case(4)://mode inventaire
							player.menu.displayInventaire();
					break;
					case(5)://mode infos
							player.menu.displayInfosJoueur();
					break;
					case(6)://mode carte
							player.menu.displayCarte();
					break;
					case(7)://mode sauv
							player.menu.displaySauv();
					break;
					case(8)://mode carte
							player.menu.displayOptions();
					break;
					case(9)://fail
							player.menu.displayFail();
					break;
					case(10):	//informations simples, avec controle pour retour au plateau
						player.menu.displayInfo();
					break;
					case(11):	//affichage bravo vous avez capturer tel pokemon
						player.menu.displayWinCapture();
					break;
					case(12):	//attente + informations simples
						player.menu.displayInfo();
					break;

				}
			break;//mode hud

			case(2)://combat
				player.combat.drawCombat();
				player.combat.runTour();
			break;
	}

	context.restore();
}
