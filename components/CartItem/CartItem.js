import { Component } from '../../utils/render/Component.js';
import {
    getLocalizedCurrency,
    getLocalizedNumber,
} from '../../service/i18nStore.js';
import {
    decrementProductCounter,
    getProductTotalPrice,
    incrementProductCounter,
    removeFromCart,
} from '../../service/cartStore.js';

/**
 * @typedef {import('../../service/cartStore.js').CartStateItem} CartItemProps
 * @extends Component<CartItemProps>
 */
export class CartItem extends Component {
    buildDOM() {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart__product');

        cartItem.innerHTML = `
                <div class="cart__products_product">
                    <img src="${ this.props.img }" alt="" class="product-img" />
                    <div class="products__number">
                        <img src="/images/cart/minus.svg" alt="" class="products__number_minus" />
                        <p class="products__number_watch text-SemiBold">${ getLocalizedNumber(
            this.props.count) }</p>
                        <img src="/images/cart/plus.svg" alt="" class="products__number_plus" />
                    </div>
                </div>
                <div class="product__info_cart">
                    <p class="product__info_cart-name text-SemiBold">${ this.props.title }</p>
                    <p class="product__info_cart-price text-SemiBold">${ getLocalizedCurrency(
            this.props.price) }</p>
                </div>
                <div class="product__interactive_features features">
                    <button class="features-delete"><img src="/images/cart/delete.svg" alt="" /></button>
                    <p class="feature-price text-SemiBold text-SemiBold">${ getLocalizedCurrency(
            getProductTotalPrice(this.props.id)) }</p>
                </div>
        `;

        cartItem.querySelector('.products__number_minus')
            .addEventListener('click',
                () => decrementProductCounter.call(this.props.id));
        cartItem.querySelector('.products__number_plus')
            .addEventListener('click',
                () => incrementProductCounter.call(this.props.id));
        cartItem.querySelector('.features-delete')
            .addEventListener('click', () => removeFromCart.call(this.props.id));

        return cartItem;
    }
}
