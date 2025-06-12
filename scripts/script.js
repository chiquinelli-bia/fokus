const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const CurtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const img = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btn = document.querySelectorAll('.app__card-button');
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