import { updateUI } from '../render/config.js';

/**
 * @template CallbackPayload
 * @typedef {(payload: CallbackPayload) => void} ProcessedStoreEventCallback
 */

/**
 * @template P
 */
export class StoreEvent {
    /** @type {ProcessedStoreEventCallback<P>[]} */ #subscriberCallbacks = [];

    /**
     * @param {P} payload
     */
    call(payload = {}) {
        this.#subscriberCallbacks.forEach((callback) => callback(payload));
        updateUI();
    }

    /**
     * @param {ProcessedStoreEventCallback<P>} callback
     */
    addSubscriberCallback(callback) {
        this.#subscriberCallbacks.push(callback);
    }
}
