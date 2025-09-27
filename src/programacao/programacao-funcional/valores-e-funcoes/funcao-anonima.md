# Função Anônima

É quando usamos uma definição de função **sem atribuir a ela qualquer nome**, só no momento. Útil quando estamos interagindo com uma função que exige outra como argumento ou quando precisamos da maleabilidade de uma função.

## Exemplo

Escreva um programa para calcular o maior e o menor valor real das raízes de uma equação de segundo grau. A expressão genérica para cálculo das raízes é dada por \\( \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a} \\).

<details>

```javascript
const raiz = (a, b, c, f) => {
    const delta = (b * b) - (4 * a * c)
    if (delta < 0) {
        return undefined
    }
    const pos = ((-b) + Math.sqrt(delta)) / (2 * a)
    const neg = ((-b) - Math.sqrt(delta)) / (2 * a)
    // A função é aplicada aqui.
    return f(pos, neg)
}

const a = 1
const b = -5
const c = 6

// Executa a função raiz e retorna qual delas é a maior.
const maiorRaiz = raiz(a, b, c, (x, y) => (x >= y ? x : y))
// Executa a função raiz e retorna qual delas é a menor.
const menorRaiz = raiz(a, b, c, (x, y) => (x <= y ? x : y))

const texto = (x, y) => x == undefined ? 'Não há raizes reais.' : `As raizes da equação são ${x} e ${y}.`

console.log(texto(menorRaiz, maiorRaiz))
```

`As raizes da equação são 2 e 3.`

</details>
