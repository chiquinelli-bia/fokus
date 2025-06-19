import { tarefas, btnTarefa, formTarefa, txtArea, ulTarefas, btnCancel, btnDelet, btnRemoverTarefasConcluidas, btnRemoverTarefas } from "./dom.js";
import { getTarefaSelecionada, getLiTarefaSelecionada } from "./dom.js";
import { removerTarefas, concluirTarefa, limpaForm } from "./crud-concluir-remover.js";
import { createList, atualizarTarefa, } from "./crud-tarefa.js";

btnTarefa.addEventListener('click', () => {
  limpaForm();
})
formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: txtArea.value
  }
  tarefas.push(tarefa);
  const elementoLi = createList(tarefa);
  ulTarefas.append(elementoLi);
  atualizarTarefa();
  limpaForm();
})
tarefas.forEach(tarefa => {
  const elementoLi = createList(tarefa);
  ulTarefas.append(elementoLi);
});
btnCancel.addEventListener('click', () => limpaForm());
btnDelet.addEventListener('click', () => limpaForm());
document.addEventListener('focoFinalizado', () => {
  const tarefa = getTarefaSelecionada();
  const li = getLiTarefaSelecionada();
  if (tarefa && li) {
    concluirTarefa(li, tarefa);
  }
})
btnRemoverTarefasConcluidas.onclick = () => removerTarefas(true);
btnRemoverTarefas.onclick = () => removerTarefas(false);
