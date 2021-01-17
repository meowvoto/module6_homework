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


