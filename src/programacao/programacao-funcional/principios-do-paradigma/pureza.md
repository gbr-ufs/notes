# Pureza

Uma função **pura** é uma função em que o valor de retorno é determinado **apenas** por seus valores de entrada, sem efeitos colaterais observáveis.

## Constantes globais vs. locais vs. parâmetros

Uso de constantes definidas globalmente no código gera funções *impuras* e *instáveis*.

```javascript
// Constante global.
const PI = 3.141592

// Impura: se alguém modificar o valor de PI,
// a mesma função gerará um valor diferente.
function areaCirc(raio) {
    return raio * raio * PI
}
console.log(`Impura: ${areaCirc(10)}`)
```

`Impura: 314.1592`

Uso de constantes pré-definidas pela própria linguagem gera funções *impuras*, porém, *estáveis*.

```javascript
// Impura, mas estável.
// Modificar o valor de Math.PI é bem mais raro.
function areaCirc2(raio) {
    return raio * raio * Math.PI
}
console.log(`Impura estável: ${areaCirc2(10)}`)
```

`Impura estável: 314.1592653589793`

Constante definida na própria função promove *pureza*.

```javascript
// Pura: depende apenas dos argumentos passados.
// Usa parâmetros inicializados.
function areaCirc3(raio, pi=3.14) {
    return raio * raio * pi
}
console.log(`Pura param: ${areaCirc3(10)}`)
console.log(`Pura param: ${areaCirc3(10, 3.141592)}`)
console.log(`Pura param: ${areaCirc3(10, Math.PI)}`)

// Pura: depende apenas dos argumentos passados.
// Usa constante local.
function areaCirc4(raio) {
    const PI = 3.14

    return raio * raio * PI
}
console.log(`Pura local: ${areaCirc4(10)}`)
```

```
Pura param: 314
Pura param: 314.1592
Pura param: 314.1592653589793
Pura local: 314
```

## Valores aleatórios

Função com geração aleatória é naturalmente impura. A cada execução, o resultado será diferente.

```javascript
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
```

```
7236
6080
1722
7450
4254
```

## Efeitos colaterais observáveis

Alterar valores fora do escopo da função fere o paradigma.

```javascript
let qtde = 0

// Impura
function somar(a, b) {
    qtde++ // efeitos colaterais observáveis.
    return a + b
}

// Impura
function imprimeQtde(valor) {
    console.log(`Qtde: ${valor}`)
}

imprimeQtde(qtde)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
imprimeQtde(qtde)
```

```
Qtde: 0
99
99
99
99
99
Qtde: 5
```
