// let grandParent = document.querySelector(".grand-parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");

// child.addEventListener(
//   "click",
//   function (e) {
//     alert("child");
//     // console.log(e.target);
//     console.log(e.currentTarget);
//   },
//   true,
// );

// parent.addEventListener(
//   "click",
//   function (e) {
//     alert("parent");
//     // console.log(e.target);
//     console.log(e.currentTarget);
//     e.stopImmediatePropagation();
//   },
//   true,
// );

// parent.addEventListener(
//   "click",
//   function (e) {
//     alert("parent");
//     // console.log(e.target);
//     console.log(e.currentTarget);
//   },
//   true,
// );

// grandParent.addEventListener(
//   "click",
//   function (e) {
//     alert("grand-parent");
//     // console.log(e.target);
//     console.log(e.currentTarget);
//   },
//   true,
// );
// this is capturing phase:

// child.addEventListener(
//   "click",
//   () => {
//     alert("child");
//     console.log(this);
//   },
//   true,
// );

// let container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   let elem = e.target;
//   if (elem.className === "box") {
//     console.log(elem.textContent);
//   }
// });
