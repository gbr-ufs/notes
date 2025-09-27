# Definição de função como retorno

Uma função **pode ser retornada como resultado** do uso de outra função.

Com isso, podemos separar os parâmetros de uma função, para deixá-los mais modulares. Uma função que usa esse método é chamada de **função parcial**, pois apenas um de seus parâmetros está definido.

## Exemplo

Defina funções para calcular o **quadrado**, o **cubo** e a **raíz quadrada** de um número passado como argumento reaproveitando uma definição de função genérica chamada **expoente**.

<details>

***Programa em JavaScript***

```javascript
// (e) é uma função, (base) é outra função.
const expoente = (e) => (base) => base ** e
const quadrado = expoente(2) // Função parcial.
const cubo = expoente(2) // Função parcial.
const raizq = expoente(1/2) // Função parcial.

console.log(quadrado(10))
console.log(cubo(3))
console.log(raizq(81))
```

```
100
9
9
```

</details>
