var audio = new Audio('assets/musiqueLoop.wav');
audio.loop = true;
//audio.play();

function stopMusique(){
  if(audio.paused){
    audio.play();
    document.getElementById("buttonMusique").innerHTML = "Musique OFF";
  }
  else{
    audio.pause();
    document.getElementById("buttonMusique").innerHTML = "Musique ON";
  }
}
