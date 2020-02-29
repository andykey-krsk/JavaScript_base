'use strict'

function NumberObj (hundreds, tens, units){
    this.units = units; //это единицы
    this.tens = tens; //это десятки
    this.hundreds = hundreds; //это сотни
}

/**
 * Функция конвертирует число в объект
 * @param {number} number Число от 0 до 999
 * @returns {object}
 */
function numberToObject(number){
    let numberObject = {};
    if (!Number.isInteger(number)){
        console.log("Введите целое число");
        return numberObject;
    }

    if (number >= 0 && number <= 999){
        number = String(number);
        while (number.length < 3) {
            number = "0" + number;
        }
        let numberObject = new NumberObj (parseInt(number[0]), parseInt(number[1]), parseInt(number[2]));
        return numberObject;
    } else {
        return numberObject;
    }
}

console.log(numberToObject(1000));