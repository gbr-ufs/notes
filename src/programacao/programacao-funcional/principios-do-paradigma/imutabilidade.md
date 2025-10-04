# Imutabilidade

Propriedade onde os elementos não podem ter seu valor alterado como resultado de qualquer ação por parte de expressões ou aplicação de funções.

Um tipo de elemento que é usualmente mutável em grande parte das linguagens de programação são os /arrays/ (listas).

## Solução: uso de cópia

Elementos **internos** de uma lista são mutáveis, apesar do uso do `const`. Evita-se o problema efetuando a operação desejada numa cópia da lista original.

```javascript
// Elementos da lista são mutáveis, apesar do uso do const.
const lista1 = [3, 1, 7, 9, 4, 6]
console.log(`Mutável lista: ${lista1}`)

const lista2 = lista1.sort((a, b) => a - b)
console.log(`lista (ordenada): ${lista2}`)

console.log(`lista (original): ${lista1}`)

// Corrigindo com cópia de elemento.
const lista3 = [3, 1, 7, 9, 4, 6]
console.log(`Imutável lista: ${lista3}`)

const lista4 = [...lista3].sort((a, b) => a - b)
console.log(`lista (ordenada): ${lista4}`)

console.log(`lista (original): ${lista3}`)
```

```
Mutável lista: 3,1,7,9,4,6
lista (ordenada): 1,3,4,6,7,9
lista (original): 1,3,4,6,7,9
Imutável lista: 3,1,7,9,4,6
lista (ordenada): 1,3,4,6,7,9
lista (original): 3,1,7,9,4,6
```

## Proteção da lista com uso de congelamento

Uma alternativa à cópia é realizar o congelamento da lista através da função pré-definida `Object.freeze()`.

```javascript
// Object.freeze para congelar valores de uma lista.
const listacongelada = Object.freeze([3, 1, 7, 9, 4, 6])

// Tentativa de ordenar sem uso de cópia.
const listaordenada = listacongelada.sort((a, b) => a - b)
console.log(listacongelada, listaordenada)

// Com uso de cópia funciona.
const listaordenada = [...listacongelada].sort((a, b) => a - b)
console.log(listacongelada, listaordenada)

// Acessar partes da lista congelada funciona normalmente.
const pedaco = listacongelada.slice(3)
console.log(pedaco, listacongelada)
```

> **Observação**
> Operações com `map`, `filter` e `reduce` não causam problemas com o princípio da imutabilidade pois essas operações geram cópias da lista original como resultado.

## Imutabilidade para registros

Outra estrutura que sore com esse aspecto são os *registros* (ou *objetos*).

```javascript
const pessoa = {
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: {
        rua: 'B',
        num: 306
    }
}

// Cópia por REFERÊNCIA: mutável!
const outro = pessoa

outro.nome = 'Beltrano'
outro.altura = 1.75

console.log(outro)
console.log(pessoa)
```

### Solução: congelamento e cópia por valor

```javascript
const pessoa = Object.freeze({
    nome: 'Fulano',
    altura: 1.70,
    cidade: 'Aracaju',
    endereco: Object.freeze({
        rua: 'B',
        num: 306
    })
})

// Alteração não efetuada: excelente!
const outro = pessoa
outro.nome = 'Beltrano'
outro.altura = 1.75
console.log('Primeira tentativa: não altera')
console.log(outro)
console.log(pessoa)

// Cópia por VALOR.
const maisoutro = {...pessoa}
maisoutro.nome = 'Beltrano'
maisoutro.altura = 1.75
console.log('\nSegunda tentativa: ok!')
console.log(maisoutro)
console.log(pessoa)
```
