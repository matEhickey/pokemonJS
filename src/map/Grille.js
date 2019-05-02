import { getContext, getCanvas } from '../utils/render_utils';
import { CombatContreSauvage } from '../combat/Sauvage';

class Grille {
	constructor(player, terrain) {
		this.player = player;

		this.terrain = terrain;
		this.objets = [];
		this.dresseurs = [];
		this.batiments = [];
		this.pnjs = [];
		this.portes = [];
		this.herbes = [];
		this.num = Grille.nbG;
		Grille.nbG += 1;
	}

	saveDresseurs() {
		// console.log("Sauvegardes dresseurs grille "+this.num);
		// var chaine = "";
		// for(var i=0;i<this.dresseurs.length;i++){
		// 	chaine+=getDresseurInfo(this.dresseurs[i])+"&";
		// }//-> false pour isController
		// console.log(chaine);
		// return(chaine);
	}

	ajouteObjet(objet) {
		this.objets.push(objet);
	}

	ajoutePNJ(objet) {
		this.pnjs.push(objet);
	}

	ajoutePorte(porte) {
		this.portes.push(porte);
	}

	ajouteHerbe(herbe) {
		this.herbes.push(herbe);
	}

	ajouteDresseur(objet) {
		this.dresseurs.push(objet);
		this.objets.push(objet);
	}

	ajouteBatiment(bati) {
		this.batiments.push(bati);
		this.objets.push(bati);
	}

	afficheBatiments(posiX, posiY) {
		this.batiments.forEach((batiment) => {
			batiment.afficheToi(posiX, posiY);
		});
	}

	displayObjetConsole() {
		this.objets.forEach((objet) => {
			objet.displayName();
		});
	}

	displayDresseurConsole() {
		console.log(`${this.dresseurs.length} dresseurs:`);
		this.dresseurs.forEach((dresseur) => {
			dresseur.displayName();
			console.log(dresseur.getOrientation());
		});
	}

	isWalkable(posX, posY) {
		this.objets.forEach((objet) => {
			if (!objet.isWalkable(posX, posY)) {
				return false;
			}
		});
		return true;
	}

	checkWalkOnPorte() {
		this.portes.forEach((porte) => {
			if (porte.walkOn(this.player)) {
				porte.rejoindreDestination(this.player);
			}
		});
	}

	checkWalkOnHerbes() {
		this.herbes.forEach((herbe) => {
			if (herbe.walkOn(this.player)) {
				if (Math.random() > 0.95) {
					CombatContreSauvage(this.player, herbe.getPuissance());
				}
			}
		});
	}

	getDresseur(posX, posY) {
		this.dresseurs.forEach((dresseur) => {
			if (dresseur.isOnPosition(posX, posY)) {
				return dresseur;
			}
		});
		return null;
	}

	getPNJ(posX, posY) {
		this.pnjs.forEach((pnj) => {
			if (pnj.isOnPosition(posX, posY)) {
				return pnj;
			}
		});
		return null;
	}

	getBatiment(posX, posY) {
		this.batiments.forEach((batiment) => {
			if (batiment.isOnPosition(posX, posY)) {
				return batiment;
			}
		});
		return null;
	}

	drawDresseur(posX, posY) {
		this.dresseurs.forEach((dresseur) => {
			dresseur.afficheToi(posX, posY);
		});
	}

	drawTerrain() {
		const context = getContext();
		const canvas = getCanvas();

		context.drawImage(
			this.terrain,
			this.player.getPosX() + 250,
			this.player.getPosY() + 250,
			canvas.width / 3,
			canvas.height / 3,
			0,
			0,
			canvas.width,
			canvas.height,
		);
	}

