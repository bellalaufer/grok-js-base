/*

Создайте функцию, которая принимает в качестве аргументов многомерный массив
(массив, содержащий другие массивы) чисел и число из одного из вложенных массивов,
а возвращает индекс вложенного массива, в котором это число находится.

Пример: ( [[1], [2, 3], [4]], 3 ) => 1

*/

const nestedArr = (arr, number) => {
    let myIndex = arr.findIndex((elem) => elem.includes(number));

    return (myIndex === -1 ? undefined : myIndex);

}

console.log(nestedArr([[1], [2, 3], [4]], 4))

module.exports = nestedArr
