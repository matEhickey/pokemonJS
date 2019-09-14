// @flow

// import blank from 'assets/imgs/blank.png';
import terrainImage from 'assets/imgs/terrrainTest2.png';
import ville2 from 'assets/imgs/ville2.png';
import centrePinterieur from 'assets/imgs/centrePinterieur.png';
import argenta from 'assets/imgs/argenta.png';
import pokeshopInside from 'assets/imgs/pokeshopInside.png';
import areneArgenta from 'assets/imgs/areneArgenta.png';

import {
  chargeObjetsDansGrille0,
  chargeObjetsDansGrille1,
  chargeObjetsDansGrille2,
  chargeObjetsDansGrille3,
  chargeObjetsDansGrille4,
  chargeObjetsDansGrille5,
  chargeObjetsDansGrille6,
} from '../gamecontent/Loader';

import { getContext, getCanvas } from '../utils/render';
import ImageLoader from '../utils/ImageLoader';
import { CombatContreSauvage } from '../combat/Sauvage';
import DevMode from '../utils/DevMode';
import Objet from './Objet';
import Person from './Person';
import Batiment from './Batiment';
import Porte from './Porte';
import Herbe from './Herbes';
import Spawn from './Spawn';
import type { Collision } from './Collision';

import PlayerController from '../gameloop/PlayerController';

class Grille {
  player: PlayerController;
  static nbG: number;
  static grilles: Array<Grille>;
  static loadGrilles: (PlayerController) => void;
  static loadObjects: () => void;

  num: number;
  terrain: HTMLImageElement;
  objets: Array<Collision> = [];
  spawns: Array<Spawn> = [];
  dresseurs: Array<Person> = [];
  batiments: Array<Batiment> = [];
  portes: Array<Porte> = [];
  herbes: Array<Herbe> = [];

  constructor(player: PlayerController, terrain: HTMLImageElement) {
    this.player = player;
    this.terrain = terrain;

    this.num = Grille.nbG;
    Grille.nbG += 1;
  }

  show() {
    this.drawTerrain();
    this.afficheBatiments(this.player);
    this.drawDresseurs();
    this.drawMonDresseur();
  }

  saveDresseurs() {
    // console.log("Sauvegardes dresseurs grille "+this.num);
    // var chaine = "";
    // for(var i=0;i<this.dresseurs.length;i++){
    //  chaine+=getDresseurInfo(this.dresseurs[i])+"&";
    // }//-> false pour isController
    // console.log(chaine);
    // return(chaine);
  }

  ajouteObjet(objet: Objet) {
    this.objets.push(objet);
  }

  // ajoutePNJ(objet) {
  //  this.pnjs.push(objet);
  // }

  ajoutePorte(porte: Porte) {
    this.portes.push(porte);
  }

  ajouteHerbe(herbe: Herbe) {
    this.herbes.push(herbe);
  }

  ajouteDresseur(dresseur: Person) {
    this.dresseurs.push(dresseur);
    this.objets.push(dresseur);
  }

  ajouteBatiment(bati: Batiment) {
    this.batiments.push(bati);
    this.objets.push(bati);
  }

  ajouteSpawn(spawn: Spawn) {
    this.spawns.push(spawn);
    this.objets.push(spawn);
  }

  afficheBatiments(player: PlayerController) {
    this.batiments.forEach((batiment) => {
      batiment.afficheToi(player);
    });
  }

  isWalkable(posX: number, posY: number) {
    const notWalkable = this.objets.some(objet => !objet.isWalkable({ x: posX, y: posY }));
    return !notWalkable;
  }

  checkWalkOnPorte(): void {
    this.portes.forEach((porte) => {
      if (porte.walkOn(this.player)) {
        console.log('Grille.checkWalkOnPorte: porte colision detected');
        if (!DevMode.getOption('noTravel')) {
          porte.rejoindreDestination(this.player);
        }
      }
    });
  }

  checkWalkOnHerbes(): void {
    this.herbes.forEach((herbe) => {
      if (herbe.walkOn(this.player)) {
        console.log('Grille.checkWalkOnHerbes: herbe colision detected');
        if (Math.random() > 0.95 && !DevMode.getOption('noWildPokemon')) {
          CombatContreSauvage(this.player, herbe.getPuissance());
        }
      }
    });
  }

  getDresseur(x: number, y: number): ?Person {
    return this.dresseurs.find((dresseur) => {
      if (dresseur.isOnPosition(x, y)) {
        return true;
      }
      return null;
    });
  }

  // getPNJ(x: number, y: number) {
  //   this.pnjs.find(pnj => pnj.isOnPosition(x, y));
  // }

