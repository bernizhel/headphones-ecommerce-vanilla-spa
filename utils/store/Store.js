/**
 * @template S
 * @template P
 * @typedef {(state: S, payload: P) => S} StoreEventCallback
 */

/**
 * @template S
 */
export class Store {
    /** @type {S} */ #state;
    /** @type {function(): S} */ #getInitialState;

    /**
     * @param {function(): infer S} getInitialState
     */
    constructor(getInitialState) {
        this.#getInitialState = getInitialState;
    }

    init() {
        this.#state = this.#getInitialState();
    }

    /**
     * @template P
     * @param {import('./StoreEvent').StoreEvent<P>} storeEvent
     * @param {StoreEventCallback<infer S, P>} storeEventCallback
     * @returns {typeof this}
     */
    on(storeEvent, storeEventCallback) {
        storeEvent.addSubscriberCallback((payload) => {
            this.#state = storeEventCallback(this.#state, payload);
        });

        return this;
    }

    /**
     * @returns {S}
     */
    getState() {
        return this.#state;
    }
}
