# Closure

Relaciona-se ao conceito de **escopo**. Escopo refere-se ao "mundo" em que uma função "vive" e, portanto, consegue enxergar seus elementos.

```javascript
// Este arquivo representa o Estado.
const x = 3

function cidade() {
    const x = 97
    function bairro(n) {
        return x + n
    }

    return bairro
}

// Não funciona: bairro está fora do escopo Estado.
// console.log(bairro(5))

// Funciona: cidade está dentro do escopo Estado.
console.log(cidade()(5))

module.exports = cidade()
```

`102`

**Closure** é qunado uma função **"lembra"** de seu **escopo léxico**, ou seja, o mundo em que ela foi definida/escrita. Logo, mesmo que a função seja executada fora desse escopo léxico, ela irá priorizar suas "origens".

```javascript
// Arquivo que representa um novo Estado.

const bairro = require('./principios10_closureEscopo')

const x = 1000

// O valor de x acima não influencia
// porque o bairro "lembra" de suas origens
console.log(bairro(10))
```

`107`
