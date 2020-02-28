'use strict'

/**
 * Функция конвертирует число в объект
 * @param {number} number Число от 0 до 999
 * @returns {object}
 */
function numerToObject(number){
    let numberObject = {};
    if (number >= 0 && number <= 999){
        return number;
    } else {
        return numberObject;
    }
}

console.log(numerToObject(100));
