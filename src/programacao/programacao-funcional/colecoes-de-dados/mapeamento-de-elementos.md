# Mapeamento de elementos

Como trabalhar com todos os elementos de uma função de forma dinâmica (não vamos saber o tamanho de uma lista toda hora..)? Existem algumas opções.

Quando uma solução planejada consituir de algum tipo de **transformação de cada valor original para um novo valor**, gerando uma nova lista de valores modificados, temos um caso de **mapeamento**.

## Função `map`

Em JavaScript, fazemos esse mapeamento com uso de uma função pré-definida `map(f)` onde `f` é a função definida que representa a operação de transformação a ser aplicada a cada elemento.

### Exemplo

Programa para aplicar um desconto de 10% em uma lista de produtos.

<details>
```javascript
const desconto = (desc) => (lista) => lista.map((x) => x - x * (desc) / 100)
const desconto10 = desconto(10)
const listaProdutosR$ = [10.60, 8.50, 5.55, 6.40, 41.00, 23.05, 19.90, 15.90, 22.10, 2.75]
const resultado = desconto10(listaProdutosR$)

console.log(resultado)
```

`[ 9.54, 7.65, 4.995, 5.760000000000001, 36.9, 20.745, 17.91, 14.31, 19.89, 2.475 ]`
</details>

### Exemplo

Programa para calcular o triplo de cada elemento de uma lista.

<details>
```javascript
const valores = [3, 4, -2, 0, 1, 40]
const triplo = valores.map((x) => 3 * x)

console.log(triplo)
```

`[9, 12, -6, 0, 3, 120 ]`
</details>

### Exemplo

Programa para extrair a inicial de cada nome de uma lista.

<details>
```javascript
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = (texto) => texto[0]
const iniciais = nomes.map(primeiraLetra)

console.log(iniciais)
```

`[ "A", "B", "G", "L", "R" ]`
</details>

### Exemplo

Programa para adicionar um sobrenome a cada nome de uma lista.

<details>
```javascript
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const addSobrenome = (sobrenome) => (nome) => `${nome} ${sobrenome}`
const nomeCompleto = nomes.map(addSobrenome('Costa'))

console.log(nomeCompleto)
```

`[ 'Ana Costa', 'Bia Costa', 'Gui Costa', 'Lia Costa', 'Rafa Costa' ]
</details>
