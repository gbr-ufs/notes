# Vetores

- \\( \vec{i} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (1, 0, 0) \\)
- \\( \vec{j} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (0, 1, 0) \\)
- \\( \vec{k} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (0, 0, 1) \\)

Dado um vetor \\( \vec{v} \\) no espaço, existem números reais \\( x \\), \\( y \\) e \\( z \\) tais que

\\[
\vec{v} = x\vec{i} + y\vec{j} + z\vec{zk}
\\]

## Expressão Analítica

A representação de um vetor \\( \vec{v} \\) por \\( \vec{v} = (x, y, z \\).

## Paralelismo de Vetores

\\[
\vec{u} || \vec{v} \iff \vec{u} = k\vec{v}, k \in \mathbb{R}
\\]

### Observação

Com \\( x_{2} \neq 0 \\), \\( y_{2} \neq 0 \\) e \\( z_{2} \neq 0 \\), podemos fazer

\\[
\vec{v} || \vec{v} \iff \frac{x_{1}}{x_{2}} = \frac{y_{1}}{y_{2}} = \frac{z_{1}}{z_{2}}
\\]

## Módulo

\\[
||\vec{v}|| = \sqrt{x^{2} + y^{2} + z^{2}}
\\]

## Distância entre dois pontos

\\[
d(A, B) = \sqrt{(x_{2} - x_{1})^{2} + (y_{2} - y_{1})^{2} + (z_{2} - z_{1})^{2}}
\\]

## Exemplo

Considere o vetor \\( \vec{v} = (2, -1, -3) \\). Determine o vetor \\( \vec{w} \\) tal que \\( \vec{w} || \vec{v} \\), \\( \vec{w} \\) tem o mesmo sentido de \\( \vec{v} \\) e \\( ||\vec{w}|| = 3||\vec{v}|| \\).

<details>
\\[
\vec{w} = k\vec{v}, k \in \mathbb{R}
||\vec{w} = 3||\vec{v}|| \implies k||\vec{v}|| = 3||\vec{v}|| \implies k = 3 \therefore
\vec{w} = (6, -3, -9)
\\]
</details>

## Exemplo

Considere os pontos \\( A = (0, 1, -1) \\) e \\( B = (1, 2, -1) \\), e os vetores \\( \vec{u} = (-2, -1, 1) \\), \\( \vec{v} = (3, 0, -1) \\) e \\( \vec{w} = (-2, 2, 2) \\). Existem números \\( a \\), \\( b \\) e \\( c \in \mathbb{R} \\) tais que

\\[
\vec{w} = a\vec{AB} + b\vec{u} + c\vec{v}
\\]

<details>
\\[
\vec{AB} = B - A = (1 - 0, 2 - 1, -1 -(-1)) = (1, 1, 0)
(-2, 2, 2) = (a - 2b + 3c, a - b, b - c)
\begin{enumerate}
\item a - 2b + 3c = -2
\item a - b = 2
\item b - c = 2
\end{enumerate}
\text{Da equação (3), podemos isolar $c$:}
c = b - 2
\text{Da equação (2), podemos isolar $a$:}
a = b + 2
\text{substituindo em (1):}
(b + 2) - 2b + 3(b - 2)= -2
b + 2 - 2b + 3b - 6 = -2
2b - 4 = -2
2b = 2
b = 1
a = b + 2 \implies a = 3
c = b - 2 \implies c = -1
\\]
</details>

## Produto Interno

### Plano

O **produto interno** ou **produto escalar** entre dois vetores do plano \\( \vec{u} = (x_{1}, y_{1}) \\) e \\( \vec{v} = (x_{2}, y_{2}) \\), é denotado por \\( \langle \vec{u}, \vec{v} \\) (ou \\( \vec{u} \cdot \vec{v} \\)), e definido por

\\[
\langle \vec{u}, \vec{v} \rangle = x_{1}x_{2} + y_{1}y_{2}
\\]

#### Exemplo

Calcule o produto interno entre os vetores \\( \vec{u} = (2, -5) \\) e \\( \vec{v} = (-1, 1) \\).

<details>
\\[
\langle \vec{u}, \vec{v} \rangle = (2 \cdot (-1) + (-5) 1) = (-2 - 5) = -7
\\]
</details>

### Espaço

\\[
\langle \vec{u}, \vec{v} \rangle = x_{1}x_{2} + y_{1}y_{2} + z_{1}z_{2}
\\]

#### Exemplo

Calcule o produto interno entre os vetores \\( \vec{u} = (1, -4, 0) \\) e \\( \vec{v} = (3, 1, -5) \\).

<details>
\\[
\langle \vec{u}, \vec{v} \rangle = (1 \cdot 3 + (-4) \cdot 1 + 0 \cdot (-5)) = (3 - 4) = -1
\\]
</details>

### Propriedades

- \\( \langle \vec{u}, \vec{v} \rangle = \langle \vec{v}, \vec{u} \rangle \\)
- \\( \langle \vec{u}, \vec{v} + \vec{w} \rangle = \langle \vec{u}, \vec{v} \rangle + \langle \vec{u}, \vec{w} \rangle \text{ e } \langle \vec{u} + \vec{v}, \vec{w} \rangle = \langle \vec{u}, \vec{w} \rangle + \langle \vec{v}, \vec{w} \rangle \\)
- \\( k \langle \vec{u}, \vec{v} \rangle = \langle k\vec{u}, \vec{v} \rangle = \langle \vec{u}, k\vec{v} \rangle \\)
- \\( \langle \vec{u}, \vec{u} \rangle = ||\vec{u}||^{2}
- \\( \langle \vec{u}, \vec{u} \rangle = 0 \iff \vec{u} = 0 \\)

### Proposição

Sejam \\( \vec{u} \neq \vec{0} \\) e \\( \vec{v} \neq \vec{0} \\) vetores e \\( \theta \in [0, \pi] \\) o ângulo entre \\( \vec{u} \\) e \\( \vec{v} \\). Então,

\\[
\langle \vec{u}, \vec{v} \rangle = ||\vec{u}|| ||\vec{v}|| \text{cos } \theta
\\]

### Interpretação Geométrica do Produto Escalar

O produto escalar entre dois vetore não-nulos é o produto entre os seus módulos e o cosseno do ângulo entre eles.

- \\( \langle \vec{u}, \vec{v} \rangle > 0 \iff 0 \leq \theta < \frac{\pi}{2} \\)
- \\( \langle \vec{u}, \vec{v} \rangle < 0 \iff \frac{\pi}{2} < \theta \leq \pi \\)
- \\( \langle \vec{u}, \vec{v} \rangle = 0 \iff \theta = \frac{\pi}{2} \\)

#### Ortogonalidade

\\[
\vec{u} \bot \vec{v} \iff \langle \vec{u}, \vec{v} \rangle = 0
\\]

#### Exemplo

Determine o ângulo entre os vetores \\( \vec{u} = (2, -1, -1) \\) e \\( \vec{v} = (-1, -1, 2) \\).

<details>
\\[
-3 = 6 \text{ cos } \theta \implies \text{cos } \theta = -\frac{3}{6} \implies \text{cos } \theta = -\frac{1}{2} \implies
\theta = \text{arcos } \left(-\frac{1}{2}\right) \implies \theta = 120^{\circ} \text{ ou } \frac{2\pi}{3}
\\]
</details>

#### Exemplo

Determine \\( k \\) para que os vetores \\( \vec{u} = (-2, 3) \\) e \\( \vec{v} = (k, -4) \\) sejam

(a) Ortogonais
(b) Paralelos

<details>
(a)

\\[
\vec{u} \bot \vec{v} \implies \langle \vec{u}, \vec{v} \rangle = 0 \implies
(-2 \cdot k + 3 \cdot (-4)) = 0 \implies -2k - 12 = 0 \implies -2k = 12 \implies
k = -6
\\]

(b)

\\[
\vec{u} // \vec{v} \implies \vec{v} = x\vec{u} \implies
(k, -4) = (-2x, 3x) \implies 3x = -4 \implies x = -\frac{4}{3} \implies
-2 \cdot \left(-\frac{4}{3}\right) \implies k = \frac{8}{3}
\\]
</details>

#### Exemplo

Calcule \\( ||\vec{u} + \vec{v}|| \\), \\( ||\vec{u} - \vec{v}|| \\) e \\( \langle \vec{u}, \vec{v} \rangle \\) sabendo que \\( ||\vec{u}|| = 4 \\), \\( ||\vec{v}|| = 3 \\) e o ângulo entre \\( \vec{u} \\) e \\( \vec{v} \\) é \\( \frac{\pi}{3} \\).

<details>
1. Cálculo do Produto Escalar

\\[
||\vec{u}|| = 4
||\vec{v}|| = 3
\theta = \frac{\pi}{3}
\langle \vec{u}, \vec{v} \rangle = 4 \cdot 3 \cdot \text{cos } \frac{\pi}{3} \implies
\langle \vec{u}, \vec{v} \rangle = 4 \cdot 3 \cdot \frac{1}{2} = \frac{12}{2} = 6
\\]

2. Cálculo do Módulo da Soma

\\[
||\vec{u} + \vec{v}||^{2} = ||\vec{u}^{2}|| + 2(\vec{u} \cdot \vec{v}) + ||\vec{v}||^{2} \implies
||\vec{u} + \vec{v}||^{2} = 16 + 2(6) + 9 \implies ||\vec{u} + \vec{v}||^{2} = 16 + 12 + 9 = 37 \implies
||\vec{u} + \vec{v}||= \sqrt{37}
\\]

3. Cálculo do Módulo da Diferença

\\[
||\vec{u} - \vec{v}||^{2} = ||\vec{u}^{2}|| - 2(\vec{u} \cdot \vec{v}) + ||\vec{v}||^{2} \implies
||\vec{u} - \vec{v}||^{2} = 16 - 12 + 9 = 13 \implies ||\vec{u} - \vec{v}|| = \sqrt{13}
\\]
</details>

## Projeção Ortogonal

A "sombra" que um vetor faz sob uma outra reta. Por ser a "sombra" de um vetor, também é um vetor.

Sejam \\( \vec{u} \\) e \\vec{v} \\) dois vetores. A **projeção ortogonal** de \\( \vec{u} \\) e \\( \vec{v} \\) (denotada por \\( Proj_{\vec{v}}^{\vec{U}} \\)) é

\\[
Proj_{\vec{v}}^{\vec{u}} = \frac{\langle \vec{u}, \vec{v} \rangle}{||\vec{v}||^{2}} \cdot \vec{v}
\\]

### Exemplo

Considere os vetores no plano \\( \vec{v} = (1, 1) \\) e \\( \vec{u} = (2, 5) \\). Calcule a projeção ortogonal de \\( \vec{u} \\) e \\( \vec{v} \\). Decomponha \\( \vec{u} \\) como soma de \\( \vec{u}_{1} \\) com \\( \vec{u}_{2} \\), onde \\( \vec{u}_{1} || \vec{v} \\) e \\( \vec{u}_{2} \bot \vec{v} \\).

<details>
\\[
\langle \vec{u}, \vec{v} \rangle = (1 \cdot 2 + 1 \cdot 5) = 7
||\vec{v}|| = \sqrt{(1)^{2} + (1)^{2}} = \sqrt{2}
||\vec{v}||^{2} = 2
Proj_{\vec{v}}^{\vec{u}} = \frac{7}{2} (1, 1) = \left(\frac{7}{2}, \frac{7}{2}\right)
\vec{u}_{1} = \left(\frac{7}{2}, \frac{7}{2}\right)
\vec{u}_{2} = \vec{u} - \vec{u}_{1} = (2 - \frac{7}{2}, 5 - \frac{7}{2}) \implies \vec{u}_{2} = \left(\frac{4}{2} - \frac{7}{2}, \frac{10}{2} - \frac{7}{2}\right) = \left(-\frac{3}{2}, \frac{3}{2}\right)
\\]
</details>

## Produto Vetorial

Resulta num vetor.

\\[
\vec{u} \times \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k}
x_{1} & y_{1} & z_{1}
x_{2} & y_{2} & z_{2}
\end{vmatrix}
\\]

Com os vetores não tendo um valor definido. Eles apenas servem para indicar as posições (\\( \vec_{i} = x \\), \\( \vec{j} = y \\), \\( \vec{k} = z \\)).

### Observação

Para a operação fazemos \\( \vec{i} (y_{1} \cdot z_{2} - y_{2} \cdot z_{1}) - \vec{j} (x_{1} \cdot z_{2} - x_{2} \cdot z_{1}) + \vec{k} (x_{1} \cdot y_{2} - x_{2} \cdot y_{1}) = (a, -b, c) \\).

### Exemplo

Considere os vetores \\( \vec{u} = (3, -1, -2) \\) e \\( \vec{v} = (2, 4, -1) \\). Calcule \\( \vec{u} \times \vec{v} \\).

<details>
\\[
\vec{u} \times \vec{v} =
\begin{vmatrix}
3 & -1 & -2
2 & 4 & -1
\end{vmatrix}
= \vec_{i} (1 + 8) - \vec{j} (-3 + 4) + \vec{k} (12 + 2) = (9, -1, 14)
\\]
</details>
