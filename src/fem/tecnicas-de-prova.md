# Técnicas de Prova

## Definição

Em matemática, uma **definição** indica o significado matemático de uma palavra.

### Exemplos

- Inteiro par: \\( 2k \\)
- Número primo: \\( k > 1 \land \text{k divisível somente por 1 e ele mesmo} \\)
- Função: relação entre conjuntos

## Axioma (Postulado)

Afirmação matemática auto-evidente.

## Teorema

Afirmação matemática condicional que demanda prova. Composta por hipótese e conclusão (\\( A \vDash B \\)).

## Lema

Afirmação que serve de base para provar um teorema.

## Corolário

Afirmação consequência de um teorema.

## Exemplo

Sejam \\( m, n \in \mathbb{N} \\). Se \\( m \\) e \\( n \\) são ímpares, então \\( m + n \\) e \\( m - n \\) são pares.

### Definição

Seja \\( n \in \mathbb{N} \\). \\( n \\) é par se \\( \exists{k} \in \mathbb{N}, n = 2k \\). \\( n \\) é ímpar se \\( \exists{j} \in \mathbb{N}, n = 2j + 1 \\).

<details>

\\[
n = 2k + 1, m = 2j + 1
\\]

> ***Observação***
> Os números genéricos (\\( k \\) e \\( j \\)) dos exemplos devem ser diferentes, que nem são aqui!

\\[
m + n = 2k + 2j + 2 = 2(k + j + 1)
\\]

\\[
m - n = (2j + 1) - (2k + 1) = 2(j - k)
\\]

Como \\( (k + j + 1) \\) é um número inteiro, \\( m + n \\) e \\( m - n \\) são par.

</details>

## O Método Direto

Começo \\( \to \\) fim \\( \to \\) se encontra no meio.

### Exemplo

\\[
a \neq 0 , b \neq 0, c \neq 0 \in \mathbb{N}
\\]

Se \\( a \\) divide \\( b \\) e, por usa vez, \\( b \\) divide \\( c \\), então \\( a \\) divide \\( c \\).

<details>

- Divisão: \\( a, b, q \in \mathbb{N}, b = aq \\) (\\( a \\) divide \\( b \\))
- Símbolo: \\( a|b \\)

É preciso definir um \\( k \in \mathbb{N}, c = ak \\).

\\[
q, r \in \mathbb{N}, b = aq \land c = br \implies c = br = (aq)r = a(qr) \therefore k = qr
\\]

</details>

### Algoritmo da Divisão em \\( \mathbb{N} \\)

\\[
a, b \in \mathbb{N}, q, r \in \mathbb{N}, b = aq + r \land 0 \leq r < a
\\]

Com \\( a \\) sendo o quoeficiente e \\( r \\) o resto.

### Exemplo

Sejam \\( m, n \in \mathbb{R} \\).

\\[
n > m > 0 \implies \frac{m + 1}{n + 1} > \frac{m}{n}
\\]

<details>

Assumindo a conclusão como verdadeira:

\\[
(m + 1)n > (n + 1)m \implies mn + n > mn + m \implies n > m
\\]

Somar quaisquer termos não muda a desigualdade, logo

\\[
\frac{m + 1}{n + 1} > \frac{m}{n}
\\]

</details>

### Exemplo

i) \\( n \\) é ímpar;

ii) \\( n^{2} \\) é ímpar;

iii) \\( n^{2} - 2n + 1 \\) é par.

### Exemplo

Use a contrapositiva para mostrar que se \\( \frac{2x}{1 + x^{2}} \\) é irracional, então \\( x \\) é um número irracional.

<details>

Contrapositiva: \\( x \in \mathbb{Q} \implies \frac{2x}{1 + x^{2}} \in \mathbb{Q}, x = \frac{m}{n}, m, n \neq 0 \in \mathbb{Z} \\). Assim,

\\[
\frac{2x}{1 + x^{2}} = \frac{\frac{2m}{n}}{1 + (\frac{2m}{n})^{2}} = \frac{2mn}{n^{2} + 4m^{2}} \in \mathbb{Q}
\\]

