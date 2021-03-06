// @flow

import { getContext, getCanvas } from '../utils/render';
import { CombatContreSauvage } from '../combat/Sauvage';
import DevMode from '../utils/DevMode';
import Objet from './Objet';
import Person from './Person';
import Batiment from './Batiment';
import Porte from './Porte';
import Herbe from './Herbes';
import type { Collision } from './Collision';

import PlayerController from '../gameloop/PlayerController';

class Grille {
  player: PlayerController;
  static nbG: number;

  num: number;
  terrain: HTMLImageElement;
  objets: Array<Collision> = [];
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

export default Grille;
