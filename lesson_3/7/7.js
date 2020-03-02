'use strict';

/**
 * Функция рисует строку и из х-сов
 * @param {number} num Колличество х-сов в возвращаемой строке
 * @returns {string} 
 */
function xRow(num){
    let x = '';
    for (let i = 1; i <= num; i++){
        x += 'x';
    }
    return x;
}

for (let i = 1; i <= 20; i++){
    console.log(xRow(i));
}