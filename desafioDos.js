function helloWorld(userName) {
    let userName = prompt("Ingresa tu nombre");
    console.log(`Hello ${userName}`);
}

function doubleNumber() {
    let userNumber = parseInt(prompt("Enter a number please"));
    alert("This is the double of your number: " + (userNumber * 2));
}

function average() {
    let averageNumber1 = parseInt(prompt("Enter the number please"));
    let averageNumber2 = parseInt(prompt("Enter the number please"));
    let averageNumber3 = parseInt(prompt("Enter the number please"));
    alert("This is your numbers average: " + (averageNumber1 + averageNumber2 + averageNumber3) / 3);
}

function compareNumbers() {
    let userNumberOne = parseInt(prompt("Enter a number please"));
    let userNumberTwo = parseInt(prompt("Enter a number please"));
    if (userNumberOne > userNumberTwo) {
        alert("The major number is the first: " + userNumberOne);
    }
    else {
        alert("The major number is the second: " + userNumberTwo);
    }
}

function multiplyNumber() {
    let userMultiplyNumber = parseInt(prompt("Enter a number please"));
    alert("The product of your number is: " + userMultiplyNumber * userMultiplyNumber);
}