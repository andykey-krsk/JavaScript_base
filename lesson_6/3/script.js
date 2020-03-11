'use strict'

let cartButtons = document.querySelectorAll('.product__add__cart');

cartButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        let id = event.srcElement.dataset.id;
        let price = event.srcElement.dataset.price;
        let name = event.srcElement.dataset.name;
        cart.addProduct({ id: id, price: price, name: name });
    });
});

let cart = {
    products: {},

    addProduct(product){
        this.addProductToObject(product);
        this.renderProductToCart(product);
        this.calcTotal();
      //  this.addRemoveListeners();
    },

    addProductToObject(product){
        if (this.products[product.id] == undefined){
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        }else{
            this.products[product.id].count++;
        }
    },

    renderProductToCart(product){
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }

        let productRow = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-times-circle cart__drop__item_cancel productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    renderTotal() {
        document.querySelector('.total').textContent = this.calcTotal();
    },

    calcTotal() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },
};
