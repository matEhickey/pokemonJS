import MenuMode from '../types/MenuMode';

class SousMenu {
	constructor(title, render, validate) {
		this.title = title;
		this.render = render;
		this.validate = validate;

		this.isShown = false;
	}

	display() {
		if (this.isShown) {
			this.render();
		}
	}

	toggle() {
		this.isShown = !this.isShown;
	}
}

SousMenu.load = (menu) => {
	menu.options = [
		new SousMenu(
			'Pokedex',
			() => { menu.displayPokedex(); },
			() => { menu.mode = MenuMode.Pokedex; },
		),
		new SousMenu(
			'Pokemon',
			() => { menu.displayPokemons(menu.player.dresseur.pokemons); },
			() => { menu.mode = MenuMode.Pokemons; },
		),
		new SousMenu(
			'Inventaire',
			() => { menu.displayInventaire(); },
			() => { menu.mode = MenuMode.Inventaire; },
		),
		new SousMenu(
			menu.player.getName(),
			() => { menu.displayInfosJoueur(); },
			() => { menu.mode = MenuMode.Person; },
		),
		new SousMenu(
			'Carte',
			() => { menu.displayCarte(); },
			() => { menu.mode = MenuMode.Carte; },
		),
		new SousMenu(
			'Sauvegarde',
			() => { menu.displaySauv(); },
			() => { menu.mode = MenuMode.Sauvegrade; },
		),
		new SousMenu(
			'Options',
			() => { menu.displayOptions(); },
			() => { menu.mode = MenuMode.Options; },
		),
	];
};

export default SousMenu;
