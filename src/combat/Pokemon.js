// @flow

import pokedex from '../UI/Pokedex';
import Attaque from './Attaques';
import Combat from './Combat';

class Pokemon {
  num: number;
  lvl: number;
  exp: number;
  expMax: number;
  pdv: number;
  pdvMax: number;
  att: number;
  def: number;
  agi: number;

  attaques: Array<Attaque>;
  selectAttaque: ?Attaque;

  constructor(
    num: number, lvl: number, exp: number,
    pdv: number, att: number, def: number, agi: number,
  ) {
    this.num = num;
    this.lvl = lvl;
    this.pdv = pdv;
    this.pdvMax = pdv;
    this.exp = exp;
    this.expMax = lvl * lvl * 10;
    this.att = att;
    this.def = def;
    this.agi = agi;
    this.attaques = [];
    this.getAttaques();
    this.selectAttaque = this.attaques.find(() => true); // the first
  }

  setExp(val: number): void {
    this.exp = val;
  }

  setExpMax(val: number): void {
    this.expMax = val;
  }

  setPdv(val: number): void {
    this.pdv = val;
  }

  setPdvMax(val: number): void {
    this.pdvMax = val;
  }

  setSelectAttaque(att: number): void {
    this.selectAttaque = this.attaques[att];
  }

  afficheToiAt(x: number, y: number): void {
    const pokedexpokemon = pokedex.getPoke(this.num);
    if (pokedexpokemon) pokedexpokemon.afficheToiAt(x, y);
  }

  getAttaques(): void {
    const attaques = pokedex.getAttaques(this);
    let testIsNew;
    for (let i = 0; i < attaques.length; i += 1) {
      testIsNew = true;
      for (let j = 0; j < this.attaques.length; j += 1) {
        if (this.attaques[j].equals(attaques[i])) {
          testIsNew = false;
        }
      }
      if (testIsNew) {
        this.attaques.unshift(attaques[i]);
      }
    }
  }

  getAttaqueNum(num: number): Attaque {
    if (num >= this.attaques.length) {
      throw new Error('Pokemon.getAttaqueNum: num >= attaques.length');
    }

    return (this.attaques[num]);
  }

  displayInfo() {
    console.log(`${this.getName()} ---lvl:${this.lvl}`);
  }

  soigneToi() {
    this.pdv = this.pdvMax;
  }

  getName(): string {
    const pokedexpokemon = pokedex.getPoke(this.num);
    if (pokedexpokemon) return pokedexpokemon.nom;

    throw new Error('Pokemon.getName: no corresponding pokedexpokemon');
  }

  afficheToiCombat(): void {
    const pokedexpokemon = pokedex.getPoke(this.num);
    if (pokedexpokemon) {
      pokedexpokemon.afficheToiCombat();
      return;
    }

    throw new Error('Pokemon.afficheToiCombat: no corresponding pokedexpokemon');
  }

  drawBackSprite(): void {
    const pokedexpokemon = pokedex.getPoke(this.num);
    if (pokedexpokemon) pokedexpokemon.drawBackSprite();
  }

  getSelectAttaque(): Attaque {
    if (this.selectAttaque) return this.selectAttaque;

    throw new Error('Pokemon.getSelectAttaque: no selectAttaque');
  }

  attaque(oth: Pokemon, noDamages: bool): number {
    if (this.pdv <= 0) console.warn('Pokemon.attaque but life is <= 0');
    if (this.pdv <= 0) console.warn('Pokemon.attaque but life is <= 0');

    const selectedAttaque = this.getSelectAttaque();
    if (!selectedAttaque) {
      console.error('Pokemon have no attaque from getSelectAttaque');
      return 0;
    }

    let total = 0;
    const rand = Math.random();
    // console.log("Atq :"+this.att+" Def Adverse:"+oth.def+" Rand:"+rand);
    total = Math.round(
      (
        (this.att * selectedAttaque.puissance / 10)
      )
  - (
    (oth.def) + rand * (oth.def)
  ),
    );


    if (total < 0 || noDamages) { total = 0; }

    oth.pdv -= total;
    return (total);
  }

  addExperience(expe: number, combat: ?Combat = null): void {
    this.exp += expe;

    if (this.exp >= this.expMax) {
      this.monteNiveau(combat);
    }
  }

  monteNiveau(combat: ?Combat = null): void { // pour afficher les infos
    this.lvl += 1;

    const pokedexpokemon = pokedex.pokemons[this.num];
    if (!pokedexpokemon) {
      console.warn('Pokemon.monteNiveau: no pokedexpokemon relation');
      return;
    }

    if (combat && pokedexpokemon) {
      combat.infos.push(
        `${pokedexpokemon.nom} passe au niveau  ${this.lvl}`,
      );
    }

    this.expMax += this.lvl * this.lvl * this.lvl * 10;

    if (this.checkEvolution()) {
      const name = pokedexpokemon.nom;
      this.num = pokedexpokemon.evolution;
      const newName = this.getName();
      if (combat) combat.infos.push(`${name} vient d'evoluer en ${newName}`);
    }

    // ameliore les stats
    this.pdvMax = Math.round(this.pdvMax * 1.2);
    this.att = Math.round(this.att * 1.2);
    this.def = Math.round(this.def * 1.2);
    this.agi = Math.round(this.agi * 1.1);
    this.getAttaques();
  }

  checkEvolution(): bool {
    const pokedexpokemon = pokedex.pokemons[this.num];
    if (!pokedexpokemon) {
      throw new Error('Pokemon.monteNiveau: no pokedexpokemon relation');
    }

    if (
      this.lvl >= pokedexpokemon.niveauEvolution
  && pokedexpokemon.niveauEvolution > 0
    ) {
      const evolutionNumber = pokedexpokemon.evolution;

      if (evolutionNumber > 0) {
        this.num = evolutionNumber;
        return true;
      }
      console.warn(
        `[Pokemon.monteNiveau]: pokemon (${this.num} : ${this.getName()}) have a niveauEvolution set but no evolution`,
      );
    }
    return false;
  }

  save(/* dresseurNum */) {
    // SauvegardePokemon(
    //  dresseurNum,
    //  this.num,
    //  this.lvl,
    //  this.pdv,
    //  this.pdvMax,
    //  this.exp,
    //  this.expMax,
    //  this.att,
    //  this.def,
    //  this.agi,
    // );
    // get pokemon id via ajax

    // const pokemonId = 0;
    // for (let i = 0; i < this.attaques.length; i += 1) {
    //  this.attaques[i].save(pokemonId);
    // }
  }
}


function GenereUnPokemon(niveau: number): Pokemon {
  const num = Math.floor(Math.random() * 148) + 1;

  const pokemon = new Pokemon(num, 5, 0, 100, 10, 10, 10);
  while (pokemon.lvl < niveau) {
    pokemon.monteNiveau();
  }
  pokemon.soigneToi(); // evolution n augmente pas les pdv
  return (pokemon);
}


export default Pokemon;
export { GenereUnPokemon };
