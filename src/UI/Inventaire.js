class Inventaire {
	constructor() {
		this.objects = [];
	}

	addObject(obj) {
		this.objects.push(obj);
	}

	getObject(i) {
		return this.objects[i];
	}
}

export default Inventaire;
