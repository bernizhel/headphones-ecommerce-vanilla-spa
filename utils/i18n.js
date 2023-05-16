/**
 * @returns {string} user's locale in BCP 47 format
 */
export function getUserLocale() {
    if (navigator.languages !== undefined) {
        return navigator.languages[0];
    }

    return navigator.language;
}
