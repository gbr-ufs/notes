# Programação Funcional

Prioriza o [conceito matemático de funções](../../../fem/funcoes.md) na hora de escrever os códigos. A ideia é pensar no **algoritmo** como sendo uma grande e única função por uma **combinação** de várias outras pequenas **funções**, cada uma resolvendo uma parte do problema.

## Organizando o pensamento computacional

> [!NOTE]
> Essa é apenas a sugestão do professor Hendrik.
> Codifique da maneira que achar comfortável.
> Mas geralmente você vai precisar seguir esses passos.

1. Identifique o problema principal a ser tratado.
2. Identifique sub-problemas dos quais aquele depende.
3. Provenha algoritmos de solução para todos.
4. Codifique as soluções.

Ao seguir os passos 1, 2 e 3, estaremos redigindo a função principal no topo das anotaçẽos e seguindo para "baixo" escrevendo as sub-funções necessárias.

Entretanto, ao codificarmos as funções, precisamos inverter essa ordem, uma vez que o compilador precisa conhecer de antemão as funções que serão utilizadas.

Na nomenclatura do professor Hendrik, algoritmos são elaborados **de cima para baixo**, e em seguida o código **de baixo pra cima**.

### Exemplo

Crie um programa que calcule a soma das áreas de duas figuras geométricas distintas: um retângulo e uma elipse.

<details>
***Algoritmo Visual***
![Desenho de computador simples mostrando um retângulo à esquerda, um operador de soma no meio, e uma elipse na direita. Em baixo das figuras, temos as fórmulas de suas áreas.](https://github.com/hendrikdcomp/pf/blob/main/assets/figs/func02.png?raw=true)

***Algoritmo em pseudocódigo***

*De cima para baixo*

resultado \\( \to soma(a1, a2) \\)

a1 \\( \to areaRet(l1, l2) \\)
a2 \\( \to areaEli(r1, r2) \\)

Subproblemas são gerados...
\\( l1 = ? \\), \\( l2 = ? \\), \\( r1 = ? \\), \\( r2 = ? \\)
\\( soma(a1, a2) = ? \\)
\\( areaRet(l1, l2) = ? \\)
\\( areaEli(r1, r2) = ? \\)

...e resolvidos:
\\( l1 \\), \\( l2 \\), \\( r1 \\), \\( r2 \\) são pré-definidos ou fornecidos pelo usuário.
\\( soma(x, y) = x + y \\)
\\( areaRet(x, y) = x * y \\)
\\( areaEli(x, y) = \pi * x * y \\)

***Programa em JavaScript***

*De baixo para cima*

```javascript
// ...
resultado = soma(a1, a2)
```

```javascript
// ...
const a1 = areaRet(l1, l2)
const a2 = areaEli(r1, r2)

resultado = soma(a1, a2)
```

```javascript
// ...
const l1 = 6.1
const l2 = 4.4
const r1 = 3.0
const r2 = 5.3

const a1 = areaRet(l1, l2)
const a2 = areaEli(r1, r2)

resultado = soma(a1, a2)
```

```javascript
function areaEli(x, y) {
    const pi = 3.1415

    return pi * x * y
}

function areaRet(x, y) {
    return x * y
}

const soma(x, y) {
    return x + y
}

const l1 = 6.1
const l2 = 4.4
const r1 = 3.0
const r2 = 5.3

const a1 = areaRet(l1, l2)
const a2 = areaEli(r1, r2)

resultado = soma(a1, a2)

console.log(resultado)
```
</details>
