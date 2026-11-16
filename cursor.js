let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";
  //   shadowCursor.style.left = e.clientX + "px";
  //   shadowCursor.style.top = e.clientY + "px";
  animateShadowfunc();
});

function animateShadowfunc() {
  let currentX = shadowCursor.style.left || 0;
  let currentY = shadowCursor.style.top || 0;

  let distanceX = mouseX - parseInt(currentX);
  let distanceY = mouseY - parseInt(currentY);

  shadowCursor.style.left = parseInt(currentX) + distanceX * 0.1 + "px";
  shadowCursor.style.top = parseInt(currentY) + distanceY * 0.1 + "px";

  requestAnimationFrame(animateShadowfunc);
}
animateShadowfunc();
