// @flow

import MenuCombat from '../combat/MenuCombat';
import MenuCombatMode from '../types/MenuCombatMode';
import Color from '../utils/Color';
import PlayerController from '../gameloop/PlayerController';
import { getContext } from '../utils/render';


class MenuCombatRenderer {
  menuCombat: MenuCombat;

  constructor(menuCombat: MenuCombat) {
    this.menuCombat = menuCombat;
  }

  display() {
    const context = getContext();
    switch (this.menuCombat.mode) {
      case MenuCombatMode.global: // menu normal
        this.afficheMenuBackGround(context);
        this.afficheMenuSelection(context, this.menuCombat.player, this.menuCombat.selection);
        break;

      case MenuCombatMode.attaques: // menu attaque
        this.afficheMenuBackGround(context);
        this.afficheMenuSelection(context, this.menuCombat.player, this.menuCombat.selection);

        context.fillStyle = Color.LightGrey;
        context.fillRect(360, 280, 320, 370);

        context.fillStyle = this.menuCombat.player.couleurPrefere;
        context.fillRect(380, 290 + (this.menuCombat.selectionAttaque * 70), 280, 70);

        context.fillStyle = Color.Black;
        const attNames = this.menuCombat.player.dresseur.getPokemon(0).attaques.map(
          attaque => attaque.nom,
        );

        attNames.forEach((attName: string, i) => {
          if (i < 4) {
            context.fillText(
              attName,
              390, 330 + (70 * i), 270,
            );
          }
        });

        context.fillText('Retour', 390, 610, 270);
        break;

      case MenuCombatMode.pokemons:
        this.afficheMenuBackGround(context);
        this.afficheMenuSelection(context, this.menuCombat.player, this.menuCombat.selection);

        // const topY = 400 - this.menuCombat.player.dresseur.pokemons.length * 70;
        context.fillStyle = Color.LightGrey;
        // context.fillRect(360, topY, 320, 70 *
        // (this.menuCombat.player.dresseur.pokemons.length + 1) + 20);
        context.fillRect(
          360, 220, 320,
          70 * (this.menuCombat.player.dresseur.pokemons.length + 1) + 20,
        );

        context.fillStyle = this.menuCombat.player.couleurPrefere;
        // context.fillRect(380, (topY + 10) + 70 * this.menuCombat.selectionPokemon, 280, 70);
        context.fillRect(380, 230 + 70 * this.menuCombat.selectionPokemon, 280, 70);

        context.fillStyle = Color.Black;
        this.menuCombat.player.dresseur.pokemons.forEach((pokemon, i) => {
          context.fillText(
            pokemon.getName(),
            // 390, (topY + 50) + (70 * i), 270,
            390, 270 + (70 * i), 270,
          );
        });

        // context.fillText('Retour',
        //  (topY + 50), 200 + 70 * (this.menuCombat.player.dresseur.pokemons.length + 1), 270
        // );
        context.fillText(
          'Retour',
          390, 200 + 70 * (this.menuCombat.player.dresseur.pokemons.length + 1), 270,
        );
        break;

      case MenuCombatMode.objets: // menu objet
        this.afficheMenuBackGround(context);
        this.afficheMenuSelection(context, this.menuCombat.player, this.menuCombat.selection);

        context.fillStyle = Color.LightGrey;
        context.fillRect(360, 280, 320, 370);

        context.fillStyle = this.menuCombat.player.couleurPrefere;
        context.fillRect(380, 290 + (this.menuCombat.selectionObjet * 70), 280, 70);

        context.fillStyle = Color.Black;
        context.fillText('Potion : 0', 390, 330, 270);
        context.fillText('Pokeball', 390, 400, 270);
        context.fillText('Retour', 390, 610, 270);
        break;
      default:
        console.error('MenuCombat.afficheToi last : no compatible option');
    }
  }

  afficheMenuBackGround(context: CanvasRenderingContext2D) {
    context.fillStyle = Color.LightGrey;
    context.fillRect(50, 480, 800, 155);
  }

  afficheMenuSelection(
    context: CanvasRenderingContext2D,
    player: PlayerController, selection: Symbol,
  ) {
    context.fillStyle = player.couleurPrefere;
    context.fillRect(60, 490, 260, 135);

    context.fillStyle = Color.Black;
    context.fillText('Que voulez vous faire ?', 70, 565);

    context.fillStyle = selection === MenuCombatMode.attaques ? Color.LighterGrey : Color.DarkGrey;
    context.fillRect(340, 490, 240, 65);

    context.fillStyle = selection === MenuCombatMode.objets ? Color.LighterGrey : Color.DarkGrey;
    context.fillRect(340, 560, 240, 65);

    context.fillStyle = selection === MenuCombatMode.pokemons
      ? Color.LighterGrey : Color.DarkGrey;
    context.fillRect(590, 490, 240, 65);

    context.fillStyle = selection === MenuCombatMode.escape ? Color.LighterGrey : Color.DarkGrey;
    context.fillRect(590, 560, 240, 65);

    context.fillStyle = Color.Black;
    context.fillText('Attaque', 360, 530);
    context.fillText('Pokemons', 360, 600);
    context.fillText('Objets', 610, 530);
    context.fillText('Fuite', 610, 600);
  }
}

export default MenuCombatRenderer;
