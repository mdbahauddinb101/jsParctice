let randomBtn = document.querySelector(".randomColor");
let colorInput = document.querySelector("#colorInput");
let applyColor = document.querySelector(".applyColor");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const colorArray = [
  "red",
  "tomato",
  "green",
  "blue",
  "black",
  "white",
  "yellow",
  "orange",
];

const genarateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomNumber];
};

const handleRandomBtnClick = () => {
  let color = genarateRandomColor();
  colorChanger(color);
  currentColorValue.innerText = color;
};

const handleApplyBtnClick = () => {
  const color = colorInput.value;
  colorChanger(color);
  currentColorValue.innerText = color;
};

const colorChanger = (color) => {
  container.style.backgroundColor = color;
};

randomBtn.addEventListener("click", handleRandomBtnClick);
applyColor.addEventListener("click", handleApplyBtnClick);
