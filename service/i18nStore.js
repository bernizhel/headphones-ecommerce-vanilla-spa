import {
    defaultTranslation,
    fetchTranslationEntry,
} from '../api/translations.js';
import { getUserLocales } from '../utils/i18n.js';
import { LocalStorage } from '../utils/LocalStorage.js';
import { Store } from '../utils/store/Store.js';
import { StoreEvent } from '../utils/store/StoreEvent.js';

/**
 * @typedef {import('../api/translations.js').TranslationEntry} I18nState
 */

/** @type {StoreEvent<import('../api/translations.js').Locale>} */
export const changeLocale = new StoreEvent();

/**
 * @type {Store<I18nState>}
 */
export const $i18nStore = new Store(getInitialState).on(changeLocale, handleChangeLocale);

/** @type {LocalStorage<I18nState>} */
const i18nStorage = new LocalStorage('i18n');

/**
 * @returns {I18nState}
 */
function getInitialState() {
    if (i18nStorage.isSet()) {
        return i18nStorage.get();
    }

    const userLocales = getUserLocales();
    let state;
    for (const userLocale of userLocales) {
        state = fetchTranslationEntry(userLocale);
        if (state !== undefined) {
            break;
        }
    }

    if (state === undefined) {
        state = defaultTranslation;
    }

    document.documentElement.setAttribute('lang', userLocales[ 0 ]);
    i18nStorage.set(state);
    return state;
}

/**
 * @param {I18nState} state
 * @param {import('../api/translations.js').Locale} newLocale
 * @returns {I18nState}
 */
function handleChangeLocale(state, newLocale) {
    const newState = fetchTranslationEntry(newLocale);
    document.documentElement.setAttribute('lang', newLocale);
    i18nStorage.set(newState);
    return newState;
}

/**
 * @param {string} tag
 * @returns {string} translated text by given tag
 */
export function getLocalizedText(tag) {
    return $i18nStore.getState().translation[ tag ] || tag;
}

/**
 * @param {number} amount
 * @param {NumberFormatOptions} options?
 * @returns {string} localized currency by given amount
 */
export function getLocalizedCurrency(amount, options = {}) {
    return new Intl.NumberFormat($i18nStore.getState().locales[ 0 ], {
        style: 'currency',
        currency: 'RUB',
        currencyDisplay: 'symbol',
        maximumFractionDigits: 0,
        ...options,
    }).format(amount);
}

/**
 * @param {number} amount
 * @param {NumberFormatOptions} options?
 * @returns {string} localized number by given amount
 */
export function getLocalizedNumber(amount, options = {}) {
    return new Intl.NumberFormat($i18nStore.getState().locales[ 0 ], options).format(amount);
}

/**
 * @returns {import('../api/translations.js').Locale[]}
 */
export function getLocales() {
    return $i18nStore.getState().locales;
}