Visto que \\( 2mn, n^{2} + 4m^{2} \in \mathbb{Z} \\) e \\( n^{2} + 4m^{2} \neq 0 \\). Como a contrapositiva é verdadeira, a afirmação é verdadeira.

</details>

### Exemplo

\\[
a \neq 0, b, c \in \mathbb{R}
\\]

\\[
ax^{2} + bx + c = 0 \iff x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}
\\]

<details>

Sendo \\( x \\) uma solução da equação e \\( a \neq 0 \\) podemos dividir \\( ax^{2} + bx + c = 0 \\) por \\( a \\) para obtermos

\\[
x^{2} + \frac{b}{a}x + \frac{c}{a} = 0
\\]

Assim, por completar os quadrados, segue que

\\[
\left(x + \frac{b}{2a}\right)^{2} - \left(\frac{b}{2a}\right)^{2} + \frac{c}{a} = 0
\\]

Pondo \\( x \\) em evidência

\\[
x = -\frac{2}{2a} \pm \sqrt{\left(\frac{b}{2a}\right)^{2} - \frac{c}{a}} = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}
\\]

Para provar que esse valor resolve a equação, basta substituir

\\[
x^{2} = \frac{2b^{2} - 4ac \mp 2b \sqrt{b^{2} - 4ac}}{4a^{2}}
\\]

\\[
ax^{2} = \frac{2b^{2} - 4ac \mp 2b \sqrt{b^{2} - 4ac}}{4a}
\\]

\\[
bx = \frac{-b^{2} \pm b\sqrt{b^{2} - 4ac}}{2a}
\\]

\\[
ax^{2} + bx + c = \frac{2b^{2} - 4ac \mp 2b \sqrt{b^{2} - 4ac}}{4a} + \left(\frac{-b^{2} \pm b\sqrt{b^{2} - 4ac}}{2a \cdot 2}\right)^{2} + \frac{c \cdot 4a}{1 \cdot 4a} \implies \frac{0}{4a} = 0
\\]

</details>

### Exemplo

\\[
a, l, k \in \mathbb{N}, a^{3} + a^{2} + a = 2l \iff 2k
\\]

<details>

Verificando \\( a = 2k \implies a^{3} + a^{2} + a = 2l \\)

\\[
a^{3} + a^{2} + a = (2k)^{3} + (2k)^{2} + 2k = 2[4k^{3} + 2k^{2} + k] \therefore a^{3} + a^{2} + a = 2l
\\]

\\( a^{3} + a^{2} + a = 2l \implies a = 2k \\) pode pode ser provada pela contrapositiva.

\\[
a^{3} + a^{2} + a = (2k + 1)^{3} + (2k + 1)^{2} + 2k + 1 = 2[4k^{3} + 8k^{2} + 6k + 1] + 1
\\]

</details>

### Exemplo

Um inteiro positivo \\( n \\) com quatro dígitos é divisível por 3 se, e somente se, a soma dos dígitos de \\( n \\) é divisível por 3.

<details>

\\[
n = d_{3}d_{2}d_{1}d_{0}
\\]

\\[
n = d_{0} + 10d_{1} + 100d_{2} + 1000d_{3} = (d_{0} + d_{1} + d_{2} + d_{3}) + 9d^{1} + 99d^{2} + 999d_{3}
\\]

Desse modo, se \\( 3|n \\), então \\( m = 3k, k \im \mathbb{Z} \\) e da expressão acima tiramos que

\\[
d_{0} + d_{1} + d_{2} + d_{3} = 3[k - 3d_{1} - 33d_{2} - 333d_{3}]
\\]

Logo, \\( 3|(d_{0} + d_{1} + d_{2} + d_{3}) \\).

