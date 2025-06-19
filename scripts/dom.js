export const html = document.querySelector('html');
export const focoBtn = document.querySelector('.app__card-button--foco');
export const CurtoBtn = document.querySelector('.app__card-button--curto');
export const longoBtn = document.querySelector('.app__card-button--longo');
export const img = document.querySelector('.app__image');
export const titulo = document.querySelector('.app__title');
export const btn = document.querySelectorAll('.app__card-button');
export const inputCheckbox = document.getElementById('alternar-musica');
export const timer = document.querySelector('#timer');
export const startPauseBt = document.querySelector('#start-pause');
export const startPauseBtString = document.querySelector('#start-pause span');
export const startPauseBtImg = document.querySelector('#start-pause img');
//crud
export let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
export const btnTarefa = document.querySelector('.app__button--add-task');
export const formTarefa = document.querySelector('.app__form-add-task');
export const txtArea = document.querySelector('.app__form-textarea');
export const ulTarefas = document.querySelector('.app__section-task-list');
export const btnCancel = document.querySelector('.app__form-footer__button--cancel');
export const btnDelet = document.querySelector('.app__form-footer__button--delete'); 
export const btnRemoverTarefasConcluidas = document.getElementById('btn-remover-concluidas');
export const btnRemoverTarefas = document.getElementById('btn-remover-todas');
export let paragraphDescription = document.querySelector('.app__section-active-task-description');

let tarefaSelecionada = null;
let liTarefaSelecionada = null;

// Funções getter e setter para controlar acesso às variáveis
export function setTarefas(novasTarefas) {
  tarefas = novasTarefas;
}
export function getTarefaSelecionada() {
  return tarefaSelecionada;
}
export function setTarefaSelecionada(tarefa) {
  tarefaSelecionada = tarefa;
}
export function getLiTarefaSelecionada() {
  return liTarefaSelecionada;
}
export function setLiTarefaSelecionada(li) {
  liTarefaSelecionada = li;
}
