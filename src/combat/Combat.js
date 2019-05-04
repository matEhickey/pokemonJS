import { getContext } from '../utils/render';
import BUTTON from '../gameloop/touches';
import Font from '../modes/Font';
import MenuCombat from './MenuCombat';
import hero from '../../assets/imgs/BackSpritesHero.png';

// import CombatTurn from "../modes/CombatTurn";
import CombatMode from '../modes/CombatMode';
import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';

const WaitLimit = {};
WaitLimit.short = 5;
WaitLimit.middle = 10;
WaitLimit.long = 20;

class Combat {
	constructor(player) {
		this.player = player;

		this.joueurs = [this.player.dresseur, this.player.getAdv()];
		this.tour = this.joueurs[0].getPokemon(0).agi - this.joueurs[1].getPokemon(0).agi > 0 ? 0 : 1;

		this.checkTourComplete = 0;
		// -> devient 1 quand un pokemon a attaquer,
		// repasse a 0 quand le deuwieme aussi, et change le mode.

		this.mode = CombatMode.dresseurs;
		this.menu = new MenuCombat(player, this);

		this.time = 0; // compteur incremental de temps (pas d unité speciales, n*this.player.fps)

		this.infos = [];
	}

	runTour() {
		if (this.mode === CombatMode.attaque) {
			this.handleAttaque();
		}

		if (this.mode === CombatMode.dresseurs) {
			this.time += 1;
			if (this.time > WaitLimit.short) { // affichage des sprites
				this.mode = CombatMode.pokemons;
				this.time = 0;
			}
		}
		if (this.mode === CombatMode.pokemons) {
			this.time += 1;
			if (this.time > WaitLimit.middle) {	// affichage des sprites
				this.mode = CombatMode.menuSelection;
				this.time = 0;
			}
		}

		if (this.mode === CombatMode.discussions) {
			// mode discussion
			// console.log('Combat.runTour: mode discussion');
		}

		if (this.mode === CombatMode.menuSelection) {
			// mode selection
			// console.log('Combat.runTour: mode selection');
		}

		// console.log("mode  "+this.mode);
		// console.log("time  "+this.time);
	}

	finCombat() {
		this.mode = CombatMode.discussions_end;
		this.infos.push('Bravo, vous avez gagné ce combat');
	}

	handleAttaque() {
		const currentDresseur = this.joueurs[this.tour];
		const adversaire = this.joueurs[1 - this.tour];
		console.log(`Combat.handleAttaque : curr : ${currentDresseur.nom} / adv : ${adversaire.nom}`);

		if (!(currentDresseur === this.player.dresseur)) {
			// recuperer l attaque, et surtout son type
			const rand = Math.round(Math.random() * 4);
			currentDresseur.getPokemon(0).setSelectAttaque(rand);
		}

		if (
			currentDresseur.getPokemon(0).pdv > 0
			&& adversaire.getPokemon(0).pdv > 0
		) {
			if (currentDresseur.attaqueCanceled) {
				currentDresseur.attaqueCanceled = false;
			}
			else {
				currentDresseur.getPokemon(0).attaque(
					adversaire.getPokemon(0),
					this,
				);
			}

			this.checkTourComplete += 1;
			if (this.checkTourComplete > 1) {
				this.checkTourComplete = 0;
				this.mode = CombatMode.discussions;
			}

			if (adversaire.getPokemon(0).pdv <= 0) {
				adversaire.getPokemon(0).pdv = 0;
				this.infos.push(`${adversaire.getPokemon(0).getName()} a epuisé ses pdv`);

				// calcul experience
				// lvl adverse^(5) * (rand(15 -> 17)) *5 / lvl
				const expe = Math.round(
					(
						adversaire.getPokemon(0).lvl
						* adversaire.getPokemon(0).lvl
					)
					* (Math.random() * 2 + 15) * 2 / currentDresseur.getPokemon(0).lvl,
				);
				// ajouter a pokemon une variable attaque qui sera choisi avant ce calcul

				this.infos.push(`${currentDresseur.getPokemon(0).getName()} gagne ${expe} pts d'experiences`);
				currentDresseur.getPokemon(0).addExperience(expe, this);

				const pokemonsAlive = adversaire.pokemonsEnVie();
				console.log(`${adversaire.nom} lost a pokemon, remain ${pokemonsAlive.length}`);
				if (pokemonsAlive.length > 0) {
					// change pokemon
					console.log('Combat.handleAttaque: change pokemon');
					this.infos.push(`${adversaire.getName()} change de pokemon`);
					this.mode = CombatMode.discussions;

					// normalement un pokemon sauvage n as pas besoin de cette fonction
					adversaire.echange(pokemonsAlive[0], adversaire.getPokemon(0));

					this.tour = 1 - this.tour;
					// this.tour =	(this.joueurs[0].getPokemon(0).agi - this.joueurs[1].getPokemon(0).agi)
					// 	> 0 ? 0 : 1;
				}
				else {
					adversaire.asPerdu = 1;

					if (adversaire === this.player.dresseur) {
						// console.log("Perdu");
						currentDresseur.soignePokemons();
						currentDresseur.setOriginalOrientation();
						this.player.onLose();
					}
					else {
						this.finCombat();
					}
				}
			}
		}
		this.tour = 1 - this.tour;
	}

