// @flow
import { getCanvas } from './render';

class _DevMode {
  dev: bool;
  framed: bool;
  mode: Symbol;

  constructor() {
    this.dev = false;
    this.framed = false;
  }

  getOption(optionName: string) {
    const formElement = document.getElementById(`input_dev_${optionName}`);
    return (formElement instanceof HTMLInputElement) ? formElement.checked : false;
  }

  init() {
    if (location.search === '?dev') {
      this.dev = true;
      hideIfDevMode();
      mouseListener();
    }
    else {
      hideIfNotDevMode();
    }

    if (location.search === '?framed') {
      this.framed = true;
      hideUnframed();
    }
  }

  addCollisionDev(x: number, y: number) {
    addCollisionDev(x, y);
  }

  addHerbeDev(x: number, y: number) {
    addHerbeDev(x, y);
  }
}

let boolPressC = false; // memoire touche appuye, genere au 2nd appui
let boolPressH = false; // memoire touche appuye, genere au 2nd appui

let Cx1 = 0; let Cx2 = 0; let Cy1 = 0; let Cy2 = 0;
let Hx1 = 0; let Hx2 = 0; let Hy1 = 0; let Hy2 = 0;

function addCollisionDev(x, y) {
  const coef = {
    x: 10,
    y: 10,
  };

  if (!boolPressC) {
    Cx1 = x + coef.x;
    Cy1 = y + coef.y;
  }
  else {
    // x2,y2 representent la taille de l objet et non sa coordonnee
    Cx2 = (x + coef.x) - Cx1;
    Cy2 = (y + coef.y) - Cy1;

    const chaine = `grille.ajouteObjet(new Objet('Collision', ${Cx1}, ${Cy1}, ${Cx2}, ${Cy2}));<br>`;
    const loaderOuput = document.getElementById('loaderOutput');
    if (loaderOuput) loaderOuput.innerHTML += chaine;
  }
  boolPressC = !boolPressC;
}

function addHerbeDev(x, y) {
  const coef = {
    x: 10,
    y: 10,
  };

  if (!boolPressH) {
    Hx1 = x + coef.x;
    Hy1 = y + coef.y;
  }
  else {
    // x2,y2 representent la taille de l objet et non sa coordonnee
    Hx2 = (x + coef.x) - Hx1;
    Hy2 = (y + coef.y) - Hy1;
    const chaine = `grille.ajouteHerbe(new Herbe(${Hx1}, ${Hy1}, ${Hx2}, ${Hy2}, 5));<br>`;
    const loaderOuput = document.getElementById('loaderOutput');
    if (loaderOuput) loaderOuput.innerHTML += chaine;
  }
  boolPressH = !boolPressH;
}

function hideIfDevMode() {
  hideAllFromClass('hideIfDevMode');
}

function hideIfNotDevMode() {
  hideAllFromClass('hideIfNotDevMode');
}

function hideUnframed() {
  hideAllFromClass('hideIfIframed');
  // remove the 8px margin of many browsers
  document.getElementsByTagName('body')[0].style.margin = '0px';
}

function hideAllFromClass(className) {
  const hideElements = document.getElementsByClassName(className);
  Array.from(hideElements).forEach((elem: HTMLElement) => {
    elem.style.display = 'none';
  });
}


function mouseListener() {
  const canvas = getCanvas();
  const history = [];
  canvas.addEventListener('click', (e:MouseEvent) => {
    console.log(e);
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log(`x: ${x} y: ${y}`);

    // const { clientX: x, clientY: y } = e;
    // console.log(`x:${x - canvas.offsetLeft} y:${y - canvas.offsetTop}`);

    history.push({ x, y });
    console.log(history);
  }, false);
}

const DevMode = new _DevMode();

export { _DevMode };
export default DevMode;
