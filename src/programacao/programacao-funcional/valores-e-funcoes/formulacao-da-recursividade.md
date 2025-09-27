# Formulação da recursividade

Muitos problemas computacionais são resolvidos repetindo-se uma mesma computação sobre coleções de dados de tamanho cada vez menor até que se chege a um ponto onde não há mais necessidade de continuar esse processo.

Em uma **fórmula recursiva**, cada termo é definido como uma função do seu precedente. Assim, temos que o \\( n \\)*-ésimo* termo da sequência é formado pelo \\( (n - 1) \\)*-ésimo* termo mais um *step*. Essa etapa é conhecida por **passo indutivo** da formulação.

Formalmente:

\\[
a_{n} = a_{n - 1} + \text{step}
\\]

Esse passo se repete até chegarmos a um termo inicial que possui um valor definido e encerra essa *recorrência*. Esse termo é conhecido por **caso base**.

\\[
a_{0} = \text{base}
\\]

Usando a notação de funções, temos:

\\[
f(0) = \text{base}
f(n) = f(n - 1) + \text{base}
\\]

## Exemplo

Observe a sequência aritmética a seguir e encontre uma fórmula recursiva apropriada: \\( \{2, 7, 12, 17, 22, ...\} \\).

<details>
f(0) = 2
f(n) = f(n - 1) + 5
</details>
