document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task");
    const dueDateInput = document.getElementById("due-date");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    function createTaskItem(taskText,dueDate){
      const taskItem = document.createElement("div");
      taskItem.className = "task-item";
      const taskDetails = document.createElement("span");
      taskDetails.textContent =` ${taskText}${dueDate ? `-Due: ${dueDate} `: ""}`;
      const markCompletedButton = document.createElement("button");
        markCompletedButton.textContent = "Complete";
        markCompletedButton.addEventListener("click", () => {
          taskDetails.classList.toggle("completed");
        });
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          const newTaskText = prompt("Edit Task", taskText);
          const newDueDate = prompt("Edit Due Date", dueDate);
          if (newTaskText) {
            taskDetails.textContent = `${newTaskText}${newDueDate ? ` - Due: ${newDueDate}` : ""}`;
          }
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(taskItem);
        });
        taskItem.appendChild(taskDetails);
        taskItem.appendChild(markCompletedButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
  return taskItem;
    }

    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;
      if (taskText) {
        const taskItem =createTaskItem(taskText,dueDate);
        taskList.appendChild(taskItem);
        taskInput.value = "";
        dueDateInput.value = "";
      }
      else{
        alert("task description cannot be empty");
      }
    });
  });