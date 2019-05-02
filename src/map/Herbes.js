class Herbe {
	constructor(posX, posY, tailleX, tailleY, puissance) {
		this.posX = posX;
		this.tailleX = tailleX;
		this.posY = posY;
		this.tailleY = tailleY;

		this.puissance = puissance;
		// pour qq niveau de pokemon presents,
		// pourra etre complexifier sur les types,
		// genre une liste de types possibles
	}

	walkOn(player) {
		if (player.getPosX() > this.posX && player.getPosX() < this.posX + this.tailleX) {
			if (player.getPosY() > this.posY && player.getPosY() < this.posY + this.tailleY) {
				return true;
			}
		}
		return false;
	}

	getPuissance() {
		return this.puissance;
	}
}

export default Herbe;
