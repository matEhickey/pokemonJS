import { getCanvas, getContext } from '../utils/render';
import DevMode from '../modes/DevMode';
import PlayerMode from '../modes/PlayerMode';

export default function render(player) { // Moteur d affichage
	const canvas = getCanvas();
	const context = getContext();

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	player.grille.show();

	switch (player.mode) {
	case (PlayerMode.MAP):
		player.mainLoopEvent();
		if (DevMode.dev) { player.grille.showDebug();	}
		break;

	case (PlayerMode.HUD):
		player.hud.show();
		break;

	case (PlayerMode.FIGHT):
		player.combat.drawCombat();
		player.combat.runTour();
		break;

	default:
		console.error(`main.render: no compatible option ${player.mode}`);
	}

	context.restore();
}
