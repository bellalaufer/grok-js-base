/*
Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта,
а возвращает значение объекта, доступное по этому ключу.
Пример: ({ 'key': 'property' }, 'key') => 'property'
*/

const objValue = (obj, key) => {

    return obj[key];

}

console.log(objValue({ 'name': 'John' }, 'name'))

module.exports = objValue