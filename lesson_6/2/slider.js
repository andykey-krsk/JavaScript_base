'use strict'

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('í');
loadIcon.classList.add('fas', 'fa-sync-alt', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

let arrowLeft = document.createElement('í');
arrowLeft.classList.add('fas', 'fa-chevron-circle-left', 'slider__left');
slider.insertAdjacentElement("afterbegin", arrowLeft);

let arrowRight = document.createElement('í');
arrowRight.classList.add('fas', 'fa-chevron-circle-right', 'slider__right'); 
slider.insertAdjacentElement("afterbegin", arrowRight);

window.addEventListener('load', function(){
    arrowLeft.addEventListener('click', function(){
        images.setNextLeftImage();
    });

    arrowRight.addEventListener('click', function(){
        images.setNextRightImage();
    });

    images.init();
    loadIcon.style.display = "none";
});

let images = {
    currentIndex: 0,
    slides: [],
    init() {
        this.slides = document.querySelectorAll('.slider__frame');
        this.showImageWithCurrentIndex();
    },

    showImageWithCurrentIndex(){
        this.slides[this.currentIndex].classList.remove('hidden-slide');
    },

    hideVisibleImages(){
        this.slides.forEach(function(slide){
            if (!slide.classList.contains('hidden-slide')) {
                slide.classList.add('hidden-slide');
            }
        });
    },

    setNextLeftImage(){
        this.hideVisibleImages();
        if (this.currentIndex == 0){
            this.currentIndex = this.slides.length - 1;
        }else {
            this.currentIndex--;
        }
        const imageWithCurrentIndex = this.slides[this.currentIndex];
        imageWithCurrentIndex.classList.add('animation__right-to-left');
        imageWithCurrentIndex.classList.remove('hidden-slide');
        setTimeout(() => {
            imageWithCurrentIndex.classList.remove('animation__right-to-left');
        }, 500);
    },

    setNextRightImage(){
        this.hideVisibleImages();
        if (this.currentIndex == this.slides.length - 1){
            this.currentIndex = 0;
        }else {
            this.currentIndex++;
        }

        this.showImageWithCurrentIndex();
    },
};