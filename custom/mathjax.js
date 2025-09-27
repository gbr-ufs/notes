window.Mathjax = {
    loader: {load: ['[tex]/cancel', '[tex]/ams']},
    tex: {packages: {'[+]': ['cancel', 'ams']}}
};

(function () {
    let script = document.createElement('script');

    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-mml-chtml.js';
    script.async = true;

    document.head.appendChild(script);
})();
