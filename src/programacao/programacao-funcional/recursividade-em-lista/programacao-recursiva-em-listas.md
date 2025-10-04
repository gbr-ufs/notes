# Programação recursiva em listas

## Padrão 1: realizar uma operação de redução numérica em uma lista de valores

### Exemplo

Escreva um programa para calcular a soma dos valores de uma lista. Ex: \\( \{3, 8, 20, 21, 34, 44\} \\).

<details>

***Formulação recursiva***

\\( soma(\{\}) = 0 \\)
\\( soma(\{a_{1}, ...a_{n}\}) = a_{1} + soma(\{...a_{n}\}) \\)

***Implementação em JavaScript***

```javascript
const soma = (lista) => {
    if (lista.length == 0) {
        return 0
    } else {
        const head = lista[0]
        const tail = lista.slice(1)
        return (head + soma(tail))n
    }
}
```

Versão com uso do já conhecido operador **spread** para listas.

```javascript
const soma = (lista) => {
    if (lista.length == 0) {
        return 0
    } else {
        const [x, ...xs] = lista
        return x + soma(xs)
    }
}
```

Versão com teste acerca de *valor indefinido* e *operador condicional ternário*

```javascript
const soma = ([x, ...xs]) => x === undefined ? 0 : x + soma(xs)
```

</details>

## Padrão 2: retornar o elemento de uma lista que atenda a um determinado critério

### Exemplo

Encontre o maior elemento de uma lista.

<details>

***Formulação recursiva***

\\( maior(\{\}) = vazia \\)
\\( maior(\{a_{1}\}) = a_{1} \\)
\\( maior(\{a_{1}, ...a_{n}\}) = a_{1} \\), se \\( a_[1} > maior(\{...a_{n}\}) \\)

***Implementação em JavaScript***

```javascript
const maior = ([x, ...xs]) => {
    if (x === undefined) {
        return 'Lista vazia'
    } else {
        return maiorAux([x, ...xs])
    }
}
const maiorAux = ([x, ...xs]) => {
    if (xs.length == 0) {
        return x
    } else {
        const maior = maiorAux([...xs])
        return (x > maior) ? x : maior
    }
}
```

</details>

## Padrão 3: realizar operações sobre elementos de uma lista, gerando uma nova lista.

### Exemplo

Inverta a ordem dos elementos de uma lista.

<details>

***Formulação recursiva***

\\( inverte(\{\}) = \{\} \\)
\\( inverte(\{a_{1}, ...a_{n}\}) = \{inverte(\{...a_{n}\}), a_{1}\} \\)

***Implementação em JavaScript***

```javascript
const inverte = ([x, ...xs]) =>
    x === undefined ? [] : [...inverte(xs), x]
```

</details>

### Exemplo

Duplique a presença de cada elemento de uma lista.

<details>

***Formulação recursiva***

\\( duplica(\{\}) = \{\} \\)
\\( duplica(\{a_{1} ...a_{n}\}) = \{a_{1}, a_{1}, ...duplica(\{...a_{n}\})\} \\)

***Implementação em JavaScript***

```javascript
const duplica = ([x, ...xs]) =>
    x === undefined ? [] : [x, x, ...duplica(xs)]
```

</details>

## Padrão 4: verificar se uma lista possui um elemento que atenda a uma dada propriedade/característica

### Exemplo

Verifique se uma lista possui um determinado elemento.

<details>

***Formulação recursiva***
\\( elem(e, \{\}) = F \\)
\\( elem(e, \{a_{1} ...a_{2}\}) = (e = a_{1}) \lor elem(e, \{...a_{n}\}) \\)

***Implementação em JavaScript***

```javascript
const elem = (e, [x, ...xs]) => {
    if (x === undefined) {
        return false
    } else {
        return (e === x) || elem(e, [...xs])
    }
}
```

</details>

## Padrão 5: verificar se a lista atende a uma determinada propriedade

### Exemplo

Teste se uma string consiste num *palíndromo*.

<details>

***Formulação recursiva***

\\( palindromo('') = T \\)
\\( palindromo('char1') = T \\)
\\( palindromo('char_{1}...meio...char_{n}') = (char_{1} = char_{n}) \land palindromo('meio') \\)

***Implementação em JavaScript***

```javascript
const palindromo = (str) => {
    if (str.length < 2) {
        return true
    } else {
        const primeiro = str.slice(0, 1)
        const ultimo = str.slice(-1)
        const meio = str.slice(1, -1)
        return (primeiro === ultimo) && palindromo(meio)
    }
}
```

</details>
