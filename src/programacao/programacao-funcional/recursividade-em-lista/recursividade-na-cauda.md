# Recursividade na cauda

Observe a sequência aritmética a seguir e crie um programa para encontrar o valor do n-ésimo elemento: \\( \{2, 7, 12, 17, 22, ...\} \\)

***Formulação recursiva***

\\( f(1) = 2 \\)
\\( f(n) = 5 + f(n - 1) \\)

Observe com atenção o desdobramento da aplicação da formulação recursiva para o cálculo do quinto elemento da sequência.

***Desdobramento***

\\( f(5 \\)
\\( = 5 + f(4) \\)
\\( = 5 + (5 + f(3)) \\)
\\( = 5 + (5 + (5 + f(2))) \\)
\\( = 5 + (5 + (5+ (5 + f(1)))) \\)
\\( = 5 + (5 + (5 + (5 + 2))) \\)
\\( = 22 \\)

A cada chamada recursiva, é formada uma sequência acumulada dde operações cujo resultado final permanece suspenso até a última aplicação da função. Esse acúmulo de valores **exige espaço em memória** da máquina e pode eventualemente causar problemas de estouro de memória.

Uma forma **alternativa** de lidar com esse comportamento e **antecipar toda a computação parcial possível**, reduzindo a necessidade de armazenamento de valores em memória, **é acrescentar um parâmetro à função para agir como acumulador**.

***Formulação recursiva com acumulador***

\\( f(n) = f(n, 2) \\)
\\( f(1, acc) = acc \\)
\\( f(n, acc) = f(n - 1, 5 + ac) \\)

***Desdobramento***

\\( f(5) = f(5, 2) \\)
\\( = f(4, 5 + 2) \to f(4, 7) \\)
\\( = f(3, 5 + 7) \to f(3, 12) \\)
\\( = f(2, 5 + 12) \to f(2, 17) \\)
\\( = f(1, 5 + 17) \to f(1, 22) \\)
\\( = 22 \\)

Esse tipo de abordagem é conhecido como **recursividade na cauda** porque a chamada recursiva é a **última** operação realizada.

***Implementação em JavaScript***

```javascript
const fAux = (n, acc) => {
    if (n == 1) {
        return acc
    } else {
        return fAux(n - 1, 5 + acc)
    }
}

const f = (n) => {
    return fAux(n, 2)
}
```
