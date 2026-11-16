const userContainer = document.querySelector(".userContainer");

const arr = [
  { id: 1, name: "Manas", email: "O9cYC@example.com" },
  { id: 2, name: "Banas", email: "O8cYD@example.com" },
  { id: 3, name: "Sanas", email: "O7cYE@example.com" },
  { id: 4, name: "Tanas", email: "O6cYF@example.com" },
  { id: 5, name: "Lanas", email: "O5cYG@example.com" },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";

  arr.map((item) => {
    let elem = document.createElement("div");
    elem.innerHTML = `<div class="userItem">
<h3 class="userName">${item.name}</h3>
<p class="userEmail">${item.email}</p>
</div>`;

    userContainer.appendChild(elem);
  });
}

// renderUsers(arr);

const searchInput = document.querySelector("#searchInput");

function handleSearch(e) {
  let searchValue = e.target.value;
  let filterUsers = arr.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUsers(filterUsers);
}

searchInput.addEventListener("input", handleSearch);
