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

// let computerNumber = 6;
// let guess = null;

// guess = Number(prompt("Enter correct number:"));

// while (guess !== computerNumber) {
//   if (isNaN(guess)) {
//     alert("Please enter a valid number");
//   } else if (guess < computerNumber) {
//     alert("Too low! Try again.");
//   } else if (guess > computerNumber) {
//     alert("Too high! Try again.");
//   } else {
//     alert("Congratulations! You guessed the correct number.");
//   }
// }

// challange-15

// let password = "alpha";
// let nofAttempts = 0;
// let usePassword = null;

// while (usePassword !== password && nofAttempts < 3) {
//   usePassword = prompt("Enter the password:");
//   nofAttempts++;

//   if (usePassword === password) {
//     console.log("Access granted!");
//   } else if (nofAttempts >= 3) {
//     alert("attempt is over");
//   } else {
//     console.log("Access denied!");
//   }
// }

// challange -16

// find the factorial of n
// let n = Number(prompt("Enter a number:"));
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial *= i;
// }
// console.log(`Factorial of ${n} is ${factorial}`);

// challange-17

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += j;
//   }
//   console.log(str);
// }

// challange-18
// game

// let playagain = "yes";

// while (playagain === "yes") {
//   alert("you wake up in the dark forest!");
//   let userChoice = prompt(
//     "Do you want to go left or right? (Type 'left' or 'right')",
//   );

//   if (userChoice === "left") {
//     alert("You see something shiny in the mud.");
//     userChoice = prompt("Do you pick it up? (Type 'yes' or 'no')");
//     if (userChoice === "yes") {
//       alert("You win!");
//     } else {
//       alert("You lose!");
//     }
//   } else if (userChoice === "right") {
//     alert("do you enter the cave? (Type 'yes' or 'no')");
//     userChoice = prompt("Do you enter the cave? (Type 'yes' or 'no')");
//     if (userChoice === "yes") {
//       alert("You win!");
//     } else {
//       alert("You lose!");
//     }
//   }

//   userChoice = prompt("Do you want to play again? (Type 'yes' or 'no')");

//   if (userChoice === "no") {
//     playagain = "no";
//     alert("Thanks for playing!");
//   }
// }

// function calculateSum(m, n) {
//   let sum = 0;
//   for (let i = m; i <= n; i++) {
//     sum += i;
//     console.log("sum =", sum);
//   }
// }

// calculateSum(1, 10);

// setTimeout(() => {
//   console.log("This message is displayed after 2 seconds.");
// }, 2000);

// let alpha = () => {
//   console.log("This is an arrow function.");
// };

// setTimeout(alpha, 3000);

// challange-19

// write a regular fuc-nction that takes a string and returns it with the first letter capitalized

// function capitalizeFirstLetter(str) {
//   console.log(str.charAt(0).toUpperCase() + str.slice(1));
// }

// capitalizeFirstLetter("hello"); // Output: "Hello"

//challange-20

// show an alert message that says "Please Login" after % seconds of ur website

// setTimeout(() => {
//   alert("Please Login");
// }, 5000);

// challange-21

// Make an arrow function that takes a price and a discount, and returns the price after discount.

// let calculateDiscount = (price, discount) => {
//   let discountedPrice = price - price * (discount / 100);
//   return discountedPrice;
// };

// let result = calculateDiscount(100, 10);
// console.log(result);

// challange-22
// Create a function that builds a username from a full name

// function generateUserName (firstName, lastName) {
//   let userName = firstName + lastName;
//   return userName;
// }

// let result = generateUserName("John", "Doe");
// console.log(result);

// challange-23

// write a function that takes a traffic light color and gives the correct instructions

// function trafficInstructions(color) {
//   if (color === "red") {
//     return "Stop!";
//   } else if (color === "yellow") {
//     return "Slow down!";
//   } else if (color === "green") {
//     return "Go!";
//   }
// }

// let result = trafficInstructions("red");
// console.log(result);

// strings.................................................................................

// challange-24

// Create  aprogram to take full name from user and generate a username start with @, followed their full name and ends with underscore followed by the length of full name.
// let fullName = prompt("Enter your full name:");
// let userName = `@${fullName.trim().replaceAll(" ", "")}_${fullName.length}`;
// let userName2 = `@${fullName}_${fullName.length}`;
// console.log(userName);

//challlange-25
//  Take a string and a character from the user and:

// a)Count how many times that  character appears in the string.
// b) case-insensetive version
// c)fIND ALL occurance position

// let str = prompt("Enter your string:");
// let ch = prompt("Enter your character:");

// let count = 0;
// for (let val of str) {
//   if (val.toLowerCase() === ch.toLowerCase) {
//     count++;
//   }
// }
// for (let index in str) {
//   if (str[index].toLowerCase() === ch.toLowerCase()) {
//     console.log(index);
//     count++;
//   }
// }

