# Programação Funcional

Segue o modelo das funções matemáticas.

## Imutabilidade

Por padrão, uma variável, mesmo que modificada em uma função, mantém o mesmo valor.

<details>

```javascript
const variavel = 10;

// Divide um número por 2.
function divideByTwo(num) {
    return num / 2;
}

console.log(divideByTwo(variavel));
// Mesmo que `variavel` tenha sido modificada na função, o seu valor se mantém.
console.log(variavel);
```

```
5
10
```

</details>

## Determinismo

Dado um mesmo argumento, uma função deve sempre produzir o mesmo resultado.

```javascript
// Soma um número com 2.
function plusTwo(num) {
    return num + 2;
}
```
