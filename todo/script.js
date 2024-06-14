// script.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('todo-input');
  const addButton = document.getElementById('add-todo-button');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText) {
      addTask(taskText);
      input.value = '';
    }
  });

  function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todoList.removeChild(li);
    });

    li.appendChild(deleteButton);
    todoList.appendChild(li);
  }
});
