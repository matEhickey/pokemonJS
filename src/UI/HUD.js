// @flow

import PlayerHudMode from '../modes/PlayerHudMode';
import PlayerMode from '../modes/PlayerMode';
import Combat from '../combat/Combat';
import BUTTON from '../gameloop/touches';
import PlayerController from '../gameloop/PlayerController';
import Menu from './Menu';
import HUDRenderer from '../renderers/HUDRenderer';


class HUD {
  player: PlayerController;
  renderer: HUDRenderer;
  mode: Symbol;
  menu: Menu;
  // lastSeen: Symbol;

  constructor(player: PlayerController) {
    this.player = player;
    this.mode = PlayerHudMode.PAUSE;
    this.renderer = new HUDRenderer(this);

    this.menu = new Menu(player);
  }

  show() {
    // if (this.lastSeen !== this.mode) {
    //   // console.log(`HUD.show: mode did change -> ${this.mode}`);
    //   this.lastSeen = this.mode;
    // }

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
        this.renderer.displayFail(this.player);
        break;
      case PlayerHudMode.INFO: // informations simples, avec controle pour retour au plateau
        this.renderer.displayInfo(this.player);
        break;
      case PlayerHudMode.SUCCESS: // affichage bravo vous avez capturer tel pokemon
        this.renderer.displayWinCapture(this.player);
        break;
      case PlayerHudMode.WAIT: // attente + informations simples
        this.renderer.displayInfo(this.player);
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
        this.handleDiscussion(touche);
        break;
      case PlayerHudMode.FAIL:
        // console.log('mode fail');
        this.mode = PlayerHudMode.PAUSE;
        this.player.mode = PlayerMode.MAP;
        this.player.sendDresseurToHealthCenter();
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
        break;
      case PlayerHudMode.WAIT:
        // console.log('mode wait');
        break;
      default:
        console.log('HUD.event: mode not found');
    }
  }

  handleDiscussion(touche: number) {
    if (touche === BUTTON.CONFIRM || touche === BUTTON.BACK) {
      const { discussion } = this.player;

      const isDiscussionOver = discussion
        && discussion.increaseMessage();

      if (isDiscussionOver) {
        this.player.discussion = null;

        if (discussion && discussion.person) {
          const { x, y } = this.player.dresseur.calculNextCase();
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
  }
}

export default HUD;