	drawCombat() {
		const context = getContext();
		context.fillStyle = this.player.couleurPrefere;
		context.fillRect(50, 50, 800, 550);
		context.fillStyle = '#000000';
		// console.log(`Combat.drawCombat: mode ${this.mode}`);


		if (this.mode === CombatMode.dresseurs) {
			if (this.player.getAdv().isSauvage()) {
				this.player.getAdv().getPokemon(0).afficheToiCombat();
			}
			else {
				context.drawImage(
					this.player.charSprites,
					80 * this.player.getAdv().getGTX(),
					80 * this.player.getAdv().getGTY(),
					80, 80, 600, 50, 250, 250,
				);
			}

			context.font = Font.medium;
			context.fillText(`Adversaire : ${this.player.getAdv().getName()}`, 65, 100);
			const heroImg = document.createElement('img');
			heroImg.src = hero;
			context.drawImage(heroImg, 0, 0, 70, 75, 50, 250, 400, 400);
			context.font = Font.medium;
			context.fillText('Combat!!', 365, 300);
		}

		if (this.mode === CombatMode.pokemons) {
			context.font = Font.little;
			context.fillText(this.player.getAdv().getPokemon(0).getName(), 65, 140);
			context.fillText(`Niveau :${this.player.getAdv().getPokemon(0).lvl}`, 90, 170);
			context.fillText(`Pdv :${this.player.getAdv().getPokemon(0).pdv}/${this.player.getAdv().getPokemon(0).pdvMax}`, 90, 190, 200);
			this.player.getAdv().getPokemon(0).afficheToiCombat();


			context.font = Font.little;
			context.fillText(this.player.dresseur.getPokemon(0).getName(), 450, 400);
			context.fillText(`Niveau :${this.player.dresseur.getPokemon(0).lvl}`, 500, 430);
			context.fillText(`Pdv :${this.player.dresseur.getPokemon(0).pdv}/${this.player.dresseur.getPokemon(0).pdvMax}`, 500, 450, 200);
			this.player.dresseur.getPokemon(0).getBackSprite();
		}

		if (this.mode === CombatMode.discussions) {
			context.font = Font.little;
			context.fillText(this.player.getAdv().getPokemon(0).getName(), 65, 140);
			context.fillText(`Niveau :${this.player.getAdv().getPokemon(0).lvl}`, 90, 170);
			context.fillText(`Pdv :${this.player.getAdv().getPokemon(0).pdv}/${this.player.getAdv().getPokemon(0).pdvMax}`, 90, 190, 200);
			this.player.getAdv().getPokemon(0).afficheToiCombat();

			context.font = Font.little;
			context.fillText(this.player.dresseur.getPokemon(0).getName(), 450, 400);
			context.fillText(`Niveau :${this.player.dresseur.getPokemon(0).lvl}`, 500, 430);
			context.fillText(`Pdv :${this.player.dresseur.getPokemon(0).pdv}/${this.player.dresseur.getPokemon(0).pdvMax}`, 500, 450, 200);
			this.player.dresseur.getPokemon(0).getBackSprite();

			context.fillStyle = '#aaaaaa';
			context.fillRect(50, 450, 800, 30 + (this.infos.length * 25));
			context.fillStyle = '#000000';
			context.font = Font.little;

			// for(var i = 0;i< this.infos.length;i++){
			this.infos.forEach((info, index) => {
				context.fillText(info, 80, 485 + (25 * index));
			});
		}

		if (this.mode === CombatMode.menuSelection) {
			context.font = Font.little;
			context.fillText(this.player.getAdv().getPokemon(0).getName(), 65, 140);
			context.fillText(`Niveau :${this.player.getAdv().getPokemon(0).lvl}`, 90, 170);
			context.fillText(`Pdv :${this.player.getAdv().getPokemon(0).pdv}/${this.player.getAdv().getPokemon(0).pdvMax}`, 90, 190, 200);
			this.player.getAdv().getPokemon(0).afficheToiCombat();

			context.font = Font.little;
			context.fillText(this.player.dresseur.getPokemon(0).getName(), 450, 400);
			context.fillText(`Niveau :${this.player.dresseur.getPokemon(0).lvl}`, 500, 430);
			context.fillText(`Pdv :${this.player.dresseur.getPokemon(0).pdv}/${this.player.dresseur.getPokemon(0).pdvMax}`, 500, 450, 200);
			this.player.dresseur.getPokemon(0).getBackSprite();


			this.menu.afficheToi();
		}

		if (this.mode === CombatMode.attaque) {
			// console.log('draw attaque');
		}

		if (this.mode === CombatMode.discussions_end) {	// copie du 3 mais pour la fin
			context.font = Font.little;
			context.fillText(this.player.getAdv().getPokemon(0).getName(), 65, 140);
			context.fillText(`Niveau :${this.player.getAdv().getPokemon(0).lvl}`, 90, 170);
			context.fillText(`Pdv :${this.player.getAdv().getPokemon(0).pdv}/${this.player.getAdv().getPokemon(0).pdvMax}`, 90, 190, 200);
			// this.player.getAdv().getPokemon(0).afficheToiCombat();


			context.font = Font.little;
			context.fillText(this.player.dresseur.getPokemon(0).getName(), 450, 400);
			context.fillText(`Niveau :${this.player.dresseur.getPokemon(0).lvl}`, 500, 430);
			context.fillText(`Pdv :${this.player.dresseur.getPokemon(0).pdv}/${this.player.dresseur.getPokemon(0).pdvMax}`, 500, 450, 200);
			this.player.dresseur.getPokemon(0).getBackSprite();

			context.fillStyle = '#aaaaaa';
			context.fillRect(50, 450, 800, 30 + (this.infos.length * 25));
			context.fillStyle = '#000000';
			context.font = Font.little;
			this.infos.forEach((info, index) => {
				context.fillText(info, 80, 485 + (25 * index));
			});
		}
	}

	gestionEvenement(touche) {
		console.log(`event ${touche}`);
		if (this.mode === CombatMode.menuSelection) {
			if (touche === BUTTON.CONFIRM) this.menu.valide();
			else this.menu.changeSelection(touche);
		}
		if (this.mode === CombatMode.discussions) {
			if (touche === BUTTON.CONFIRM) {
				this.mode = CombatMode.menuSelection;
				this.infos = [];
			}
		}
		if (this.mode === CombatMode.discussions_end) {
			if (touche === BUTTON.CONFIRM) {
				if (!this.joueurs[1].isSauvage()) { // si c est un dresseur
					this.joueurs[1].parler(this.player);
					console.log('Combat.gestionEvenement : set HUD to discussion');
					this.player.mode = PlayerMode.HUD;
					this.player.hud.mode = PlayerHudMode.DISCUSSION;
				}
				else { // s'il s agit d un pokemon sauvage
					this.player.mode = PlayerMode.MAP;
				}
			}
		}
	}
}

export default Combat;
