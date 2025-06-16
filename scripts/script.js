import { focoBtn, CurtoBtn, longoBtn, inputCheckbox, startPauseBt } from './dom.js';
import { definirTempo, iniciarOuPausar } from './timer.js';
import { TEMPOS, mudandoContexto } from "./contexto.js";
import { alternarMusica } from "./som.js";

inputCheckbox.addEventListener('change', alternarMusica)


focoBtn.addEventListener('click', () => {
  definirTempo(TEMPOS.foco);
  mudandoContexto('foco');
  focoBtn.classList.add('active');
});

CurtoBtn.addEventListener('click', () => {
  definirTempo(TEMPOS['descanso-curto']);
  mudandoContexto('descanso-curto');
  CurtoBtn.classList.add('active');
});

longoBtn.addEventListener('click', () => {
  definirTempo(TEMPOS['descanso-longo']);
  mudandoContexto('descanso-longo');
  longoBtn.classList.add('active');
});

startPauseBt.addEventListener('click', iniciarOuPausar);

mudandoContexto('foco');

