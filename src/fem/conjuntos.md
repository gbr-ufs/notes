## Conjuntos

Coleção de objetos. Um objeto membro de um conjunto é chamado de *elemento*.

### Legenda

- Letras maiúsculas representam *conjuntos*
- Letras minúsculas representam *elementos*
- \\( x \in A \\) traduz para "\\( x \\) pertence ao conjunto \\( A \\)"
- \\( \neg(x \in A) \equiv x \not\in A \\)
- Exemplo de conjunto: \\( \\{1, 3, 5, 7, 9\\\} \\)
- \\( A = \\{x \in \mathbb{U}: P(x)\\} \\) (\\( x \\) do conjunto universal \\( \mathbb{U} \\) pertence à \\( A \\) se \\( P(x) \\))
- Exemplo de declaração de conjunto: \\( A = \\{n \in \mathbb{Z}: n = 2k, k \in \mathbb{Z}\\} \\) (\\( n \\) do conjunto dos números naturais pertence à A se for par)

A ordem não importa, o que importa são os elementos.

### Exemplo

Determine os conjuntos \\( A = \\{x \in \mathbb{R}: x^{2} < 4\\} \\), \\( B = \\{x \in \mathbb{Z}: -2 < x < 5\\} \\) e \\( C = \\{x \in \mathbb{N}: (3x - 1)(x - 2) = 0\\} \\)

#### Resolução

<details>

\\[
A = (-2, 2)
\\]

\\[
B = \\{-1, 0, 1, 2, 3, 4\\}
\\]

\\[
C = \\{2\\}
\\]

</details>

#### Observação

É importante decompor as condições.
Neste exemplo, \\( x^2 < 4 \implies x^2 - 4 < 0 \implies (x - 2)( x + 2) < 0 \implies \\)
\\( x - 2 < 0 \land x + 2 > 0 \lor x - 2 > 0 \land x + 2 > 0 \implies \\)
\\( x > 2 \land x - 2 \\), o que é impossível.

### Subconjunto

\\[
(A \subset B) = \forall x \in \mathbb{U}, x \in A \implies x \in B
\\]

Nesse caso, A está contido em B. E A é um subconjunto dele mesmo. Um subconjunto é próprio se \\( A \subset B \\) e \\( A \neq B \\).

#### Como descobrir se \\( A \subset B \\)

\\[
A = \\{n \in \mathbb{Z}: n = 2k, k \in \mathbb{Z}\\}
\\]

\\[
B = \\{m \in \mathbb{Z}: m = 6k, k \in \mathbb{Z}\\}
\\]

\\( B \subset A \\), pois se \\( y \in B \implies y = 6k, k \in \mathbb{Z} \implies y = 2(3k) = 2u, u \in \mathbb{Z} \\), cumprindo a exigência de A.

### Exemplo

Considere os conjuntos \\( A = \\{-4, 1, 2, 4, 10\\} \\), \\( B = \\{m \in \mathbb{Z}: |m| \leq 12\\} \\) e \\( C = \\{t \in \mathbb{Z}: t^2 + 3 \in [4, 20)\\} \\). Quais inclusões entre esses conjuntos é verdadeira?

#### Resolução

<details>

\\[
B = \\{-12, -11, -10, ..., 10, 11, 12\\}
\\]

Desse modo, temos que \\( A \subset B \\). Para \\( C \\), como \\( t \\) está elevado ao quadrado, se determinarmos os elementos positivos em C, os negativos também estarão. Assim, \\( 4 \leq t^{3} + 3 < 20 \implies \\)
\\(1 \leq t^2 < 17 \implies 1 \leq t < \sqrt{17} \\).
Logo, \\( C = \\{-4, -3, -2, -1, 1, 2, 3, 4\\} \\), \\( C \subset B \\), \\( (10 \in A \land 10 \not\in C) \implies A \not\in C \\).

</details>

### Exemplo

\\[
A \subset B \land B \subset C \implies A \subset C
\\]

#### Resolução

<details>

Se \\( A \subset B \\) e \\( B \subset C \\), então \\( \forall a, a \in A \implies a \in B \land \forall b, b \in B \implies b \in C \\).
Portanto, \\( \forall x, x \in A \implies x \in B \implies x \in C \equiv A \subset C \\).

</details>

### Observação \\( (A \not\subset B) \\)

