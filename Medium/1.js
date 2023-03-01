/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    let arr = str.split("");
    return arr.forEach(elem => console.log(elem))

}

console.log(logEachLetter("Hello, World!"))

module.exports = logEachLetter