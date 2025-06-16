const music = new Audio('./sons/luna-rise-part-one.mp3');
export const audioPlay = new Audio('./sons/play.wav');
export const audioPause = new Audio('./sons/pause.mp3');
export const audioFinale = new Audio('./sons/beep.mp3');
music.loop = true;

export function alternarMusica() {
  if(music.paused) {
    music.play();
  } else {
    music.pause();
  }
}