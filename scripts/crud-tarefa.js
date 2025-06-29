import { tarefas, paragraphDescription, getTarefaSelecionada, setTarefaSelecionada, getLiTarefaSelecionada, setLiTarefaSelecionada } from "./dom.js";
import { concluirTarefa } from "./crud-concluir-remover.js";

export function atualizarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

export function createList(tarefa) {
  const li = document.createElement('li');
  li.classList.add('app__section-task-list-item')
  const svg = document.createElement('svg');
  svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFF"></circle><path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path></svg>`;
  const paragraph = document.createElement('p');
  paragraph.textContent = tarefa.descricao;
  paragraph.classList.add('app__section-task-list-item-description');
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('app_button-edit')

  const circle = svg.querySelector('circle');
  circle.addEventListener('click', () => {
    if (li.classList.contains('app__section-task-list-item-complete')) {
      li.classList.remove('app__section-task-list-item-complete');
      tarefa.completa = false;
      li.querySelector('button').removeAttribute('disabled');
      atualizarTarefa();
    } else {
      concluirTarefa(li, tarefa);
    }
  })

  btnEdit.onclick = () => {
    const novaDescricao = prompt('qual o novo nome do item da lista de tarefas?');
    if(novaDescricao) {
      paragraph.textContent = novaDescricao;
      tarefa.descricao = novaDescricao;
      atualizarTarefa();
    }
  }

  const img = document.createElement('img');
  img.setAttribute('src', '/imagens/edit.png');

  btnEdit.append(img);
  li.append(svg, paragraph, btnEdit);

  if(tarefa.completa) {
    li.classList.add('app__section-task-list-item-complete');
    btnEdit.setAttribute('disabled', 'true');
  } else {
    li.onclick = () => {
      document.querySelectorAll('.app__section-task-list-item-active').forEach(element => {
        element.classList.remove('app__section-task-list-item-active');
      })

      if(getTarefaSelecionada() === tarefa) {
        paragraphDescription.textContent = '';
        setTarefaSelecionada(null);
        setLiTarefaSelecionada(null);
        return;
      }

      setTarefaSelecionada(tarefa);
      setLiTarefaSelecionada(li);
      paragraphDescription.textContent = tarefa.descricao;
      li.classList.add('app__section-task-list-item-active');
    }
  }

  return li;
}
