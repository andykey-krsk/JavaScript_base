'use strict'

Slider class {


    /**
     * Метод получает настройки нужные для работы
     * @param {number} width 
     * @param {number} hight 
     * @param {Array} images 
     */
    init(width, hight, images) {
        this.width = width;
        this.hight = hight;
        this.images = images;
    }

    renderSlider() {

    }
    
    /**
     * Метод запускает автоматическое пролистывание слайдов
     * @param {numder} timer 
     */
    show(timer){

    }

}

const slider = new Slider();

slider.init(600,800,array);
slider.show(5000);