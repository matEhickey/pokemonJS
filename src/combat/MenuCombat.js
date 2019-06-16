// @flow

import BUTTON from '../gameloop/touches';
import PlayerController from '../gameloop/PlayerController';

import CombatMode from '../modes/CombatMode';
import Combat from './Combat';
import DevMode from '../utils/DevMode';
import PlayerHudMode from '../modes/PlayerHudMode';
import PlayerMode from '../modes/PlayerMode';
import MenuCombatMode from '../modes/MenuCombatMode';
import MenuCombatRenderer from '../renderers/MenuCombatRenderer';

class MenuCombat {
  player: PlayerController;
  combat: Combat;
  mode: Symbol;
  selection: Symbol;
  renderer: MenuCombatRenderer;

  selectionAttaque: number;
  selectionObjet: number;
  selectionPokemon: number;

  constructor(player: PlayerController, combat: Combat) {
    this.player = player;

    this.combat = combat;
    this.mode = MenuCombatMode.global;

    this.selection = MenuCombatMode.attaques;
    this.renderer = new MenuCombatRenderer(this);

    // to keyify, but keep values as it's also displayed
    // but to extract from here
    this.selectionAttaque = 0;
    this.selectionObjet = 0;
    this.selectionPokemon = 0;
  }

  display() {
    this.renderer.display();
  }

  changeSelection(touche: number) {
    switch (this.mode) {
      case MenuCombatMode.global:
        if (touche === BUTTON.DOWN || touche === BUTTON.UP) {
          switch (this.selection) {
            case MenuCombatMode.attaques:
              this.selection = MenuCombatMode.objets;
              break;

            case MenuCombatMode.objets:
              this.selection = MenuCombatMode.attaques;
              break;

            case MenuCombatMode.pokemons:
              this.selection = MenuCombatMode.escape;
              break;
            case MenuCombatMode.escape:
              this.selection = MenuCombatMode.pokemons;
              break;
            default:
              console.error('MenuCombat.afficheToi.inner1 : no compatible option');
          }
        }
        else if (touche === BUTTON.LEFT || touche === BUTTON.RIGHT) {
          switch (this.selection) {
            case MenuCombatMode.attaques:
              this.selection = MenuCombatMode.pokemons;
              break;

            case MenuCombatMode.objets:
              this.selection = MenuCombatMode.escape;
              break;

            case MenuCombatMode.pokemons:
              this.selection = MenuCombatMode.attaques;
              break;
            case MenuCombatMode.escape:
              this.selection = MenuCombatMode.objets;
              break;
            default:
              console.error('MenuCombat.afficheToi.inner2 : no compatible option');
          }
        }
        break;

      case MenuCombatMode.attaques:// menu attaque
        switch (touche) {
          case BUTTON.DOWN:
            this.selectionAttaque += 1;
            if (this.selectionAttaque > 4) {
              this.selectionAttaque = 0;
            }
            break;
          case BUTTON.UP:
            this.selectionAttaque -= 1;
            if (this.selectionAttaque < 0) {
              this.selectionAttaque = 4;
            }
            break;
          default:
            console.error('MenuCombat.afficheToi attaque : no compatible option');
        }
        break;

      case MenuCombatMode.pokemons:
        switch (touche) {
          case BUTTON.DOWN:
            this.selectionPokemon += 1;
            if (this.selectionPokemon > this.player.dresseur.pokemons.length) {
              this.selectionPokemon = 0;
            }
            break;
          case BUTTON.UP:
            this.selectionPokemon -= 1;
            if (this.selectionPokemon < 0) {
              this.selectionPokemon = this.player.dresseur.pokemons.length;
            }
            break;
          default:
            console.error('MenuCombat.afficheToi pokemons : no compatible option');
        }
        break;
      case MenuCombatMode.objets:
        switch (touche) {
          case BUTTON.DOWN:
            this.selectionObjet += 1;
            if (this.selectionObjet > 4) {
              // this.player.inveentaire.length +1 (pour le bouton retour )
              this.selectionObjet = 0;
            }
            break;
          case BUTTON.UP:
            this.selectionObjet -= 1;
            if (this.selectionObjet < 0) {
              this.selectionObjet = 4;
            }
            break;
          default:
            console.error('MenuCombat.afficheToi changeselection button : no compatible option');
        }
        break;
      default:
        console.error('MenuCombat.afficheToi changeselection last : no compatible option');
    }
  }

