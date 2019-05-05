import PlayerController from './PlayerController';
import HUD from '../UI/HUD';
import Carte, { ChargeCarte } from '../UI/Carte';

import Person from '../map/Person';
import Pokemon from '../combat/Pokemon';

import DevMode from '../utils/DevMode';
import initInput from './inputs';

import { animate, getContext } from '../utils/render';
import ImageLoader from '../utils/ImageLoader';
import sacha from '../../assets/imgs/sacha.png';

export default function init() {
  DevMode.init();

  const context = getContext();

  context.save();
  context.fillStyle = '#000000';
  context.fillText('Chargement', 250, 250);
  context.restore();

  const player = new PlayerController(new Person('Sacha', 0, -10, 0));

  const sachaImg = ImageLoader.load(sacha);
  player.setTexture(sachaImg);
  player.setGrille(0);

  const pikachu = new Pokemon(25, 5, 0, 100, 20, 15, 15);
  player.addPokemon(pikachu);

  player.carte = new Carte(player);
  ChargeCarte(player);

  player.hud = new HUD(player);

  player.loadObjects();

  initInput(player);
  animate(player);
}
