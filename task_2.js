//Написать функцию, которая принимает на входе любое число (но не больше 1 000),
//определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится
// сообщение, что данные неверны. Обратите внимание на числа 0 и 1.


let thisNumber = prompt(' Введите число до 1000');
thisNumber = +thisNumber;
function showNumbersPrimality(thisNumber) {
    if (thisNumber > 1000) {
        console.log('Данные неверны');
    } else if (thisNumber < 2) {
        console.log('Это число не является простым');
    } else if (thisNumber == 2) {
        console.log('Это число является простым');
    } else {
            let a;
            let b = []; 
            for (let i = 2; i < thisNumber ;i++) {
            a = thisNumber % i;
            b.push(a);
            }
            const check = (element) => element === 0;
            if (b.some(check)) {
                console.log('Это число не является простым');
            } else {
                console.log('Это число является простым');
            }
    }
}
showNumbersPrimality(thisNumber);


// let thisNumber = prompt(' Введите число до 1000');
// thisNumber = +thisNumber;

// function isPrime(n) {
//   for (let i = 2; i < n; i++)
//     if (n % i == 0) 
//       return false;
  
//   return n > 1;
// }

// function checkNumberIsPrime(thisNumber) {
//     if (thisNumber > 1000) {
//         console.log('Данные неверны');
//     } else if (thisNumber < 2) {
//         console.log('Это число не является простым');
//     } else if (thisNumber == 2) {
//         console.log('Это число является простым');
//     } else {
//       if (isPrime(thisNumber)) {
//         console.log('Это число является простым');
//       } else {
//         console.log('Это число не является простым');
//       }
//     }
// }
// checkNumberIsPrime(thisNumber);