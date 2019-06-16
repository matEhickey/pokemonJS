// @flow

import BUTTON from '../gameloop/touches';
import MenuCombat from './MenuCombat';
import PlayerController from '../gameloop/PlayerController';
import type { Adversaire } from './Adversaire';

import DevMode from '../utils/DevMode';
import CombatMode from '../modes/CombatMode';
import PlayerMode from '../modes/PlayerMode';
import PlayerHudMode from '../modes/PlayerHudMode';
import CombatRenderer from '../renderers/CombatRenderer';

const WaitLimit = {};
WaitLimit.short = 25;
WaitLimit.middle = 50;
WaitLimit.long = 80;

class Combat {
  player: PlayerController;
  joueurs: Array<Adversaire>;
  tour: number;
  mode: Symbol;
  menu: MenuCombat;
  time: number;
  infos: Array<string>
  checkTourComplete: number;
  renderer: CombatRenderer;

  constructor(player: PlayerController, adversaire: Adversaire) {
    this.player = player;


    this.joueurs = [this.player.dresseur, adversaire];
    this.tour = this.joueurs[0].getPokemon(0).agi > this.joueurs[1].getPokemon(0).agi
      ? 0 : 1;

    this.checkTourComplete = 0;
    // -> devient 1 quand un pokemon a attaquer,
    // repasse a 0 quand le deuwieme aussi, et change le mode.

    this.mode = CombatMode.dresseurs;
    this.menu = new MenuCombat(player, this);
    this.renderer = new CombatRenderer(this);

    this.time = 0; // compteur incremental de temps (pas d unité speciales, n*this.player.fps)

    this.infos = [];
  }

  runTour() {
    if (this.mode === CombatMode.attaque) {
      this.handleAttaque();
    }

    if (this.mode === CombatMode.dresseurs) {
      this.time += 1;
      if (this.time > WaitLimit.long) { // affichage des sprites
        this.mode = CombatMode.pokemons;
        this.time = 0;
      }
    }
    if (this.mode === CombatMode.pokemons) {
      this.time += 1;
      if (this.time > WaitLimit.middle) { // affichage des sprites
        this.mode = CombatMode.menuSelection;
        this.time = 0;
      }
    }

    if (this.mode === CombatMode.discussions) {
      // ntd
    }

    if (this.mode === CombatMode.menuSelection) {
      // ntd
    }
  }

  finCombat() {
    this.mode = CombatMode.discussionsEnd;
    this.infos.push('Bravo, vous avez gagné ce combat');
  }

  handleAttaque() {
    const { currentDresseur, currentPokemon, currentPokemonName } = this.initAttaqueAgressor();
    const { adversaire, advPokemon, advPokemonName } = this.initAttaqueDefensor();
    // console.log(`Combat.handleAttaque: ${currentDresseur.nom} / ${adversaire.nom}`);

    if (!(currentDresseur === this.player.dresseur)) {
      // recuperer l attaque, et surtout son type
      const rand = Math.round(Math.random() * 4);
      currentPokemon.setSelectAttaque(rand);
    }

    const attaque = currentPokemon.getSelectAttaque();
    if (!attaque) {
      console.error('Combat.handleAttaque: no seleted attaque');
      return;
    }


    if (
      currentPokemon.pdv > 0
  && advPokemon.pdv > 0
    ) {
      if (currentDresseur.attaqueCanceled) {
        currentDresseur.attaqueCanceled = false;
      }
      else {
        const noDamages = DevMode.getOption('invincible') && adversaire === this.player.dresseur;
        const damages = currentPokemon.attaque(
          advPokemon,
          noDamages,
        );

        this.infos.push(
          `${currentPokemonName} attaque
${attaque.nom}
et inflige ${damages} dégats`,
        );
      }

      this.checkTourComplete += 1;
      if (this.checkTourComplete > 1) {
        this.checkTourComplete = 0;
        this.mode = CombatMode.discussions;
      }

      if (advPokemon.pdv <= 0) {
        advPokemon.pdv = 0;
        this.infos.push(`${advPokemonName} a epuisé ses pdv`);

        // calcul experience
        // lvl adverse^(2) * rand() * 50 / lvl
        const expe = Math.round(
          (advPokemon.lvl ** 2)
          * 50
          * (Math.random() + 0.5)
          / currentPokemon.lvl,
        );

        this.infos.push(`${currentPokemonName} gagne ${expe} pts d'experiences`);
        currentPokemon.addExperience(expe, this);

        const pokemonsAlive = adversaire.pokemonsEnVie();
        // console.log(`${adversaire.nom} lost a pokemon, remain ${pokemonsAlive.length}`);
        if (pokemonsAlive.length > 0) {
          // console.log('Combat.handleAttaque: change pokemon');
          adversaire.echange(pokemonsAlive[0], advPokemon);
          this.infos.push(`${adversaire.nom} change de pokemon`);
          this.mode = CombatMode.discussions;


          this.tour = 1 - this.tour;
          // this.tour = (this.joueurs[0].getPokemon(0).agi - this.joueurs[1].getPokemon(0).agi)
          // > 0 ? 0 : 1;
        }
        else {
          adversaire.isAgressive = true;

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

  initAttaqueAgressor() {
    const currentDresseur = this.joueurs[this.tour];
    const currentPokemon = currentDresseur.getPokemon(0);
    const currentPokemonName = currentPokemon.getName();

    return ({ currentDresseur, currentPokemon, currentPokemonName });
  }

  initAttaqueDefensor() {
    const adversaire = this.joueurs[1 - this.tour];
    const advPokemon = adversaire.getPokemon(0);
    const advPokemonName = advPokemon.getName();

    return ({ adversaire, advPokemon, advPokemonName });
  }

  drawCombat() {
    this.renderer.drawCombat();
  }

  gestionEvenement(touche: number) {
  // console.log(`event ${touche}`);
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
    if (this.mode === CombatMode.discussionsEnd) {
      if (touche === BUTTON.CONFIRM) {
        if (!this.joueurs[1].isSauvage()) { // si c est un dresseur
          this.joueurs[1].parler(this.player);
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
