import { timer, startPauseBt, startPauseBtString, startPauseBtImg } from './dom.js';
import { audioFinale, audioPlay, audioPause } from './som.js';
export let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

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

export function iniciarOuPausar() {
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

export function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    timer.innerHTML = `${tempoFormatado}`;
}
export function definirTempo(segundos) {
  tempoDecorridoEmSegundos = segundos;
  mostrarTempo();
}