//Написать функцию, которая принимает число как аргумент и возвращает функцию,
//которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

const a = function(number1) {
    function sum(number2) {
        return number2 + number1;
    }
    return sum;
};

console.log(a(1)(4));