Se 3 divide a soma dos dígitos de \\( n \\), então \\( d_{0} + d_{1} + d_{2} + d_{3} = 3k

</details>

## Prova por Contradição

Assimuma a conclusão como falsa. Se chegarmos a um absurdo, então a conclusão é verdadeira.

### Exemplo

> ***Observação***
> Números irracionais não possuem uma notação definida.
> Vamos adotar \\( \mathbb{A} \\) aqui porque é uma letra livre.

\\[
a \in \mathbb{R}, b \in \mathbb{A} \vDash (a + b) \in \mathbb{A}
\\]

<details>

\\[
Q = (a + b) \in \mathbb{A}
\\]

\\[
~Q = (a + b) \in \mathbb{R}
\\]

\\[
a = \frac{m}{n}, a + b = \frac{r}{s}, m \neq 0, n, r, s \neq 0 \in \mathbb{R}
\\]

\\[
b = \frac{r}{s} - a = \frac{r}{s} - \frac{m}{n} = \frac{nr - ms}{ns}
\\]

Isso gera um absurdo, ao dizer que \\( b \\) é irracional em vez de de irracional. Portanto \\( (a + b) \in \mathbb{A} \\).

</details>

### Exemplo

\\[
x > 0, y > 0 \in mathbb{R} \vDash \sqrt{x + y} \neq \sqrt{x} + \sqrt{y}
\\]

<details>

\\[
Q = \sqrt{x + y} \neq \sqrt{x} + \sqrt{y}
\\]

\\[
~Q = \sqrt{x + y} = \sqrt{x} + \sqrt{y}
\\]

\\[
(\sqrt{x + y}^{2}) = (\sqrt{x})^{2} + (\sqrt{x})^{2} \implies x + y = x + 2\sqrt{xy} + y \implies (x + y) - x = (x + 2\sqrt{xy} + y) - x \implies y = \sqrt{xy} + y \implies y - y = (2\sqrt{xy} + y) - y \implies 0 = 2\sqrt{xy}
\\]

Sendo \\( x = 0 \\) ou \\( y = 0 \\).

Isso gera um absurdo, pois \\( x > 0 \\) e \\( y > 0 \\). Portanto, \\( \sqrt{x + y} \neq \sqrt{x} + \sqrt{y} \\).

</details>

### Exemplo

\\[
x > 0, y > 0 \in \mathbb{Q} \vDash \frac{x}{y} + \frac{y}{x} > 2
\\]

<details>

\\[
Q = \frac{x}{y} + \frac{y}{x} > 2
\\]

\\[
~Q = \frac{x}{y} + \frac{y}{x} \leq 2
\\]

\\[
\frac{x}{y} + \frac{y}{x} \leq 2 \implies xy \cdot \left(\frac{x}{y} + \frac{y}{x}\right) \leq xy \cdot 2 \implies x^{2} + y^{2} \leq 2xy \implies x^{2} - 2xy + y^{2} \leq 0 \implies (x - y)^{2} \leq 0
\\]

\\( (x - y)^{2} \\) não pode ser menor que 0, devido ao quadrado, logo, a única opção é

\\[
(x - y)^{2} = 0 \iff x - y = 0 \iff x = y
\\]

O que é um absurdo, pois \\( x \neq y \\).

### Exemplo

\\[
a > 0, b > 0, c > 0 \in \mathbb{Z}, b = (a + 1), c = (a + 2), a^{2} + b^{2} = c^{2} \vDash a = 3, b = 4, c = 5
\\]

<details>

\\[
Q = a = 3, b = 4, c = 5
\\]

\\[
~Q = a \neq 3, b \neq 4, c \neq 5
\\]

\\[
a^{2} + (a + 1) = (a + 2) \implies a^{2} + a^{2} + 2a + 1 = a^{2} + 4a + 4 \implies a^{2} - 2a - 3 = 0 \implies (a - 3)(a + 1) = 0 \implies a = 3 \lor a = -1
\\]

O que é um absurdo, pois em nossa negação \\( a \neq 3 \\), e que \\( a > 0 \\) para todos os casos.

</details>

### Teorema de Euclides

> ***Observação***
> Lembrando que estamo usando \\( \mathbb{A} \\) para representar o conjunto dos números irracionais!

\\[
\sqrt{2} \in \mathbb{A}
\\]

<details>

\\[
Q = \sqrt{2} \in \mathbb{A}
\\]

\\[
~Q = \sqrt{2} \in \mathbb{Q}
\\]

\\[
m \neq 0, n \neq 0 \in \mathbb{Q}, \sqrt{2} = \frac{m}{n} \implies \text{mdc\{m, n\}} = 1 \implies \frac{m^{2}}{n^{2}} = 2 \lor 2n^{2} = m^{2} \implies n^{2} = \frac{m^{2}}{2} \implies 2|m \implies m = 2k, k \in \mathbb{Q} \implies (2k)^{2} = 2n^{2} \implies n^{2} = 2k^{2} \implies 2|n
\\]

Não é possível 2 dividir tanto \\( m \\) quanto \\( n \\), pois foi decidido que \\( \text{mdc\{m, n\}} = 1 \\).

Portanto, \\( \sqrt{2} \in \mathbb{A} \\).

</details>

### Teorema

Existem infinitos números números primos.

<details>

\\( p > 1 \in \mathbb{N} \\) é primo se seus divisores forem 1 e ele mesmo.

\\( Q = \exists{\infty} \in \mathbb{N} \\) que não são primos.

\\( ~Q = \\) existe um número finito de primos.

\\[
p_{1}, p_{2}, p_{3}, ..., p_{n} \implies q = (p_{1}, p_{2}, p_{3}, ..., p_{n}) + 1
\\]

Isso implica que o nosso "maior primo" estaria fora da lista de números primos, e que \\( \exists{pk} \\) na lista tal que \\( pk|q \\).

\\[
\frac{p1 \cdot ... \cdot pn}{pk} = 0 + 1 = 1 \implies pk + q \implies pk + 1
\\]

O que seria um absurdo, pois somente 1 divide 1.

</details>

### Exemplo

\\[
x > 0, y > 0 \in \mathbb{Z} \vDash x^{2} - y^{2} \neq 1
\\]

<details>

\\[
Q = x^{2} - y^{2} \neq 1
\\]

\\[
~Q = x^{2} - y^{2} = 1
\\]

\\[
x^{2} - y^{2} = 1 \implies (x - y)(x + 1) = 1 \implies x - y = 1 \land x + y = 1 \implies x = 1 \land y = 0
\\]

O que seria um absurdo, pois \\( y > 0 \\).

</details>

## Prova por Casos

Método que pode ser usado para provar um teorema considerando diferentes casos.

### Exemplo

\\[
n \in \mathbb{Z} \vDash n^{2} \geq n
\\]

<details>

***Para*** \\( n = 0 \\)

\\[
n^{2} = 0
\\]

***Para*** \\( n > 0 \\)

\\[
n \geq 1 \implies n^{2} \geq n
\\]

***Para*** \\( n < 0 \\)

\\[
n \leq -1 \implies n^{2} \geq -n (\text{positivo}) > n (\text{negativo})
\\]

</details>

### Valor Absoluto

Suponha que \\( x \\) e \\( y \\) sejam números reais e a > 0. Então:

(1) \\( |x| < a \iff -a < x < a \\)

(2) \\( |xy| = |x||y| \\)

<details>

***Caso 1:*** \\( x \geq 0, y \geq 0 \\)

\\[
x + y \geq 0 \implies |x + y| = x + y = |x| + |y|
\\]

***Caso 2:*** \\( x < 0, y < 0 \\)

\\[
x + y < 0 \implies |x + y| = -(x + y) = -x + (-y) = |x| + |y|
\\]

***Caso 3:*** \\( x \geq 0, y < 0 \\)

***Se*** \\( x + y \geq 0 \\)

\\[
|x + y| = x + y = x + (-y) = |x| + |y|
\\]

***Se*** \\( x + y < 0 \\)

\\[
|x + y| = -(x + y) = -x + (-y) \leq x + (-y) = |x| + |y|
\\]

</details>
