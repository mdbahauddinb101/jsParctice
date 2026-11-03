// console.log(5 + 5);
// console.log(5 + 5);

// // alert("This is a test alert.");
// let name = prompt("What is your name?");
// console.log("Hello, " + name + "! Welcome to the program.");

// console.log(isNaN(name));
// challange-1
// let priceofItem = 150;
// let quantity = 3;
// let total = priceofItem * quantity;
// let discount = total * (10 / 100);
// let totalldiscountedPrice = total - discount;

// console.log("totalldiscountedPrice =", totalldiscountedPrice);

// challange-2

// let userName = "";
// let password = "";

// let message = (userName && password) ? "Login successful!" : "Please enter both username and password.";

// let a = 10;
// let b = 20;
// let c = 30;
// let result =
//   a > b
//     ? "a is greater than b"
//     : b > c
//       ? "b is greater than c"
//       : "c is the greatest";
// console.log(result);

// let result2 = a > b ? (a > c ? a : c) : (b > c ? b : c);
// console.log(result2);

// let products = 2;

// if (products <= 0) {
//   console.log("There are no products in the cart.");
// } else {
//   console.log("There are " + products + " products in the cart.");
// }

// let score = 78;

// if(score >= 90 && score <= 100) {
//   console.log("Grade: A");
// } else if(score >= 80 && score < 90) {
//   console.log("Grade: B");
// } else if(score >= 70 && score < 80) {
//   console.log("Grade: C");
// } else if(score >= 60 && score < 70) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// let age = 20;
// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("You are allowed to enter the club.");
//   } else {
//     console.log("You need to show your ID to enter the club.");
//   }
// } else {
//   console.log("You are not allowed to enter the club.");
// }

// let color = "red";

// switch (color) {
//   case "red":
//     console.log("The color is red.");
//     break;
//   case "green":
//     console.log("The color is green.");
//     break;
//   case "blue":
//     console.log("The color is blue.");
//     break;
//   default:
//     console.log("The color is unknown.");
// }

// challange-3

// let carValue = 50;
// let discountValue;

// if (carValue > 100) {
//   discountValue = carValue;
//   console.log("no discount");
// } else if (carValue < 100) {
//   discountValue = cartValue - carValue * (10 / 100);
//   console.log("10% discount");
// } else {
//   discountValue = cartValue - carValue * (20 / 100);
//   console.log("20% discount");
// }

// console.log("your final value =", discountValue.toFixed(2));

// challange-4

let subscriptionType = "standard";

if (subscriptionType === "premium") {
  console.log("You have a premium subscription.");
} else if (subscriptionType === "standard") {
  console.log("You have a standard subscription.");
} else {
  console.log("U have to subscribe");
}