Para provar uma afirmação da forma \\( A \not\subset B \\), basta encontrar um \\( a \in A \\), \\( a \not\in B \\). \\( A \subset B \equiv \forall x, x \in A \implies x \in B \\), então \\( A \not\subset B \equiv \exists x \\), \\( x \in A \land x \not\in B \\).

### Observação \\( (A = B) \\)

\\[
A = B \iff A \subset B \land B \subset A
\\]

### Exemplo

\\[
P = \\{x \in \mathbb{R}: x^2 - 5x + 6 < 0\\}
\\]

\\[
Q = \\{x \in \mathbb{R}: 2 < x < 3\\}
\\]

\\[ P = Q? \\]

#### Resolução

<details>

Seja \\( y \in P \\). \\( y \in P \implies y^2 - 5y + 6 < 0 \equiv (y - 2)(y - 3) < 0 \\). Temos dois casos possíveis:

I. \\( y - 2 < 0 \land y - 3 > 0 \\)

II. \\( y - 2 > 0 \land y - 3 < 0 \\)

Em I, temos que \\( y < 2 \\) e \\( y > 3 \\), o que é um absurdo. Em II, \\( 2 < y < 3 \iff y \in \mathbb{Q} \\). Com isso, seria necessário que \\( \mathbb{Q} \subset P \\). Seja \\( z \in \mathbb{Q} \\). Então \\( 2 < z < 3 \\) e daí \\( y - 2 > 0 \land y - 3 < 0 \\). Logo,\\( (y - 2)(y - 3) < 0 \\) e, consequentemente, \\( z^{2} - 5z + 6 < 0 \\).
Portanto, \\( z \in P \\).

</details>

### Operações sobre Conjuntos

#### União

\\[
A \cup B = \\{x \in \mathbb{U}: x \in A \lor x \in B\\}
\\]

#### Interseção

\\[
A \cap B = \\{x \in \mathbb{U}: x \in A \land x \in B\\}
\\]

#### Subtração

\\[
A - B = \\{x \in \mathbb{U}: x \in A \land x \not\in B\\}
\\]

#### Exemplo

Seja \\( \mathbb{U} = \\{1, 2, 3, ..., 12\\} \\), \\( A = \\{n \in \mathbb{U}: n = 2k, k \in \mathbb{R}\\} \\) e \\(B = \\{n \in \mathbb{U}: n \text{é primo}\\} \\). Então \\( A \cup B = \\{2, 3, 4, 5, 6, 7, 8, 10, 11, 12\\} \\), \\( A \cap B = \\{2\\} \\) e \\( A - B = \\{4, 6, 8, 10, 12\\} \\).

#### Exemplo

Consideramos os intervalos da reta \\( A = [1, 4) = \\{x \in \mathbb{R}: 1 \leq x < 4\\} \\) e \\( B = (2, 6] = \\{x \in \mathbb{R}: 2 < x \leq 6\\} \\). Então \\( A \cup B = [1, 6] \\). \\( A \cap B = (2, 4) \\) e \\( A - B = [1, 2] \\).
Além disso, \\( [1, 2] \cap (2, 4) = \varnothing \\) (conjunto vazio).

### Álgebra de Conjuntos

Sejam \\( A \\), \\( B \\) e \\( C \\) subconjuntos de um conjunto universal, então:

I. Propriedades do conjunto vazio: \\( A \cap \varnothing = \varnothing e A \cup \varnothing = A \\)

II. Leis de Idempotência: \\( A \cap A = A \\) e \\( A \cup A = A \\)

III. Leis Comutativas: \\( A \cap B = B \cap A \\) e \\( A \cup B = B \cup A \\)

IV. Leis Associativas: \\( (A \cap B) \cap C = A \cap (B \cap C) \\) e \\( (A \cup B) \cup C = A \cup (B \cup C) \\)

V. Leis Distributivas: \\( A \cap (B \cap C) = (A \cap B) \cup (A \cap C) \\)  e \\( A \cup (B \cap C) = (A \cup B) \cap (A \cup C) \\)

### Uniões e Interseções Generalizadas

Esta seção aborda operações com mais de dois conjuntos. Seja \\(n \in \mathbb{N} \\) e \\(A_{1}, A_{2}, ..., A_{n} \\) subconjuntos de \\( \mathbb{U} \\).

