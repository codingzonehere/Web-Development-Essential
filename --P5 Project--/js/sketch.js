var song;
function preload(){
  song = loadSound("sound/sound.mp3");
}
function setup() {
  song.play();
  song.setVolume(5);
}
song.stop();
