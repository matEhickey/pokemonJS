// @flow

import PlayerHudMode from '../types/PlayerHudMode';
import PlayerMode from '../types/PlayerMode';
import { getContext, getCanvas } from '../utils/render';
import Combat from '../combat/Combat';
import BUTTON from '../gameloop/touches';
import PlayerController from '../gameloop/PlayerController';
import Menu from './Menu';
import Font from '../types/Font';


class HUD {
  player: PlayerController;
  mode: Symbol;
  menu: Menu;

  lastSeen: Symbol;

  constructor(player: PlayerController) {
    this.player = player;
    this.mode = PlayerHudMode.PAUSE;

    this.menu = new Menu(player);
  }

  show() {
    if (this.lastSeen !== this.mode) {
      // console.log(`HUD.show: mode did change -> ${this.mode}`);
      this.lastSeen = this.mode;
    }

    switch (this.mode) {
      case PlayerHudMode.PAUSE:
        this.menu.show();
        break;
      case PlayerHudMode.DISCUSSION:
        if (this.player.discussion) {
          this.player.discussion.showCurrentMessage(this.player);
        }
        break;
      case PlayerHudMode.FAIL:
        this.displayFail();
        break;
      case PlayerHudMode.INFO: // informations simples, avec controle pour retour au plateau
        this.displayInfo();
        break;
      case PlayerHudMode.SUCCESS: // affichage bravo vous avez capturer tel pokemon
        this.displayWinCapture();
        break;
      case PlayerHudMode.WAIT: // attente + informations simples
        this.displayInfo();
        break;
      default:
        console.warn(`Hud.show: imcompatible option : ${this.mode.toString()}`);
    }
  }

  event(touche: number) {
    // console.log(`HUD.event(${touche}): mode ${this.mode}`);

    switch (this.mode) {
      case PlayerHudMode.PAUSE:
        // console.log('mode menuglobal');
        this.menu.event(touche);
        break;
      case PlayerHudMode.DISCUSSION:
        // console.log('mode discussion');
        if (touche === BUTTON.CONFIRM || touche === BUTTON.BACK) {
          const { discussion } = this.player;

          const isDiscussionOver = discussion
            && discussion.increaseMessage();

          if (isDiscussionOver) {
            this.player.discussion = null;

            // const { combat } = this.player;

            if (discussion && discussion.person) {
              const { x, y } = this.player.calculNextCase();
              const adversaire = discussion.person;
              const peopleInFrontOfPlayer = this.player.grille.getDresseur(x, y);

              if (peopleInFrontOfPlayer) {
                // on parlait directement au dresseur pour l attaquer
                if (!peopleInFrontOfPlayer.isAgressive) {
                  this.player.mode = PlayerMode.FIGHT;

                  this.player.combat = new Combat(
                    this.player,
                    adversaire,
                  );
                }
                else {
                  this.player.mode = PlayerMode.MAP;
                }
              }
              else if (adversaire && adversaire.isAgressive) {
                // le dresseur nous attaquait
                this.player.mode = PlayerMode.MAP;
              }
              else {
                this.player.mode = PlayerMode.FIGHT;
                this.player.combat = new Combat(this.player, adversaire);
              }
            }
            else {
              this.player.mode = PlayerMode.MAP;
            }
          }
        }
        break;
      case PlayerHudMode.FAIL:
        // console.log('mode fail');
        this.mode = PlayerHudMode.PAUSE;
        this.player.mode = PlayerMode.MAP;
        sendDresseurToHealthCenter(this.player);
        this.player.dresseur.adversaire = null;
        break;
      case PlayerHudMode.INFO:
        // console.log('mode infos');
        this.mode = PlayerHudMode.PAUSE;
        this.player.mode = PlayerMode.MAP;
        break;
      case PlayerHudMode.SUCCESS:
        // console.log('mode success');
        this.mode = PlayerHudMode.PAUSE;
        this.player.mode = PlayerMode.MAP;
        this.player.dresseur.adversaire = null;
        break;
      case PlayerHudMode.WAIT:
        // console.log('mode wait');
        break;
      default:
        console.log('HUD.event: mode not found');
    }
  }

  displayFail() {
    const context = getContext();
    const canvas = getCanvas();
    const width = parseInt(canvas.getAttribute('width'), 10);
    const height = parseInt(canvas.getAttribute('height'), 10);

    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.medium;
    context.fillText('Vos pokemons sont tous K.O', 65, 250);
    context.font = Font.little;
    context.fillText('Vous avez perdu', 65, 300);
    context.font = '15px Georgia';
    context.fillText('(Appuyer sur une touche)', 65, 350);
  }

  displayInfo(): void {
    const infos = this.player.info;

    if (infos) {
      const context = getContext();
      context.fillStyle = this.player.couleurPrefere;
      context.fillRect(50, 350, 800, 250);
      context.fillStyle = '#000000';
      context.font = Font.little;
      context.fillText(infos, 60, 380);
      return;
    }
    throw new Error('HUD.displayInfo: no player.info');
  }

  displayWinCapture():void {
    const context = getContext();
    const pokemonCapture = this.player.getPokemonCapture();

    if (pokemonCapture) {
      context.fillStyle = this.player.couleurPrefere;
      context.fillRect(50, 350, 800, 250);
      context.fillStyle = '#000000';
      context.font = Font.little;
      context.fillText('Bravo, vous avez capturé un :', 160, 380);
      context.fillText(pokemonCapture.getName(), 200, 430);
      context.fillText(`Niveau ${pokemonCapture.lvl}`, 160, 480);

      pokemonCapture.afficheToiAt(550, 400);
    }
  }

  setMode(mode: Symbol) {
    this.mode = mode;
  }
}

function sendDresseurToHealthCenter(player) {
  // console.log('sendDresseurToHealthCenter : should set hud mode to pause');
  player.dresseur.adversaire = null;
  player.dresseur.posY = -72; // ---> devant centre pokemon
  player.dresseur.posY = 6;
}

export default HUD;
