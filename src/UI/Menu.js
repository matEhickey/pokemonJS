// @flow

import { getContext } from '../utils/render';
import pokedex from './Pokedex';
import BUTTON from '../gameloop/touches';
import PlayerMode from '../types/PlayerMode';
import MenuMode from '../types/MenuMode';
import Font from '../types/Font';
import SousMenu from './SousMenu';


class Menu {
  constructor(player) {
    this.player = player;

    this.options = [];
    this.selection = 0; // indice permettant de situer le curseur

    this.mode = MenuMode.Global;

    SousMenu.load(this);
  }

  show() {
    if (this.lastSeen !== this.mode) {
      // console.log(`Menu.show: mode did change -> ${this.mode}`);
      this.lastSeen = this.mode;
    }

    if (this.mode === MenuMode.Global) this.showMainMenu();
    else {
      this.options[this.selection].display();
    }
  }

  event(touche) {
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

  showMainMenu() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(630, 25, 250, 270);
    context.fillStyle = '#000000';
    context.font = Font.little;

    this.options.forEach((option, index) => {
      context.fillText(option.title, 665, 80 + (index * 30));
    });

    this.afficheCurseur();
  }

  handleMainMenuEvent(touche) {
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

  handlePokedexEvent(touche, toggle) {
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

  handleCarteEvent(touche, toggle) {
    switch (touche) {
      case BUTTON.UP:
        this.player.carte.selectM();
        break;
      case BUTTON.DOWN:
        this.player.carte.selectP();
        break;
      case BUTTON.CONFIRM: // valider
        toggle();
        this.player.carte.voyage(this.player);
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

  afficheCurseur() {
    const context = getContext();
    context.fillRect(645, 72 + this.selection * 30, 5, 5);
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

  // {x, y, taileX, tailleY} Portion , {x, y, tailleX, tailleY} Canvas
  displayPokemons(pokemons) {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.font = Font.little;

    pokemons.forEach((pokemon, index) => {
      // for(var i = 0;i<pokemons.length;i++){
      context.fillStyle = '#eeeeee';
      context.fillRect(55, (index * 80) + 95, 780, 35);
      context.fillStyle = '#000000';
      context.font = Font.little;
      context.fillText(`Nom: ${pokemon.getName()}`, 65, 120 + (index * 80));
      context.fillText(`Niveau: ${pokemon.lvl}`, 230, 120 + (index * 80));
      context.fillText(`Pdv: ${pokemon.pdv}/${pokemon.pdvMax}`, 370, 120 + (index * 80));

      context.font = '18px Georgia';
      context.fillText(`XP: ${pokemon.exp}`, 100, 160 + (index * 80));
      context.fillText(`Prochain Niveau : ${pokemon.expMax}`, 350, 160 + (index * 80));
    });
  }

  displayCarte() {
    this.player.carte.displayCarte();
  }

  displayOptions() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText('\'a\' Changer la couleur des menus', 65, 300);
    context.fillText('\'p\' Retour au gris', 65, 330);
  }

  displayPokedex() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);

    pokedex.affichePokemon();
  }

  displayInfosJoueur() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText(`Nom : ${this.player.getName()}`, 65, 270);
    context.fillText(`Argent : ${this.player.dresseur.argent}`, 65, 300);
    context.fillText(`Badges : ${this.player.dresseur.badges}`, 65, 330);
    context.fillText(`Objets : ${this.player.dresseur.inventaire.length}`, 65, 360);
    context.fillText(
      `Pokemon capturés : ${this.player.dresseur.pokemons.length + this.player.dresseur.pcDeLeo.length}`,
      65, 390,
    );
    context.drawImage(
      this.player.charSprites,
      (80 * this.player.getGTX()),
      (80 * this.player.getGTY()),
      80, 80, 400, 200, 250, 250,
    );
  }

  displaySauv() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText('Voulez vous sauvegarder votre partie ?', 65, 240);
    context.fillText("'A' : Oui", 65, 270);
    context.fillText("'B' :Retour", 65, 300);
  }

  displayInventaire() {
    const context = getContext();
    context.fillStyle = this.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText(`Vous avez ${this.player.dresseur.inventaire.length} objets dans votre inventaire`, 65, 300);
  }
}

function changeColorHUD(player) {
  player.couleurPrefere = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export default Menu;
