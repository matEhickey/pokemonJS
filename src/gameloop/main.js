import { getCanvas, getContext } from '../utils/render_utils';

export default function render(player) { // Moteur d affichage
	const canvas = getCanvas();
	const context = getContext();

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	player.grille.drawTerrain();

	player.grille.afficheBatiments(player.dresseur.posX, player.dresseur.posY);


	player.grille.drawDresseur(
		player.dresseur.posX,
		player.dresseur.posY,
	);// Dessines tout les dresseurs   posXY sont les coord du controller


	if (player.mode !== 2) { // si on est pas en combat
		// test colision nextCase
		player.avance();
		// dessine joueur
		player.grille.drawMonDresseur();
	}

	switch (player.mode) {
	case (0):// map
		player.grille.checkZonesDresseurs(player);
		player.grille.checkWalkOnPorte();
		break;
	case (1): // hud
		player.menu.show();
		break; // mode hud
	case (2): // combat
		player.combat.drawCombat();
		player.combat.runTour();
		break;
	default:
		console.warn(`render: no mode ${player.mode}`);
	}

	context.restore();
}
