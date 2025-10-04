# Funções de Alta Ordem

Funções que aceitam outras definições de funções como argumento de entrada e/ou retornam novas definições de funções como resultado de sua execução.

```javascript
function somar(a, b, c) {
    return a + b +c
}

function multi(a, b) {
    return a * b
}

// Permite passar outra função como argumento de entrada: fn
function executar(fn, ...params) {
    // Retorna uma nova função como saída.
    return function(textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma é')
const r2 = executar(multi, 30, 40)('O resultado da multiplicação é')

console.log(r1)
console.log(r2)
```

```
O resultado da soma é 15!
O resultado da multiplicação é 1200!
```
