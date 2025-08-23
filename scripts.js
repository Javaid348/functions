// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.

// function addTwoNumbers (num1 ,num2){
//        let add1 = Number(prompt("Enter first number"));
//        let add2 = Number(prompt("Enter second number"));

//         return add1 + add2
// }
// let result = addTwoNumbers ();
// console.log(result);

// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

// function subtractNumbers(num1 , num2){
//        let sub1 = Number(prompt("Enter first number"));
//        let sub2 = Number(prompt("Enter second number"));

//         return sub1 - sub2
// }
// let result = subtractNumbers ();
// console.log(result);

// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

// function multiply() {
//     let multi1 = Number(prompt("Enter first number:"));
//     let multi2 = Number(prompt("Enter second number:"));
//     return multi1 * multi2;
// }

// let result = multiply();
// alert("The Result is " + result);


// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

// function divide() {

//     let div1 = Number(prompt("Enter the first number :"));
//     let div2 = Number(prompt("Enter the second number :"));

//     return div1/div2;
// }

// let result = divide();
// alert("The result is " + result);

// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.

// function remainder() {

//     let remain1 = Number(prompt("Enter the first number."));
//     let remain2 = Number(prompt("Enter the second number."));

//         return remain1 % remain2;
// }

// let result = remainder();

// alert("The result is " + result);

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".

// function isPositive() {
//     let num = Number(prompt("Enter the number:"));

//     if (num > 0) {
//         return "Positive";
//     } else {
//         return "Not Positive";
//     }
// }

// let result = isPositive();
// alert("The result is " + result);


// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".
// function isNegative() {
//     let num = Number(prompt("Enter the number"));

//     if (num < 0) {
//         return " Negative";
//     } else {
//         return " Not Negative";
//     }
// }
// let result = isNegative();
// alert("The number is " + result);

// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".
// function checkEven() {
//     let num = Number(prompt("Enter the number"));

//     if (num %2 === 0) {
//         return "Even";
//     } else {
//         return "Odd"
//     }
// }
// let result = checkEven();
// alert("The number is " + result);

// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

// function isEqual() {
//     let num1 = Number(prompt("Enter the first number"));
//     let num2 = Number(prompt("Enter the second number"));

//     if (num1 === num2) {
//         return "Equal";
//     } else {
//         return "Not Equal";
//     }
// }

// let result = isEqual();
// alert("The numbers are " + result);

// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".

// function compareNumbers() {

//     let num1 = Number(prompt("Enter the first number"));
//     let num2 = Number(prompt("Enter the second number"));

//     if (num1 < num2) {
//         return "Greater";
//     } else {
//         return "Smaller";
//     }
// }
//  let result = compareNumbers();
//  alert("The result is " + result);

//  11. getFullName
// Write a function that takes a first name and last name, and returns the full name.

// function getFullName() {
//     let firstName = prompt("Enter your first name.");
//     let lastName = prompt("Enter your last name.");
//     return firstName + " " + lastName;
// }

// let result = getFullName();

// alert(" My full name is " + result);

// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40

// function getGrade() {

//     let score = Number(prompt("Enter your score(0-100) :"));

//     if (score  >= 40 ){
//         return "Pass";
//     } else {
//         return " Fail";
//     }
// }
// let result = getGrade();
// alert("The result is: " + result);

// 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

// function isTeenager() {
//     let age = Number(prompt("Enter your age : "));

//     if (age >=13 && age <= 19) {
//         return "Teenager";
//     } else {
//         return "Not Teenager";
//     }
// }
//  let result = isTeenager();

//  alert("The person is a " + result);

// 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

// function greetUser() {

//     let name = prompt("Enter your name : ");

//     return "Hello, " + name + "!";
// }

// let result = greetUser();
// alert(result);

// 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".

// function isEligibleToVote() {
//      let age = Number(prompt("Enter age if you are eligible for vote."));

//      if (age >= 18) {
//         return "Eligible";
//      } else {
//         return "Not Eligible";
//      }
// }

// let result = isEligibleToVote();
// alert("Your age is " + result + " for vote.");

// 16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

// function findAbsoluteValue() {

//     let num = Number(prompt("Enter the absolute value of a number."));

//     if (num < 0) {
//         return -num; 
//     } else {
//         return num;  
//     }
// }

// let result = findAbsoluteValue();
// alert("The absolute value is " + result);

// 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise

// function checkTemperature(){
//      let temperature = Number(prompt("Enter the temperature"));

//      if (temperature > 30) {
//         return "Hot";
//      } else if (temperature < 10){
//         return " Colde";
//      } else {
//         return "Normal";
//      }
// }
// let result = checkTemperature();

// alert("The temperature is " + result + " !");

// 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different
// function getTriangleType() {
//     let side1 = Number(prompt("Enter first side:"));
//     let side2 = Number(prompt("Enter second side:"));
//     let side3 = Number(prompt("Enter third side:"));

//     if (side1 === side2 && side2 === side3) {
//         return "Equilateral";
//     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//         return "Isosceles";
//     } else {
//         return "Scalene";
//     }
// }

// let result = getTriangleType();
// alert("The triangle is " + result);


// 19. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.

// function calculateDiscountedPrice() {

//     let price = Number(prompt("Enter the original price"));
//     let discount = Number(prompt("Enter the discount percentage"));

//     let discountedPrice = price - (price * discount / 100);
//     return  discountedPrice;

// }
// let result = calculateDiscountedPrice();

// alert("The discounted price  is " + result);

// 20. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".

function isPasswordValid() {
    let password = (prompt("Enter your password"));

    if (password.length >= 8) {
        return "Valid Password";
    } else {
        return " Too Short";
    }
}
let result = isPasswordValid();

alert("Your password is " + result);