/** @type {function(): void} */
let applicationRender = null;

/**
 * @param {function(): void} render
 */
export function configureUpdateUI(render) {
    applicationRender = render;
}

export function updateUI() {
    if (applicationRender === null) {
        throw new ReferenceError('There is no updateUI render function configured.');
    }

    applicationRender();
}