// console.log(count);

// challange -26
// Count the words present in a given string

// let str = "Hello i am a boy";
// let words = str.split(" ");
// let count = words.length;
// console.log(count);
// Array.isArray..............................................
// let arr = [2, 4, 5, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let arr = [2, 4, 5, 8, 9];

// for (let index in arr) {
//   console.log(arr[index]);
// }

// challange-27

// For an array with marks of students fund the average marks of the entire class.

// let arr = [5, 10, 15];

// let sum = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// let average = sum / arr.length;
// console.log(average);

//  challange-28

// Create an array with the given length(n) and fill with 0;

// let arr = new Array(10).fill(0);
// console.log(arr);

// challange-29

// Create an array with the given length (n) and store natural numbers from 1 to n.

// let n = 25;

// let arr = new  Array(25).fill(0);
// arr.forEach((item, index) => {
//     arr[index] = index + 1;
// })

// challange-30

// Consider an array of mcu heroes [ironman,captain,black widow,wanda, hulk,black panther]
// a) Add spiderman at the end and thor at the start.
// b) Remove black widow and add hawkeye in its place.
// c) Check whether captain is present in the array.

// let arr = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];
// arr.push("spiderman");
// arr.unshift("thor");
// arr.splice(arr.indexOf("black widow"), 1, "hawkeye");
// console.log(arr.includes("captain"));

// challange-31

// How to check if given thing is array or not?How to convert other datatypes to array? what if we try to convert object into array?

// let test = 2;
// Array.isArray(test);
// console.log(Array.isArray(test));
// let test2 = "makl";
// Array.isArray(test2);
// console.log(Array.from(test2));

// challange-32
// we have three variables a,b,c.a contains any Number,b contains any string,c contains any Object,and d contains an array.Can we create an array from all these four variables? if yes how?
// let a = 1;
// let b = "dfdsfdf";
// let c = {
//   name: "manas",
// };
// let d = [1, 2, 3];
// console.log(d);
// console.log(Array.of(a, b, c, d));

// challange-33

// Check whether given string is palindrome or not.
// let str = "madam";
// let str2 = Array.from(str).reverse().join("");
// let arr = [1, 2, 3];
// let result = arr.reverse();
// console.log(result);
// let str3 = "hello";
// let revstr = str.split("").reverse().join("");

// if (str === revstr) {
//     console.log("palindrome string");
// } else {
//     console.log("not a palindrome string");
// }

// challange-34

// Capitalize the first letter of every word in sentence

// let str = "hello world";
// let arr = str.split(" ");
// let result = arr.map((item) => {
//     return item.charAt(0).toUpperCase() + item.slice(1);
// });
// console.log(result.join(" "));

// Dom Manipulation...........................................

// let div = document.createElement("div");
// let elem = document.createElement("p");
// elem.innerText = "nEW pARAGRAPH";
// // div.append(elem);
// // document.body.prepend(div);

// document.body.after(div);

// div.prepend(elem);
// div.after(elem);

// div.insertAdjacentElement("afterend", elem);

// let h1 = div.children[0];
// h1.remove();

//  challange-36

//Create a paragraph with text "This is a new paragraph" and add background to black font color using javascript.

// let p = document.createElement("p");
// p.innerText = "This is a new paragraph";
// p.style.backgroundColor = "red";
// p.style.color = "white";
// document.body.append(p);

// p.setAttribute("style", "background-color: red; color: white;");

//challange-37

//Insert a button with text "click me" as the first element inside paragraph created in challange-36

// let p = document.createElement("p");
// p.innerText = "This is a new paragraph";
// p.style.backgroundColor = "red";
// p.style.color = "white";
// document.body.append(p);

// let button = document.createElement("button");
// button.innerText = "click me";
// p.prepend(button);

//challange-38
//Create a <div> tag in html and give it a class and some styling .Now create a new class in css and try to append this class to the <div> element.

// let div = document.createElement("div");
// div.setAttribute("class", "new");

// document.body.append(div);

// Object.assign(div.style, {
//   backgroundColor: "red",
//   width: "100px",
//   height: "100px",
// });

//challange 39

//Create a function that takes node and newTagName and replace the node from the new node with changing tag name in the dom.

function changeTageName(oldNode, newTagName) {
  if (oldNode instanceof Element) {
    let p = document.createElement(newTagName);
    p.innerHTML = oldNode.innerHTML;
    for (let attr of oldNode.attributes) {
      p.setAttribute(attr.name, attr.value);
    }
    oldNode.replaceWith(p);
  } else {
    console.error("invalid node");
  }
}

let div = document.querySelector(".box");
changeTageName(div, "h1");
