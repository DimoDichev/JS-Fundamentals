function printNUmber(number, precision) {
    if (precision > 15) {
        precision = 15;
    }

    console.log(Number.parseFloat(number.toFixed(precision)))
}