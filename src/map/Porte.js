class Porte {
	constructor(posX, posY, joueurX, joueurY, destination) {
		this.posX = posX;
		this.posY = posY;
		this.tailleX = 5;
		this.tailleY = 5;
		this.joueurX = joueurX; // nouvelles position a la fin du voyage
		this.joueurY = joueurY;
		this.destination = destination;
	}

	walkOn(player) {
		if ((player.getPosX() >= this.posX) && (player.getPosX() <= (this.posX + this.tailleX))) {
			if ((player.getPosY() >= this.posY) && (player.getPosY() <= (this.posY + this.tailleY))) {
				return true;
			}
		}
		return false;
	}

	setLargeur(value) {
		this.tailleX = value;
		return this;
	}

	rejoindreDestination(player) {
		console.log(`Voyage to: '${this.destination}'`);

		switch (this.destination) {
		case ('foret1'):
			player.setGrille(0);
			break;
		case ('ville2'):
			player.setGrille(1);
			break;
		case ('centreP1'):	// foret1
			player.setGrille(2);
			break;
		case ('centreP2'):	// argenta
			player.setGrille(3);
			break;
		case ('argenta'):
			player.setGrille(4);
			break;
		case ('pokeshopArgenta'):
			player.setGrille(5);
			break;
		case ('areneArgenta'):
			player.setGrille(6);
			break;
		default:
			console.warn('rejoindreDestination: no compatible option');
		}
		player.setPosX(this.joueurX);
		player.setPosY(this.joueurY);
	}
}

export default Porte;
