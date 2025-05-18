function calculateExpression(expression) {
    // Your code here to perform the calculation
    const parsedExpression = expression.replace(/\s+/, '');
    const operators = [];
    let currentOperand = parseFloat(parsedExpression[0]);
    
    for (let i = 1; i < parsedExpression.length; i++) {
        if (parsedExpression[i] === '.' && operators.length > 0) {
            const result = parseFloat(operators.pop());
            const nextValue = parseFloat(parsedExpression[i + 1]);
            currentOperand = result + nextValue;
        } else {
            if (!isNaN(currentOperand)) {
                currentOperand *= parsedExpression[i].toLowerCase();
            }
            operators.push(parsedExpression[i]);
        }
    }

    return currentOperand.toFixed(2);
}

console.log(calculateExpression("3.5 + 2.1 - 4.5"));
