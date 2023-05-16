import { Component } from '../../utils/render/Component.js';
import { Footer } from '../Footer/Footer.js';
import { Header } from '../Header/Header.js';

import { Router } from '../../router/Router.js';
import { CartPage } from '../CartPage/CartPage.js';
import { FavoritesPage } from '../FavoritesPage/FavoritesPage.js';
import { ProductsPage } from '../ProductsPage/ProductsPage.js';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage.js';

export class App extends Component {
    buildDOM() {
        const app = document.createElement('div');
        app.classList.add('container');

        app.append(new Header().buildDOM());
        app.append(new Router({
            mapper: [
                { path: '/', component: new ProductsPage() },
                { path: '/favorites', component: new FavoritesPage() },
                { path: '/cart', component: new CartPage() },
            ],
            errorComponent: new NotFoundPage(),
        }).buildDOM());
        app.append(new Footer().buildDOM());

        return app;
    }
}
