/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
    let newStr = "";
    let wordArr = str.split(/[_]/g)


    for (let i = 0; i < wordArr.length; i++) {
        if (i > 0) {
            newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        } else {
            newStr += wordArr[i]
        }
    }
    return newStr

}


console.log(camelCase("web_development"))

module.exports = camelCase