document.addEventListener('DOMContentLoaded', () => {
  submit.addEventListener('click', (event) => {
    event.preventDefault()
  })
})

const input = document.querySelector('#new-task-description')
const submit = document.querySelector('input[type ="submit"]')
const result = document.querySelector('#tasks')
const total = document.querySelector('#total')
let i = 0

submit.addEventListener('click', () => {
  if (input.value === '') return
  createDeleteElements(input.value)
  input.value = ' '
})

function createDeleteElements(value) {
  i++

  const li = document.createElement('li')
  result.appendChild(li)
  li.textContent = value

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'delete'
  li.appendChild(deleteBtn)
  deleteBtn.addEventListener('click', () => {
    result.removeChild(li)

    i--
    total.textContent = i
  })

  li.addEventListener('click', () => {
    li.style.color = 'red'
  })

  total.textContent = i
}

// document.addEventListener("DOMContentLoaded", () => {
//   addButton.addEventListener('click', event => {
//     event.preventDefault()
//   })
// });

// const addMessage = document.getElementById('new-task-description')
// const addButton = document.querySelector('input[type ="submit"]')
// const todo = document.getElementById('tasks')

// const todoList = []

// addButton.addEventListener('click', function () {
//   if(!addMessage.value) return
//   let newTodo = {
//     todo: addMessage.value,
//     checked: false,
//   }
//   todoList.push(newTodo)
//   displayMessages()
//   addMessage.value = ''
// })

// function displayMessages() {
//   let displayMessage = ''
//   todoList.forEach(function (item, i) {
//     displayMessage += `
//     <li>
//       <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
//       <label for='item_${i}'> ${item.todo} </label>
//     </li>
//     `
//     let priority = document.getElementById('priority')
//     todo.innerHTML = displayMessage
//   })
// }
