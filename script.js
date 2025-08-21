let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;
  
  const task = {
    id: Date.now(),
    text: text,
    done: false,
    date: new Date().toLocaleString()
  };
  tasks.push(task);
  input.value = "";
  renderTasks();
}

function toggleDone(id) {
  tasks = tasks.map(t => t.id === id ? {...t, done: !t.done} : t);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task" + (task.done ? " done" : "");
    div.innerHTML = `
      <div>
        <p>${task.text}</p>
        <small>${task.date}</small>
      </div>
      <div class="actions">
        <button onclick="toggleDone(${task.id})">✔</button>
        <button onclick="deleteTask(${task.id})">🗑</button>
      </div>
    `;
    list.appendChild(div);
  });
  document.getElementById("taskCount").textContent = tasks.length;
}
