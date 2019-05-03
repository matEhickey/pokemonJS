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
			this.posX * 3 - (posX * 3) + 340,
			this.posY * 3 - (posY * 3) + 280,
			this.tailleX,
			this.tailleY,
		);
	}

	isWalkable(posX, posY) {
		return (!this.isOnPosition(posX, posY));
	}

	isOnPosition(posX, posY) {
		if (posX > this.posX && posX < this.posX + (this.tailleX / 2.7)) {
			if (posY > this.posY && posY < this.posY + (this.tailleY / 2.5)) {
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
