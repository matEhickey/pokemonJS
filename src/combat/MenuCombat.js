// @flow

import BUTTON from '../gameloop/touches';
import PlayerController from '../gameloop/PlayerController';
import { getContext } from '../utils/render';

import Color from '../utils/Color';
import CombatMode from '../types/CombatMode';
import Combat from './Combat';
import DevMode from '../utils/DevMode';
import PlayerHudMode from '../types/PlayerHudMode';
import PlayerMode from '../types/PlayerMode';
import MenuCombatMode from '../types/MenuCombatMode';

class MenuCombat {
  player: PlayerController;
  combat: Combat;
  mode: Symbol;
  selection: Symbol;

  selectionAttaque: number;
  selectionObjet: number;
  selectionPokemon: number;

  constructor(player: PlayerController, combat: Combat) {
    this.player = player;

    this.combat = combat;
    this.mode = MenuCombatMode.global;

    this.selection = MenuCombatMode.attaques;

    // to keyify, but keep values as it's also displayed
    // but to extract from here
    this.selectionAttaque = 0;
    this.selectionObjet = 0;
    this.selectionPokemon = 0;
  }

  afficheToi() {
    const context = getContext();
    switch (this.mode) {
      case MenuCombatMode.global: // menu normal
        AfficheMenuBackGround(context);
        AfficheMenuSelection(context, this.player, this.selection);
        break;

      case MenuCombatMode.attaques: // menu attaque
        AfficheMenuBackGround(context);
        AfficheMenuSelection(context, this.player, this.selection);

        context.fillStyle = Color.LightGrey;
        context.fillRect(360, 280, 320, 370);

        context.fillStyle = this.player.couleurPrefere;
        context.fillRect(380, 290 + (this.selectionAttaque * 70), 280, 70);

        context.fillStyle = Color.Black;
        const attNames = this.player.dresseur.getPokemon(0).attaques.map(
          attaque => attaque.nom,
        );

        attNames.forEach((attName, i) => {
          if (i < 4) {
            context.fillText(
              attName,
              390, 330 + (70 * i), 270,
            );
          }
        });

        context.fillText('Retour', 390, 610, 270);
        break;

      case MenuCombatMode.pokemons:
        AfficheMenuBackGround(context);
        AfficheMenuSelection(context, this.player, this.selection);

        // const topY = 400 - this.player.dresseur.pokemons.length * 70;
        context.fillStyle = Color.LightGrey;
        // context.fillRect(360, topY, 320, 70 * (this.player.dresseur.pokemons.length + 1) + 20);
        context.fillRect(360, 220, 320, 70 * (this.player.dresseur.pokemons.length + 1) + 20);

        context.fillStyle = this.player.couleurPrefere;
        // context.fillRect(380, (topY + 10) + 70 * this.selectionPokemon, 280, 70);
        context.fillRect(380, 230 + 70 * this.selectionPokemon, 280, 70);

        context.fillStyle = Color.Black;
        this.player.dresseur.pokemons.forEach((pokemon, i) => {
          context.fillText(
            pokemon.getName(),
            // 390, (topY + 50) + (70 * i), 270,
            390, 270 + (70 * i), 270,
          );
        });

        // context.fillText('Retour',
        //  (topY + 50), 200 + 70 * (this.player.dresseur.pokemons.length + 1), 270
        // );
        context.fillText(
          'Retour',
          390, 200 + 70 * (this.player.dresseur.pokemons.length + 1), 270,
        );
        break;

      case MenuCombatMode.objets: // menu objet
        AfficheMenuBackGround(context);
        AfficheMenuSelection(context, this.player, this.selection);

        context.fillStyle = Color.LightGrey;
        context.fillRect(360, 280, 320, 370);

        context.fillStyle = this.player.couleurPrefere;
        context.fillRect(380, 290 + (this.selectionObjet * 70), 280, 70);

        context.fillStyle = Color.Black;
        context.fillText('Potion : 0', 390, 330, 270);
        context.fillText('Pokeball', 390, 400, 270);
        context.fillText('Retour', 390, 610, 270);
        break;
      default:
        console.error('MenuCombat.afficheToi last : no compatible option');
    }
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

function AfficheMenuBackGround(context) {
  context.fillStyle = Color.LightGrey;
  context.fillRect(50, 480, 800, 155);
}

function AfficheMenuSelection(context, player, selection) {
  context.fillStyle = player.couleurPrefere;
  context.fillRect(60, 490, 260, 135);

  context.fillStyle = Color.Black;
  context.fillText('Que voulez vous faire ?', 70, 565);

  context.fillStyle = selection === MenuCombatMode.attaques ? Color.LighterGrey : Color.DarkGrey;
  context.fillRect(340, 490, 240, 65);

  context.fillStyle = selection === MenuCombatMode.objets ? Color.LighterGrey : Color.DarkGrey;
  context.fillRect(340, 560, 240, 65);

  context.fillStyle = selection === MenuCombatMode.pokemons
    ? Color.LighterGrey : Color.DarkGrey;
  context.fillRect(590, 490, 240, 65);

  context.fillStyle = selection === MenuCombatMode.escape ? Color.LighterGrey : Color.DarkGrey;
  context.fillRect(590, 560, 240, 65);

  context.fillStyle = Color.Black;
  context.fillText('Attaque', 360, 530);
  context.fillText('Pokemons', 360, 600);
  context.fillText('Objets', 610, 530);
  context.fillText('Fuite', 610, 600);
}

export default MenuCombat;
