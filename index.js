import { initStores } from './service/config.js';
import { configureUpdateUI, updateUI } from './utils/render/config.js';
import { render } from './utils/render/render.js';
import { App } from './components/App/App.js';

const app = new App();
configureUpdateUI(() => render(document.body, app));
initStores();
updateUI();
