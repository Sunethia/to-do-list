// // localStorage.removeItem('records');
// let lists = JSON.parse(localStorage.getItem("records"))
//   ? JSON.parse(localStorage.getItem("records"))
//   : [];
// lists.forEach((item) => {
//   console.log(item.name);
//   document.querySelector("#tasks").innerHTML += `
//  <p><input type="text">${item.name}</p>`;
// });
// function TaskName() {
//   // e.preventDefault();
//   lists.push({
//     name: document.getElementById("name").value,
//     // surname: document.getElementById("surname").value,
//     // age: parseInt(document.getElementById("age").value),
//   });
//   //
//   localStorage.setItem("records", JSON.stringify(lists));
// }
// function DeleteInput(id) {
//   if (id > -1) {
//     lists.splice(id, 1);
//     // After delete
//     localStorage.setItem("records", JSON.stringify(lists));
//   } else {
//     console.log("Name was not found");
//   }
// }
// // Load data
// (function loadData() {
//   console.table(lists);
// })();
// // loadData();
// // Add Event listener
// document.querySelector("#name").addEventListener("click", TaskName);
// // delete record
// document.querySelector("#DeleteInput").addEventListener("click", (e) => {
//   e.preventDefault();
//   let name = document.getElementById("name").value;
//   let index = lists.findIndex((item) => item.name === name);
//   console.log(index);
//   DeleteInput(index);
// });

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    console.log("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                <p>Delete</p>
                </button>
            </div>
        `;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
if (document.querySelector("#newtask input").value.length == 0) {
  console.log("Please Enter a Task");
} else {
  document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#newtask input").value}
            </span>
        </div>
    `;
}
//sort by button
function sortList() {
  let list, i, switching, b, shouldSwitch;
  list = document.getElementById("");
  switching = true;

  while (switching) {
    switching = false;
    b = list.getElementsByTagName("");

    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;

      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
