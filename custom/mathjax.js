window.Mathjax = {
    loader: {load: ['[tex]/cancel']},
    tex: {packages: {'[+]': ['cancel']}}
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();
