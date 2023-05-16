/**
 * @typedef {URL | string} URLPath
 */

/**
 * @returns {URLPath} user's current URL
 */
export function getCurrentURL() {
    return window.location.pathname;
}

/**
 * @param {URLPath} url
 */
export function pushToHistory(url) {
    window.history.pushState({}, '', url);
}
