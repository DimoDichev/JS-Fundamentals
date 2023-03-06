function printSum(startNum, endNum) {
    let result = [];
    let sum = 0;

    for (let num = startNum; num <= endNum; num++) {
        result.push(num);
        sum += num;
    }

    console.log(result.join(' '));
    console.log('Sum: ' + sum);
}