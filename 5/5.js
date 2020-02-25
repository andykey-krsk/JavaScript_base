'use strict';
/*
Перед вами находится массив с продуктами в интернет-магазине. 
Вам нужно:
1.  Получить все товары, у которых есть фотографии, 
    можете использовать метод filter 
2.  Отсортируйте товары по цене (от низкой цены к высокой), 
    можете использовать метод sort 
*/
const products = [ 
    { 
        id: 3, 
        price: 127, 
        photos: [ "1.jpg", "2.jpg", ] 
    }, 
    { 
        id: 5, 
        price: 499, 
        photos: [] 
    }, 
    { 
        id: 10, 
        price: 26, 
        photos: [ "3.jpg" ] 
    }, 
    { 
        id: 8, 
        price: 78, 
    }, 
];

function getProductFoto(products){
    let arr = [];
    arr = products.filter()
    return arr;
}

function sortProduct(products){
    return arr;
}

console.log(getProductFoto(products));

console.log(sortProduct(products));