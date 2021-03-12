const catalog = {
    cart: {},
    list: [
        {
            id_product: 8417826,
            product_name: 'Ручка',
            price: 40,
        },
        {
            id_product: 84174261,
            product_name: 'Карандаш',
            price: 25,
        },
        {
            id_product: 8417624,
            product_name: 'Ластик',
            price: 20,
        }
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToBasket(id_product);
    },

    getCatalogListLength() {
        return this.list.length;
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">Купить</button>
            </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
    },
};

const cart = {
    catalogList: [],
    goods: [],

    init(cartBlockClass, clearCartButton, catalogList) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clearCartButton = document.querySelector(`.${clearCartButton}`);
        this.catalogList = catalogList;

        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clearCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    findProductInCatalog(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProductInCatalog(id_product);

        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', 'Казна пуста, милорд.');
    },
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clear-cart', catalog.list);
