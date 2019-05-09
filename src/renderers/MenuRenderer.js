// @flow
import pokeworldmap from 'assets/imgs/pokeworldmap.png';

import Menu from '../UI/Menu';
import SousMenu from '../UI/SousMenu';
import { getContext } from '../utils/render';
import Font from '../types/Font';
import Pokemon from '../combat/Pokemon';
import ImageLoader from '../utils/ImageLoader';
import EndroitCarte from '../UI/EndroitCarte';
import pokedex from '../UI/Pokedex';


class MenuRenderer {
  menu: Menu;

  constructor(menu: Menu) {
    this.menu = menu;
  }

  displayMainMenu() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(630, 25, 250, 270);
    context.fillStyle = '#000000';
    context.font = Font.little;

    this.menu.options.forEach((option: SousMenu, index) => {
      context.fillText(option.title, 665, 80 + (index * 30));
    });

    this.displayCursor();
  }

  displayCursor() {
    const context = getContext();
    context.fillRect(645, 72 + this.menu.selection * 30, 5, 5);
  }

  displayPokemons(pokemons: Array<Pokemon>) {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
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
    const context = getContext();

    context.fillStyle = this.menu.player.carte.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;

    const pokeworldmapImg = ImageLoader.load(pokeworldmap);
    context.drawImage(pokeworldmapImg, 0, 0, 240, 160, 70, 70, 760, 510);

    if (this.menu.player.carte.endroits.length > 0) {
      this.menu.player.carte.endroits[this.menu.player.carte.selection].displayOnCarte();
    }
  }

  displayEndroitCarte(endroitCarte: EndroitCarte) {
    const context = getContext();
    // console.log(this.nom+" en x:"+this.x+"  y:"+this.y);
    context.fillRect(endroitCarte.x, endroitCarte.y, 12, 12);
    context.fillText(endroitCarte.nom, 650, 550);
  }

  displayPokedex() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);

    pokedex.affichePokemon();
  }

  displayInfosJoueur() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText(`Nom : ${this.menu.player.dresseur.nom}`, 65, 270);
    context.fillText(`Argent : ${this.menu.player.dresseur.argent}`, 65, 300);
    context.fillText(`Badges : ${this.menu.player.dresseur.badges}`, 65, 330);
    context.fillText(`Objets : ${this.menu.player.dresseur.inventaire.length}`, 65, 360);
    context.fillText(
      `Pokemon capturés : ${this.menu.player.dresseur.pokemons.length + this.menu.player.dresseur.pcDeLeo.length}`,
      65, 390,
    );
    context.drawImage(
      this.menu.player.charSprites,
      (80 * this.menu.player.dresseur.getGTX()),
      (80 * this.menu.player.dresseur.getGTY()),
      80, 80, 400, 200, 250, 250,
    );
  }

  displayInventaire() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText(`Vous avez ${this.menu.player.dresseur.inventaire.length} objets dans votre inventaire`, 65, 300);
  }

  displaySauv() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText('Voulez vous sauvegarder votre partie ?', 65, 240);
    context.fillText("'A' : Oui", 65, 270);
    context.fillText("'B' :Retour", 65, 300);
  }

  displayOptions() {
    const context = getContext();
    context.fillStyle = this.menu.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
    context.fillStyle = '#000000';
    context.font = Font.little;
    context.fillText('\'a\' Changer la couleur des menus', 65, 300);
    context.fillText('\'p\' Retour au gris', 65, 330);
  }
}

export default MenuRenderer;
