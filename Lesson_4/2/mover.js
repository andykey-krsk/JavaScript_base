let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (2, 4, 6, 8 или 1, 3, 7, 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, 8 или 1, 3, 7, 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        
        /**
         * Проверяем вышел игрок за пределы игрового поля 
         * @param {number} position
         * @returns {boolean} Возвращает false если вышел, true если не вышел
         */
        function checkPosition (position){
            if (position < 0) {
                return false;
            }
            if (position > 9) {
                return false;
            }
            return true;
        };

        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 2:
                if (checkPosition(nextPosition.y + 1)){
                    nextPosition.y++;
                }
                break;
            case 4:
                if (checkPosition(nextPosition.x - 1)){
                    nextPosition.x--;
                }
                break;
            case 6:
                if (checkPosition(nextPosition.x + 1)){
                    nextPosition.x++;
                }
                break;
            case 8:
                if (checkPosition(nextPosition.y - 1)){
                    nextPosition.y--;
                }
                break;
            case 1:
                if (checkPosition(nextPosition.y + 1)){
                    nextPosition.y++;
                }
                if (checkPosition(nextPosition.x - 1)){
                    nextPosition.x--;
                }
                break;
            case 3:
                if (checkPosition(nextPosition.y + 1)){
                    nextPosition.y++;
                }
                if (checkPosition(nextPosition.x + 1)){
                    nextPosition.x++;
                }
                break;
            case 7:
                if (checkPosition(nextPosition.y - 1)){
                    nextPosition.y--;
                }
                if (checkPosition(nextPosition.x - 1)){
                    nextPosition.x--;
                }
                break;
            case 9:
                if (checkPosition(nextPosition.y - 1)){
                    nextPosition.y--;
                }
                if (checkPosition(nextPosition.x + 1)){
                    nextPosition.x++;
                }
                break;
        }
        return nextPosition;
    },
};



        
