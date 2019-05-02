import { getContext } from '../utils/render_utils';
// penser a virer ce fichier qui n est utilisé que sur le centreP de la premiere grille (foret1)
// donc gimp l image du centreP a l endroit voulu


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

	afficheToi(posiX, posiY) {
		this.context.drawImage(
			this.texture,
			this.posX * 3 - (posiX * 3) + 340,
			this.posY * 3 - (posiY * 3) + 280,
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
}

export default Batiment;
