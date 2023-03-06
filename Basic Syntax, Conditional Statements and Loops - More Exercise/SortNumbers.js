function sortNumber(num1, num2, num3) {
    let numArr = [num1, num2, num3].sort((a, b) => b - a);
    console.log(numArr.join('\n'));
}