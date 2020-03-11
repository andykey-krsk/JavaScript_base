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
    /**
     * Метод добалляет продукт в корзину
     * @param {{ id: string, price: string, name: string }}} product 
     */
    addProduct(product){
        this.addProductToObject(product);
        this.renderProductToCart(product);
        this.renderTotal();
        this.addRemoveButtonsListeners();
    },

    /**
     * Добавляем слушателей события клика по кнопкам удалить.
     */
    addRemoveButtonsListeners() {
        let removeButtons = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < removeButtons.length; i++) {
            //важно указать именно this.removeProductListener, 
            //чтобы это была одна и та же функция,
            //а не несколько одинаковых.
            removeButtons[i].addEventListener('click', this.removeProductListener);
        }
    },

    /**
     * Обработчик события клика по кнопке удаления товара.
     * @param {MouseEvent} event
     */
    removeProductListener(event) {
        //console.log(this); this будет указывать на кнопку, а не на объект basket
        //здесь мы используем basket вместо this, потому что контекст вызова не имеет
        //этих методов и нам надо явно обратиться к нашему объекту корзины
        cart.removeProduct(event);
        cart.renderTotal();
    },

    /**
     * Метод добавляет продукт в объект с продуктами
     * @param {{ id: string, price: string, name: string }} product 
     */
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

    /**
     * етод отрисовывает продукт в корзине, если там такой уже есть просто
     * увеличивает счетчик на 1
     * @param {{ id: string, price: string, name: string }} product 
     */
    renderProductToCart(product){
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }

        //шаблон формирования строки в корзине
        let productRow = `
            <div class="cart__row">
                <div class="cart__hd id">${product.id}</div>
                <div class="cart__hd name">${product.name}</div>
                <div class="productCount cart__hd quantity" data-id="${product.id}">1</div>
                <div class="cart__hd price">${product.price}</div>
                <div class="cart__hd cancel">
                <i class="fas fa-times-circle cart__drop__item_cancel productRemoveBtn" data-id="${product.id}"></i>
                </div>
            </div>
        `;

        //получение тэга куда вставлять строку
        let tbody = document.querySelector('cart');

        //вставка строки
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    /**
     * Метод отрисовывает общую сумму товаров корзины
     */
    renderTotal() {
        document.querySelector('.total').textContent = this.calcTotal();
    },

    /**
     * Метод суммирует все повары находящиеся в корзине
     * @returns {number} сумму цен товаров в корзине
     */
    calcTotal() {
        let sum = 0;
        for (let key in this.products) {
            sum += this.products[key].price * this.products[key].count;
        }
        return sum;
    },

    /**
     * Метод удаляет продукт из объекта продуктов, а также из корзины на странице.
     * @param {MouseEvent} event
     */
    removeProduct(event) {
        let id = event.srcElement.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    /**
     * Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его.
     * @param {string} id
     */
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

    /**
     * Метод удаляет продукт из объекта с продуктами.
     * @param {string} id
     */
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }

};
