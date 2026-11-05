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

// let subscriptionType = "standard";

// if (subscriptionType === "premium") {
//   console.log("You have a premium subscription.");
// } else if (subscriptionType === "standard") {
//   console.log("You have a standard subscription.");
// } else {
//   console.log("U have to subscribe");
// }

// challange-5

// let color = "white";

// let themecolor = prompt("Enter a theme color (light, dark, pink):");

// if (themecolor === "light") {
//   color = "white";
// } else if (themecolor === "dark") {
//   color = "black";
// } else if (themecolor === "pink") {
//   color = "pink";
// } else {
//   console.log("No color found");
// }

// if (themecolor !== "light" && themecolor !== "dark" && themecolor !== "pink") {
//   console.log("No color found");
// } else {
//   console.log(
//     `Your selected theme color is: ${themecolor}, and the corresponding color is: ${color}`,
//   );
// }

// challange-6

// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));
// let num3 = Number(prompt("Enter the third number:"));

// if (num1 < num2 && num1 < num3) {
//   console.log(`The smallest number is: ${num1}`);
// } else if (num2 < num1 && num2 < num3) {
//   console.log(`The smallest number is: ${num2}`);
// } else {
//   console.log(`The smallest number is: ${num3}`);
// }

// challange-5

// let userRole = "admin";

// switch (userRole) {
//   case "admin":
//     console.log("You have full access to the system.");
//     break;
//   case "editor":
//     console.log("You have editor access to the system.");
//     break;
//   case "viewer":
//     console.log("You have viewer access to the system.");
//     break;
//   default:
//     console.log("You have no access to the system.");
// }

// challange-6

// let num = 23;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("fizz");
// } else if (num % 5 === 0) {
//   console.log("buzz");
// } else if (num % 3 === 0) {
//   console.log("fizzbuzz");
// } else {
//   console.log("neither divisible by 3 or 5");
// }

// challange-7

// let num1 = 23;
// let num2 = 45;
// let operator = "+";

// switch (operator) {
//   case "+":
//     console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//     break;
// }

// challange-8

// let totalBalance = 1000;
// let userChoice = Number(
//   prompt(
//     "Enter your choice [1. Check Balance, 2. Deposit, 3. Withdraw 4. Exit]:",
//   ),
// );

// if (userChoice === 1) {
//   console.log(`Your current balance is: $${totalBalance}`);
// } else if (userChoice === 2) {
//   let depositAmount = Number(prompt("Enter the amount to deposit:"));
//   if (depositAmount > 0) {
//     totalBalance += depositAmount;
//     console.log(`Deposit successful! Your new balance is: $${totalBalance}`);
//   } else {
//     console.log("Invalid deposit amount. Please enter a positive number.");
//   }
// } else if (userChoice === 3) {
//   let withdrawAmount = Number(prompt("Enter the amount to withdraw:"));
//   if (withdrawAmount > 0 && withdrawAmount <= totalBalance) {
//     totalBalance -= withdrawAmount;
//     console.log(`Withdrawal successful! Your new balance is: $${totalBalance}`);
//   } else {
//     console.log(
//       "Invalid withdrawal amount. Please enter a positive number less than or equal to your balance.",
//     );
//   }
// } else if (userChoice === 4) {
//   console.log("Thank you for using our banking system. Goodbye!");
// }

// loops

// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration number: " + i);
// }

// let i=1;
// while (i <= 5) {
//   console.log("Iteration number: " + i);
//   i++;
// }

// let i = 1;
// do {
//   console.log("Iteration number: " + i);
//   i++;
// } while (i <= 5);

// this is for of loop
// let str = "Hello, World!";
// for (let item of str) {
//   console.log(item);
// }

// ata avabe o kora jay
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// challange-9

// print all even numbers from 1 to 100 using a for loop.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// calculate how many vowels and consonants are in a given string using for of loop

// let string = "Hello World";

// let vowelCount = 0;
// let consonantCount = 0;

// for (let item of string) {
//   if (
//     item === "a" ||
//     item === "e" ||
//     item === "i" ||
//     item === "o" ||
//     item === "u" ||
//     item === "A" ||
//     item === "E" ||
//     item === "I" ||
//     item === "O" ||
//     item === "U"
//   ) {
//     vowelCount++;
//   } else if (item === " ") {
//     console.log("space found");
//   } else {
//     consonantCount++;
//   }
// }
// console.log(`Vowels: ${vowelCount}`);
// console.log(`Consonants: ${consonantCount}`);

// challange -10

// calculate sum of first "n" numbers
// const n = prompt("Enter a number:");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
//   console.log("sum =", sum);
// }

//
// challange-11

// calculate the sum of numbers m to n
// let m = Number(prompt("Enter the starting number (m):"));
// let n = Number(prompt("Enter the ending number (n):"));

// let sum = 0;
// for (let i = m; i <= n; i++) {
//   sum += i;
//   console.log("sum =", sum);
// }

// find odd and even numbers from 1 to n

// let n = Number(prompt("Enter a number:"));

// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     console.log(i + " is odd");
//   } else {
//     console.log(i + " is even");
//   }
// }

//  challange-12
// print all odd numbers 0 to n

// let n = Number(prompt("Enter a number:"));

// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// challange-13

// let computerNumber = 6;
// let guessNumber = Number(prompt("Enter a number:"));
// if(isNaN(guessNumber)){
//     console.log("Please enter a valid number");
// }else if (guessNumber === computerNumber) {
//   console.log("You won!");
// } else {
//   console.log("You lost!");
// }

// challange-14

let computerNumber = 6;
let guess = null;

guess = Number(prompt("Enter correct number:"));

while (guess !== computerNumber) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < computerNumber) {
    alert("Too low! Try again.");
  } else if (guess > computerNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the correct number.");
  }
}
