## Relações

### Definição

Sejam \\( A \\) e \\( B \\) conjuntos. Uma **relação** \\( R \\) entre \\( A \\) e \\( B \\) é um subconjunto de \\( A \times B \\). Assim, se \\( (a, b) \in R \\), escrevemos \\( aRb \\) (ou \\( a ~ b \\)) par aexpressar que \\( a \\) e \\( b \\) estão relacionados. O **domínio** de uma relação é o conjunto \\( D(r) = \\{x \in A : \exists{y} \in B \text{ tal que } xRy\\} \\) e a **imagem** da relação é o conjunto \\( I(R) = \\{y \in B : \exists{x} \in A \text{ tal que } xRy\\} \\).

### Exemplo

Seja \\( A = \\{1, 2, 3\\} \\) e \\( B = \\{2, 3, 4\\} \\). Defina a relação \\( R = \\{(x, y) : x + 1 < y\\} \\).

#### Resolução

<details>

\\[
R = \\{(1, 3), (1, 4), (2, 4)\\}
\\]

\\[
D(R) = \\{1, 2\\}
\\]

\\[
I(R) = \\{3, 4\\}
\\]

</details>

O domínio fica na esquerda e a imagem na direita.

### Exemplo

(1) Sobre \\( \mathbb{Z} \\) consideremos a relação \\( R = \\{(x, y) \in \mathbb{Z} \times \mathbb{Z} : x + y = 0\\} \\). Enstão \\( R = \\{..., (-1, 1), (1, -1), (0, 0), (2, -2), ...\\} \\) é o conjunto de pontos sobre a reta dada pela equação \\( y = -x \\) com coordenadas inteiras.

(2) Sobre o conjunto \\( \mathbb{N} \times \mathbb{N} \\) considere a relação \\( (m, n)R(s, r) \Longleftrightarrow m + r = n + s \\). Esta relação possui uma infinidade de elementos. Por exemplo, \\( (1, 1)R(2, 2), (1, 3)R(5, 7), ...\\).

(3) Seja \\( E = \\{(x, y) \in \mathbb{R} \times \mathbb{R} : \frac{x^{2}}{324} + \frac{y^{2}}{64} \leq 1\\} \\). O gráfico de \\( E \\) é constituído pelos pontos do plano que estão dentro e sobre a elipse.

<details>

![Gráfico exibindo uma elipse no centro, com os pontos 8 e 18 pertencendo à ela](../../img/fem/grafico_e.png)

</details>
