# Enriquecendo sua solução

Algo importante na programação é a *refatoração*, o ato de reescrever código para deixá-lo conciso.

## Exemplo

Retomando o exemplo anterior, poderíamos...

...fazer uso direto das funções no console:

```javascript
console.log(soma(areaRet(6.1, 4.4), areaEli(3.0, 5.3)))
```

...fazer inicialização de parâmetros *na definição* da função:

```javascript
function areaEli(x, y, pi=3.14) {
    return pi * x * y
}
```

...e omitir o argumento \\( \pi \\) no uso:

```javascript
console.log(soma(areaRet(6.1, 4.4), areaEli(3.0, 5.3)))
```

...ou incluir um novo valor de \\( \pi \\) no uso:

```javascript
console.log(soma(areaRet(6.1, 4.4), areaEli(3.0, 3.14159265)))
```

E poderíamos compor o texto usando [backticks ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (várias linguagens possuem ferramentas parecidas):

```javascript
const textoRet = `retângulo de lados ${l1} e ${l2}`
const textoEli = `elipse de raios ${r1} e ${r2}`
const resultado = soma(areaRet(6.1, 4.40), areaEli(3.0, 5.3))
const textoArea = `A soma das áreas de um ${textoRet} e de uma ${textoEli} é igual a ${resultado}.`
console.log(textoArea)
```
