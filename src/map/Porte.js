import { getContext } from '../utils/render';
import { ColorDebug } from '../utils/Color';

class Porte {
	constructor(posX, posY, tailleX, tailleY, joueurX, joueurY, destination) {
		this.posX = posX;
		this.posY = posY;
		this.tailleX = tailleX;
		this.tailleY = tailleY;
		this.joueurX = joueurX; // nouvelles position a la fin du voyage
		this.joueurY = joueurY;
		this.destination = destination;
	}

	getCoordinates() {
		return {
			x: this.posX,
			y: this.posY,
			tailleX: this.tailleX,
			tailleY: this.tailleY,
			mx: this.posX + this.tailleX,
			my: this.posY + this.tailleY,
		};
	}

	walkOn(player) {
		const porteCoords = this.getCoordinates();
		const playerCoords = player.dresseur.getCoordinates();

		return (
			(playerCoords.x + (playerCoords.tailleX / 3) > porteCoords.x)
			&& (playerCoords.x < porteCoords.mx)

			&& (playerCoords.y + (playerCoords.tailleY / 3) > porteCoords.y)
			&& (playerCoords.y < porteCoords.my)
		);
		// if ((player.getPosX() >= this.posX) && (player.getPosX() <= (this.posX + this.tailleX))) {
		// 	if ((player.getPosY() >= this.posY) && (player.getPosY() <= (this.posY + this.tailleY))) {
		// 		return true;
		// 	}
		// }
		// return false;
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

	showDebug(player) {
		// const { posX, posY } = player.dresseur;
		// const context = getContext();
		//
		// context.fillStyle = 'rgba(0, 0, 255, 0.5)';
		//
		// context.fillRect(
		// 	this.posX * 3 - (posX * 3) + 340,
		// 	this.posY * 3 - (posY * 3) + 280,
		// 	this.tailleX * 3,
		// 	this.tailleY * 3,
		// );
		const context = getContext();
		context.fillStyle = ColorDebug.Porte;

		const playerCoords = player.dresseur.getCoordinates();
		const porteCoords = this.getCoordinates();

		context.fillRect(
			(porteCoords.x - playerCoords.x) * 3 + 340,
			(porteCoords.y - playerCoords.y) * 3 + 260,
			porteCoords.tailleX * 3,
			porteCoords.tailleY * 3,
		);
	}
}

export default Porte;
