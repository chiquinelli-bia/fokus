const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const CurtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const img = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btn = document.querySelectorAll('.app__card-button');
const inputCheckbox = document.getElementById('alternar-musica');
const timer = document.querySelector('#timer');
const startPauseBt = document.querySelector('#start-pause');
const startPauseBtString = document.querySelector('#start-pause span');
const startPauseBtImg = document.querySelector('#start-pause img');
const music = new Audio('/sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('/sons/play.wav');
const audioPause = new Audio('/sons/pause.mp3');
const audioFinale = new Audio('./sons/beep.mp3');
let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;
music.lop = true;

inputCheckbox.addEventListener('change', () => {
  if(music.paused) {
    music.play();
  } else {
    music.pause();
  }
})


focoBtn.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 1500;
  mudandoContexto('foco');
  focoBtn.classList.add('active');
})
CurtoBtn.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 300;
  mudandoContexto('descanso-curto');
  CurtoBtn.classList.add('active');
})
longoBtn.addEventListener('click', () => {
  tempoDecorridoEmSegundos = 900;
  mudandoContexto('descanso-longo');
  longoBtn.classList.add('active');
})

function mudandoContexto(contexto) {
  mostrarTempo();
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

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioFinale.play()
        zerar()
        alert('Tempo finalizado!')
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

function iniciarOuPausar() {
    if (intervaloId) {
      audioPause.play()
        zerar()
        return
    }
    audioPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    startPauseBtString.textContent = 'Pausar';
    startPauseBtImg.src = 'imagens/pause.png';
}

function zerar() {
    clearInterval(intervaloId)
    intervaloId = null
    startPauseBtString.textContent = 'Começar';
    startPauseBtImg.src = 'imagens/play_arrow.png';
}

startPauseBt.addEventListener('click', iniciarOuPausar )

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();
