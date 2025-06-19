import { btn, html, img, titulo } from "./dom.js";
import { mostrarTempo } from './timer.js';
export const TEMPOS = {
  // foco: 1500,
  foco: 30,
  'descanso-curto': 300,
  'descanso-longo': 900
};
export function mudandoContexto(contexto) {
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