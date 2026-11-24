let btn = document.querySelector(".btn");
let modalContainer = document.querySelector(".modalContainer");
let closeBtn = document.querySelector(".closeBtn");

btn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", function (e) {
  if (e.target.className === "modalContainer") {
    modalContainer.style.display = "none";
  }
});
