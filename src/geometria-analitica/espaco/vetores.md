# Vetores

- \\( \vec{i} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (1, 0, 0) \\)
- \\( \vec{j} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (0, 1, 0) \\)
- \\( \vec{k} \\): vetor com origem no ponto \\( (0, 0) \\) e extremidade no ponto \\( (0, 0, 1) \\)

Dado um vetor \\( \vec{v} \\) no espaço, existem números reais \\( x \\), \\( y \\) e \\( z \\) tais que

\\[
\vec{v} = x\vec{i} + y\vec{j} + z\vec{zk}
\\]

## Expressão Analítica

A representação de um vetor \\( \vec{v} \\) por \\( \vec{v} = (x, y, z) \\).

## Paralelismo de Vetores

\\[
\vec{u} || \vec{v} \iff \vec{u} = k\vec{v}, k \in \mathbb{R}
\\]

> ***Observação***
> Com \\( x_{2} \neq 0 \\), \\( y_{2} \neq 0 \\) e \\( z_{2} \neq 0 \\), podemos fazer
> \\( \vec{v} || \vec{v} \iff \frac{x_{1}}{x_{2}} = \frac{y_{1}}{y_{2}} = \frac{z_{1}}{z_{2}} \\)

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

> ***Observação***
> Para a operação fazemos \\( \vec{i} (y_{1} \cdot z_{2} - y_{2} \cdot z_{1}) - \vec{j} (x_{1} \cdot z_{2} - x_{2} \cdot z_{1}) + \vec{k} (x_{1} \cdot y_{2} - x_{2} \cdot y_{1}) = (a, -b, c) \\).

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

### Propriedades

1. \\( \vec{u} \times \vec{0} = \vec{0} \\)
2. \\( \vec{v} \times \vec{u} = -(\vec{u} \times \vec{v}) \\)
3. \\( (\vec{u} \times \vec{v}) \bot \vec{u} \\) e \\( (\vec{u} \times \vec{v}) \bot \vec{v} \\)
4. \\( ||\vec{u} \times \vec{v}||^{2} = ||\vec{u}||^{2}||\vec{v}||^{2} - (\langle \vec{u}, \vec{v} \rangle)^{2} \\)
5. Se \\( \theta \\) é o ângulo entre dois vetores não-nulos \\( \vec{u} \\) e \\( \vec{v} \\), então
\\[
||\vec{u} \times \vec{v}|| = ||\vec{u}||||\vec{v}||\text{sin} \theta
\\]
6. \\( \vec{u} \times \vec{v} = \vec{0} \iff \vec{u}||\vec{v} \\)
7. \\( \vec{u} \times (\vec{v} + \vec{w}) = \vec{u} \times \vec{v} + \vec{u} \times \vec{w} \\)
\\( (\vec{u} + \vec{v}) \times \vec{w} = \vec{u} \times \vec{w} + \vec{v} \times \vec{w} \\)
8. \\( x(\vec{u} \times \vec{v}) = (x\vec{u}) \times \vec{v} = \vec{u} \times (x\vec{v}) \\)
9. \\( \langle \vec{u}, \vec{v} \times \vec{w} \rangle = \langle \vec{u} \times \vec{v}, \vec{w} \rangle \\)

> ***Observação***
> Por 6, temos que \\( \vec{u} \times \vec{u} = \vec{0}, \forall \vec{u} \\).
> Por 2, vemos que o produto vetorial não é comutativo, ou seja, \\( \vec{u} \times \vec{v} \neq \vec{v} \times \vec{u} \\).
> O produto vetorial não é associativo, ou seja, em geral temos que
> \\( (\vec{u} \times \vec{v}) \times \vec{w} \neq \vec{u} \times (\vec{v} \times \vec{w}) \\).

### Exemplo

Determine um vetor com módulo igual a 5 *simultaneamente ortogonal* aos vetores \\( \vec{u} = (1, 1, 0) \\) e \\( \vec{v} = (-1, 1, 2) \\).

<details>

