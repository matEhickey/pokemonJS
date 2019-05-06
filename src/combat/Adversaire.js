// @flow

import Pokemon from './Pokemon';
import PlayerController from '../gameloop/PlayerController';

export interface Adversaire {
  isAgressive: bool;
  attaqueCanceled: bool;
  isSauvage(): bool;
  getPokemon(number): Pokemon;
  getName(): string;
  pokemonsEnVie(): Array<Pokemon>;
  echange(Pokemon, Pokemon): void;
  soignePokemons(): void;
  setOriginalOrientation(): void;
  getGTX(): number;
  getGTY(): number;
  parler(PlayerController): void;
}
