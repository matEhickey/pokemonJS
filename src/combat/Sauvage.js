import Combat from './Combat';
import PlayerMode from '../types/PlayerMode';
import { GenereUnPokemon } from './Pokemon';


class PokemonSauvage {
  constructor(pokemon) {
    this.pokemon = pokemon;
    this.isAgressive = false;
    // inutile, mais l objet pokemonSauvage doit correspondre a un dresseur (pendant un combat)
  }

  getPokemon() {
    return (this.pokemon);
  }

  pokemonsEnVie() {
    return this.pokemon.pdv > 0 ? [this.pokemon] : [];
  }

  getName() {
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
}


function CombatContreSauvage(player, zone) {
  const poke = GenereUnPokemon(zone);
  // alert("combat niv: "+zone+"  contre un "+poke.getName());
  const sauvage = new PokemonSauvage(poke);
  player.setAdv(sauvage);
  player.mode = PlayerMode.FIGHT;
  player.combat = new Combat(player);
}

export default PokemonSauvage;
export { CombatContreSauvage };
