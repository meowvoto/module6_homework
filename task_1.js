// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let Arr = [1, 1, 2, 6, 5, 'ping', 0, 2, '&', 1, null];
let odd = 0;
let even = 0;
let nulls = 0;
function classifyNumbers(myArray) {
    myArray.forEach(function(item, index, array) {
        if (typeof item === 'number') {
            if (item == 0) {
                nulls += 1;
            } else if (item % 2 !== 0) {
                odd += 1;
            } else {
                even += 1;
            }
        }       
    });
}

classifyNumbers(Arr);
console.log(odd);
console.log(even);
console.log(nulls);

// решение, если нужна функция без параметров

let Arr = [1, 1, 2, 6, 5, 'ping', 0, 2, '&', 1, null];
let odd = 0;
let even = 0;
let nulls = 0;
function classifyNumbers() {
    Arr.forEach(function(item, index, array) {
        if (typeof item === 'number') {
            if (item == 0) {
                nulls += 1;
            } else if (item % 2 !== 0) {
                odd += 1;
            } else {
                even += 1;
            }
        }    
    }); 
}

classifyNumbers();
console.log(odd);
console.log(even);
console.log(nulls);