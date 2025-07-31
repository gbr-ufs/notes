(function () {
    let link = document.createElement('link');
    let script = document.createElement('script')

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'http://tikzjax.com/v1/fonts.css');

    script.src = 'https://tikzjax.com/v1/tikzjax.js';
    script.async = true;

    document.head.appendChild(link);
    document.head.appendChild(script);
})();
