import { Component } from '../../utils/render/Component.js';
import {
    changeLocale,
    getLocales,
    getLocalizedTag,
} from '../../service/i18nStore.js';
import { changeRoute } from '../../service/routerStore.js';

export class Footer extends Component {
    buildDOM() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        footer.innerHTML = `
             <p class="footer__logo logo">QPICK</p>
                <div class="footer__catalog">
                    <a href="/favorites" class="footer__catalog_container-images style-text-regular">${ getLocalizedTag('favorites') }</a>
                    <a href="/cart" class="footer__catalog_container-cart style-text-regular">${ getLocalizedTag('cart') }</a>
                    <a href="https://github.com/bernizhel" class="footer__catalog_container-favorites style-text-regular">${ getLocalizedTag('contacts') }</a>
                </div>

                <div class="footer__translation">
                    <div class="footer__translation">
                        <p class="footer__translation-title style-text-regular">${ getLocalizedTag('serviceConditions') }</p>
                        <div class="footer__translation_container">
                            <img src="/images/footer/planet.svg" alt="" class="footer__translation-logo" />
                            <ul class="footer__translation-lang">
                                <li class="footer__translation-leng style-text-medium" data-locale="ru-RU">Рус</li>
                                <li class="footer__translation-leng style-text-medium" data-locale="en-US">Eng</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer__messengers">
                    <a href="" class="footer__messengers-VK"><img src="/images/footer/vk.svg" alt="" class="vk" /></a>
                    <a href="" class="footer__messengers-telegram"><img src="/images/footer/telegram.svg" alt="" class="telegram" /></a>
                    <a href="" class="footer__messengers-whatsApp"><img src="/images/footer/whatsapp.svg" alt="" class="whatsApp" /></a>
                </div>
        `;

        /**
         * @param {string} selector
         * @param {string} route
         */
        function changeRouteButtonHandler(selector, route) {
            footer.querySelector(selector)
                .addEventListener('click', (event) => {
                    event.preventDefault();
                    changeRoute.call(route);
                });
        }

        changeRouteButtonHandler('.footer__catalog_container-images', '/favorites');
        changeRouteButtonHandler('.footer__catalog_container-cart', '/cart');

        footer.querySelectorAll('[data-locale]')
            .forEach(element => {
                if (getLocales()
                    .includes(element.dataset[ 'locale' ])) {
                    element.classList.add('active');
                }
                element.addEventListener('click', (event) => changeLocale.call(event.target.dataset[ 'locale' ]));
            });

        return footer;
    }
}
