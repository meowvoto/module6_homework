const a = function(number1) {
    function sum(number2) {
        return number2 + number1;
    }
    return sum;
};

console.log(a(1)(4));