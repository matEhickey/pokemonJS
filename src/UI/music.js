// @flow
// $FlowFixMe
import soundtrack from '../../assets/musiqueLoop.wav';

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

const audio = new Audio();
audio.src = soundtrack;
audio.loop = true;
// audio.play();

window.stopMusique = stopMusique;
