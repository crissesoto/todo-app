/* Quering the dom */
const addForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const searchBalk = document.querySelector(".search input");

/* Functions */

// add todo + html template
const generateTodoTemplate = addTodo => {
  const html = `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>${addTodo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`;

  ul.innerHTML += html;
};

// filtering the todo's
const filterTodos = inputTerm => {
  Array.from(ul.children)
    .filter(todo => {
      return !todo.textContent.toLowerCase().includes(inputTerm);
    })
    .forEach(todo => {
      todo.classList.add("filtered");
    });

  Array.from(ul.children)
    .filter(todo => {
      return todo.textContent.toLowerCase().includes(inputTerm);
    })
    .forEach(todo => {
      todo.classList.remove("filtered");
    });
};

/* Event Listeners on elements  */

// eventlistener on submit button
addForm.addEventListener("submit", e => {
  e.preventDefault();
  const addTodo = addForm.add.value.trim();
  if (addTodo.length > 0) {
    generateTodoTemplate(addTodo);
  } else {
    alert("Enter a new todo first!");
  }
  addForm.reset();
});

// eventListener on the ul to delete todo's
ul.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// eventListener on the search balk
searchBalk.addEventListener("keyup", () => {
  const inputTerm = searchBalk.value.trim().toLowerCase();
  filterTodos(inputTerm);
  searchBalk.reset();
});
