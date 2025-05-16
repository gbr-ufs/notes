window.Mathjax = {
    loader: {load: ['[tex]/cancel']},
    startup: {
        // See: <https://github.com/mathjax/MathJax/issues/2312>
        // Thanks @dvpc <https://github.com/dpvc>
        ready() {
            Mathjax.startup.defaultReady();
            Mathjax.startup.document.inputJax[0].preFilters.add(({math}) => {
                if (math.math.match(/\\\\/)) {
                    math.math = `\\displaylines{${math.math}}`;
                }
            });
        }
    }
    tex: {packages: {'[+]': ['cancel']}}
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();
