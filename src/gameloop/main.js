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
				player.menu.show();
			break;//mode hud

			case(2)://combat
				player.combat.drawCombat();
				player.combat.runTour();
			break;
	}

	context.restore();
}
