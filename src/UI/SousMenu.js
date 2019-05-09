// @flow

import MenuMode from '../types/MenuMode';
import Menu from './Menu';

class SousMenu {
  title: string;
  render: () => void;
  validate: () => void;
  isShown: bool;
  static load: (Menu) => void;

  constructor(title: string, render: () => void, validate: () => void) {
    this.title = title;
    this.render = render;
    this.validate = validate;

    this.isShown = false;
  }

  display() {
    if (this.isShown) this.render();
  }

  toggle() {
    this.isShown = !this.isShown;
  }
}

SousMenu.load = (menu) => {
  menu.options = [
    new SousMenu(
      'Pokedex',
      () => { menu.renderer.displayPokedex(); },
      () => { menu.mode = MenuMode.Pokedex; },
    ),
    new SousMenu(
      'Pokemon',
      () => { menu.renderer.displayPokemons(menu.player.dresseur.pokemons); },
      () => { menu.mode = MenuMode.Pokemons; },
    ),
    new SousMenu(
      'Inventaire',
      () => { menu.renderer.displayInventaire(); },
      () => { menu.mode = MenuMode.Inventaire; },
    ),
    new SousMenu(
      menu.player.dresseur.nom,
      () => { menu.renderer.displayInfosJoueur(); },
      () => { menu.mode = MenuMode.Person; },
    ),
    new SousMenu(
      'Carte',
      () => { menu.renderer.displayCarte(); },
      () => { menu.mode = MenuMode.Carte; },
    ),
    new SousMenu(
      'Sauvegarde',
      () => { menu.renderer.displaySauv(); },
      () => { menu.mode = MenuMode.Sauvegrade; },
    ),
    new SousMenu(
      'Options',
      () => { menu.renderer.displayOptions(); },
      () => { menu.mode = MenuMode.Options; },
    ),
  ];
};

export default SousMenu;
