// @flow

class InventaireObjet {}

class Inventaire {
  objects: Array<InventaireObjet>;

  constructor() {
    this.objects = [];
  }

  addObject(obj: InventaireObjet) {
    this.objects.push(obj);
  }

  getObject(i: number) {
    return this.objects[i];
  }
}

export default Inventaire;
