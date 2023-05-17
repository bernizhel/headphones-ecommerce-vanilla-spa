/**
 * @typedef {string} LocaleString
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
 *  locales: LocaleString[];
 *  translation: Translation;
 * }} TranslationEntry
 */

/**
 * @type {TranslationEntry[]}
 */
export const translations = [
    {
        locales: ['ru', 'ru-RU'],
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
        locales: ['en', 'en-US'],
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
    {
        locales: ['es', 'es-ES'],
        translation: {
            favorites: 'Favoritos',
            cart: 'Carrito',
            contacts: 'Contactos',
            serviceConditions: 'Condiciones de servicio',
            wiredHeadphones: 'Auriculares con cable',
            wirelessHeadphones: 'Auriculares inalámbricos',
            buy: 'Añadir al carrito',
            total: 'Total',
            proceedToOrder: 'Proceder a la compra',
            notFound: 'Lo sentimos, la página que buscas no existe',
            backToProducts: 'volver a la página de productos',
        },
    },
];

export const DEFAULT_LOCALE = 'ru';
export const defaultTranslation = translations.find(
    (entry) => entry.locales.includes(DEFAULT_LOCALE));

/**
 * @param {LocaleString} locale
 * @returns {TranslationEntry}
 */
export const fetchTranslationEntry = (locale) => {
    return translations.find((entry) => entry.locales.includes(locale));
};
