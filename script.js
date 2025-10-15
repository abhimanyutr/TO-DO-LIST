
const tasks = [];

const saveTask =()=>{
   localStorage.setItem('tasks',JSON.stringify(tasks))
}

function taskComplete(index){
   //If it's false, change it to true // If it's true, change it to false
   tasks[index].completed = !tasks[index].completed; 
   console.log(tasks);
   
}


function taskAdd() {
  const input = document.getElementById("input");
  const taskText = input.value.trim();

  if (!taskText) {
    alert("Please fill the field");
    return;
  }

    // Add new task to array
  const task = { text: taskText, completed: false };
  tasks.push(task);
  const index = tasks.length - 1;
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="d-flex justify-content-between mt-3 align-items-center">
      <div class="d-flex align-items-center task">
        <input type="checkbox" class="custom-checkbox me-2 mybtn">
        <span class="fw-bold taskResult">${task.text}</span>
      </div>
      <div>
        <button onclick="editTask(this)" class="text-muted bg-transparent border-0 me-2 mybtn">
          <i class="fa-solid text-success fa-pen"></i> Edit
        </button>
        <button onclick="deleteContent(this)" class="border-0 bg-transparent mybtn">
          <i class="fa-solid text-danger fa-trash"></i>
        </button>
      </div>
    </div>
  `;

  tasklist.appendChild(li);
  input.value = "";

  const checkbox = li.querySelector("input[type='checkbox']");
  const span = li.querySelector("span");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    span.classList.toggle("completed", task.completed);
    updateStats();
  });
  updateStats();
  saveTask();
}

function editTask(button) {
  const li = button.closest("li");
  const span = li.querySelector("span");
  const currentText = span.textContent;
  const editText = prompt("Edit task:", currentText);
  if (editText) {
    span.textContent = editText;
    const index = Array.from(tasklist.children).indexOf(li);
    tasks[index].text = editText;
  }
  updateStats();
  saveTask();
}

function deleteContent(button) {
  const li = button.closest("li");
  const index = Array.from(tasklist.children).indexOf(li);
  tasks.splice(index, 1);
  li.remove();
  console.log(tasks);
  updateStats();
  saveTask();
}

const updateStats = () => {
  const completeTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progressBar = document.getElementById('progress');
  const progress = totalTasks === 0 ? 0 : (completeTasks / totalTasks) * 100;
  progressBar.style.width = `${progress}%`;

  const statNumbers = document.getElementById('statNumbers').querySelector('span');
  statNumbers.textContent = `${completeTasks}/${totalTasks}`;
  saveTask();
};