\\[
\vec{u} \times \vec{v} =
\begin{vmatrix}
1 & 1 & 0
-1 & 1 & 2
\end{vmatrix}
= (2, -2, 2) = \vec{w}
\\]

\\[
||\vec{w}|| = \sqrt{(2)^{2} + (2)^{2} + (2)^{2}} = \sqrt{12} = 2\sqrt{3}
\\]

\\[
2\sqrt{3}x = 5 \implies x = \frac{5 \sqrt{3}}{6}
\\]

\\[
\vec{w} \cdot \frac{5 \sqrt{3}}{6} = (\frac{10\sqrt{3}}{6}, -\frac{10\sqrt{3}}{6}, \frac{10\sqrt{3}}{6}) = (\frac{5 \sqrt{3}}{3}, -\frac{5 \sqrt{3}}{3}, \frac{5 \sqrt{3}}{3})
\\]

</details>

### Interpretação Geométrica para o Produto Vetorial

Sejam \\( \vec{u} \\) e \\( \vec{v} \\) vetores não-nulos e não-paralelos, e \\( \theta \\) o ângulo entre eles. Sabemos que estes valores determinam um paralelogramo.

Chame de \\( a \\) a mediada da altura deste paralelogramo. Note que

\\[
\text{sin} \theta = \frac{a}{||\vec{v}||} \implies a = ||\vec{v}|| \text{sin} \theta
\\]

Assim, a área deste paralelogramo é dada por

\\[
A = \text{base} \cdot \text{altura} = ||\vec{u}||a = ||\vec{u}||||\vec{v}|| \text{sin} \theta
\\]

Portanto, pela propriedade 5 obtemos que

\\[
A = ||\vec{u} \times \vec{v}||
\\]

Conclusão: O módulo do produto de vetorial de dois vetores não-nulos é igual a área do paralelogramo determinado por eles.

#### Exemplo

Considere os vetores \\( \vec{u} = (1, -1, 1) \\) e \\( \vec{v} = (2, -3, 4) \\). Calcule a área do paralelogramo gerado por \\( \vec{u} \\) e \\( \vec{v} \\).

<details>

\\[
\vec{u} \times \vec{v} =
\begin{vmatrix}
1 & -1 & 1
2 & -3 & 4
\end{vmatrix}
= \vec_{i} (-4 + 3) - \vec{j} (4 - 2) + \vec{k} (-3 + 2) = (-1, -2, -1) = \vec{w}
\\]

\\[
||\vec{w}|| = \sqrt{(-1)^{2} + (-2)^{2} + (-1)^{2}} = \sqrt{6}
\\]

</details>

#### Exemplo

Considere os pontos \\( A = (2, 1, 1) \\), \\( B = (3, -1, 0) \\) e \\( C = (4, 2, -2) \\). Calcule a área do triângulo \\( ABC \\).

<details>

\\[
\vec{AB} = B - A = (1, -2, -1) = \vec{u}
\\]

\\[
\vec{AC} = C - A = (2, 1, -3) = \vec{v}
\\]

\\[
\vec{u} \times \vec{v} =
\begin{vmatrix}
1 & -2 & -1
2 & -3 & -3
\end{vmatrix}
= i(6 + 1) - j(-3 + 2) + k(1 + 4) = (7, 1, 5) = \vec{w}
\\]

\\[
||\vec{w}|| = \sqrt{(7)^{2} + (1)^{2} + (5)^{2}} = \sqrt{75} = 5\sqrt{3}
\\]

Como podemos dividir um paralelogramo em dois triângulos, a área do triângulo é \\( \frac{5\sqrt{3}}{2} \\).

</details>

## Produto Misto

O **produto misto** de três vetores \\( \vec{u} \\), \\( \vec{v} \\) e \\( \vec{w} \\) no espaço, tomados nesta ordem, é um número real, denotado por \\( (\vec{u}, \vec{v}, \vec{w}) \\), e definido por

