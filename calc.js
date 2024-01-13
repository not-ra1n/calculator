const add = function(num1, num2) {
    return num1 + num2;
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

let num2

let operator;

const operate = function(num1, operator, num2) {

    if (operator == "+") return add(num1, num2);
    if (operator == "-") return subtract(num1, num2);
    if (operator == "*") return multiply(num1, num2);
    if (operator == "/") return divide(num1, num2)
    
}

const input = document.querySelector('#input')

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        input.textContent = button.textContent;
        let valueOne = input.textContent
        if (button.textContent == "+" || button.textContent == "-"
        || button.textContent == "*"|| button.textContent == "/") {
            
        }
    });
});


