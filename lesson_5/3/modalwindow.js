'use strict'

const filter = document.getElementById('filter');
const modal = document.getElementById('modal-window');
const showBtn = document.getElementById('showBtn');
const closeBtn = document.getElementById('closeBtn');


showBtn.addEventListener('click', function(){
    modal.classList.remove('hidden');
    modal.classList.add('twisterInDown');
    setTimeout(() => {
        filter.classList.remove('hidden');    
    }, 800);
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('twisterInDown');
    modal.classList.add('magic');
    setTimeout(() => {
        modal.classList.add('hidden');
        filter.classList.add('hidden');    
    }, 500);
});
