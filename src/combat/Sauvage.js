// @flow

import type { Adversaire } from './Adversaire';
import Combat from './Combat';
import PlayerMode from '../types/PlayerMode';
import PlayerController from '../gameloop/PlayerController';
import Pokemon, { GenereUnPokemon } from './Pokemon';


class PokemonSauvage implements Adversaire {
  nom: string = 'Sauvage';
  pokemon: Pokemon;
  isAgressive: bool;
  attaqueCanceled: bool;

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon;
    this.isAgressive = false;
  }

  getPokemon() {
    return (this.pokemon);
  }

  pokemonsEnVie() {
    return this.pokemon.pdv > 0 ? [this.pokemon] : [];
  }

  get nom(): string {
    return (this.pokemon.getName());
  }

  soignePokemons() {
    this.pokemon.soigneToi();
  }

  setOriginalOrientation() {
    // rien a faire
  }

  isSauvage() {
    // lors d'un combat, un pokemon sauvage agit + ou - comme un dresseur
    return (true);
  }

  parler(): void {

  }

  getGTX(): number {
    console.warn('Sauvage.getGTY called, is that normal ?');
    return 0;
  }

  getGTY(): number {
    console.warn('Sauvage.getGTY called, is that normal ?');
    return 0;
  }

  echange():void {

  }
}


function CombatContreSauvage(player: PlayerController, zone: number) {
  const poke = GenereUnPokemon(zone);
  // alert("combat niv: "+zone+"  contre un "+poke.getName());
  const sauvage = new PokemonSauvage(poke);

  player.mode = PlayerMode.FIGHT;
  player.combat = new Combat(player, sauvage); // need interface here
}

export default PokemonSauvage;
export { CombatContreSauvage };
