# JavaScript

Linguagem multi-paradigma usada principalmente para o desenvolvimento web.

## Hello, World!

```javascript
// A partir de uma função.
function helloWorld() {
    return "Hello, World!";
}

console.log(helloWorld()); // Maneira de printar uma mensagem para o console.

// Diretamente.
console.log("Hello, World!");
```

```
Hello, World!
Hello, World!
```

## Comparação

O operador de comparação (`==`) verifica se duas variáveis possuem o mesmo valor, enquanto o operador de comparação estrito (`===`) faz o mesmo, mas adicionalmente verifica se dois valores são do mesmo tipo.

```javascript
const num = 0; // tipo "Number".
const big = 0n; // tipo "BigInt".

console.log(num == big); // true
console.log(num === big); // false
```

```
true
false
```
