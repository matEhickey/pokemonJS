// @flow

class InventaireObjet {}

class Inventaire {
  objects: Array<InventaireObjet>;

  constructor() {
    this.objects = [];
  }

  get length() {
    return this.objects.length;
  }

  addObject(obj: InventaireObjet) {
    this.objects.push(obj);
  }

  getObject(i: number) {
    return this.objects[i];
  }
}

export default Inventaire;
