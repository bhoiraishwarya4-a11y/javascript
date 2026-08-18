const tasks = [
  {
    id: 101,
    title: "Study basic of Programming",
    description: "Watch shorts or reels on programming",
    status: "Pending"
  },
  {
    id: 102,
    title: "Study Advanced CSS",
    description: "For interview preparation",
    status: "Completed"
  }
];


const titleElmt = document.getElementById("taskTitleInput");
const descriptionElmt = document.getElementById("taskDescriptionInput");


function renderTasks(ts) {

  document.getElementById("renderTasks").innerHTML = ts.map((tsk, i) => {

    const statusClass =
      tsk.status === "Completed"
        ? "status-completed"
        : "status-pending";


    return `
      <tr>

        <td>
          <span class="fw-bold text-muted">
            ${i + 1}
          </span>
        </td>


        <td>
          <strong>${tsk.title}</strong>
        </td>


        <td class="text-muted">
          ${tsk.description}
        </td>


        <td>
          <span class="status-badge ${statusClass}">
            <i class="fa-solid ${
              tsk.status === "Completed"
                ? "fa-circle-check"
                : "fa-clock"
            } me-1"></i>

            ${tsk.status}
          </span>
        </td>


        <td class="text-center">

          <button
            class="action-btn edit-btn me-2"
            title="Change Status"
            onclick="EditTask(${tsk.id})"
          >
            <i class="fa-solid fa-rotate"></i>
          </button>


          <button
            class="action-btn delete-btn"
            title="Delete Task"
            onclick="deleteTask(${tsk.id})"
          >
            <i class="fa-solid fa-trash"></i>
          </button>

        </td>

      </tr>
    `;

  }).join("");
}



function addNewTask() {

  const titleInput = titleElmt.value.trim();
  const descriptionInput = descriptionElmt.value.trim();


  if (titleInput === "" || descriptionInput === "") {

    alert("Please enter task title and description");

    return;
  }


  const newTask = {

    id: Date.now(),

    title: titleInput,

    description: descriptionInput,

    status: "Pending"

  };


  const getFromLocalTasks = getFromLocal();

  getFromLocalTasks.push(newTask);

  saveToLocal(getFromLocalTasks);

  renderTasks(getFromLocalTasks);


  titleElmt.value = "";

  descriptionElmt.value = "";
}



function deleteTask(ID) {

  const getFromLocalTasks = getFromLocal();


  const index = getFromLocalTasks.findIndex(
    (t) => t.id == ID
  );


  if (index === -1) {

    alert("Task not found");

    return;
  }


  getFromLocalTasks.splice(index, 1);


  saveToLocal(getFromLocalTasks);

  renderTasks(getFromLocalTasks);
}



function EditTask(ID) {

  const getFromLocalTasks = getFromLocal();


  const index = getFromLocalTasks.findIndex(
    (t) => t.id == ID
  );


  if (index === -1) {

    alert("Task not found");

    return;
  }


  if (getFromLocalTasks[index].status === "Pending") {

    getFromLocalTasks[index].status = "Completed";

  } else {

    getFromLocalTasks[index].status = "Pending";

  }


  saveToLocal(getFromLocalTasks);

  renderTasks(getFromLocalTasks);
}



function saveToLocal(ts = tasks) {

  localStorage.setItem(
    "b87Tasks",
    JSON.stringify(ts)
  );

}



function getFromLocal() {

  return JSON.parse(
    localStorage.getItem("b87Tasks")
  );

}



window.addEventListener("load", () => {

  let firstGetFromLocal = getFromLocal();


  if (!firstGetFromLocal) {

    saveToLocal();

    firstGetFromLocal = getFromLocal();

  }


  renderTasks(firstGetFromLocal);

});