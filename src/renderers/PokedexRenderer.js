// @flow

import allPokemon from 'assets/imgs/all-pokemon.png';
import backSprites from 'assets/imgs/back_sprites.png';

import { PokedexPokemon } from '../UI/Pokedex';
import ImageLoader from '../utils/ImageLoader';
import Font from '../utils/Font';
import { getContext } from '../utils/render';


class PokedexRenderer {
  allPokemonImg: HTMLImageElement;
  backSpritesImg: HTMLImageElement;

  constructor() {
    this.allPokemonImg = ImageLoader.load(allPokemon);
    this.backSpritesImg = ImageLoader.load(backSprites);
  }

  render(pokedexpokemon: PokedexPokemon) {
    const context = getContext();

    console.log('PokedexRenderer: render');

    context.fillStyle = '#000000';
    context.font = Font.little;

    context.fillText(`Nom : ${pokedexpokemon.nom}`, 65, 270);
    context.fillText(`Type : ${pokedexpokemon.type}`, 65, 300);
    context.fillText(`Descr : ${pokedexpokemon.description}`, 65, 330, 750);

    context.drawImage(
      this.allPokemonImg,
      80 * pokedexpokemon.getGTX(),
      80 * pokedexpokemon.getGTY(),
      80, 80, 500, 100, 150, 150,
    );
  }

  renderCombat(pokedexpokemon: PokedexPokemon) {
    const context = getContext();
    context.drawImage(
      this.allPokemonImg,
      80 * pokedexpokemon.getGTX(),
      80 * pokedexpokemon.getGTY(),
      80, 80, 600, 100, 200, 200,
    );
  }

  renderAt(x: number, y: number, pokedexpokemon: PokedexPokemon) {
    const context = getContext();

    context.drawImage(
      this.allPokemonImg,
      80 * pokedexpokemon.getGTX(), 80 * pokedexpokemon.getGTY(),
      80, 80,
      x, y, 150, 150,
    );
  }

  renderBackSprite(pokedexpokemon: PokedexPokemon) {
    const context = getContext();
    context.drawImage(
      this.backSpritesImg,
      80 * pokedexpokemon.getGTX(),
      80 * pokedexpokemon.getGTY(),
      80, 80,
      100, 300, 200, 200,
    );
  }
}

export default PokedexRenderer;
