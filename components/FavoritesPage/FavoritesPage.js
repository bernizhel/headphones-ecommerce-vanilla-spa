import { Component } from '../../utils/render/Component.js';
import { $favoritesStore } from '../../service/favoritesStore.js';
import { getLocalizedTag } from '../../service/i18nStore.js';
import { FavoritesItem } from '../FavoritesItem/FavoritesItem.js';

export class FavoritesPage extends Component {
    buildDOM() {
        const favoritesItems = $favoritesStore.getState();

        const favoritesPage = document.createElement('main');

        favoritesPage.innerHTML = `
            <h2 class="title___cart_products text-SemiBold">${ getLocalizedTag('favorites') }</h2>
            <section class="store_products">
                <div class="store_products-container"></div>
            </section>
        `;

        favoritesPage
            .querySelector('.store_products-container')
            .append(...favoritesItems.map(itemData => new FavoritesItem(itemData).buildDOM()));

        return favoritesPage;
    }
}
