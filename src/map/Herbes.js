import { getContext } from '../utils/render';

class Herbe {
	constructor(posX, posY, tailleX, tailleY, puissance) {
		this.posX = posX;
		this.posY = posY;
		this.tailleX = tailleX;
		this.tailleY = tailleY;

		this.puissance = puissance;
		// pour qq niveau de pokemon presents,
		// pourra etre complexifier sur les types,
		// genre une liste de types possibles
	}

	walkOn(player) {
		if (player.dresseur.posX > this.posX && player.dresseur.posX < this.posX + this.tailleX) {
			if (player.dresseur.posY > this.posY && player.dresseur.posY < this.posY + this.tailleY) {
				return true;
			}
		}
		return false;
	}

	getPuissance() {
		return this.puissance;
	}

	showDebug(player) {
		const { posX, posY } = player.dresseur;
		const context = getContext();

		context.fillStyle = 'rgba(0, 255, 0, 0.5)';
		context.fillRect(
			this.posX * 3 - (posX * 3) + 340,
			this.posY * 3 - (posY * 3) + 280,
			this.tailleX * 3,
			this.tailleY * 3,
		);
	}
}

export default Herbe;
