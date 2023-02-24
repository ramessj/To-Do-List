import "./reset.css";
import "./styles.css";

import "./modal.css";

import "./modal";

import todos from "./tareas";

const todosArray = [];

const projectsArray = [];



let btnCrearTarea = document.getElementById("nuevaTareaButton");
let tareas = document.getElementById("tareas");


let crearTarea = () => {
  let fechalimite = document.getElementById("inputFechaLimite").value;

  let todoname = document.getElementById("todoname").value;
  
  let todoprioridad = document.getElementById("todoprioridad").value;

  
  if(todoname == '' || fechalimite == ''){

    return
  }
  
  let tarea = new todos(
    todoname,    
    fechalimite,
    todoprioridad
  );
  todosArray.push(tarea);
  renderTodos();

  fechalimite = '';
  todoname = '';
  modal.style.display = "none";
  

  console.log(todosArray);
};

btnCrearTarea.addEventListener("click", crearTarea);



//RENDERIZA LOS TODOS DEL ARRAY TODOSARRAY


let renderTodos = () => {
  tareas.innerHTML = ``;

  todosArray.forEach((todo) => {
    let tareali = document.createElement("li");
    tareali.setAttribute('id', todo.id)
    tareali.innerHTML = `<div class="todoLeft"><div class="checkNameTodo"><div><input type="checkbox"  class="checkboxTodo"></div> <div>${todo.title}</div></div></div><div class="todoRight"><div>${todo.dueDate}</div> <div class="todoPriority">${todo.priority}</div><div class="editDeleteContainer"> <div class="editTodoContainer"><i class="fa-solid fa-pen-to-square"></i></div><div class="deleteTodoContainer"><i class="fa-solid fa-trash"></i></div></div></div>`;
    tareas.appendChild(tareali);
  });
};



//TESTING


let tareaProvisional = new todos("Ir al baño", "2/3/23", "Alto");
todosArray.push(tareaProvisional);
renderTodos();