import { LocalStorage } from '../utils/LocalStorage.js';
import { Store } from '../utils/store/Store.js';
import { StoreEvent } from '../utils/store/StoreEvent.js';

/**
 * @typedef {import('../api/products.js').Product[]} FavoritesState
 */

/** @type {StoreEvent<Product>} */
export const addToFavorites = new StoreEvent();

/** @type {StoreEvent<ProductID>} */
export const removeFromFavorites = new StoreEvent();

/** @type {StoreEvent<FavoritesState>} */
export const updateFavoritesStore = new StoreEvent();

const FAVORITES_KEY = 'favorites';
/** @type {LocalStorage<FavoritesState>} */
const favoritesStorage = new LocalStorage(FAVORITES_KEY);

/**
 * @type {Store<FavoritesState>}
 */
export const $favoritesStore = new Store(getInitialState)
    .on(addToFavorites, handleAddToFavorites)
    .on(removeFromFavorites, handleRemoveFromFavorites)
    .on(updateFavoritesStore, handleUpdateFavoritesState);

/**
 * @returns {FavoritesState}
 */
function getInitialState() {
    if (favoritesStorage.isSet()) {
        return favoritesStorage.get();
    }

    const state = [];

    favoritesStorage.set(state);
    return state;
}

/**
 * @param {FavoritesState} state
 * @param {Product} product
 * @returns {FavoritesState}
 */
function handleAddToFavorites(state, product) {
    if (state.find(item => item.id === product.id)) {
        return state;
    }

    const newState = [
        ...state,
        product,
    ];
    favoritesStorage.set(newState);
    return newState;
}

/**
 * @param {FavoritesState} state
 * @param {ProductID} productId
 * @returns {FavoritesState}
 */
function handleRemoveFromFavorites(state, productId) {
    const newState = state.filter(item => item.id !== productId);
    favoritesStorage.set(newState);
    return newState;
}

/**
 * @returns {FavoritesState}
 */
function handleUpdateFavoritesState() {
    return favoritesStorage.get();
}

/**
 * @returns {number}
 */
export function getFavoritesCount() {
    return $favoritesStore.getState().length;
}

/**
 * @param {ProductID} productId
 * @returns {boolean}
 */
export function isFavorite(productId) {
    return $favoritesStore.getState()
        .find(item => item.id === productId) !== undefined;
}