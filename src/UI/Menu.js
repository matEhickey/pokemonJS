// @flow

import pokedex from './Pokedex';
import BUTTON from '../gameloop/touches';
import PlayerController from '../gameloop/PlayerController';
import PlayerMode from '../types/PlayerMode';
import MenuMode from '../types/MenuMode';
import SousMenu from './SousMenu';
import MenuRenderer from '../renderers/MenuRenderer';

function changeColorHUD(player: PlayerController): void {
  player.couleurPrefere = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class Menu {
  player: PlayerController;
  options: Array<SousMenu>;
  selection: number;
  mode: Symbol;
  lastSeen: Symbol;
  renderer: MenuRenderer;

  constructor(player: PlayerController) {
    this.player = player;

    this.options = [];
    this.selection = 0; // indice permettant de situer le curseur

    this.mode = MenuMode.Global;
    this.renderer = new MenuRenderer(this);

    SousMenu.load(this);
  }

  show() {
    if (this.lastSeen !== this.mode) {
      // console.log(`Menu.show: mode did change -> ${this.mode}`);
      this.lastSeen = this.mode;
    }

    if (this.mode === MenuMode.Global) this.renderer.displayMainMenu();
    else {
      this.options[this.selection].display();
    }
  }

  event(touche: number) {
    console.log(`Menu.event(${touche}): mode ${this.mode.toString()}`);

    switch (this.mode) {
      case MenuMode.Global:
        this.handleMainMenuEvent(touche);
        break;
      case MenuMode.Pokedex:
        this.handlePokedexEvent(touche, () => { this.options[this.selection].toggle(); });
        break;
      case MenuMode.Pokemons:
        switch (touche) {
          case BUTTON.BACK:
            this.options[this.selection].toggle();
            this.mode = MenuMode.Global;
            break;
          default:
            console.log('Menu.show.menupokemon: option not compatible');
        }
        break;
      case MenuMode.Inventaire:
        switch (touche) {
          case BUTTON.BACK:
            this.options[this.selection].toggle();
            this.mode = MenuMode.Global;
            break;
          default:
            console.log('Menu.show.menuinventaire: option not compatible');
        }
        break;
      case MenuMode.Person:
        switch (touche) {
          case BUTTON.BACK:
            this.options[this.selection].toggle();
            this.mode = MenuMode.Global;
            break;
          default:
            console.warn('Menu.show.menudresseur: option not compatible');
        }
        break;
      case MenuMode.Carte:
        this.handleCarteEvent(touche, () => { this.options[this.selection].toggle(); });
        break;
      case MenuMode.Sauvegrade:
        switch (touche) {
          case BUTTON.CONFIRM:
            this.options[this.selection].toggle();
            this.player.save();
            break;
          case BUTTON.BACK:
            this.options[this.selection].toggle();
            this.mode = MenuMode.Global;
            break;
          default:
            console.log('Menu.show.menusave: option not compatible');
        }
        break;
      case MenuMode.Options:
        switch (touche) {
          case BUTTON.CONFIRM:
            changeColorHUD(this.player);
            break;
          case BUTTON.BACK:
            this.options[this.selection].toggle();
            this.mode = MenuMode.Global;
            break;
          case BUTTON.PAUSE:
            this.player.couleurPrefere = '#bbbbbb';
            break;
          default:
            console.log('Menu.show.menuoptions: option not compatible');
        }
        break;
      default:
        console.log('Menu.event: mode not found');
    }
  }

  handleMainMenuEvent(touche: number) {
    switch (touche) {
      case BUTTON.PAUSE:
        this.player.mode = PlayerMode.MAP;
        break;
      case BUTTON.CONFIRM:
        this.valider();
        break;
      case BUTTON.BACK:
        this.player.mode = PlayerMode.MAP;
        break;
      case BUTTON.UP:
        this.selectM();
        break;
      case BUTTON.DOWN:
        this.selectP();
        break;
      default:
        console.log('handleMainMenuEvent: option not compatible');
    }
  }

  handlePokedexEvent(touche: number, toggle: ()=>void) {
    switch (touche) {
      case BUTTON.BACK:
        toggle();
        this.mode = MenuMode.Global;
        break;
      case BUTTON.UP:
        pokedex.getPokeInf();
        break;
      case BUTTON.DOWN:
        pokedex.getPokeSup();
        break;
      default:
        console.warn('Menu.handlePokedexEvent : no option compatible');
    }
  }

  handleCarteEvent(touche: number, toggle: ()=>void) {
    switch (touche) {
      case BUTTON.UP:
        this.player.carte.selectM();
        break;
      case BUTTON.DOWN:
        this.player.carte.selectP();
        break;
      case BUTTON.CONFIRM: // valider
        toggle();
        this.player.carte.voyage();
        this.player.mode = PlayerMode.MAP;
        this.mode = MenuMode.Global;
        break;
      case BUTTON.BACK: // retour
        toggle();
        this.mode = MenuMode.Global;
        break;
      default:
        console.warn('handleCarteEvent : no option compatible');
    }
  }

  selectP() {
    this.selection += 1;
    if (this.selection >= this.options.length) {
      this.selection = 0;
    }
  }

  selectM() {
    this.selection -= 1;
    if (this.selection < 0) {
      this.selection = this.options.length - 1;
    }
  }

  valider() {
    this.options[this.selection].validate();
    this.options[this.selection].toggle();
  }
}


export default Menu;
