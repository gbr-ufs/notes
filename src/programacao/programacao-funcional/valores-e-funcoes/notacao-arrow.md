# Notação Arrow

Em JavaScript, a **maneira mais intuitiva** para se representar funções como expressões se dá através da notação *arrow*.

## Exemplo

Crie uma função que calcula a área de uma elipse (contendo valor de \\( \pi \\) pré-definido).

<details>
\\[
areaEli(x, y, \pi = 3.14) = \pi xy
\\]

Nome da função: \\( areaEli \\)
Expressão de mapeamento: \\( (x, y, \pi = 3.14) \to \pi xy \\)

Em JavaScript:

```javascript
const areaEli = (x, y, pi = 3.14) => pi * x * y
```
</details>

## Notação de funções *arrow* em JavaScript

### Exemplo

Escreva uma função que retorne o valor de um número elevado à quarta potência. Essa função deve fazer use de uma outra que calcula o quadrado de um número qualquer.

<details>
***Algoritmo em pseudocódigo***

*De cima para baixo*

resultado \\( \to quarta(n) \\)

Subproblemas são gerados...

\\[
n = ?
quarta(n) = ?
\\]

...e resolvidos:

\\( n \\) é pré-definido ou fornecido pelo usuário

\\[
quarta = (x) \to quadrado(quadrado(x))
\\]

Novo subproblema é gerado...

\\[
quadrado(x) = ?
\\]

...e resolvido:

\\[
quadrado = (y) \to y ** 2
\\]

***Programa em JavaScript***

*De baixo para cima*

```javascript
const quadrado = (y) => y ** 2
const quarta = (x) => quadrado(quadrado(x))
const n = 3
resultado = quarta(n)

const textoQuarta = `Quarta potência de ${n} = ${resultado}.`
console.log(textoQuarta)
```

`Quarta potência de 3 = 81`
</details>

### Exemplo

Escreva um programa onde, dados o primeiro e o último sobrenome de uma pessoa qualquer, retorne-os em foram de citação bibliográfica conforme o exemplo:

Fulano Santos → Santos, F.

<details>
***Programa em JavaScript***

```javascript
const citar = (x, y) => `${y}, ${x[0]}.`
const nome = 'Albert'
const sobrenome = 'Einstein'
resultado = citar(nome, sobrenome)

const citacao = `Como citar ${nome} ${sobrenome}: ${resultado}`
console.log(citacao)
```

`Como citar Albert Einstein: Einstein, A.`
</details>
