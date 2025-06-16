const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const CurtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const img = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btn = document.querySelectorAll('.app__card-button');
const inputCheckbox = document.getElementById('alternar-musica');
const music = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPause = new Audio('/sons/pause.mp3');
const audioFinale = new Audio('./sons/beep.mp3');
music.lop = true;

inputCheckbox.addEventListener('change', () => {
  if(music.paused) {
    music.play();
  } else {
    music.pause();
  }
})


focoBtn.addEventListener('click', () => {
  mudandoContexto('foco');
  focoBtn.classList.add('active');
})
CurtoBtn.addEventListener('click', () => {
  mudandoContexto('descanso-curto');
  CurtoBtn.classList.add('active');
})
longoBtn.addEventListener('click', () => {
  mudandoContexto('descanso-longo');
  longoBtn.classList.add('active');
})

function mudandoContexto(contexto) {
  btn.forEach(function (contexto){
    contexto.classList.remove('active');
  })
  html.setAttribute('data-contexto', `${contexto}`);
  img.setAttribute('src', `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>`
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
    default:
      break;
  }
}
let tempoDecorridoEmSegundos = 5
let intervaloId = null

const startPauseBt = document.querySelector('#start-pause')

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioFinale.play()
        zerar()
        alert('Tempo finalizado!')
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

function iniciarOuPausar() {
    if (intervaloId) {
      audioPause.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
}

startPauseBt.addEventListener('click', iniciarOuPausar )