#### Definição

(a) A união dos conjuntos \\( A_{i} \\) como o conjunto

\\[
\underset{i \in 1}{\overset{n}{\bigcup}} A_{i} = A_{1} \cup A_{2} \cup ... \cup A_{n} = \\{ x \in \mathbb{U}: x \in A_{i}, \text{para algum } i = 1, 2, ..., n\\}
\\]

(b) A interseção dos \\( A_{i} \\) como o conjunto

\\[
\underset{i = 1}{\overset{n}{\bigcap}} A_{i} = A_{1} \cap A_{2} \cap ... \cap A_{n} = \\{x \in \mathbb{U}: x \in A_{i}, \text{para todo } i = 1, 2, ..., n\\}
\\]

#### Exemplo

Consideremos a família \\( A_{i} = [0, \frac{1}{i}) \\), com \\( i = 1, 2, ..., 5 \\). Então

\\[
\underset{i \in 1}{\overset{5}{\bigcup}} A_{i} = [0, 1)
\\]

e

\\[
\underset{i = 1}{\overset{5}{\bigcap}} A_{i} = [0, \frac{1}{5})
\\]

Por outro lado, se tomarmos a família \\( B_{i} = [i, i + 1) \\), com \\( i = 1, 2, ..., 5 \\). Então

\\[
\underset{i \in 1}{\overset{5}{\bigcup}} B_{i} = [1, 6)
\\]

e

\\[
\underset{i = 1}{\overset{5}{\bigcup}} B_{i} = \varnothing
\\]

O conjunto de índices pode ser todo o conjunto dos números naturais. No exemplo acima, teríamos então que

\\[
\underset{i \in 1}{\overset{\infty}{\bigcup}} S_{n} = \underset{i \in 1}{\overset{\infty}{\bigcup}} (0, \frac{1}{n}) = (0, 1)
\\]

e

\\[
\underset{i = 1}{\overset{\infty}{\bigcup}} S_{n} = \underset{i = 1}{\overset{\infty}{\bigcup}} (0, \frac{1}{n}) = \varnothing
\\]

### Conjunto Potência

Consideremos o conjunto \\( A = \\{x, y, z\\} \\). Então podemos construir um conjunto cujos elementos são os subconjuntos do conjunto \\( A \\). Note que \\( A \\) possui subconjuntos com zero, um, dois ou três elementos. Assim, denotando por \\( \rho(A) \\), este novo conjunto, segue que

\\[
\rho(A) = \\{\varnothing, \\{x\\}, \\{y\\}, \\{z\\}, \\{x, y\\}, \\{x, z\\}, \\{y, z\\}, \\{x, y, z\\}
\\]

Que possui 8 elementos.

\\[
\rho(A) = \\{X: X \subset A \\}
\\]

#### Teorema

Se \\( A \\) é um conjunto \\( n \\) de elementos, então \\( \rho(A) \\) é um conjunto com \\( 2^{n} \\) elementos.

#### Teorema

Sejam \\( A \\) e \\( B \\) conjuntos. Então \\( A \subset B \iff \rho(A) \subset \rho(B) \\).

### Produto Cartesiano

Conjunto formado por pares **ordenados** \\( (a, b) \\).

#### Definição

Sejam \\( A \\) e \\( B \\) conjuntos. Definimos o produto cartesiano de \\( A \\) e \\( B \\) \\( (A \times B) \\) como o conjunto

\\[
A \times B = \\{(a, b): a \in A \land b \in B\\}
\\]

onde \\( (a, b) \\) denota um par ordenado.

#### Exemplo

Sejam \\( A = \\{a, b, c \\} \\) e \\( B = \\{1, 2\\} \\). Então

\\[
A \times B = \\{(a, 1), (a, 2), (b, 1), (b, 2), (c, 1), (c, 2)\\}
\\]

#### Teorema

Sejam \\( A \\), \\( B \\), \\( C \\) e \\( D \\) conjuntos.

I. Se \\( A \subset B \\) e \\( C \subset D \\), então \\( A times C \subset B \times D \\)

II. \\( A \times B \cup C = A \times B \cup A \times C \\) e \\( A \times (B \cap C) = (A \times B) \cap (A \times C)\\)

III. \\( A \cap B \times C \cap D = A \times C \cap B \times D \\)
