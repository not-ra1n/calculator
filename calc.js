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

input.textContent = 0;

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        
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

            valuesOne.push(button.textContent);
            console.log(valuesOne);
            if (valuesOne.indexOf("=") == 0) {
                input.textContent = 0;
            } else {
                input.textContent = valuesOne.join("");
            }


            // to not overflow numbers?
            if (result === undefined) {
                if (valuesOne[valuesOne.length - 1] != operator) {
                    if (valuesOne.length > 8) {
                        valuesOne.pop();
                    }
                }
            } else {
                let resultArray = String(result).split("").map((result) => {
                    return result;
                })
                if (resultArray.length > 8) {
                    while (resultArray.length > 8) {
                        resultArray.pop();
                    }
                    result = resultArray
                }
            }
            
            // to check if num2 is greater than 8 characters

            if (operator !== undefined) {
                lastOperator = valuesOne[valuesOne.length -1];
                if (operator !== lastOperator || "=" !== lastOperator) {
                    console.log(operator)
                    console.log(lastOperator)
                    const chicken = valuesOne.reduce((a, e, i) => {
                            if (e === "+" || e === "-"
                            || e === "*" || e === "/")
                            a.push(i);
                            return a;
                        }, []);
                    console.log(chicken);
                    console.log(chicken.length);


                    // added the watch thing to watch the length of chicken?
                    newChickenLength = chicken.length
                    value = newChickenLength
                    console.log(value);
                    oldChickenLength = newChickenLength
                    if (newChickenLength != oldChickenLength) {
                        alert ("hello");
                    }


                





                    endOfChicken = chicken[chicken.length - 1];
                    console.log(endOfChicken);

                    valuesOneLastIndex = valuesOne[endOfChicken];

                    console.log(valuesOneLastIndex)
                    console.log(valuesOne.length); 


                    lengthOfNum2 = valuesOne.length - endOfChicken - 1
                    console.log(lengthOfNum2);
                    if (valuesOne[valuesOne.length -1] !== "=") {

                    if (lengthOfNum2 > 8) {
                        valuesOne.splice(-1, 1);
                            console.log(valuesOne)
                            // lengthOfNum2 = lengthOfNum2 - 1
                        }
                    }
                    // function check2(oldValue) {
                    //     undefined === oldValue && (oldValue = endOfChicken);
                    //     clearCheck = setInterval(repeatCheck,500,oldValue);
                    //     secondLastElementChicken = chicken[chicken.length - 2];
                    //     lastElementChicken = chicken[chicken.length - 1];
                    //     function repeatCheck(oldValue) {
                    //         if (endOfChicken === oldValue) {
                    //             // do something
                    //             if (lengthOfNum2 > 8) {
                    //                 clearInterval(clearCheck);
                    //                     valuesOne.pop
                    //                     console.log(valuesOne)
                    //                 }
                    //             }
                    //         }
                    //     }

                    // check2();



                    
                    if (chicken.length < 2) {
                        secondToLastOperator = chicken[0];
                        lastOperatorIndex = chicken[1];
                    } else {
                    secondToLastOperator = chicken[chicken.length - 2]
            
                    lastOperatorIndex = chicken[chicken.length -1]
                    }
            
                    updatedSecond = secondToLastOperator + 1
                    num2 = valuesOne.slice(updatedSecond, lastOperatorIndex);
                    
                    if (num2.toString().length > 8) {
                        num2 = Array.from(num2);
                        num2.pop
                        num2 = num2.toString();
                    }
                }
            }

        // shows you only the numbers you've inputed / the #'s you get
            if (operator != undefined) {
                lastElement = valuesOne[valuesOne.length -1];
                secondLastElement = valuesOne[valuesOne.length -2];
                if (secondLastElement === "=" && lastElement !== operator && lastElement !== "=") {
                    console.log(result);
                    valuesOne.pop()
                    console.log(result);
                    input.textContent = result;
                } else if (operator == valuesOne[valuesOne.length-1]) {
                    input.textContent = result;
                } else {
                    locationOfOperator = valuesOne.lastIndexOf(operator)
                locationOfOperatorOne = locationOfOperator + 1
                input.textContent = valuesOne.slice(locationOfOperatorOne).join("")
                
                console.log(input.textContent);
                }
            }
     
            // else {
            //     input.textContent = valuesOne.join("");
            // }

        

        
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        valuesTwo.push(button.textContent);
        console.log(valuesTwo);

        // to not overflow numbers?
        if (result === undefined) {
            if (valuesTwo[valuesTwo.length - 1] != operator) {
                if (valuesTwo.length > 8) {
                    valuesTwo.pop();
                }
            }
        } else {
            let resultArray = String(result).split("").map((result) => {
                return result;
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                result = resultArray
            }
        }
        
        // to check if num2 is longer than 8 characters 

        if (operator !== undefined) {
            lastOperatorTwo = valuesTwo[valuesTwo.length -1];
            if (operator !== lastOperatorTwo || "=" !== lastOperatorTwo) {
        
                const chicken2 = valuesTwo.reduce((a, e, i) => {
                        if (e === "+" || e === "-"
                        || e === "*" || e === "/")
                        a.push(i);
                        return a;
                    }, []);
                console.log(chicken2);
        
                if (chicken2.length < 2) {
                    secondLastOperator2 = chicken2[0];
                    lastOperatorIndex2 = chicken2[1];
                } else {
                secondLastOperator2 = chicken2[chicken2.length - 2]
        
                lastOperatorIndex2 = chicken2[chicken2.length -1]
                }
        
                updatedSecond2 = secondLastOperator2 + 1
                num2 = valuesTwo.slice(updatedSecond2, lastOperatorIndex2);
                
                if (num2.toString().length > 8) {
                    num2 = Array.from(num2);
                    num2.pop
                    num2 = num2.toString();
                }
                endOfChicken2 = chicken2[chicken2.length - 1];
                    console.log(endOfChicken2);

                    valuesTwoLastIndex = valuesTwo[endOfChicken2];

                    console.log(valuesTwoLastIndex)
                    console.log(valuesTwo.length); 


                    lengthOfNum2Two = valuesTwo.length - endOfChicken2 - 1
                    console.log(lengthOfNum2Two);
                    if (valuesTwo[valuesTwo.length -1] !== "=") {
                        if (lengthOfNum2Two > 8) {
                            valuesTwo.splice(-1, 1)
                                console.log(valuesTwo)
                                // lengthOfNum2Two = lengthOfNum2Two - 1
                            }
                    }
                    
            }
        }

        





        if (valuesTwo.indexOf("=") == 0) {
            input.textContent = 0;
        } else {
            input.textContent = valuesTwo.join("");
        }        // shows you only the numbers you've inputed / the #'s you get
        if (operator != undefined) {
            lastElement = valuesTwo[valuesTwo.length -1];
            secondLastElement = valuesTwo[valuesTwo.length -2];
            if (secondLastElement === "=" && lastElement !== operator && lastElement !== "=") {
                console.log(result);
                valuesTwo.pop();
                console.log(result);
                input.textContent = result;
            } else if (operator == valuesTwo[valuesTwo.length-1]) {
                input.textContent = result;
            } else {
                console.log(result)
                locationOfOperator = valuesTwo.lastIndexOf(operator)
            locationOfOperatorOne = locationOfOperator + 1
            input.textContent = valuesTwo.slice(locationOfOperatorOne).join("");
            console.log(input.textContent);
            } 
            // else {
            //     input.textContent = valuesTwo.join("");
            // }
            }
            
    });
});



