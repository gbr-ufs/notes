# Programação recursiva

Na recursão, o **caso base** representa a solução do subproblema mais simples possível e o **passo indutivo** (ou **caso geral**) representa a solução de todas as outras situações.

Agora, iremos ver como converter essa formulação recursiva para a implementação da recursividade em JavaScript.

Nesta seção, são destacados dois padrões que devem ser lembrados, para auxiliar na solução de futuros problemas.

## N-ésimo elemento de uma sequência infinita

### Exemplo

Observe a sequência aritmética a seguir e crie um programa para encontrar o valor do n-ésimo elemento: \\( \{2, 7, 12, 17, 22, ...\} \\).

<details>

***Formulação recursiva***

\\[
f(1) = 2
f(n) = f(n - 1) + 5
\\]

***Implementação em JavaScript***

```javascript
const f = (n) => {
    if (n == 1) {
        return 2
    } else {
        return f(n - 1) + 5
    }
}
```

</details>

### Exemplo

N-ésimo termo da sequência \\( \{0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...\} \\).

<details>

***Formulação recursiva***

\\[
fib(0) = 0
fib(1) = 1
fib(n) = fib(n - 1) + fib(n - 2)
\\]

***Implementação em JavaScript***

```javascript
const fib = (n) => {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
```

</details>

## Operação formada por uma repetição de operações mais primitivas

### Exemplo

Implemente o operador de exponenciação para permitir calcular a potência natural de um número \\( m \\) qualquer: \\( m^{n} \\).

<details>

***Formulação recursiva***

\\[
pot(m, 0) = 1
pot(m, n) = m \cdot pot(m, n - 1)
\\]

</details>

### Exemplo

Implemente o operador de exponenciação para permitir calcular a potência *inteira* de um número \\( m \\) qualquer: \\( m^{n} \\).

<details>

Em alguns casos, é recomendado elaborarmos uma **função auxiliar** para ajudar.

```javascript
const pot = (m, n) => {
    // Neste caso, a função auxiliar é meio que a principal, já que a ela faz a
    // multiplicação.
    const potAux = (m, n) => {
        if (n == 0) {
            return 1
        } else {
            return m * potAux(m, n - 1)
        }
    }

    // Em contraste, a tarefa da função principal é de cuidar dos expoentes
    // negativos.
    if (n < 0) {
        return 1 / potAux(m, n * (-1))
    } else {
        return potAux(m, n)
    }
}
```

</details>

### Exemplo

Implemente o operador de divisão a fim de encontrar o resto da divisão entre dois números inteiros positivos fornecidos, \\( n \\) e \\( m \\).

<details>

***Formulação recursiva***

\\[
resto(n, m) = n, \forall n < m
resto(n, m) = resto(n - m, m), \forall n \geq m
\\]

***Implementação em JavaScript***

```javascript
const resto = (n, m) => {
    if (n < m) {
        return n
    } else {
        return resto(n - m, m)
    }
}
```

</details>