  getBatiment(x: number, y: number) {
    this.batiments.forEach((batiment) => {
      if (batiment.isOnPosition(x, y)) {
        return batiment;
      }
    });
    return null;
  }

  drawDresseurs() {
    this.dresseurs.forEach((dresseur) => {
      dresseur.afficheToi(this.player);
    });
  }

  drawTerrain() {
    const context = getContext();
    const canvas = getCanvas();
    const width = parseInt(canvas.getAttribute('width'), 10);

    const height = parseInt(canvas.getAttribute('height'), 10);


    context.drawImage(
      this.terrain,
      this.player.dresseur.posX + 250,
      this.player.dresseur.posY + 250,
      width / 3,
      height / 3,
      0,
      0,
      width,
      height,
    );
  }

  drawMonDresseur() {
    this.player.dresseur.afficheToi(this.player);
  }

  showDebug() {
    if (DevMode.dev) {
      const elemX = document.getElementById('playerControllerX');
      const elemY = document.getElementById('playerControllerY');
      if (elemX && elemY) {
        elemX.innerHTML = `X: ${this.player.dresseur.posX}`;
        elemY.innerHTML = `Y: ${this.player.dresseur.posY}`;
      }
    }

    if (DevMode.getOption('showCollision')) {
      this.objets.forEach((objet) => {
        if (['Collision', 'Batiment'].includes(objet.nom)) {
          objet.showDebug(this.player);
        }
      });
    }

    if (DevMode.getOption('showPortes')) {
      this.portes.forEach((porte) => {
        porte.showDebug(this.player);
      });
    }

    if (DevMode.getOption('showHerbes')) {
      this.herbes.forEach((herbe) => {
        herbe.showDebug(this.player);
      });
    }

    if (DevMode.getOption('showBatiments')) {
      this.batiments.forEach((batiment) => {
        batiment.showDebug(this.player);
      });
    }

    if (DevMode.getOption('showSpawn')) {
      this.spawns.forEach((spawn) => {
        spawn.showDebug(this.player);
      });
    }
  }

  checkZonesDresseurs(player: PlayerController) {
    this.dresseurs.forEach((dresseur) => {
      if (dresseur.walkOnZone(player)) {
        console.log('Grille.checkZonesDresseurs: zone colision detected');
        if (!dresseur.isAgressive && !(DevMode.getOption('noAgression'))) {
          dresseur.attaqueJoueur(this.player);
        }
      }
    });
  }

  load() {
    this.dresseurs.forEach((dresseur) => {
      dresseur.load();
    });
  }

  getDresseurByName(name: string) {
    this.dresseurs.forEach((dresseur) => {
      if (dresseur.nom === name) {
        return dresseur;
      }
    });
    console.log(`Probleme :${name} n'est pas dans la grille`);
  }

  getDresseurByNum(num: number) {
    this.dresseurs.forEach((dresseur) => {
      if (dresseur.num === num) {
        return dresseur;
      }
    });
    return false;
  }
}

Grille.nbG = 0;
Grille.grilles = [];

Grille.loadGrilles = (player: PlayerController) => {
  // const blankImg = ImageLoader.load(blank);
  const terrainImg = ImageLoader.load(terrainImage);
  const ville2Img = ImageLoader.load(ville2);
  const centrePinterieurImg = ImageLoader.load(centrePinterieur);
  const argentaImg = ImageLoader.load(argenta);
  const pokeshopInsideImg = ImageLoader.load(pokeshopInside);
  const areneArgentaImg = ImageLoader.load(areneArgenta);


  // Grille.grilles.push(new Grille(player, blankImg));
  Grille.grilles.push(new Grille(player, terrainImg));
  Grille.grilles.push(new Grille(player, ville2Img));
  Grille.grilles.push(new Grille(player, centrePinterieurImg));
  Grille.grilles.push(new Grille(player, centrePinterieurImg));
  Grille.grilles.push(new Grille(player, argentaImg));
  Grille.grilles.push(new Grille(player, pokeshopInsideImg));
  Grille.grilles.push(new Grille(player, areneArgentaImg));
};

Grille.loadObjects = () => {
  chargeObjetsDansGrille0(Grille.grilles[0]); // collisions, dresseur, pnj porte etc
  chargeObjetsDansGrille1(Grille.grilles[1]);
  chargeObjetsDansGrille2(Grille.grilles[2]);
  chargeObjetsDansGrille3(Grille.grilles[3]);
  chargeObjetsDansGrille4(Grille.grilles[4]);
  chargeObjetsDansGrille5(Grille.grilles[5]);
  chargeObjetsDansGrille6(Grille.grilles[6]);
};

export default Grille;
