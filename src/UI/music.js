import soundtrack from '../../assets/musiqueLoop.wav';

const audio = new Audio();
audio.src = soundtrack;
audio.loop = true;
// audio.play();

function stopMusique() {
  if (audio.paused) {
    audio.play();
    document.getElementById('buttonMusique').innerHTML = 'Musique OFF';
  }
  else {
    audio.pause();
    document.getElementById('buttonMusique').innerHTML = 'Musique ON';
  }
}

window.stopMusique = stopMusique;
