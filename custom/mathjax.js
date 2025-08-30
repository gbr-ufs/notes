window.Mathjax = {
    loader: {load: ['[tex]/cancel']},
    tex: {packages: {'[+]': ['cancel']}}
};

(function () {
    let script = document.createElement('script');

    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4.0.0/tex-mml-chtml.js';
    script.async = true;

    document.head.appendChild(script);
})();
