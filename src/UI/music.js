// @flow
// $FlowFixMe
import soundtrack from 'assets/music/musiqueLoop.wav';

const audio = new Audio();
audio.src = soundtrack;
audio.loop = true;
// audio.play();

function initMusique() {
  const buttonMusic = document.getElementById('buttonMusique');
  if (buttonMusic) {
    buttonMusic.addEventListener('click', () => {
      console.log('stopMusique');
      stopMusique();
    });
  }
}
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

// window.stopMusique = stopMusique;
export default initMusique;
