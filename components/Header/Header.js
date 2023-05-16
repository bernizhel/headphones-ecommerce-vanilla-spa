import { Component } from '../../utils/render/Component.js';
import { changeRoute } from '../../service/routerStore.js';
import { getFavoritesCount } from '../../service/favoritesStore.js';
import { getCartCount } from '../../service/cartStore.js';

export class Header extends Component {
    buildDOM() {
        const header = document.createElement('header');
        header.classList.add('header');

        header.innerHTML = `
                <p class="header__logo logo">QPICK</p>
                <div class="header__categories categories">
                    <button class="header__categories-button">
                        <img src="/images/header/favorites.svg" alt="" class="categories__user_favorites header-img-counter" />
                        <p class="categories__user_favorites-info header-counter card-text-styles">${ getFavoritesCount() }</p>
                    </button>

                    <button class="header__categories-button">
                        <img src="/images/header/cart.svg" alt="" class="categories__user_cart header-img-counter" />
                        <p class="categories__user_cart-info header-counter card-text-styles">${ getCartCount() }</p>
                    </button>
                </div>
        `;

        /**
         * @param {string} selector
         * @param {string} route
         */
        function changeRouteButtonHandler(selector, route) {
            header.querySelector(selector).addEventListener('click', (event) => {
                event.preventDefault();
                changeRoute.call(route);
            });
        }

        changeRouteButtonHandler('.logo', '/');
        changeRouteButtonHandler('.header__categories-button:first-child', '/favorites');
        changeRouteButtonHandler('.header__categories-button:last-child', '/cart');

        return header;
    }
}
