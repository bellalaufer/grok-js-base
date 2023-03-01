/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    let arr = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr.reduce((a, b) => a + b)
    } else {
        for (let i = end; i <= start; i++) {
            arr.push(i);
        }
        return arr.reduce((a, b) => a + b)

    }
}

console.log(sumOfIntegers(5, 3))

module.exports = sumOfIntegers
