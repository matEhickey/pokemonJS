import Pokedex from "../UI/Pokedex";
import PlayerController from '../gameloop/PlayerController';
import Dresseur from '../map/Dresseur';

var pokedex = new Pokedex();
pokedex.chargePokedex();

var monDresseur = new PlayerController(new Dresseur("Sacha",0,0,1,0));

export {pokedex, monDresseur};
