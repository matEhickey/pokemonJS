// @flow

import hero from 'assets/imgs/BackSpritesHero.png';
import backgroundPV1 from 'assets/imgs/UI/Battle/BackgroundPV_1.png';
import backgroundPV2 from 'assets/imgs/UI/Battle/BackgroundPV_2.png';
import Combat from '../combat/Combat';
import CombatMode from '../modes/CombatMode';
import { getContext } from '../utils/render';
import ImageLoader from '../utils/ImageLoader';
import Font from '../utils/Font';


class CombatRenderer {
  combat: Combat;

  constructor(combat: Combat) {
    this.combat = combat;
  }

  drawCombat() {
    const context = getContext();

    this.showBackGround(context);

    // console.log(`Combat.drawCombat: mode ${this.mode}`);
    if (this.combat.mode === CombatMode.dresseurs) {
      this.drawDresseurMode(context);
    }

    if (this.combat.mode === CombatMode.pokemons) {
      this.drawPokemonsMode(context);
    }

    if (this.combat.mode === CombatMode.discussions) {
      this.drawDiscussionMode(context);
    }

    if (this.combat.mode === CombatMode.menuSelection) {
      this.drawMenuSelect(context);
    }

    if (this.combat.mode === CombatMode.attaque) {
      // console.log('draw attaque');
    }

    if (this.combat.mode === CombatMode.discussionsEnd) { // copie du 3 mais pour la fin
      this.drawDiscussionEnd(context);
    }
  }

  showBackGround(context: CanvasRenderingContext2D) {
    context.fillStyle = this.combat.player.couleurPrefere;
    context.fillRect(50, 50, 800, 550);
  }

  drawDresseurMode(context: CanvasRenderingContext2D) {
    if (this.combat.joueurs[1].isSauvage()) {
      this.combat.joueurs[1].getPokemon(0).afficheToiCombat();
    }
    else {
      context.drawImage(
        this.combat.player.charSprites,
        80 * this.combat.joueurs[1].getGTX(),
        80 * this.combat.joueurs[1].getGTY(),
        80, 80, 600, 50, 250, 250,
      );
    }

    context.font = Font.medium;
    context.fillStyle = '#000000';
    context.fillText(`Adversaire : ${this.combat.joueurs[1].nom}`, 65, 100);
    const heroImg = ImageLoader.load(hero);
    context.drawImage(heroImg, 0, 0, 70, 75, 50, 250, 400, 400);
    context.font = Font.medium;
    context.fillText('Combat!!', 365, 300);
  }

  drawPokemonsPV(context: CanvasRenderingContext2D) {
    const calculateLifeSize = (pokemon, fullLifeSize) => {
      const ratio = pokemon.pdv
        / pokemon.pdvMax;
      const pdvSize = Math.round(ratio * fullLifeSize);
      return (pdvSize);
    };

    const fullLifeSize = 180;
    const ennemyPDVSize = calculateLifeSize(this.combat.joueurs[1].getPokemon(0), fullLifeSize);
    const ownPDVSize = calculateLifeSize(this.combat.joueurs[0].getPokemon(0), fullLifeSize);


    const backgoundPV1Img = ImageLoader.load(backgroundPV1);
    context.drawImage(backgoundPV1Img, 0, 0, backgoundPV1Img.width, backgoundPV1Img.height,
      45, 50, 400, 150);

    context.font = Font.little;
    context.fillStyle = '#000000';
    context.fillText(this.combat.joueurs[1].getPokemon(0).getName(), 85, 105);
    context.fillText(`Niveau :${this.combat.joueurs[1].getPokemon(0).lvl}`, 110, 135);
    context.fillText('HP', 110, 155, 200);

    context.fillStyle = '#ff3030';
    context.fillRect(155, 140, fullLifeSize, 15);
    context.fillStyle = '#2bff00';
    context.fillRect(155, 140, ennemyPDVSize, 15);

    this.combat.joueurs[1].getPokemon(0).afficheToiCombat();

    const backgoundPV2Img = ImageLoader.load(backgroundPV2);
    context.drawImage(backgoundPV2Img, 0, 0, backgoundPV2Img.width, backgoundPV2Img.height,
      455, 335, 400, 150);

    context.font = Font.little;
    context.fillStyle = '#000000';
    context.fillText(this.combat.player.dresseur.getPokemon(0).getName(), 550, 390);
    context.fillText(`Niveau :${this.combat.player.dresseur.getPokemon(0).lvl}`, 575, 420);

    context.fillStyle = '#ff3030';
    context.fillRect(625, 430, fullLifeSize, 15);
    context.fillStyle = '#2bff00';
    context.fillRect(625, 430, ownPDVSize, 15);

    context.fillStyle = '#000000';
    context.fillText('HP', 575, 440, 200);
    this.combat.player.dresseur.getPokemon(0).drawBackSprite();
  }

  drawPokemonsMode(context: CanvasRenderingContext2D) {
    this.drawPokemonsPV(context);
  }

  drawDiscussionMode(context: CanvasRenderingContext2D) {
    this.drawPokemonsPV(context);

    context.font = Font.little;
    context.fillStyle = '#aaaaaa';
    context.fillRect(50, 450, 800, 30 + (this.combat.infos.length * 25));

    context.font = Font.little;
    context.fillStyle = '#000000';
    this.combat.infos.forEach((info, index) => {
      context.fillText(info, 80, 485 + (25 * index));
    });
  }

  drawMenuSelect(context: CanvasRenderingContext2D) {
    this.drawPokemonsPV(context);

    this.combat.menu.display();
  }

  drawDiscussionEnd(context: CanvasRenderingContext2D) {
    this.drawPokemonsPV(context);

    context.fillStyle = '#aaaaaa';
    context.fillRect(50, 450, 800, 30 + (this.combat.infos.length * 25));

    context.font = Font.little;
    context.fillStyle = '#000000';
    this.combat.infos.forEach((info, index) => {
      context.fillText(info, 80, 485 + (25 * index));
    });
  }
}

export default CombatRenderer;
