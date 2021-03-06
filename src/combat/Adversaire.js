// @flow

import Pokemon from './Pokemon';
import PlayerController from '../gameloop/PlayerController';

export interface Adversaire {
  isAgressive: bool;
  attaqueCanceled: bool;
  nom: string;
  isSauvage(): bool;
  getPokemon(number): Pokemon;
  pokemonsEnVie(): Array<Pokemon>;
  echange(Pokemon, Pokemon): void;
  soignePokemons(): void;
  setOriginalOrientation(): void;
  getGTX(): number;
  getGTY(): number;
  parler(PlayerController): void;
}
