const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function atualizarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
function createList(tarefa) {
  const li = document.createElement('li');
  li.classList.add('app__section-task-list-item')
  const svg = document.createElement('svg');
  svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#FFF"></circle><path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path></svg>`;
  const paragraph = document.createElement('p');
  paragraph.textContent = tarefa.descricao;
  paragraph.classList.add('app__section-task-list-item-description');
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('app_button-edit')

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
  return li;
}

const btnTarefa = document.querySelector('.app__button--add-task');
const formTarefa = document.querySelector('.app__form-add-task');

btnTarefa.addEventListener('click', () => {
  formTarefa.classList.toggle('hidden');
})

const txtArea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');

formTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: txtArea.value
  }
  tarefas.push(tarefa)
  const elementoLi = createList(tarefa);
  ulTarefas.append(elementoLi);
  atualizarTarefa();
  txtArea.value = '';
  formTarefa.classList.toggle('hidden');
})

tarefas.forEach(tarefa => {
  const elementoLi = createList(tarefa);
  ulTarefas.append(elementoLi);
});

const btnCancel = document.querySelector('.app__form-footer__button--cancel');

btnCancel.addEventListener('click', () => {
  txtArea.value = '';
  formTarefa.classList.toggle('hidden');
})