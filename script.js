$(document).ready(function () {
  $("#add-task").on("click", function () {
    const taskText = $("#task-input").val();

    if (!taskText.length) {
      return alert("Please add a task to the list!");
    }

    if (taskText) {
      const newTask = $("<li>").text(taskText);
      const deleteButton = $('<button class = "delete">Delete</button>');

      newTask.on("click", function () {
        $(this).toggleClass("completed");
      });

      deleteButton.on("click", function (event) {
        event.stopPropagation();
        newTask.remove();
      });

      newTask.append(deleteButton);
      $("#task-list").append(newTask);

      $("#task-input").val("");
    }
  });

  $("#task-input").on("keypress", function (event) {
    if (event.originalEvent.keyCode === 13) {
      $("#add-task").click();
    }
  });
});
