import { Component } from '../../utils/render/Component.js';
import {
    getLocalizedNumber,
    getLocalizedText
} from '../../service/i18nStore.js';
import { changeRoute } from '../../service/routerStore.js';

export class NotFoundPage extends Component {
    buildDOM() {
        const notFoundPage = document.createElement('main');
        notFoundPage.classList.add('error');

        notFoundPage.innerHTML = `
            <section class="error__container">
                <p class="error__title text-SemiBold">${ getLocalizedNumber(404) }</p>
                <p class="error__subtitle text-SemiBold">${ getLocalizedText('notFound') }</p>
                <button class="error__to_home text-SemiBold">${ getLocalizedText('backToProducts') }</button>
            </section> 
        `;

        notFoundPage.querySelector('.error__to_home')
            .addEventListener('click', () => changeRoute.call('/'));

        return notFoundPage;
    }
}
