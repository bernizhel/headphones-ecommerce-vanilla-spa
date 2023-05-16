import { Component } from '../../utils/render/Component.js';
import {
    getLocalizedCurrency,
    getLocalizedNumber,
    getLocalizedText
} from '../../service/i18nStore.js';
import { removeFromFavorites } from '../../service/favoritesStore.js';
import { addToCart } from '../../service/cartStore.js';

/**
 * @typedef {import('../../api/products.js').Product} FavoritesItemProps
 * @extends Component<FavoritesItemProps>
 */
export class FavoritesItem extends Component {
    buildDOM() {
        const favoritesItem = document.createElement('div');
        favoritesItem.classList.add('product');

        favoritesItem.innerHTML = `
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
                        <bottom class="product__info_like"><img src="/images/favorites/heart-inactive.svg" class="product__info_like-passive" alt="" /></bottom>
                        <bottom class="product__info_buy card-text-SemiBold">${ getLocalizedText('buy') }</bottom>
                    </div>
                </div> 
        `;

        favoritesItem.querySelector('.product__info_like')
            .addEventListener('click', () => removeFromFavorites.call(this.props.id));
        favoritesItem.querySelector('.product__info_buy')
            .addEventListener('click', () => addToCart.call(this.props));

        return favoritesItem;
    }
}
