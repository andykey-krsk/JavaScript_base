'use strict'

let cartButtons = document.querySelectorAll('product__add');

cartButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        cartAddProduct({id: id, price: price, name: name});
    });
});

let cart = {
    product: {},

    addProduct(product){
        this.addProductToObject();
        this.renderProductToCart();
        this.calcTotal();
        this.addRemoveListeners();
    },

    addProductToOject(product){

    },
};
