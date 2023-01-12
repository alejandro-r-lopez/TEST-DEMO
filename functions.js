export function myFunction() {
    return true;
}
// This function should take a string and add return an new string that adds three exclamation points to the argument.

export function addExclamationPoints(someString) {
    return someString + '!!!';
}

// This function should take in a number and multiply it by seven

export function multiplyBySeven(num) {
    return num * 7;
}

// This function should take in a number and multiply it by twelve then cut the result in half

export function multiplyBy12ThenHalve(num) {
    return (num * 12) / 2;
}

// This function should take in three numbers, divide the first by the second, then multiply the result by the third

export function divideThenMultiply(firstNumber, secondNumber, thirdNumber) {
    return (firstNumber / secondNumber) * thirdNumber;
}

// This function should take in three numbers and return those numbers in an array

export function returnAsAnArray(firstNumber, secondNumber, thirdNumber) {
    const array = [firstNumber, secondNumber, thirdNumber];
    return array;
}
// This function should take in three numbers and return those numbers mushed together as a string

export function returnAsAString(firstNumber, secondNumber, thirdNumber) {
    return `${firstNumber}${secondNumber}${thirdNumber}`;
}

// This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number

export function makeLuckyGreeting(firstNumber, secondNumber) {
    return `Hello! Your lucky number for the day is ${firstNumber + secondNumber}`;
}

// This function should take an array and return the second item in the array

export function getSecondItem(array) {
    return array[1];
}

// This function should take an array and return the LAST item in the array, no matter the array's length

export function getLastItem(array) {
    return array[array.length - 1];
}

// This function should take a dog object and return an <li> with the name of the dog

export function renderDogLI(dog) {
    return `<li>${dog.name}</li>`;
}

// This function should take a dog object and return a div with the dog's information

export function renderDogDiv(dog) {
    return `<div><h1>${dog.name}</h1><p>${dog.name} is ${dog.age} years old</p></div>`;
}
