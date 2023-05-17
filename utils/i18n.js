/**
 * @returns {string[]} user's locale in BCP 47 format
 */
export function getUserLocales() {
    if (navigator.languages !== undefined) {
        return navigator.languages;
    }

    return [navigator.language];
}
