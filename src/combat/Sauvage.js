import Combat from './Combat';
import { GenereUnPokemon } from '../combat/Pokemon';


var PokemonSauvage = function(pokemon){
	this.pokemon = pokemon;
	this.asPerdu;//inutile, mais l objet pokemonSauvage doit correspondre a un dresseur (pendant un combat)
}

PokemonSauvage.prototype.getPokemon=function(place){
	return(this.pokemon);
}

PokemonSauvage.prototype.pokemonsEnVie=function(){
	var retour = [];
	if(this.pokemon.pdv>0){
		retour.push(this.pokemon);
	}
	return(retour);
}


PokemonSauvage.prototype.getName=function(){
	return(this.pokemon.getName());
}
PokemonSauvage.prototype.soignePokemons=function(){
	this.pokemon.soigneToi();
}

PokemonSauvage.prototype.setOriginalOrientation=function(){
	//rien a faire
}


PokemonSauvage.prototype.isSauvage=function(){//pendant un combat, un pokemon sauavge agit + ou - comme un dresseur
	return(true);
}



function CombatContreSauvage(player, zone){
	var poke = GenereUnPokemon(zone);
	//alert("combat niv: "+zone+"  contre un "+poke.getName());
	var sauvage = new PokemonSauvage(poke);
	player.setAdv(sauvage);
	player.mode = 2;
	player.combat = new Combat(player);
}

export default PokemonSauvage;
export {CombatContreSauvage};
