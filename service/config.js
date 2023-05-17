import { $routerStore } from './routerStore.js';
import { $i18nStore } from './i18nStore.js';
import { $cartStore } from './cartStore.js';
import { $favoritesStore } from './favoritesStore.js';
import { $productsStore } from './productsStore.js';

/** @type {import('../utils/store/Store.js').Store[]} */
const stores = [
    $routerStore, $i18nStore, $cartStore, $favoritesStore, $productsStore,
];

export function initStores() {
    stores.forEach((store) => store.init());
}
