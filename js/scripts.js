//ELEMENTS
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const editForm = document.getElementById('edit-form');
const editInput = document.getElementById('edit-input');
const cancelEditBtn = document.getElementById('btnCancelarEdit');

//FUNCIONS
const saveTodo = (text) => {
  const todo = document.createElement('div');
  todo.classList.add('todo');

  const todoTitle = document.createElement('h3');
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement('button');
  doneBtn.classList.add('finish-todo');
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-todo');
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  todo.appendChild(editBtn);

  const removetBtn = document.createElement('button');
  removetBtn.classList.add('remove-todo');
  removetBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(removetBtn);

  todoList.appendChild(todo);
};

const toggleForm = () => {
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  todoList.classList.toggle('hide');
};

//EVENTS
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
    console.log(inputValue);
  }

  todoInput.value = '';
});

document.addEventListener('click', (e) => {
  const target = e.target;
  const parentEl = target.closest('div');

  if (target.classList.contains('finish-todo')) {
    parentEl.classList.toggle('done');
  } else if (target.classList.contains('edit-todo')) {
    toggleForm();
  } else if (target.classList.contains('remove-todo')) {
    parentEl.remove();
  }
});

cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault;
  toggleForm();
});
