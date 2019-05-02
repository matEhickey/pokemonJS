// type -> 0:normal
// 1:plante
// 2:eau
// 3:feu
// 4:electr
// 5:poison

class Attaque {
	constructor(nom, niveau, type, puiss, precis, pp) {
		this.nom = nom;
		this.lvl = niveau;
		this.type = type;
		this.puissance = puiss;
		this.precision = precis;
		this.pp = pp;
		this.num = Attaque.attNum;
		Attaque.attNum += 1;
	}

	getName() {
		return (this.nom);
	}

	equals(oth) {
		return (this.nom === oth.getName());
	}

	save(/* pokemonId */) {
		// SauvegardeAttaque(pokemonId,this.num);
	}
}

Attaque.attNum = 0;

export default Attaque;
