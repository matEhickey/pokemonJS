import pokedex from '../UI/Pokedex';


class Pokemon {
	constructor(num, lvl, exp, pdv, att, def, agi) {
		this.num = num;
		this.lvl = lvl;
		this.pdv = pdv;
		this.pdvMax = pdv;
		this.exp = exp;
		this.expMax = lvl * lvl * lvl * 10;
		this.att = att;
		this.def = def;
		this.agi = agi;
		this.attaques = [];
		this.getAttaques();
		this.selectAttaque = this.attaques.find(() => true); // the first
	}

	setExp(val) {
		this.exp = val;
	}

	setExpMax(val) {
		this.expMax = val;
	}

	setPdv(val) {
		this.pdv = val;
	}

	setPdvMax(val) {
		this.pdvMax = val;
	}

	setSelectAttaque(att) {
		this.selectAttaque = this.attaques[att];
	}

	afficheToiAt(x, y) {
		pokedex.getPoke(this.num).afficheToiAt(x, y);
	}

	getAttaques() {
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

	getAttaqueNum(num) {
		if (num >= this.attaques.length) {
			return ('');
		}

		return (this.attaques[num]);
	}

	displayInfo() {
		console.log(`${this.getName()}---lvl:${this.lvl}`);
	}

	soigneToi() {
		this.pdv = this.pdvMax;
	}

	getName() {
		try {
			return (pokedex.getPoke(this.num).getName());
		}
		catch (e) {
			console.log(e);
			return ('');
		}
	}

	afficheToiCombat() {
		try {
			pokedex.getPoke(this.num).afficheToiCombat();
		}
		catch (e) {
			console.log(e);
		}
	}

	getBackSprite() {
		pokedex.getPoke(this.num).getBackSprite();
	}

	getSelectAttaque() {
		return (this.selectAttaque);
	}

	attaque(oth, combat) { // oth est un pokemon
		let rand; let total;
		if (this.pdv > 0) {
			rand = Math.random();

			// console.log("Atq :"+this.att+" Def Adverse:"+oth.def+" Rand:"+rand);
			total = Math.round(
				(
					(this.att * this.getSelectAttaque().puissance / 10)
				)
				- (
					(oth.def) + rand * (oth.def)
				),
			);

			if (total < 0) { total = 0; }

			combat.infos.push(`${this.getName()} attaque : ${this.getSelectAttaque().getName()}  et inflige ${total} dommages`);
			oth.pdv -= total;
		}
	}

	addExperience(expe, combat = null) {
		this.exp += expe;

		if (this.exp >= this.expMax) {
			if (combat) this.monteNiveauCombat(combat);
			else this.monteNiveau();
		}
	}

	monteNiveauCombat(combat) { // pour afficher les infos
		this.lvl += 1;
		combat.infos.push(
			`${pokedex.pokemons[this.num].getName()} passe au niveau  ${this.lvl}`,
		);
		this.expMax += this.lvl * this.lvl * this.lvl * 10;

		if (
			this.lvl >= pokedex.pokemons[this.num].niveauEvolution
			&& pokedex.pokemons[this.num].niveauEvolution > 0
		) {
			const name = this.getName();
			this.num = pokedex.pokemons[this.num].evolution;
			combat.infos.push(`${name} vient d'evoluer en ${this.getName()}`);
		}

		// ameliore les stats
		this.pdvMax = Math.round(this.pdvMax * 1.2);
		this.att = Math.round(this.att * 1.2);
		this.def = Math.round(this.def * 1.2);
		this.agi = Math.round(this.agi * 1.1);
		this.getAttaques();
	}

	monteNiveau() {
		this.lvl += 1;

		this.expMax += this.lvl * this.lvl * this.lvl * 10;

		if (
			this.lvl >= pokedex.pokemons[this.num].niveauEvolution
			&& pokedex.pokemons[this.num].niveauEvolution > 0
		) {
			const evolutionNumber = pokedex.pokemons[this.num].evolution;

			if (evolutionNumber > 0) {
				this.num = evolutionNumber;
			}
			else {
				console.warn(`[Pokemon.monteNiveau]: pokemon (${this.num} : ${this.nom}) have a niveauEvolution set but no evolution`);
			}
		}

		// ameliore les stats
		this.pdvMax = Math.round(this.pdvMax * 1.2);
		this.att = Math.round(this.att * 1.2);
		this.def = Math.round(this.def * 1.2);
		this.agi = Math.round(this.agi * 1.1);
		this.getAttaques();
	}

	save(/* dresseurNum */) {
		// SauvegardePokemon(
		// 	dresseurNum,
		// 	this.num,
		// 	this.lvl,
		// 	this.pdv,
		// 	this.pdvMax,
		// 	this.exp,
		// 	this.expMax,
		// 	this.att,
		// 	this.def,
		// 	this.agi,
		// );
		// get pokemon id via ajax

		// const pokemonId = 0;
		// for (let i = 0; i < this.attaques.length; i += 1) {
		// 	this.attaques[i].save(pokemonId);
		// }
	}
}


function GenereUnPokemon(niveau) {
	const num = Math.floor(Math.random() * 148) + 1;

	const pokemon = new Pokemon(num, 5, 0, 100, 10, 10, 10);
	while (pokemon.lvl < niveau) {
		pokemon.monteNiveau();
	}
	pokemon.soigneToi();	// evolution n augmente pas les pdv
	return (pokemon);
}


export default Pokemon;
export { GenereUnPokemon };
