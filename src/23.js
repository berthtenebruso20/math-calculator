function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) throw new Error('Divide by zero');
    return x / y;
}

function calculator() {
    const inputs = [parseInt(prompt("Enter the first number:")), parseInt(prompt("Enter the second number:"))];
    const operation = prompt("Please choose an operation (+, -, *, /):");

    try {
        switch (operation) {
            case '+':
                return add(inputs[0], inputs[1]);
            case '-':
                return subtract(inputs[0], inputs[1]);
            case '*':
                return multiply(inputs[0], inputs[1]);
            case `/`:
                if (inputs[1] === 0) throw new Error('Divide by zero');
                else return divide(inputs[0], inputs[1]);
        }
    } catch (error) {
        console.error(error.message);
    }
}
