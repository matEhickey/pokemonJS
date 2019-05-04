import { getContext, getCanvas } from '../utils/render';
import { CombatContreSauvage } from '../combat/Sauvage';
import DevMode from '../modes/DevMode';

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

	show() {
		this.drawTerrain();
		this.afficheBatiments(this.player);
		this.drawDresseurs();
		this.drawMonDresseur();
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

	afficheBatiments(player) {
		this.batiments.forEach((batiment) => {
			batiment.afficheToi(player);
		});
	}

	displayObjetConsole() {
		this.objets.forEach((objet) => {
			objet.displayName();
		});
	}

	isWalkable(posX, posY) {
		const notWalkable = this.objets.some(objet => !objet.isWalkable(posX, posY));
		return !notWalkable;
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

	getDresseur(x, y) {
		return this.dresseurs.find((dresseur) => {
			if (dresseur.isOnPosition(x, y)) {
				return dresseur;
			}
			return null;
		});
	}

	getPNJ(x, y) {
		this.pnjs.forEach((pnj) => {
			if (pnj.isOnPosition(x, y)) {
				return pnj;
			}
		});
		return null;
	}

	getBatiment(x, y) {
		this.batiments.forEach((batiment) => {
			if (batiment.isOnPosition(x, y)) {
				return batiment;
			}
		});
		return null;
	}

	drawDresseurs() {
		this.dresseurs.forEach((dresseur) => {
			dresseur.afficheToi(this.player);
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
		this.player.dresseur.afficheToi(this.player);
	}

	showDebug() {
		if (DevMode.getOption('showCollision')) {
			this.objets.forEach((objet) => {
				if (['Collision', 'Batiment'].includes(objet.nom)) {
					objet.showDebug(this.player);
				}
			});
		}

		if (DevMode.getOption('showPortes')) {
			this.portes.forEach((porte) => {
				porte.showDebug(this.player);
			});
		}

		if (DevMode.getOption('showHerbes')) {
			this.herbes.forEach((herbe) => {
				herbe.showDebug(this.player);
			});
		}

		if (DevMode.getOption('showBatiments')) {
			this.batiments.forEach((batiment) => {
				batiment.showDebug(this.player);
			});
		}
	}

	checkZonesDresseurs(player) {
		this.dresseurs.forEach((dresseur) => {
			if (dresseur.walkOnZone(player)) {
				if (!dresseur.asPerdu) {
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
