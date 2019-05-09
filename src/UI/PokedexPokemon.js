// @flow

import Attaque from '../combat/Attaques';
import pokedex from './Pokedex';

class PokedexPokemon {
 numero: number;
 nom: string;
 type: string;
 description: string;
 attaques: Array<Attaque>;
 evolution: number;
 niveauEvolution: number;

 constructor(num: number, nom: string, type: string, desc: string, evol: number, lvlEvol: number) {
   // pour differencier entre un pokemon theorique et un pokemon capturé ou rencontré,
   // et pour alleger les objets pokemons
   this.numero = num;
   // numerotation officielle, pour facilement utiliser les sprites, et faciliter debug
   this.nom = nom;
   this.type = type;
   this.description = desc;
   this.attaques = [];
   this.evolution = evol; // numero
   this.niveauEvolution = lvlEvol; // si 0, pas d'évolution

   this.chargeGlobalAttaques();
   this.chargeAttaquesByTypes();
 }

 chargeGlobalAttaques() {
   this.addAttaque(new Attaque('Charge', 0, 0, 40, 100, 20));
   this.addAttaque(new Attaque('Frenesie', 0, 0, 20, 100, 20));
   this.addAttaque(new Attaque('Mimiqueue', 0, 0, 0, 100, 30));
   this.addAttaque(new Attaque('Belier', 0, 0, 90, 85, 20));
   this.addAttaque(new Attaque('Damocle', 0, 0, 120, 100, 20));
   this.addAttaque(new Attaque('Mimiqueue', 0, 0, 0, 100, 30));
   this.addAttaque(new Attaque('Rugissement', 0, 0, 50, 100, 20));
   this.addAttaque(new Attaque('Camaraderie', 0, 0, 0, 0, 20));
   this.addAttaque(new Attaque('Vive Attaque', 12, 0, 40, 100, 30));
   this.addAttaque(new Attaque('Griffe Acier', 0, 0, 50, 95, 35));
   this.addAttaque(new Attaque('Griffe', 0, 0, 40, 100, 35));
 }

 chargeAttaquesByTypes() {
   if (this.isType('Plante')) {
     this.addAttaque(new Attaque('Canon Graine', 0, 0, 80, 100, 15));
     this.addAttaque(new Attaque('Fouet lianes', 10, 1, 45, 100, 25));
     this.addAttaque(new Attaque('Tranch Herbe', 20, 1, 55, 95, 25));
   }
   if (this.isType('Feu')) {
     this.addAttaque(new Attaque('Flameche', 4, 3, 40, 100, 25));
     this.addAttaque(new Attaque('Lance Flame', 13, 3, 90, 100, 25));
     this.addAttaque(new Attaque('Para spore', 23, 3, 90, 75, 15));
   }
   if (this.isType('Poison')) {
     this.addAttaque(new Attaque('Para spore', 3, 4, 10, 75, 35));
     this.addAttaque(new Attaque('Doux Parfum', 7, 4, 0, 100, 20));
     this.addAttaque(new Attaque('Poudre Dodo', 15, 4, 0, 75, 15));
     this.addAttaque(new Attaque('Para spore', 17, 4, 40, 75, 15));
   }
   if (this.isType('Eau')) {
     this.addAttaque(new Attaque('Ecume', 5, 2, 20, 75, 35));
     this.addAttaque(new Attaque('Pistolet a O', 13, 2, 50, 80, 15));
     this.addAttaque(new Attaque('Hydro Canon', 23, 4, 95, 85, 5));
   }
   if (this.isType('Vol')) {
     this.addAttaque(new Attaque('Cru Aile', 23, 0, 10, 75, 15));
   }
   if (this.isType('Electr')) {
     this.addAttaque(new Attaque('Eclair', 0, 4, 20, 100, 30));
     this.addAttaque(new Attaque('Cage Eclair', 8, 4, 40, 100, 20));
   }
   if (this.isType('Roche')) {
     this.addAttaque(new Attaque('Poli Roche', 4, 0, 40, 100, 30));
     this.addAttaque(new Attaque('Poli Roche', 4, 0, 40, 100, 30));
   }
 }

 afficheToi() {
   pokedex.renderer.render(this);
 }

 afficheToiCombat() {
   // console.log(pokedex);
   pokedex.renderer.renderCombat(this);
 }

 afficheToiAt(x: number, y: number) {
   pokedex.renderer.renderAt(x, y, this);
 }

 drawBackSprite() {
   pokedex.renderer.renderBackSprite(this);
 }

 getGTX(): number {
   return ((this.numero - 1) % 25);
 }

 getGTY(): number {
   return (Math.floor((this.numero - 1) / 25));
 }

 addAttaque(att: Attaque) {
   this.attaques.push(att);
 }

 getAttaquesByNum(niveau: number): Array<Attaque> {
   const tab = [];
   this.attaques.forEach((attaque) => {
     if (niveau >= attaque.lvl) {
       tab.push(attaque);
     }
   });
   return (tab);
 }

 isType(type: string): bool {
   // verifie si un pokedexPokemon est de type en faisant une recherche dans le mot
   // (car des fois le type est genre Plante/Poison)
   return (this.type.includes(type));
 }
}

export default PokedexPokemon;
