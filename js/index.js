function init() {
    import('./global/global.header.burgermenu.js');
    import('./index/index.slider-albums.js');
    import('./index/index.subscribe-section.js');
    import('./about-us/about-us.slider-facts.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});