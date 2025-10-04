# Operações de Redução

**Redução** é o termo genérico usado para representar qualquer **operação que aje sobre todos os elementos** em conjunto gerando algum resultado unitário; ou seja, você **reduz** a quantidade de elementos para um único por meio de uma operação.

## Função `reduce`

Em JavaScript, fazemos essa redução com uso de uma função pré-definida `reduce(f, i)` onde `f` é a função definida que representa a operação a ser efetuada sobre todos os elementos e `i` é o **valor inicial** a ser considerado na operação de redução.

> **Observação**
> O argumento `i` pode ser omitido em alguns casos.

Por sua vez, a função `f`, além do paraâmetro usual, usa **um acumulador** `acc`. Esse parâmetro é importante para armazenar as parciais do processo de acumulação que se inicia a partir do valor inicial `i` indicado.

### Exemplo

Programa para somar os valores de toda a cesta de produtos a serem comprados.

<details>

```javascript
somar = (acc, x) => acc + x
const somatorio = (lista) => lista.reduce(somar)
const listaProdutosR$ = [10.60,8.50,5.55,6.40,41.00,23.05,19.90,15.90,22.10,2.75]
const resultado = somatorio(listaProdutosR$)
console.log(resultado)
```

`155.75`

</details>

### Exemplo

Programa para gerar uma sigla a partir do nome de uma empresa/instituição.

<details>

```javascript
const nomes = ['Organização', 'Mundial', 'Saúde']

const sigla = (acc, x) => acc + x[0]
console.log(nomes.reduce(sigla, ''))
```

`OMS`

</details>

### Exemplo

Programa para contar o número de letras de uma lista de palavras.

<details>

```javascript
const nomes = ['Organização', 'Mundial', 'Saúde']

const numLetras = (acc, x) => acc + x.length
console.log(nomes.reduce(numLetras, 0))
```

`23`

</details>
