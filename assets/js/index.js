function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Vite with HMR';
    return element;
}
document.body.appendChild(component());
