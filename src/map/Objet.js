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
}

export default Objet;
