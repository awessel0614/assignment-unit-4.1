console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log(hello());



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Ashley'));




// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
let result = addNumbers(1, 2);
console.log('The sum of the two numbers is: ', result);




// 4. Function to multiply three numbers & return the result

function multiplyThree(number1, number2, number3) {
  return number1 * number2 * number3;
}
let answer = multiplyThree(5, 3, 2);
console.log('The multiplication of the three numbers equals: ', answer);




// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
let resultOne = isPositive(5);
let resultTwo = isPositive(-3);
// Write a separate console.log statement for each outcome
console.log("Is the number 5 positive?", resultOne)
console.log("Is the number -3 positive?", resultTwo)




// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {

  return (array[array.length - 1]);
}

let theArray = getLast(['kittens', 'ducks', 'dogs', 'cows']);
console.log('The last value in the array is: ', theArray);

theArray = getLast([]);
console.log("If the array is empty, this is what's returned: ", theArray);



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, array) {
  for (let numb of array) {
    if (numb === value) {
      console.log(numb);
      return true;
    }
  }
  return false;
}
let theOtherArray = find(8, [1, 3, 9, 10, 8, 22, 42]);
console.log('Was the value found?', theOtherArray);




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  }
  return false;
}
let theAnswer = isFirstLetter('b', 'ashley')
console.log('Is the first letter "B"?', theAnswer)




// 9. Function to return the sum of all numbers in an array

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let i = 0; i<array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
return sum;
}
let sum = sumAll([1,2,3,4,10]);
console.log(sum);




// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let newArray = [];
  for(let numb of array) {
    if(numb > 0) {
      newArray.push(numb); 
    } 
  }
  return newArray;
}

console.log('Returning all positive numbers: ', allPositive([-1,-2,3,-4,-5,6,-7,-8,-9,10]));
console.log('Returning all positive numbers: ', allPositive([-5,-6,-9]));




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr) {
  let invertedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      invertedArray.push(arr[i] * -1);
    } else if (arr[i] < 0) {
      invertedArray.push((arr[i] * arr[i]) / (arr[i] * -1));
    } else {
      invertedArray.push(0);
    }
  }
  return invertedArray;
  
}
console.log("Here's the inverted array: ", invertArray([6, -4, 8, -10, -3, 0]));



















// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
