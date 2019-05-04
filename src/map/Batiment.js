import { getContext } from '../utils/render';
// Adapter pour creer automatiquement via devMode

class Batiment {
	constructor(nom, texture, posX, posY, tailleX, tailleY) {
		this.nom = nom;
		this.texture = texture;
		this.posX = posX;
		this.posY = posY;
		this.tailleX = tailleX;
		this.tailleY = tailleY;

		this.context = getContext();
	}

	afficheToi(player) {
		const { posX, posY } = player.dresseur;
		this.context.drawImage(
			this.texture,
			(this.posX - posX) * 3 + 340,
			(this.posY - posY) * 3 + 280,
			this.tailleX,
			this.tailleY,
		);
	}

	isWalkable(x, y) {
		return (!this.isOnPosition(x, y));
	}

	isOnPosition(x, y) {
		if (x > this.posX && x < this.posX + (this.tailleX / 2.7)) {
			if (y > this.posY && y < this.posY + (this.tailleY / 2.5)) {
				return (true);
			}
		}
		return (false);
	}

	showDebug(player) {
		const { posX, posY } = player.dresseur;
		const context = getContext();

		context.fillStyle = 'rgba(0, 0, 0, 0.5)';

		context.fillRect(
			this.posX * 3 - (posX * 3) + 340,
			this.posY * 3 - (posY * 3) + 280,
			this.tailleX,
			this.tailleY,
		);
	}
}

export default Batiment;
