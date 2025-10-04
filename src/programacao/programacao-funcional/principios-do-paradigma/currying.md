# Currying

"Currificar" uma função significa reorganizar sua escrita para que a passagem de parâmetros seja definida gradualmente.

```javascript
// Versão padrão.
function op(a, b, c) {
    return a * (b - c)
}
console.log(op(4, 3, 1))

// Versão "curried".
function subcurried(a) {
    return function (b) {
        return function (c) {
            return a * (b - c)
        }
    }
}
console.log(subcurried(4)(3)(1))
```

```
8
8
```

Uma das vantagens de se utilizar versões /curried/ de funções é fomentar o **reuso** através da viabilização da **aplicação parcial**.

```javascript
// Versão "curried" com notação arrow.
const subcurried = (a) => (b) => (c) => a * (b - c)
console.log(subcurried(4)(3)(1))

// Reuso através da aplicação parcial da função.

const somar = (x) => (y) => subcurried(-1)(-x)(y)
console.log(somar(1)(1))

const subtrair = subcurried(1)
console.log(subtrair(5)(8))

const dobro = subcurried(-2)(0)
console.log(dobro(10))

const negativo = subcurried(1)(0)
console.log(negativo(11))
```

```
8
2
-3
20
-11
```
