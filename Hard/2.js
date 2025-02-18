/*

Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

const longestString = (arr) => {
    if (arr == "") {
        return null
    } else {
        return arr.reduce(function (a, b) {
            return a.length > b.length ? a : b
        })

    }

}

console.log(longestString(['one', 'two', 'three']))

module.exports = longestString
