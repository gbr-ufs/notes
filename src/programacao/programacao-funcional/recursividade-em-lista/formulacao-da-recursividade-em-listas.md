# Formulação da recursividade em listas

Muitos problemas computacionais são resolvidos repetindo-se uma mesma computação sobre coleções de dados de tamanho cada vez menor até que se chege a um ponto onde não há mais necessidade de continuar esse processo. Isso é típico em problemas onde identifica-se claramente o perfil de **sequência** de dados. Uma das formas de expressar uma sequência de dados é com recursão.

## Exemplo

Considere o problema de realizar a soma dos elementos de uma dada sequência de valores: \\( \{3, 8, 20, 21, 34, 44\} \\). Encontre uma fórmula recursiva apropriada para representar essa soma.

<details>
\\( \sum\{\} \implies 0 \\)
\\( \sum\{3, 8, 20, 21, 34, 44\} \implies 3 + \\)
\\( \sum\{8, 20, 21, 34, 44\} \implies 8 + \\)
\\( \sum\{20, 21, 34, 44\} \implies 20 + \\)
...

\\( soma(\{\}) = 0 \\)
\\( soma(\{a_{1}, a_{2}, ..., a_{n}\}) = a_{1} + \\)
\\( soma(\{a_{2}, ..., a_{n}\}) = a_{2} + \\)
...

\\( soma(lista) = 0, \text{ caso } lista = \emptyset \\)
\\( soma(elem1, sublista) = elem1 + soma(sublista) \\), caso contrário.
</details>
