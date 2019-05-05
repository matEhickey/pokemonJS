// @flow

import soundtrack from '../../assets/musiqueLoop.wav';

const audio = new Audio();
audio.src = soundtrack;
audio.loop = true;
// audio.play();

function stopMusique() {
  const buttonMusic = document.getElementById('buttonMusique');
  if (audio.paused) {
    audio.play();
    if (buttonMusic) buttonMusic.innerHTML = 'Musique OFF';
  }
  else {
    audio.pause();
    if (buttonMusic) buttonMusic.innerHTML = 'Musique ON';
  }
}

window.stopMusique = stopMusique;
