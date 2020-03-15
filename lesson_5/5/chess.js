'use strict'

let renderer = {

    /**
     * Метод рисует шахматную доску
     */
    renderBoard() {
        let result = this.generateChessBoadrd();
        document.body.insertAdjacentHTML("afterbegin", result)
    },

    /**
     * Метод генерирует шатматную доску
     */
    generateChessBoadrd(){
        let board = '';
        let letters ='ABCDEFGH';
        for (let y = 8; y >=0; y--) {
                if (y == 0) {
                    board += '<div class="row"><div class="cell cell-left"></div>'
                }else{
                    board += '<div class="row"><div class="cell cell-left">' + y + '</div>'
                }
                
                for (let x = 1; x <= 8; x++){
                    if (y == 0){
                        board += '<div class="cell cell-bottom">' + letters[x-1] + '</div>';
                    }

                    if ((y !== 0)){
                        if (this.whiteOrBlack(y, x)){
                            board += '<div class="cell cell-w"></div>';
                        } else {
                            board += '<div class="cell cell-bl"></div>';
                        }
                    }
                }
            board += '</div>';
        }
        return `<div class="board">${board}</div>`;
    },

    /**
     * Метод определяет цвет ячейки
     * @param {numder} y номер строки
     * @param {number} x номер столбца
     * @returns {boolean} Возвращает true если ячейка белая false если черная
     */
    whiteOrBlack(y, x){
        if (y%2 == 0) {
            if (x%2 !== 0) {
                return true;
            }else{
                return false;    
            }
            
        }else {
            if (x%2 == 0) {
                return true;
            }else{
                return false;    
            }
        }
    }
};

renderer.renderBoard();