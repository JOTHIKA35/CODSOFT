let userdata = document.getElementById('display');

function userinput(num){
    userdata.value+=num;
}
function calculate() {
    const input = userdata.value;
    const operators = "+-*/";
    const operatorStack = [];
    const numberStack = [];

    let currentNumber = "";
    let lastOperator = "+";

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (operators.includes(char)) {
            operatorStack.push(char);
            numberStack.push(parseFloat(currentNumber));
            currentNumber = "";
            lastOperator = char;
        } else if (!isNaN(char) || char === ".") {
            currentNumber += char;
        }
    }

    numberStack.push(parseFloat(currentNumber));

    let result = 0;
    for (let i = 0; i < numberStack.length; i++) {
        const number = numberStack[i];
        const operator = operatorStack[i - 1] || "+";

        switch (operator) {
            case "+":
                result += number;
                break;
            case "-":
                result -= number;
                break;
            case "*":
                result *= number;
                break;
            case "/":
                if (number !== 0) {
                    result /= number;
                } else {
                    alert("Division by zero is not allowed.");
                    clearInput();
                    return;
                }
                break;
        }
    }

    userdata.value = result;
}

function clearInput() {
    userdata.value = "";
}
function earse(){
    userdata.value=userdata.value.slice(0,-1)
}

