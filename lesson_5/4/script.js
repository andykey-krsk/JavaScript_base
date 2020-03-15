'use strict'

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', function(event){
    buttonClick(event);
}));

/**
 * Функция обрабатывает нажатие кнопки в той карточке в которой оно произошло
 * @param {MouseEvent} clicedButton 
 */
function buttonClick(clickedButton){
    const card = clickedButton.target.parentNode;
    hideShowObject(card.querySelector('div'));
    hideShowObject(card.querySelector('img'));
    changeBtnText(card.querySelector('button'));
}

/**
 * Функция меняет надпись на кнопке
 * @param {object} button 
 */
function changeBtnText(button){
    if (button.innerText == 'Подробнее'){
        button.innerText = 'Отмена';
    } else if (button.innerText === 'Отмена') {
        button.innerText = 'Подробнее';
    }
}
/**
 * Фунцция показывает или скрывает переданный объект
 * @param {object} object 
 */
function hideShowObject(object){
    if (object.classList.contains('hidden')){
        object.classList.remove('hidden');
    } else {
        object.classList.add('hidden');
    }
}