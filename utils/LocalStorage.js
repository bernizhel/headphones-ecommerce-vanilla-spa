/**
 * @template P
 */
export class LocalStorage {
    /** @param {string} */ #key;

    /**
     * @param {string} key
     */
    constructor(key) {
        this.#key = key;
    }

    /**
     * @returns {P} the data stored
     * @throws {ReferenceError} if the key is absent in sessionStorage
     * @throws {TypeError} if the fetched data is not parsable in JSON
     */
    get() {
        const data = localStorage.getItem(this.#key);
        if (data === null) {
            throw new ReferenceError('The searchable key is absent.');
        }

        let parsedData;
        try {
            parsedData = JSON.parse(data);
        } catch (SyntaxError) {
            throw new TypeError(
                'Could not retrieve sessionStorage\'s item. It is possible that data has corrupted format to be parsed with JSON.',
            );
        }

        return parsedData;
    }

    /**
     * @returns {boolean}
     */
    isSet() {
        const data = localStorage.getItem(this.#key);
        return data !== null;
    }

    /**
     * @param {P} value
     */
    set(value) {
        localStorage.setItem(this.#key, JSON.stringify(value));
    }
}
