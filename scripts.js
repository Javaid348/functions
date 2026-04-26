// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.
function subtractNumbers(num1, num2) {
    return num1 - num2;
}

// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.
function divideNumbers(num1, num2) {
    if (num2 === 0) return "Cannot divide by zero";
    return num1 / num2;
}

// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.
function getRemainder(num1, num2) {
    return num1 % num2;
}

// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".
function isPositive(num) {
    return num > 0 ? "Positive" : "Not Positive";
}

// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".
function isNegative(num) {
    return num < 0 ? "Negative" : "Not Negative";
}

// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".
function checkEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".
function isEqual(num1, num2) {
    return num1 === num2 ? "Equal" : "Not Equal";
}

// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return "Greater";
    } else if (num1 < num2) {
        return "Smaller";
    } else {
        return "Equal";
    }
}

// 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40
function getGrade(score) {
    return score >= 40 ? "Pass" : "Fail";
}

// 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".
function isTeenager(age) {
    return (age >= 13 && age <= 19) ? "Teenager" : "Not a Teenager";
}

// 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".
function greetUser(name) {
    return `Hello, ${name}!`;
}

// 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".
function isEligibleToVote(age) {
    return age >= 18 ? "Eligible" : "Not Eligible";
}

// 16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).
function findAbsoluteValue(num) {
    if (num < 0) {
        return -num;
    } else {
        return num;
    }
}

// 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise
function checkTemperature(temp) {
    if (temp > 30) {
        return "Hot";
    } else if (temp < 10) {
        return "Cold";
    } else {
        return "Normal";
    }
}

// 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different
function getTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// 19. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.
function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

// 20. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".
function isPasswordValid(password) {
    return password.length >= 8 ? "Valid Password" : "Too Short";
}

// Testing functionality (Optional: can be called from console or UI)
function runAllTests() {
    console.log("--- Running Tests ---");
    console.log("1. Add 5 + 3:", addTwoNumbers(5, 3));
    console.log("2. Subtract 10 - 4:", subtractNumbers(10, 4));
    console.log("10. Compare 20, 10:", compareNumbers(20, 10));
    console.log("17. Temp 35:", checkTemperature(35));
    console.log("20. Password '123':", isPasswordValid("123"));
}
