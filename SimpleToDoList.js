const listcontainer = document.querySelector(".list-container");
let addinput = document.querySelector("#addinput");
let addbtn = document.querySelector(".addbtn");

let list = [];

function renderlist(arr) {
  listcontainer.innerHTML = "";
  list.map((item) => {
    let div = document.createElement("div");
    div.classList.add("list");
    div.innerHTML = `<p>${item.text}</p>`;
    let deltebtn = document.createElement("button");
    deltebtn.innerText = "Delete";
    div.appendChild(deltebtn);
    deltebtn.addEventListener("click", () => {
      handledelete(item.id);
    });
    listcontainer.appendChild(div);
  });
}
function addbtnfunc() {
  const text = addinput.value.trim();
  if (!text) return; // don't add empty text

  list.unshift({
    id: Date.now(),
    text: text,
  });
  renderlist(list);
  addinput.value = "";
}

function handledelete(id) {
  list = list.filter((item) => item.id !== id); // update the real list
  renderlist(list);
}

addbtn.addEventListener("click", addbtnfunc);
