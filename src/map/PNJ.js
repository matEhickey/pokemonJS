import Discussion from '../UI/Discussion';

class PNJ {
	constructor(nom, posX, posY, tailleX, tailleY, texte, callback) {
		this.nom = nom;
		this.posX = posX;
		this.posY = posY;
		this.tailleX = tailleX;
		this.tailleY = tailleY;
		this.discussion = texte;
		this.callback = callback;
	}

	getDiscuss() {
		return (new Discussion(this.nom, this.discussion));
	}

	isOnPosition(posX, posY) {
		if (posX > this.posX && posX < this.posX + (this.tailleX / 2.7)) {
			if (posY > this.posY && posY < this.posY + (this.tailleY / 2.5)) {
				return true;
			}
		}
		return false;
	}
}

export default PNJ;
