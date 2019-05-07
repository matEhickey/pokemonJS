// @flow

import Attaque from '../combat/Attaques';
import Pokemon from '../combat/Pokemon';
import { getContext } from '../utils/render';
import ImageLoader from '../utils/ImageLoader';
import Font from '../types/Font';

import allPokemon from 'assets/imgs/all-pokemon.png';
import backSprites from 'assets/imgs/back_sprites.png';

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
   const context = getContext();
   context.fillStyle = '#000000';
   context.font = Font.little;

   context.fillText(`Nom : ${this.nom}`, 65, 270);
   context.fillText(`Type : ${this.type}`, 65, 300);
   context.fillText(`Descr : ${this.description}`, 65, 330, 750);

   const allPokemonImg = ImageLoader.load(allPokemon);

   context.drawImage(
     allPokemonImg,
     80 * this.getGTX(),
     80 * this.getGTY(),
     80, 80, 500, 100, 150, 150,
   );
 }

 afficheToiCombat(): void {
   const context = getContext();
   const allPokemonImg = ImageLoader.load(allPokemon);

   context.drawImage(
     allPokemonImg,
     80 * this.getGTX(),
     80 * this.getGTY(),
     80, 80, 600, 100, 200, 200,
   );
 }

 afficheToiAt(x: number, y: number) {
   const context = getContext();
   const allPokemonImg = ImageLoader.load(allPokemon);

   context.drawImage(
     allPokemonImg,
     80 * this.getGTX(),
     80 * this.getGTY(),
     80, 80, x, y, 150, 150,
   );
 }

 drawBackSprite() {
   const context = getContext();
   const backSpritesImg = ImageLoader.load(backSprites);

   context.drawImage(
     backSpritesImg,
     80 * this.getGTX(),
     80 * this.getGTY(),
     80, 80, 100, 300, 200, 200,
   );
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

class Pokedex {
 pokemons: Array<PokedexPokemon | null>;
 index: number;

 constructor() {
   this.pokemons = [null];
   // pour retrouver les poke simplement grace a leur num, il faut commencer par un vide

   this.index = 1; // pour la visualisation
   this.chargePokedex();
 }

 addPokemon(pokemon: PokedexPokemon) { // pokedexPokemon (pp) != pokemon
   this.pokemons.push(pokemon);
 }

 getPokeInf() {
   this.index -= 1;
   if (this.index < 1) {
     this.index = this.pokemons.length - 1;
   }
 }

 getPokeSup() {
   this.index += 1;
   if (this.index >= this.pokemons.length) {
     this.index = 1;
   }
 }

 getAttaques(pokemon: Pokemon) {
   const currentPokemon = this.pokemons[pokemon.num];
   return (currentPokemon ? currentPokemon.getAttaquesByNum(pokemon.num) : []);
 }

 affichePokemon() {
   const pokedexpokemon = this.pokemons[this.index];
   if (pokedexpokemon) pokedexpokemon.afficheToi();
 }

 getPoke(numero: number) {
   return (this.pokemons[numero]);
 }

 chargePokedex() {
   const pokemon1 = new PokedexPokemon(1, 'Bulbizarre', 'Plante/Poison', 'Au matin de sa vie, la graine sur son dos lui fournit les éléments dont il a besoin pour grandir.', 2, 16);
   this.addPokemon(pokemon1);

   const pokemon2 = new PokedexPokemon(2, 'Herbizarre', 'Plante/Poison', 'Lorsque le bourgeon sur son dos éclot, il répand un doux parfum pour célébrer sa floraison.', 3, 36);
   this.addPokemon(pokemon2);

   const pokemon3 = new PokedexPokemon(3, 'Florizarre', 'Plante/Poison', 'Le parfum de sa fleur se fait plus pénétrant les lendemains de pluie. Cela appâte les autres Pokémon.', 0, 0);
   this.addPokemon(pokemon3);

   const pokemon4 = new PokedexPokemon(4, 'Salameche', 'Feu', 'La flamme de sa queue symbolise sa vitalité. Elle est intense quand il est en bonne santé.', 2, 16);
   this.addPokemon(pokemon4);

   const pokemon5 = new PokedexPokemon(5, 'Reptincel', 'Feu', 'La nuit, la queue ardente du REPTINCEL brille comme une étoile dans son repaire montagneux.', 2, 36);
   this.addPokemon(pokemon5);

   const pokemon6 = new PokedexPokemon(6, 'Dracofeu', 'Feu/Vol', "On raconte que la flamme du DRACAUFEU s'intensifie après un combat difficile.", 0, 0);
   this.addPokemon(pokemon6);


   this.addPokemon(new PokedexPokemon(7, 'Carapuce', 'Eau', "Il se réfugie dans sa carapace et réplique en éclaboussant l'ennemi à la première occasion.", 2, 16));
   this.addPokemon(new PokedexPokemon(8, 'Carabaffe', 'Eau', "On prétend qu'il vit 10 000 ans. Sa queue duveteuse est un symbole de longévité populaire.", 2, 36));
   this.addPokemon(new PokedexPokemon(9, 'Tortank', 'Eau', "Les trombes d'eau projetées par les canons de sa carapace peuvent percer le métal le plus résistant.", 0, 0));

   this.addPokemon(new PokedexPokemon(10, 'Chenipan', 'Insecte', "Ses antennes rouges libèrent une puanteur qui repousse l'ennemi. Il grandit par mues régulières.", 11, 7));
   this.addPokemon(new PokedexPokemon(11, 'Chrysacier', 'Insecte', "Son corps frêle est protégé par sa carapace d'acier. Il encaisse les coups durs en attendant d'évoluer.", 12, 10));
   this.addPokemon(new PokedexPokemon(12, 'Papilusion', 'Insecte/Vol', 'Il raffole du nectar des fleurs. Il est capable de repérer la plus petite quantité de pollen.', 0, 0));
   this.addPokemon(new PokedexPokemon(13, 'Aspicot', 'Insecte/Poison', "Il mange chaque jour son poids en feuilles. Il utilise l'aiguillon sur sa tête pour repousser l'ennemi.", 14, 7));
   this.addPokemon(new PokedexPokemon(14, 'Coconfort', 'Insecte/Poison', "Il se cache sous les feuilles et les branches pour fuir les prédateurs en attendant d'évoluer.", 15, 10));
   this.addPokemon(new PokedexPokemon(15, 'Dardagnan', 'Insecte/Poison', "Il virevolte rapidement autour de l'ennemi et frappe de son dard empoisonné avant de décamper.", 0, 0));

   this.addPokemon(new PokedexPokemon(16, 'Roucool', 'Normal/Vol', '', 17, 8));
   this.addPokemon(new PokedexPokemon(17, 'Roucoops', 'Normal/Vol', '', 18, 15));
   this.addPokemon(new PokedexPokemon(18, 'Roucarnage', 'Normal/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(19, 'Rattata', 'Normal', '', 20, 8));
   this.addPokemon(new PokedexPokemon(20, 'Rattatac', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(21, 'Piafabec', 'Normal/Vol', '', 22, 10));
   this.addPokemon(new PokedexPokemon(22, 'Rapasdepic', 'Normal/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(23, 'Abo', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(24, 'Arboc', 'Poison', '', 0, 0));


   const pokemon25 = new PokedexPokemon(25, 'Pikachu', 'Electr', '', 26, 25);
   this.addPokemon(pokemon25);

   this.addPokemon(new PokedexPokemon(26, 'Raichu', 'Electr', '', 0, 0));

   this.addPokemon(new PokedexPokemon(27, 'Sabelette', 'Sol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(28, 'Sablaireau', 'Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(29, 'Nidoran F', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(30, 'Nidorina', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(31, 'Nidoqueen', 'Poison/Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(32, 'Nidoran M', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(33, 'Nidorino', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(34, 'Nidoking', 'Poison/Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(35, 'Melofee', 'Fee', '', 0, 0));
   this.addPokemon(new PokedexPokemon(36, 'Melodelfe', 'Fee', '', 0, 0));

   this.addPokemon(new PokedexPokemon(37, 'Goupix', 'Feu', '', 0, 0));
   this.addPokemon(new PokedexPokemon(38, 'Feunard', 'Feu', '', 0, 0));

   this.addPokemon(new PokedexPokemon(39, 'Rondoudou', 'Normal/Fee', '', 0, 0));
   this.addPokemon(new PokedexPokemon(40, 'Grodoudou', 'Normal/Fee', '', 0, 0));

   this.addPokemon(new PokedexPokemon(41, 'Nosferapti', 'Poison/Vol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(42, 'Nosferalto', 'Poison/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(43, 'Mystherbe', 'Plante/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(44, 'Ortide', 'Plante/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(45, 'Rafflesia', 'Plante/Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(46, 'Paras', 'Insecte/Plante', '', 0, 0));
   this.addPokemon(new PokedexPokemon(47, 'Parasect', 'Insecte/Plante', '', 0, 0));

   this.addPokemon(new PokedexPokemon(48, 'Mimitos', 'Insecte/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(49, 'Aeromite', 'Insecte/Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(50, 'Topiqueur', 'Sol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(51, 'Triopikeur', 'Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(52, 'Miaouss', 'Normal', '', 0, 0));
   this.addPokemon(new PokedexPokemon(53, 'Persian', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(54, 'Psykokwak', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(55, 'Akwakwak', 'Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(56, 'Ferosinge', 'Combat', '', 0, 0));
   this.addPokemon(new PokedexPokemon(57, 'Colossinge', 'Combat', '', 0, 0));

   this.addPokemon(new PokedexPokemon(58, 'Caninos', 'Feu', '', 0, 0));
   this.addPokemon(new PokedexPokemon(59, 'Arcanin', 'Feu', '', 0, 0));

   this.addPokemon(new PokedexPokemon(60, 'Ptitard', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(61, 'Tetart', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(62, 'Tartard', 'Eau/Combat', '', 0, 0));

   this.addPokemon(new PokedexPokemon(63, 'Abra', 'Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(64, 'Kadabra', 'Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(65, 'Alakazam', 'Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(66, 'Machoc', 'Combat', '', 0, 0));
   this.addPokemon(new PokedexPokemon(67, 'Machopeur', 'Combat', '', 0, 0));
   this.addPokemon(new PokedexPokemon(68, 'Mackogneur', 'Combat', '', 0, 0));

   this.addPokemon(new PokedexPokemon(69, 'Chetiflor', 'Plante/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(70, 'Boustiflor', 'Plante/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(71, 'Empiflor', 'Plante/Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(72, 'Tentacool', 'Eau/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(73, 'Tentacruel', 'Eau/Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(74, 'Racaillou', 'Roche/Sol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(75, 'Gravalanch', 'Roche/Sol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(76, 'Grolem', 'Roche/Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(77, 'Ponyta', 'Feu', '', 0, 0));
   this.addPokemon(new PokedexPokemon(78, 'Galopa', 'Feu', '', 0, 0));

   this.addPokemon(new PokedexPokemon(79, 'Ramoloss', 'Eau/Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(80, 'Flagadoss', 'Eau/Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(81, 'Magneti', 'Electr', '', 0, 0));
   this.addPokemon(new PokedexPokemon(82, 'Magneton', 'Electr', '', 0, 0));

   this.addPokemon(new PokedexPokemon(83, 'Canarticho', 'Normal/Vol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(84, 'Doduo', 'Normal/Vol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(85, 'Dodrio', 'Normal/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(86, 'Otaria', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(87, 'Lamantine', 'Eau/Glace', '', 0, 0));

   this.addPokemon(new PokedexPokemon(88, 'Tadmorv', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(89, 'Grotadmorv', 'Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(90, 'Kokiyas', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(91, 'Crustabri', 'Eau/Glace', '', 0, 0));

   this.addPokemon(new PokedexPokemon(92, 'Fantominus', 'Spectre/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(93, 'Spectrum', 'Spectre/Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(94, 'Ectoplasma', 'Spectre/Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(95, 'Onix', 'Roche/Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(96, 'Soporifik', 'Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(97, 'Hypnomade', 'Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(98, 'Krabby', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(99, 'Kraboss', 'Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(100, 'Voltorbe', 'Electr', '', 0, 0));
   this.addPokemon(new PokedexPokemon(101, 'Electrode', 'Electr', '', 0, 0));

   this.addPokemon(new PokedexPokemon(102, 'Noeunoeuf', 'Plante/Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(103, 'Noadkoko', 'Plante/Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(104, 'Osselet', 'Sol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(105, 'Ossatueur', 'Sol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(106, 'Kicklee', 'Combat', '', 0, 0));
   this.addPokemon(new PokedexPokemon(107, 'Tygnon', 'Combat', '', 0, 0));

   this.addPokemon(new PokedexPokemon(108, 'Excelangue', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(109, 'Smogo', 'Poison', '', 0, 0));
   this.addPokemon(new PokedexPokemon(110, 'Smogogo', 'Poison', '', 0, 0));

   this.addPokemon(new PokedexPokemon(111, 'Rhinocorne', 'Sol/Roche', '', 0, 0));
   this.addPokemon(new PokedexPokemon(112, 'Rhinoferoce', 'Sol/Roche', '', 0, 0));

   this.addPokemon(new PokedexPokemon(113, 'Leveinard', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(114, 'Saquedeneu', 'Plante', '', 0, 0));

   this.addPokemon(new PokedexPokemon(115, 'Kangourex', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(116, 'Hypotrempe', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(117, 'Hypocean', 'Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(118, 'Poissireine', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(119, 'Poissoroi', 'Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(120, 'Stari', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(121, 'Staros', 'Eau/Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(122, 'M.Mime', 'Psy/Fee', '', 0, 0));

   this.addPokemon(new PokedexPokemon(123, 'Insecateur', 'Insecte/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(124, 'Lippoutou', 'Glace/Psy', '', 0, 0));

   this.addPokemon(new PokedexPokemon(125, 'Elektek', 'Electr', '', 0, 0));

   this.addPokemon(new PokedexPokemon(126, 'Magmar', 'Feu', '', 0, 0));

   this.addPokemon(new PokedexPokemon(127, 'Scarabrute', 'Insecte', '', 0, 0));

   this.addPokemon(new PokedexPokemon(128, 'Tauros', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(129, 'Magicarpe', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(130, 'Leviator', 'Eau/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(131, 'Lokhlass', 'Eau/Glace', '', 0, 0));

   this.addPokemon(new PokedexPokemon(132, 'Metamorph', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(133, 'Evoli', 'Normal', '', 0, 0));
   this.addPokemon(new PokedexPokemon(134, 'Aquali', 'Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(135, 'Voltali', 'Electr', '', 0, 0));
   this.addPokemon(new PokedexPokemon(136, 'Pyroli', 'Feu', '', 0, 0));

   this.addPokemon(new PokedexPokemon(137, 'Porygon', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(138, 'Amonita', 'Roche/Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(139, 'Amonistar', 'Roche/Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(140, 'Kabuto', 'Roche/Eau', '', 0, 0));
   this.addPokemon(new PokedexPokemon(141, 'Kabutops', 'Roche/Eau', '', 0, 0));

   this.addPokemon(new PokedexPokemon(142, 'Ptera', 'Roche/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(143, 'Ronflex', 'Normal', '', 0, 0));

   this.addPokemon(new PokedexPokemon(144, 'Artikodin', 'Glace/Vol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(145, 'Electhor', 'Electr/Vol', '', 0, 0));
   this.addPokemon(new PokedexPokemon(146, 'Sulfura', 'Feu/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(147, 'Minidraco', 'Dragon', '', 0, 0));
   this.addPokemon(new PokedexPokemon(148, 'Draco', '', 'Dragon', 0, 0));
   this.addPokemon(new PokedexPokemon(149, 'Dracoloss', 'Dragon/Vol', '', 0, 0));

   this.addPokemon(new PokedexPokemon(150, 'Mewtwo', 'Psy', '', 0, 0));
   this.addPokemon(new PokedexPokemon(151, 'Mew', 'Psy', '', 0, 0));
 }
}

const pokedex = new Pokedex();
export default pokedex;
