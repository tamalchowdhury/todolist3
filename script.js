// we need a todo list:
const todoList = ["take this class", "go outside", "take haircut"]

function displayTodoList() {
  const todoListElement = document.querySelector("#todo-list")

  todoListElement.innerHTML = ""
  todoList.forEach((item, index) => {
    const todoElement = document.createElement("div")
    todoElement.textContent = item
    todoElement.setAttribute("class", "todo-item")

    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.addEventListener("click", () => deleteTodo(index))

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    editButton.addEventListener("click", () => editTodo(index))

    todoElement.appendChild(editButton)
    todoElement.appendChild(deleteButton)

    todoListElement.appendChild(todoElement)

  })
}

displayTodoList()


function addTodo(todoText) {
  todoList.push(todoText)
  displayTodoList()
}

function deleteTodo(index) {
  todoList.splice(index, 1)
  displayTodoList()
}

function editTodo(index) {
  let newText = prompt("Enter a new todo text")
  if(newText) {
    todoList[index] = newText
    displayTodoList()
  }
}




function handleFormSubmit(event) {
  event.preventDefault()
  const todoText = event.target.todo.value 
  if(todoText) {
    addTodo(todoText)
  }

}

const form = document.querySelector("#form")
form.addEventListener("submit", handleFormSubmit)
