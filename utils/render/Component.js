/**
 * @template {object} T
 */
export class Component {
    /**
     * @param {T} props
     */
    constructor(props = {}) {
        this.props = props;
    }

    /**
     * @returns {HTMLElement} built DOM elements
     */
    buildDOM() {
        return document.createElement('');
    }
}
