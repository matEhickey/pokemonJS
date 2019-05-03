import { getContext } from '../utils/render';

class Objet {
	// Pour collision quelquonque dans mode de deplacement
	constructor(nom, x, y, tX, tY) {
		this.nom = nom;
		this.coordX = x;
		this.coordY = y;
		this.tailleX = tX;
		this.tailleY = tY;
		this.walkable = false;
	}

	displayName() {
		console.log(`Objet: ${this.nom}`);
	}

	isWalkable(posX, posY) {
		if (this.walkable) {
			return true;
		}

		if (posX > this.coordX && posX < this.coordX + this.tailleX) {
			if (posY > this.coordY && posY < this.coordY + this.tailleY) {
				return false;
			}
		}
		return true;
	}

	showDebug(player) {
		const { posX, posY } = player.dresseur;
		const context = getContext();

		context.fillRect(
			this.coordX * 3 - (posX * 3) + 340,
			this.coordY * 3 - (posY * 3) + 280,
			this.tailleX * 3,
			this.tailleY * 3,
		);
	}
}

export default Objet;
