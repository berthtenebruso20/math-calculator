const calculate = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let sum;

    if (num1 > num2) {
        sum = num1 + num2;
    } else {
        sum = num2 - num1;
    }

    return sum;
};
