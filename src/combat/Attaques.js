// @flow

class Attaque {
  nom: string;
  lvl: number;
  type: number;
  puissance: number;
  precision: number;
  pp: number;
  num: number;
  num: number;
  static attNum: number;

  constructor(
    nom: string, niveau: number, type: number,
    puiss: number, precis: number, pp: number,
  ) {
    this.nom = nom;
    this.lvl = niveau;
    this.type = type;
    this.puissance = puiss;
    this.precision = precis;
    this.pp = pp;
    this.num = Attaque.attNum;
    Attaque.attNum += 1;
  }

  equals(oth: Attaque) {
    return (this.nom === oth.nom);
  }

  save(/* pokemonId */) {
    // SauvegardeAttaque(pokemonId,this.num);
  }
}

Attaque.attNum = 0;

export default Attaque;
