let listcontainer = document.querySelector(".listContainer");
let listItem = document.querySelector(".listItem");

listcontainer.addEventListener("click", function (e) {
  let listTarget = e.target;
  if (listTarget.className === "listItem") {
    listTarget.style.textDecoration = "line-through";
  }
});
