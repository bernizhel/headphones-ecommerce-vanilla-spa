import { Component } from '../utils/render/Component.js';
import { $routerStore, changeRoute } from '../service/routerStore.js';

/**
 * @typedef {{
 *  mapper: {
 *    path: URLPath;
 *    component: Component;
 *  }[];
 *  defaultRoute?: URLPath;
 *  errorComponent?: Component;
 * }} RouterProps
 * @extends Component<RouterProps>
 */
export class Router extends Component {
    buildDOM() {
        return this.#tryRenderRoute($routerStore.getState().currentURL, this.props.defaultRoute);
    }

    /**
     * @param {URLPath} url
     * @param {URLPath} fallbackURL=
     * @return HTMLElement
     */
    #tryRenderRoute(url, fallbackURL) {
        try {
            return this.#renderRoute(url);
        } catch (ReferenceError) {
        }

        try {
            if (fallbackURL !== undefined) {
                changeRoute.call(fallbackURL);
                return this.#renderRoute(fallbackURL);
            }
        } catch (ReferenceError) {
        }

        return this.props.errorComponent.buildDOM();
    }

    /**
     * @param {URLPath} url path (route)
     * @returns {HTMLElement} rendered html corresponding to the url
     * @throws {ReferenceError} if there is no such a route
     */
    #renderRoute(url) {
        const mappedComponent = this.props.mapper.find((entry) => {
            return entry.path === url;
        })?.component;

        if (mappedComponent === undefined) {
            throw new ReferenceError('The given route is not processed by any component.');
        }

        return mappedComponent.buildDOM();
    }
}