  valide() {
    // console.log("Vous avez cliqué sur "+this.selection);
    const myPokemon = this.player.dresseur.getPokemon(0);
    const { combat } = this.player;
    if (!combat) {
      console.error('MenuCombat.valide: no combat');
      return;
    }

    const adversaire = combat.joueurs[1];
    if (!adversaire) {
      console.error('MenuCombat.valide: no adversaire');
      return;
    }

    const advPokemon = adversaire.getPokemon(0);

    switch (this.mode) {
      case MenuCombatMode.global:
        switch (this.selection) {
          case MenuCombatMode.attaques:
            this.mode = MenuCombatMode.attaques;
            break;
          case MenuCombatMode.objets:
            this.mode = MenuCombatMode.pokemons;
            break;
          case MenuCombatMode.pokemons:
            this.mode = MenuCombatMode.objets;
            break;
          case MenuCombatMode.escape:// fuite

            if (!combat) {
              console.error('MenuCombat.valide: no combat to escape');
              return;
            }

            if (adversaire && adversaire.isSauvage()) {
              if (Math.random() > 0.5) {
                this.combat.finCombat();
              }
              else {
                this.combat.infos.push('Vous n\'avez pas réussi à prendre la fuite');

                this.combat.mode = CombatMode.attaque;
                this.player.dresseur.attaqueCanceled = true;
                this.mode = MenuCombatMode.global;
              }
            }
            else {
              this.combat.infos.push('Vous ne pouvez pas fuir lors d\'un combat contre un dresseur');
              this.combat.mode = CombatMode.attaque;
              this.player.dresseur.attaqueCanceled = true;
              this.mode = MenuCombatMode.global;
            }
            break;
          default:
            console.error('MenuCombat.afficheToi valide : no compatible option');
        }
        break;

      case MenuCombatMode.attaques:// menu attaque
        if (this.selectionAttaque < 4) {
          this.combat.mode = CombatMode.attaque;
          myPokemon.setSelectAttaque(this.selectionAttaque);
        }
        this.mode = MenuCombatMode.global;
        break;
      case MenuCombatMode.pokemons:
        if (this.selectionPokemon !== this.player.dresseur.pokemons.length
    && this.player.dresseur.getPokemon(this.selectionPokemon) !== myPokemon) {
          const toGet = this.player.dresseur.getPokemon(this.selectionPokemon);
          this.player.dresseur.echange(
            toGet,
            myPokemon,
          );
          this.combat.infos.push(`Vous échangez ${myPokemon.getName()} par ${toGet.getName()}`);
          this.mode = MenuCombatMode.global;
          this.combat.mode = CombatMode.attaque;
          this.player.dresseur.attaqueCanceled = true;
        }
        else {
          this.mode = MenuCombatMode.global;
        }
        break;

      case MenuCombatMode.objets:
        switch (this.selectionObjet) {
          case 0:

            break;
          case 1: // pokeball
            this.player.dresseur.attaqueCanceled = true;
            if (!adversaire) {
              console.log('MenuCombat.valide2: no adversaire');
              return;
            }

            if (adversaire.isSauvage()) {
              if (Math.random() > 0.8 || DevMode.getOption('masterball')) { // recalculer a partir des pdv et de l agilité
                console.log('WIN capture pokemon');
                this.player.dresseur.addPokemon(advPokemon);

                this.player.mode = PlayerMode.HUD;
                this.player.hud.mode = PlayerHudMode.SUCCESS;
                this.player.setPokemonCapture(advPokemon);
              }
              else {
                console.log(advPokemon);
                this.combat.infos.push(`Le ${advPokemon.getName()} à réussi a sortir de la pokéball.`);
                this.mode = MenuCombatMode.global;
                this.combat.mode = CombatMode.attaque;
              }
            }
            else {
              // pokemon sur pokemon non sauvage
              this.combat.infos.push('Vous ne pouvez pas utiliser de pokéball sur un Pokémon d\'un autre dresseur');

              this.mode = MenuCombatMode.global;
              this.combat.mode = CombatMode.attaque;
              this.player.dresseur.attaqueCanceled = true;
            }
            break;
          case 2:

            break;
          case 4: // retour
            this.mode = MenuCombatMode.global;
            break;
          default:
            console.error('MenuCombat.afficheToi : no compatible option');
        }
        break;
      default:
        console.error('MenuCombat.afficheToi valide last : no compatible option');
    }
  }
}

export default MenuCombat;
