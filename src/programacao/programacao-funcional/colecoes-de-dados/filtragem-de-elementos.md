# Filtragem de Elementos

Listas podem ser filtradas, retornando somente os elementos que queremos (aqueles que se encaixam a um critério definido).

## Função `filter`

Em JavaScript, fazemos essa filtragem com uso de uma função pré-definida `filter(f)` onde `f` é a função definida que representa o critério de seleção de cada elemento.

### Exemplo

Programa para selecionar produtos que custem menos que R$15.

<details>

```javascript
const menorQue = (limite) => (lista) => lista.filter((x) => x < limite)
const menorQue15 = menorQue(15)
const listaProdutosR$ = [10.60, 8.50, 5.55, 6.40, 41.00, 23.05, 19.90, 15.90, 22.10, 2.75]
const resultado = menorQue15(listaProdutosR$)
console.log(resultado)
```

`[ 10.6, 8.5, 5.55, 6.4, 2.75 ]`

</details>

### Exemplo

Programa para selecionar os nomes que começam com a letra "A".

<details>

```javascript
const nomes = ['Felipe', 'Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

const filtroLetra = (letra) => (texto) => texto[0] == letra
const primeiraLetraA = filtroLetra('A')
console.log(nomes.filter(primeiraLetraA))
```

`[ "Ana"< "Adele", "Adam" ]`

</details>

### Exemplo

Programa para selecionar os nomes com mais de 4 letras.

<details>

```javascript
const nomes = ['Felipe', 'Ana', 'Bia', 'Adele', 'Gui', 'Adam', 'Rafa', 'Maria']

const filtroLetra = (letra) => (texto) => texto[0] == letra
const primeiraLetraA = filtroLetra('A')
console.log(nomes.filter(primeiraLetraA))

const tamanhoMaiorQue = (n) => (texto) => texto.length > n
const tamanhoMaiorQue4 = tamanhoMaiorQue(4)
console.log(nomes.filter(tamanhoMaiorQue4))
```

```
[ "Ana", "Adele", "Adam" ]
[ "Felipe", "Adele", "Maria" ]
```

</details>