\\[
(\vec{u}, \vec{v}, \vec{w}) = \langle \vec{u}, \vec{v} \times \vec{w} \rangle =
\begin{vmatrix}
x_{1} & y_{1} & z_{1}
x_{2} & y_{2} & z_{2}
x_{3} & y_{3} & z_{3}
\end{vmatrix}
\\]

### Exemplo

Calcule \\( (\vec{u}, \vec{v}, \vec{w}) \\), onde \\( \vec{u} = (3, -1, 1) \\), \\( \vec{v} = (1, 2, 2) \\) e \\( \vec{w} = (2, 0, -3) \\).

<details>

\\[
\begin{vmatrix}
3 & -1 & 1
1 & 2 & 2
2 & 0 & -3
\end{vmatrix}
= 3(-6) + 1(-3 - 4) + 1(-4) = -18 - 7 - 4 = -29
\\]

</details>

### Propriedades

1. Se \\( \vec{u} = \vec{0} \\) ou \\( \vec{v} = \vec{0} \\) ou \\( \vec{w} = \vec{0} \\) então \\( (\vec{u}, \vec{v}, \vec{w}) = 0 \\).
2. Se \\( \vec{u}|| \vec{v} \\) ou \\( \vec{v}||\vec{w} \\) ou \\( \vec{u}||\vec{w} \\) então \\( (\vec{u}, \vec{v}, \vec{w}) = 0 \\).
3. O produto misto (\vec{u}, \vec{v}, \vec{w}) muda de sinal ao trocarmos a posição dos vetores.
4. \\( (\vec{u} + \vec{x}, \vec{v}, \vec{w}) = (\vec{u}, \vec{v}, \vec{w}) + (\vec{x}, \vec{v}, \vec{w}) \\), \\( (\vec{u}, \vec{v} + \vec{x}, \vec{w}) = (\vec{u}, \vec{v}, \vec{w}) + (\vec{x}, \vec{x}, \vec{w}) \\), \\( (\vec{u}, \vec{v}, \vec{w} + \vec{x} = (\vec{u}, \vec{v}, \vec{w}) + (\vec{x}, \vec{v}, \vec{x}) \\).
5. \\( (x\vec{u}, \vec{v}, \vec{w}) = (\vec{u}, x\vec{v}, \vec{w}) = (\vec{u}, \vec{v}, x\vec{w}) = x(\vec{u}, \vec{v}, \vec{w}) \\).
6. \\( (\vec{u}, \vec{v}, \vec{w}) = 0 \iff \vec{u}, \vec{v}, \vec{w} \text{ são coplanares (ou seja, pertencem a um mesmo plano)} \\)

> ***Observação***
> A maioria dessas propriedades vem das matrizes.

#### Exemplo

Verifique se os vetores \\( \vec{u} = (1, -1, 2) \\), \\( \vec{v} = (2, 2, 1) \\) e \\( \vec{w} = (-2, 0, -4) \\) são coplanares.

<details>

\\[
\begin{vmatrix}
x_{1} & y_{1} & z_{1}
x_{2} & y_{2} & z_{2}
x_{3} & y_{3} & z_{3}
\end{vmatrix}
= (1 \cdot 2 \cdot -4) + (-1 \cdot 1 \cdot -2) + (2 \cdot 2 \cdot 0) - (2 \\cdot 2 \cdot -2) - (1 \cdot 1 \cdot 0) - (-1 \cdot 2 \cdot -4) = (-8) + (2) = -6
\\]

Como \\( -6 \neq 0 \\), esses vetores não são coplanares.

</details>

## Interpretação Geométrica para o Produto Misto

Podemos determinar um paralelepípedo usando três vetores não-nulos e dois não-paralelos.

Temos que o volume \\( V \\) do paralelepípedo é dado por

\\[
V = |(\vec{u}, \vec{v}, \vec{w})|
\\]

### Exemplo

Calcule o volume do paralelepípedo determinado pelos vetores \\( \vec{u} = (3, -1, 1) \\), \\( \vec{v} = (1, 2, ) \\) e \\( \vec{w} = (2, 0, -3) \\).
