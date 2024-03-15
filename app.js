let secretNumber = 0;
let tries = 1;
let sortedNumbersList = [];
let MaximumNumber = 10;

function asignarTextElement(element, text) {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}

function verifyAttemp() {
    let userNumber = parseInt(document.getElementById('userValue').value);
   
   if (userNumber === secretNumber) {
    asignarTextElement('p',`You hit the number in ${tries} ${(tries === 1) ? 'try' : 'tries'}`);
    document.getElementById("reiniciar").removeAttribute('disabled');
   } else {
    //Usuario no acierta
    if (userNumber > secretNumber) {
        asignarTextElement('p','The secret number is minor.');
    } else {
        asignarTextElement('p','The secret number is major.');
    }
    tries++;
    cleanBox();
   }
    return;
}

function cleanBox() {
    document.querySelector('#userValue').value = "";
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*MaximumNumber)+1;

    console.log(generatedNumber);
    console.log(sortedNumbersList);
    //If generate number is in the list

    if (sortedNumbersList.length == MaximumNumber) {
        asignarTextElement('p','All possible numbers was sorted.')
    } else {
        if (sortedNumbersList.includes(generatedNumber)) {
        return generateSecretNumber();
        } else {
        sortedNumbersList.push(generatedNumber);
        return generatedNumber;
        }
    }
}


function initialConditions(params) {
    asignarTextElement('h1', 'Secret number game three');
    asignarTextElement('p',`Indicates a number from 1 to ${MaximumNumber}`)
    secretNumber = generateSecretNumber();
}

function restartGame(params) {
    //Clean the box
    cleanBox();
    //Indicates the message of intervale of numbers
    //Generate the random number
    //Initialize the number of tries
    initialConditions();
    //Deshabilitate button of new game
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

initialConditions();

console.log(secretNumber);