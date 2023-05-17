import { Component } from '../../utils/render/Component.js';
import {
    getLocalizedCurrency,
    getLocalizedNumber,
    getLocalizedTag,
} from '../../service/i18nStore.js';
import { addToCart } from '../../service/cartStore.js';
import {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
} from '../../service/favoritesStore.js';

/**
 * @typedef {import('../../api/products.js').Product} ProductsItemProps
 * @extends Component<ProductsItemProps>
 */
export class ProductsItem extends Component {
    buildDOM() {
        const productsItem = document.createElement('div');
        productsItem.classList.add('product');

        productsItem.innerHTML = `
            <img src="${ this.props.img }" alt="" class="product__img" />
            <div class="product__info">
                <div class="product__info-features info-features">
                    <div class="product__info_name card-text-SemiBold">${ this.props.title }</div>
                    <div class="product__info_price card-text-SemiBold">${ getLocalizedCurrency(this.props.price) }</div>
                </div>
                <div class="product__info-features">
                  <div class="product__info_rating">
                      <img src="/images/products/star.svg" alt="" class="product__info_rating-img" />
                      <p class="product__info_rating-text card-text-SemiBold">${ getLocalizedNumber(this.props.rate) }</p>
                  </div>
                  <bottom class="product__info_like"><img src="/images/favorites/heart-inactive.svg" alt="" /></bottom>
                  <bottom class="product__info_buy card-text-SemiBold">${ getLocalizedTag('buy') }</bottom>
                </div>
            </div>
        `;

        const likeButton = productsItem.querySelector('.product__info_like');
        if (isFavorite(this.props.id)) {
            likeButton.children[ 0 ].classList.add('product__info_like-passive');
            likeButton.addEventListener('click', () => removeFromFavorites.call(this.props.id));
        } else {
            likeButton.children[ 0 ].classList.add('product__info_like-active');
            likeButton.addEventListener('click', () => addToFavorites.call(this.props));
        }

        productsItem.querySelector('.product__info_buy')
            .addEventListener('click', () => addToCart.call(this.props));

        return productsItem;
    }
}
