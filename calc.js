const add = function(num1, num2) {
    return (Number(num1) + Number(num2));
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1*num2;
}

const divide = function(num1, num2) {
    return num1/num2;
}

let num1;

let num2;

let operator;

let result;

const operate = function(num1, operator, num2) {

    if (operator == "+") return add(num1, num2);
    if (operator == "-") return subtract(num1, num2);
    if (operator == "*") return multiply(num1, num2);
    if (operator == "/") return divide(num1, num2)
    
}

const input = document.querySelector('#input');

const buttons = document.querySelectorAll('button');

let valuesOne = [];

let valuesTwo = [];


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        
            valuesOne.push(button.textContent);
            console.log(valuesOne);
            input.textContent = valuesOne;
        

        if (button.textContent == "+") {
            operator = "+";
            console.log(operator);
            input.textContent = "+";
        }

        if (button.textContent == "-") {
            operator = "-";
            console.log(operator);
            input.textContent = "-";
        }

        if (button.textContent == "*") {
            operator = "*";
            console.log(operator);
            input.textContent = "*";
        }

        if (button.textContent == "/") {
            operator = "/";
            console.log(operator);
            input.textContent = "/";
        }
    });
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    valuesOne = [];
    result = undefined;
    input.textContent = valuesOne;
    console.log(valuesOne);
});

const equal = document.querySelector('#equal');

function isNumber(value) {
    return typeof value === 'string';
}

equal.addEventListener('click', () => {
    console.log(valuesOne);
    indexOfOperator = valuesOne.lastIndexOf(operator)
    console.log(valuesOne.indexOf(0));
    if (result != undefined) {
        num1 = result;
    } else {
        num1 = valuesOne.slice(0, indexOfOperator)
        num1 = num1.join("");
        Number(num1);
    }
    // num1 = num1.map(function(str) {
    //     return parseInt(str);
    // });
    console.log(isNumber(num1));
    console.log(num1)
    indexOfEquals = valuesOne.indexOf('=')
    nextIndex = indexOfOperator + 1
    num2 = valuesOne.slice(nextIndex, indexOfEquals)
    // num2 = num2.map(function(str) {
    //     return parseInt(str);
    // });
    num2 = num2.join("");
    Number(num2);
    console.log(isNumber(num2))
    console.log(num2);
    console.log(operator);
    console.log(operate);
    result = operate(num1, operator, num2)
    console.log(result);
    input.textContent = result;
});  


const addition = document.querySelector('#addition');

addition.addEventListener('click', () => {
    console.log(operator);
    if (operator != undefined) {
        if (operator == "+") sign = "+";
        if (operator == "-") sign = "-";
        if (operator == "*") sign = "*";
        if (operator == "/") sign = "/";
        
        indexOfOperator = valuesOne.indexOf(sign);

        if (result != undefined) {
            num1 = result;
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            console.log(num1);
            num1 = num1.join("");
            Number(num1);
        }
        nextIndex = indexOfOperator + 1;
        num2 = valuesOne.slice(nextIndex, -1)
        num2 = num2.join("");
        Number(num2);
        console.log(num2);
        result = operate(num1, sign, num2)
        console.log(result);
        input.textContent = result;
    }
});