import { atualizarTarefa } from "./crud-tarefa.js";
import { tarefas, txtArea, formTarefa, setTarefas } from "./dom.js";

export function concluirTarefa(li, tarefa) {
  li.classList.remove('app__section-task-list-item-active');
  li.classList.add('app__section-task-list-item-complete');
  li.querySelector('button').setAttribute('disabled', 'true');
  tarefa.completa = true;
  atualizarTarefa();
}

export const removerTarefas = (somenteCompletas) => {
  const completas = somenteCompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item';
  document.querySelectorAll(completas).forEach(tarefa => {
    tarefa.remove();
  })
  const novasTarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
  setTarefas(novasTarefas);
  atualizarTarefa();
}
export function limpaForm () {
  txtArea.value = '';
  formTarefa.classList.toggle('hidden');  
}