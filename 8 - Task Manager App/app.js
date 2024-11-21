// Accessing elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterToDo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Add event listener
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteOrCompleteToDo);
filterToDo.addEventListener("change", filterToDos);

// Creating functions
// e stands for event
// first function
function addToDo(e) {
    // Prevents tab from refreshing
    e.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newToDo = document.createElement("li");
    newToDo.classList.add("todo-item");
    newToDo.innerText = todoInput.value;
    todoDiv.appendChild(newToDo);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }

// e stands for event
// second function
function deleteOrCompleteToDo(e) {
    const targetBtn = e.target;
    if (targetBtn.classList.contains("trash-btn")) {
      const todoDiv = targetBtn.parentElement;
      todoDiv.classList.add("fall");
      todoDiv.addEventListener("click", function () {
        todoDiv.remove();
      });
    }

    if (targetBtn.classList.contains("complete-btn")) {
        const todoDiv = targetBtn.parentElement;
        todoDiv.classList.toggle("completed");
    }
  }

// third function
// e for event
function filterToDos(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
      const filterValue = e.target.value;
      if (filterValue === "all") {
        todo.style.display = "flex";
      } else if (filterValue === "completed") {
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      } else if (filterValue === "uncompleted") {
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      }
    });
  }