let currentInput = "";
let currentOperator = "";
let firstNumber = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== "") {
    if (firstNumber === null) {
      firstNumber = parseFloat(currentInput);
      currentInput = "";
    } else {
      calculate();
    }
    currentOperator = operator;
  }
}

function calculate() {
  if (currentInput !== "" && currentOperator !== "" && firstNumber !== null) {
    const secondNumber = parseFloat(currentInput);
    let result;

    switch (currentOperator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }

    currentInput = result.toString();
    currentOperator = "";
    firstNumber = null;
    updateDisplay();
  }
}

function clearInput() {
  currentInput = "";
  currentOperator = "";
  firstNumber = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("inputField").value = currentInput || "0";
}
