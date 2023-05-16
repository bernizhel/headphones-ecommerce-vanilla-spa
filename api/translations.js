/**
 * @typedef {string} Locale
 */

/**
 * @typedef {{
 *  [key in
 *    "favorites" |
 *    "cart" |
 *    "contacts" |
 *    "serviceConditions" |
 *    "wiredHeadphones" |
 *    "wirelessHeadphones" |
 *    "buy" |
 *    "total" |
 *    "proceedToOrder" |
 *    "notFound" |
 *    "backToProducts"
 *  ]: string;
 * }} Translation
 */

/**
 * @typedef {{
 *  locale: Locale;
 *  translation: Translation;
 * }} TranslationEntry
 */

/**
 * @type {TranslationEntry[]}
 */
export const translations = [
    {
        locale: 'ru-RU',
        translation: {
            favorites: 'Избранное',
            cart: 'Корзина',
            contacts: 'Контакты',
            serviceConditions: 'Условия сервиса',
            wiredHeadphones: 'Наушники',
            wirelessHeadphones: 'Беспроводные наушники',
            buy: 'Купить',
            total: 'Итого',
            proceedToOrder: 'Перейти к оформлению',
            notFound: 'Извините, но данной страницы не существует',
            backToProducts: 'Вернуться на главную',
        },
    },
    {
        locale: 'en-US',
        translation: {
            favorites: 'Favorites',
            cart: 'Cart',
            contacts: 'Contacts',
            serviceConditions: 'Service conditions',
            wiredHeadphones: 'Wired Headphones',
            wirelessHeadphones: 'Wireless Headphones',
            buy: 'Add to cart',
            total: 'Total',
            proceedToOrder: 'Proceed to order',
            notFound: 'Sorry, the page you are looking for is absent',
            backToProducts: 'Back to the products page',
        },
    },
];

/**
 * @param {Locale} locale
 * @returns {TranslationEntry}
 */
export const fetchTranslation = (locale) => {
    return translations.find((entry) => entry.locale === locale);
};
