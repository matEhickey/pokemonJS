import { getContext } from '../utils/render';


class Discussion {
	constructor(nom, messages) {
		this.nom = nom;
		this.messages = messages;
		this.showCount = 0;

		this.context = getContext();
	}

	increaseMessage() {
		this.showCount += 1;
		return (this.showCount === this.messages.length);
	}

	showCurrentMessage(player) {
		this.context.font = '20px Georgia';
		this.context.fillStyle = player.couleurPrefere;
		this.context.fillRect(50, 480, 800, 150);
		this.context.fillStyle = '#ffffff';
		this.context.fillText(`${this.nom} : `, 60, 510, 780);

		const message = this.messages[this.showCount];
		const lineheight = 25;

		// split message by \n
		const lines = message.split('\n');
		lines.forEach((line, index) => {
			this.context.fillText(line, 80, 550 + (index * lineheight));
		});
	}
}

export default Discussion;