const addition = document.querySelector('#addition');

addition.addEventListener('click', () => {
    console.log(operator);
    lastElement = valuesOne[valuesOne.length -1];
    secondLastElement = valuesOne[valuesOne.length -2];
    if (lastElement === operator && secondLastElement === operator) {
        valuesOne = valuesOne.splice(secondLastElement, -1);
        valuesTwo = valuesTwo.splice(secondLastElement, -1);
        console.log(valuesOne);
        console.log(result);
        input.textContent = result;
    } else if (secondLastElement === "=" && lastElement !== operator) {
        valuesOne.pop()
        valuesTwo.pop()
    } else if (lastElement === "=" && secondLastElement === operator) {
        lastOperator = valuesOne.lastIndexOf(operator);
        valuesOne = valuesOne.splice(lastOperator, -1);
        valuesTwo = valuesTwo.splice(lastOperator, -1);
        console.log(valuesTwo);
        input.textContent = result;
    } else {
        if (operator !== undefined) {
            if (operator == "+") sign = "+";
            if (operator == "-") sign = "-";
            if (operator == "*") sign = "*";
            if (operator == "/") sign = "/";
            
        const last = valuesOne[valuesOne.length - 2];
        console.log(last);
        if (last === '=') {
            num1 = result;
            console.log(num1);
            console.log(last);
            potato = valuesOne.indexOf(last);
            let tomato = valuesOne.splice(potato, 1)
            console.log(tomato);
            potato2 = valuesTwo.indexOf(last)
            let tomato2 = valuesTwo.splice(potato2, 1)
            console.log(tomato2)
            console.log(valuesTwo);
            console.log(valuesOne);
            console.log(input.textContent)
            input.textContent = num1;
            // let keyboard = valuesTwo.indexOf('=');
            // let mouse = valuesTwo.splice(keyboard, 1)

            // valuesTwo = valuesTwo.splice(0, -1)
            let num2 = 0
    
            
            // buttons.forEach((button) => {
            //     button.addEventListener('click', () =>{
            //         valuesTwo.push(button.textContent);
            //         console.log(valuesTwo);
            //         input.textContent = valuesTwo;
            //     });
            // });

            const clear = document.querySelector('#clear');

            clear.addEventListener('click', () => {
                valuesTwo = [];
                result = undefined;  
                input.textContent = 0;
                console.log(valuesOne);
                console.log(valuesTwo);
            });

            equal.addEventListener('click', () => {
                console.log(valuesTwo);
                indexOfOperator = valuesOne.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                console.log(indexOfOperator);
                indexOfEquals = valuesTwo.indexOf('=');
                console.log(indexOfEquals);
                nextIndex = indexOfOperator + 1
                indexOfOperatorTwo = valuesTwo.lastIndexOf(operator);
                console.log(indexOfOperatorTwo)
                if (indexOfOperatorTwo === -1) {
                    num2 = valuesTwo.slice(0, indexOfEquals)
                } else {
                    nextIndex2 = indexOfOperatorTwo + 1;
                    num2 = valuesTwo.slice(nextIndex2, indexOfEquals);
                }
                num2 = num2.join("");
                Number(num2);
                console.log(num2);
                console.log(operator);
                console.log(operate);
                if (operator == "/" && num2 == 0) {
                    result = "lol";
                } else {
                result = operate(num1, operator, num2)
                console.log(result);
                if (result.countDecimals() > 5) {
                    result = result.toFixed(5);
                }
            }
            let resultArray = String(result).split("").map((result) => {
                return result
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                resultArray = resultArray.join("");
                    resultArray = Number(resultArray);
                result = resultArray
            }
                result = result.join("")
                console.log(result);
                input.textContent = result;
            });
        } else {
            // checks all occurrences of an operator
            const chicken = valuesOne.reduce((a, e, i) => {
                if (e === "+" || e === "-"
                || e === "*" || e === "/")
                a.push(i);
                return a;
            }, []);
            console.log(chicken);
    
               let turkey = (chicken[chicken.length-2]);
                console.log(turkey);       
            
                let water = valuesOne[turkey];
                console.log(water);
    
    
        indexOfOperator = valuesOne.lastIndexOf(sign);
        console.log(indexOfOperator)
        if (result != undefined) {
            num1 = result;
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            console.log(num1);
            num1 = num1.join("");
            Number(num1);
        }
        console.log(num1)
        nextIndex = indexOfOperator + 1;
        console.log(nextIndex)
        if (turkey == undefined) {
            num2 = 0;
        } else {
            turkey1 = turkey + 1
            num2 = valuesOne.slice(turkey1, -1)
            console.log(num2)
            num2 = num2.join("");
            console.log(num2);
            Number(num2);
            console.log(num2);
        }
        if (operator == "/" && num2 == 0) {
            result = "lol";
        } else if (water === undefined) {
            result = operate(num1, sign, num2);
        } else {
            result = operate(num1, water, num2)
        }
        console.log(result);
        if (result.countDecimals() > 5) {
            result = result.toFixed(5);
        }
        // to not overflow numbers?
        let resultArray = String(result).split("").map((result) => {
            return result;
        })
        if (resultArray.length > 8) {
            while (resultArray.length > 8) {
                resultArray.pop();         
            }
            resultArray = resultArray.join("");
                resultArray = Number(resultArray);
            result = resultArray;
        }
        result = result.join("")
        console.log(result);
        input.textContent = result;
        }
    
            
        }
    }
    
});

const subtraction = document.querySelector('#subtraction');

subtraction.addEventListener('click', () => {
    console.log(operator);
    lastElement = valuesOne[valuesOne.length -1];
    secondLastElement = valuesOne[valuesOne.length -2];
    if (lastElement === operator && secondLastElement === operator) {
        valuesOne = valuesOne.splice(secondLastElement, -1);
        valuesTwo = valuesTwo.splice(secondLastElement, -1);
        console.log(valuesOne);
        console.log(result);
        input.textContent = result;
    } else if (secondLastElement === "=" && lastElement !== operator) {
        valuesOne.pop()
        valuesTwo.pop()
    } else if (lastElement === "=" && secondLastElement === operator) {
        lastOperator = valuesOne.lastIndexOf(operator);
        valuesOne = valuesOne.splice(lastOperator, -1);
        valuesTwo = valuesTwo.splice(lastOperator, -1);
        input.textContent = result;
    } else {
        if (operator !== undefined) {
            if (operator == "+") sign = "+";
            if (operator == "-") sign = "-";
            if (operator == "*") sign = "*";
            if (operator == "/") sign = "/";
            
        const last = valuesOne[valuesOne.length - 2];
        console.log(last);
        if (last === '=') {
            num1 = result;
            console.log(num1);
            console.log(last);
            potato = valuesOne.indexOf(last);
            let tomato = valuesOne.splice(potato, 1)
            console.log(tomato);
            // let keyboard = valuesTwo.indexOf('=');
            // let mouse = valuesTwo.splice(keyboard, 1)
            valuesTwo = valuesTwo.splice(0, -1)
            let num2 = 0
    
    
            // buttons.forEach((button) => {
            //     button.addEventListener('click', () =>{
            //         valuesTwo.push(button.textContent);
            //         console.log(valuesTwo);
            //         input.textContent = valuesTwo;
            //     });
            // });
            equal.addEventListener('click', () => {
                console.log(valuesTwo);
                indexOfOperator = valuesOne.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                console.log(indexOfOperator);
                indexOfEquals = valuesTwo.indexOf('=');
                console.log(indexOfEquals);
                nextIndex = indexOfOperator + 1
                indexOfOperatorTwo = valuesTwo.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                if (indexOfOperatorTwo === -1) {
                    num2 = valuesTwo.slice(0, indexOfEquals)
                } else {
                    nextIndex2 = indexOfOperatorTwo + 1;
                    num2 = valuesTwo.slice(nextIndex2, indexOfEquals);
                }                
                num2 = num2.join("");
                Number(num2);
                console.log(num2);
                console.log(operator);
                console.log(operate);
                if (operator == "/" && num2 == 0) {
                    result = "lol";
                } else {
                result = operate(num1, operator, num2)
                console.log(result);
                if (result.countDecimals() > 5) {
                    result = result.toFixed(5);
                }
            }
            let resultArray = String(result).split("").map((result) => {
                return result;
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                result = resultArray
            }
                result = result.join("")
                console.log(result);
                input.textContent = result;
            });
        } else {
            const chicken = valuesOne.reduce((a, e, i) => {
                if (e === "-" || e === "+"
                || e === "*" || e === "/")
                a.push(i);
                return a;
            }, []);
            console.log(chicken);
    
               let turkey = (chicken[chicken.length-2]);
                console.log(turkey);
                
                let water = valuesOne[turkey];
                console.log(water);
            
    
    
        indexOfOperator = valuesOne.lastIndexOf(sign);
        console.log(indexOfOperator)
        if (result != undefined) {
            num1 = result;
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            console.log(num1);
            num1 = num1.join("");
            Number(num1);
        }
        console.log(num1)
        nextIndex = indexOfOperator + 1;
        console.log(nextIndex)
        if (turkey == undefined) {
            num2 = 0;
        } else {
            turkey1 = turkey + 1
            num2 = valuesOne.slice(turkey1, -1)
            console.log(num2)
            num2 = num2.join("");
            console.log(num2);
            Number(num2);
            console.log(num2);
        }
        
        console.log(num1)
        console.log(num2)
        console.log(sign);
        console.log(water);
        // replaced "sign" with "turkey in the next line of code / may have to change"
        if (operator == "/" && num2 == 0) {
            result = "lol";
        } else if (water === undefined) {
            result = operate(num1, sign, num2);
        } else {
            result = operate(num1, water, num2)
        }
        console.log(result);

        let resultArray = String(result).split("").map((result) => {
            return result;
        })
        if (resultArray.length > 8) {
            while (resultArray.length > 8) {
                resultArray.pop();
            }
            result = resultArray
        }

        if (result.countDecimals() > 5) {
            result = result.toFixed(5);
        }
        console.log(result);
        input.textContent = result;
        }
    
            
        }
    }
    
});

const multiplication = document.querySelector('#multiplication');

multiplication.addEventListener('click', () => {
    console.log(operator);
    lastElement = valuesOne[valuesOne.length -1];
    secondLastElement = valuesOne[valuesOne.length -2];
    if (lastElement === operator && secondLastElement === operator) {
        valuesOne = valuesOne.splice(secondLastElement, -1);
        valuesTwo = valuesTwo.splice(secondLastElement, -1);
        console.log(valuesOne);
        console.log(result);
        input.textContent = result;
    } else if (secondLastElement === "=" && lastElement !== operator) {
        valuesOne.pop()
        valuesTwo.pop()
    } else if (lastElement === "=" && secondLastElement === operator) {
        lastOperator = valuesOne.lastIndexOf(operator);
        valuesOne = valuesOne.splice(lastOperator, -1);
        valuesTwo = valuesTwo.splice(lastOperator, -1);
        input.textContent = result;
    } else {
        if (operator !== undefined) {
            if (operator == "+") sign = "+";
            if (operator == "-") sign = "-";
            if (operator == "*") sign = "*";
            if (operator == "/") sign = "/";
            
        const last = valuesOne[valuesOne.length - 2];
        console.log(last);
        if (last === '=') {
            num1 = result;
            console.log(num1);
            console.log(last);
            potato = valuesOne.indexOf(last);
            let tomato = valuesOne.splice(potato, 1)
            console.log(tomato);
            // let keyboard = valuesTwo.indexOf('=');
            // let mouse = valuesTwo.splice(keyboard, 1)
            valuesTwo = valuesTwo.splice(0, -1)
            let num2 = 1
    
    
            // buttons.forEach((button) => {
            //     button.addEventListener('click', () =>{
            //         valuesTwo.push(button.textContent);
            //         console.log(valuesTwo);
            //         input.textContent = valuesTwo;
            //     });
            // });
            equal.addEventListener('click', () => {
                console.log(valuesTwo);
                indexOfOperator = valuesOne.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                console.log(indexOfOperator);
                indexOfEquals = valuesTwo.indexOf('=');
                console.log(indexOfEquals);
                nextIndex = indexOfOperator + 1
                indexOfOperatorTwo = valuesTwo.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                if (indexOfOperatorTwo === -1) {
                    num2 = valuesTwo.slice(0, indexOfEquals)
                } else {
                    nextIndex2 = indexOfOperatorTwo + 1;
                    num2 = valuesTwo.slice(nextIndex2, indexOfEquals);
                }                
                num2 = num2.join("");
                Number(num2);
                console.log(num2);
                console.log(operator);
                console.log(operate);
                if (operator == "/" && num2 == 0) {
                    result = "lol";
                } else {
                result = operate(num1, operator, num2)
                console.log(result);
                if (result.countDecimals() > 5) {
                    result = result.toFixed(5);
                }
            }

            let resultArray = String(result).split("").map((result) => {
                return result;
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                result = resultArray
            }
                result = result.join("")
                console.log(result);
                input.textContent = result;
            });
        } else {
            const chicken = valuesOne.reduce((a, e, i) => {
                if (e === "*" || e === "+" || e === "-"
                || e === "/")
                a.push(i);
                return a;
            }, []);
            console.log(chicken);
    
               let turkey = (chicken[chicken.length-2]);
                console.log(turkey);       
            
                let water = valuesOne[turkey];
                console.log(water);
    
    
        indexOfOperator = valuesOne.lastIndexOf(sign);
        console.log(indexOfOperator)
        if (result != undefined) {
            num1 = result;
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            console.log(num1);
            num1 = num1.join("");
            Number(num1);
        }
        console.log(num1)
        nextIndex = indexOfOperator + 1;
        console.log(nextIndex)
        if (turkey == undefined) {
            num2 = 1;
        } else {
            turkey1 = turkey + 1
            num2 = valuesOne.slice(turkey1, -1)
            console.log(num2)
            num2 = num2.join("");
            console.log(num2);
            Number(num2);
            console.log(num2);
        }
        if (operator == "/" && num2 == 0) {
            result = "lol";
        } else if (water === undefined) {
            result = operate(num1, sign, num2);
        } else {
            result = operate(num1, water, num2)
        }
            console.log(result);
            if (result.countDecimals() > 5) {
                result = result.toFixed(5);
            }

            let resultArray = String(result).split("").map((result) => {
                return result;  
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                result = resultArray
            }

        console.log(result);
        input.textContent = result;
        }
    
            
        }
    }
    
});

Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}

const division = document.querySelector('#division');

division.addEventListener('click', () => {
    console.log(operator);
    lastElement = valuesOne[valuesOne.length -1];
    secondLastElement = valuesOne[valuesOne.length -2];
    if (lastElement === operator && secondLastElement === operator) {
        valuesOne = valuesOne.splice(secondLastElement, -1);
        valuesTwo = valuesTwo.splice(secondLastElement, -1);
        console.log(valuesOne);
        console.log(result);
        input.textContent = result;
    } else if (secondLastElement === "=" && lastElement !== operator) {
        valuesOne.pop()
        valuesTwo.pop()
    } else if (lastElement === "=" && secondLastElement === operator) {
        lastOperator = valuesOne.lastIndexOf(operator);
        valuesOne = valuesOne.splice(lastOperator, -1);
        valuesTwo = valuesTwo.splice(lastOperator, -1);
        console.log(valuesTwo);
        input.textContent = result;
    } else {
        if (operator !== undefined) {
            if (operator == "+") sign = "+";
            if (operator == "-") sign = "-";
            if (operator == "*") sign = "*";
            if (operator == "/") sign = "/";
            
        const last = valuesOne[valuesOne.length - 2];
        console.log(last);
        if (last === '=') {
            num1 = result;
            console.log(num1);
            console.log(last);
            potato = valuesOne.indexOf(last);
            let tomato = valuesOne.splice(potato, 1)
            console.log(tomato);
            // let keyboard = valuesTwo.indexOf('=');
            // let mouse = valuesTwo.splice(keyboard, 1)
            valuesTwo = valuesTwo.splice(0, -1)
            let num2 = 1
    
    
            // buttons.forEach((button) => {
            //     button.addEventListener('click', () =>{
            //         valuesTwo.push(button.textContent);
            //         console.log(valuesTwo);
            //         input.textContent = valuesTwo;
            //     });
            // });
            equal.addEventListener('click', () => {
                console.log(valuesTwo);
                indexOfOperator = valuesOne.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                console.log(indexOfOperator);
                indexOfEquals = valuesTwo.indexOf('=');
                console.log(indexOfEquals);
                nextIndex = indexOfOperator + 1
                indexOfOperatorTwo = valuesTwo.lastIndexOf(operator) // you would have this already declared but we're adding it again just for readability sake
                if (indexOfOperatorTwo === -1) {
                    num2 = valuesTwo.slice(0, indexOfEquals)
                } else {
                    nextIndex2 = indexOfOperatorTwo + 1;
                    num2 = valuesTwo.slice(nextIndex2, indexOfEquals);
                }                
                num2 = num2.join("");
                Number(num2);
                console.log(num2);
                console.log(operator);
                console.log(operate);
                if (num2 == 0) {
                    result = "lol"
                } else {
                    result = operate(num1, operator, num2)
                    if (result.countDecimals() > 5) {
                        result = result.toFixed(5);
                    }
                }              

                let resultArray = String(result).split("").map((result) => {
                    return result;  
                })
                if (resultArray.length > 8) {
                    resultArray.pop();
                    result = resultArray
                }
                result = result.join("")

                console.log(result);
                input.textContent = result;
            });
        } else {
            const chicken = valuesOne.reduce((a, e, i) => {
                if (e === "/" || e === "+" || e === "-"
                || e === "*")
                a.push(i);
                return a;
            }, []);
            console.log(chicken);
    
               let turkey = (chicken[chicken.length-2]);
                console.log(turkey);       
            
                // gets the operator at this location 
                // to perform the right operation
                let water = valuesOne[turkey];
                console.log(water);
    
    
        indexOfOperator = valuesOne.lastIndexOf(sign);
        console.log(indexOfOperator)
        if (result != undefined) {
            num1 = result;
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            console.log(num1);
            num1 = num1.join("");
            Number(num1);
        }
        console.log(num1)
        nextIndex = indexOfOperator + 1;
        console.log(nextIndex)
        if (turkey == undefined) {
            num2 = 1;
        } else {
            turkey1 = turkey + 1 
            num2 = valuesOne.slice(turkey1, -1)
            console.log(num2)
            num2 = num2.join("");
            console.log(num2);
            Number(num2);
            console.log(num2);
        }
        if (num2 == 0) {
            result = "lol"
        } else {
            // you changed "sign" to "water" in all of
            // the same locations in different operators
            // for the next line of code
            if (water === undefined) {
                result = operate(num1, sign, num2);
            } else {
                result = operate(num1, water, num2)
            }
            console.log(result);
            console.log(result.countDecimals())
            if (result.countDecimals() > 5) {
                result = result.toFixed(5);
            }

            let resultArray = String(result).split("").map((result) => {
                return result;  
            })
            if (resultArray.length > 8) {
                while (resultArray.length > 8) {
                    resultArray.pop();
                }
                result = resultArray
            }
        }
        console.log(result);
        input.textContent = result;
        }
    
            
        }
    }
    
});



const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    valuesOne = [];
    valuesTwo = [];
    result = undefined;  
    input.textContent = 0;
    console.log(valuesOne);
    console.log(valuesTwo);
});


const equal = document.querySelector('#equal');

function isNumber(value) {
    return typeof value === 'string';
}

equal.addEventListener('click', () => {

    // checks if "=" has been hit before anything else
    console.log(valuesOne);
    if (valuesOne.length === 1) {
        console.log(valuesOne.length)
        if (valuesOne.includes("=")) {
            valuesOne = valuesOne.splice(0, -1);
            console.log(valuesOne);
        }
    }

    console.log(valuesTwo);
    if(valuesTwo.length === 1) {
        console.log(valuesTwo.length)
        if (valuesTwo.includes("=")) {
            valuesTwo = valuesTwo.splice(0, -1);
            console.log(valuesTwo);
        }
    }

    // checks if 2 "=" signs have been hit in the same sequence
    lastElement = valuesOne[valuesOne.length -1];
    secondLastElement = valuesOne[valuesOne.length -2];
    lastElement2 = valuesTwo[valuesTwo.length -1];
    secondLastElement2 = valuesTwo[valuesTwo.length -2];
    if (lastElement === "=" && secondLastElement === "=" 
    && lastElement2 === "=" && secondLastElement2 === "=") {
        valuesOne.pop();
        console.log(valuesOne);
        console.log(result);
        input.textContent = result;
        valuesTwo.pop();
        console.log(valuesTwo);
        console.log(result);
        input.textContent = result;
    } else if (lastElement === "=" && operator === undefined 
    && lastElement2 === "=" && operator === undefined) {
        console.log(num1);
        console.log(valuesOne);
        valuesOne = valuesOne.slice(0, -1)
        console.log(result);
        input.textContent = valuesOne;
        console.log(num1);
        console.log(valuesTwo);
        valuesTwo = valuesTwo.slice(0, -1)
        console.log(result);
        console.log(num1)
        input.textContent = valuesOne.join("");
    } else {
        indexOfOperator = valuesOne.lastIndexOf(operator)
        console.log(valuesOne.indexOf(0));
        if (result != undefined) {
            num1 = result;
            Number(num1);
        } else {
            num1 = valuesOne.slice(0, indexOfOperator)
            num1 = num1.join("");
            Number(num1);
        }
        // num1 = num1.map(function(str) {
        //     return parseInt(str);
        // });
        console.log(typeof num1);
        console.log(isNumber(num1));
        console.log(num1)
        indexOfEquals = valuesOne.indexOf('=')
        console.log(indexOfEquals);
        console.log(indexOfOperator)
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
        if (operator == "/" && num2 == 0) {
            result = "lol";
        } else {
            result = operate(num1, operator, num2)
            console.log(result);
            if (result.countDecimals() > 5) {
                result = result.toFixed(5);
            }
        }
        let resultArray = String(result).split("").map((result) => {
            return result;  
        })
        console.log(resultArray);
        if (resultArray.length > 8) {
            while (resultArray.length > 8) {
                resultArray.pop();
            }
            resultArray = resultArray.join("");
            console.log(resultArray)
            resultArray = Number(resultArray);
            console.log(resultArray)
            result = resultArray;
            console.log(result);
        }

        console.log(result);
        input.textContent = result;
        console.log(input.textContent)
    }

    
});  

if (result != undefined) {
    console.log(result);
    input.textContent = result;
}