	drawMonDresseur() {
		// {x, y, taileX, tailleY} Portion , {x, y, tailleX, tailleY} Canvas
		const context = getContext();
		switch (this.player.getOrientation()) {
		case 1:
			switch (this.player.dresseur.position) {
			case 0:
				context.drawImage(this.player.dresseur.texture, 0, 0, 32, 48, 320, 240, 32, 48);
				break;
			case 1:
				context.drawImage(this.player.dresseur.texture, 32, 0, 32, 48, 320, 240, 32, 48);
				break;
			case 2:
				context.drawImage(this.player.dresseur.texture, 64, 0, 32, 48, 320, 240, 32, 48);
				break;
			case 3:
				context.drawImage(this.player.dresseur.texture, 96, 0, 32, 48, 320, 240, 32, 48);
				break;
			case 5:
				context.drawImage(this.player.dresseur.texture, 0, 0, 32, 48, 320, 240, 32, 48);
				break;
			default:
				console.warn('Grille.drawMonDresseur switch a: not compatible option');
			}
			break;

		case 2:
			switch (this.player.dresseur.position) {
			case 0:
				context.drawImage(this.player.dresseur.texture, 0, 48, 32, 48, 320, 240, 32, 48);
				break;
			case 1:
				context.drawImage(this.player.dresseur.texture, 32, 48, 32, 48, 320, 240, 32, 48);
				break;
			case 2:
				context.drawImage(this.player.dresseur.texture, 64, 48, 32, 48, 320, 240, 32, 48);
				break;
			case 3:
				context.drawImage(this.player.dresseur.texture, 96, 48, 32, 48, 320, 240, 32, 48);
				break;
			case 5:
				context.drawImage(this.player.dresseur.texture, 0, 48, 32, 48, 320, 240, 32, 48);
				break;
			default:
				console.warn('Grille.drawMonDresseur switch b : not compatible option');
			}
			break;

		case 3:
			switch (this.player.dresseur.position) {
			case 0:
				context.drawImage(this.player.dresseur.texture, 0, 96, 32, 48, 320, 240, 32, 48);
				break;
			case 1:
				context.drawImage(this.player.dresseur.texture, 32, 96, 32, 48, 320, 240, 32, 48);
				break;
			case 2:
				context.drawImage(this.player.dresseur.texture, 64, 96, 32, 48, 320, 240, 32, 48);
				break;
			case 3:
				context.drawImage(this.player.dresseur.texture, 96, 96, 32, 48, 320, 240, 32, 48);
				break;
			case 5:
				context.drawImage(this.player.dresseur.texture, 0, 96, 32, 48, 320, 240, 32, 48);
				break;
			default:
				console.warn('Grille.drawMonDresseur switch c : not compatible option');
			}
			break;

		case 4:
			switch (this.player.dresseur.position) {
			case 0:
				context.drawImage(this.player.dresseur.texture, 0, 144, 32, 48, 320, 240, 32, 48);
				break;
			case 1:
				context.drawImage(this.player.dresseur.texture, 32, 144, 32, 48, 320, 240, 32, 48);
				break;
			case 2:
				context.drawImage(this.player.dresseur.texture, 64, 144, 32, 48, 320, 240, 32, 48);
				break;
			case 3:
				context.drawImage(this.player.dresseur.texture, 96, 144, 32, 48, 320, 240, 32, 48);
				break;
			case 5:
				context.drawImage(this.player.dresseur.texture, 0, 144, 32, 48, 320, 240, 32, 48);
				break;
			default:
				console.warn('Grille.drawMonDresseur switch d : not compatible option');
			}
			break;

		default:
			console.warn('Grille.drawMonDresseur switch e: not compatible option');
		}
	}

	checkZonesDresseurs(player) {
		this.dresseurs.forEach((dresseur) => {
			if (dresseur.walkOnZone(player)) {
				if (!dresseur.asPerdu) {
					this.player.setAdv(dresseur);
					dresseur.attaqueJoueur(this.player);
				}
			}
		});
	}

	load() {
		this.dresseurs.forEach((dresseur) => {
			dresseur.load();
		});
	}

	getDresseurByName(name) {
		this.dresseurs.forEach((dresseur) => {
			if (dresseur.getName() === name) {
				return dresseur;
			}
		});
		console.log(`Probleme :${name} n'est pas dans la grille`);
	}

	getDresseurByNum(num) {
		this.dresseurs.forEach((dresseur) => {
			if (dresseur.getNum() === num) {
				return dresseur;
			}
		});
		return false;
	}
}

Grille.nbG = 0;

export default Grille;
