/**
 * @param {HTMLElement} root
 * @param {Component} component
 */
export function render(root, component) {
    root.innerHTML = '';
    root.append(component.buildDOM());
}
