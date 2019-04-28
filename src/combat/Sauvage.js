import {monDresseur} from '../utils/globals';
import Combat from './Combat';

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



function CombatContreSauvage(zone){
	var poke = GenereUnPokemon(zone);
	//alert("combat niv: "+zone+"  contre un "+poke.getName());
	var sauvage = new PokemonSauvage(poke);
	monDresseur.setAdv(sauvage);
	monDresseur.mode = 2;
	monDresseur.combat = new Combat();
}

export default PokemonSauvage;
