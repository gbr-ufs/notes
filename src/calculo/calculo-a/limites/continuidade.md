# Continuidade

Uma função \\( f \\) é **contínua em un número** \\( a \\) se

\\[
\lim_{x \to a} f(x) = f(a)
\\]

## Exemplo

Onde cada uma das seguintes funções é descontínua?

(a) \\( f(x) = \frac{x^{2} - x -}{x - 2} \\)
(b) \\( f(x) = \begin{cases} \frac{1}{x^{2}} & \text{se } x \neq 0 \\ 1 & \text{se } x = 0 \end{cases} \\)
(c) \\( f(x) = \begin{cases} \frac{x^{2} - x - 2}{x - 2} & \text{se } x \neq 2 \\ 1 & \text{se } x = 2 \end{cases} \\)

<details>
(a) Observe que \\( f(2) \\) não está definida; logo, \\( f \\) é descontínua em 2.
(b) Aqui \\( f(0) = 1\\) está definida, mas

\\[
\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{1}{x^{2}}
\\]

não existe. Então \\( f \\) é descontínua em 0.
(c) Aqui \\( f(2) = 1 \\) está definida e

\\[
\lim_{x \to 2} f(x) = \lim_{x \to 2} \frac{x^{2} - x - 2}{x - 2} = \lim_{x \to 2} \frac{(x - 2)(x + 1)}{x - 2} = \lim_{x \to 2} (x + 1) = 3
\\]

existe. Mas

\\[
\lim_{x \to 2} \neq f(2)
\\]

logo, \\( f \\) não é contínua em 2.
</details>

## Lateralidade

Uma função \\( f \\) é **contínua à direita em um número** \\( a \\) se

\\[
\lim_{x \to a^{+}} f(x) = f(a)
\\]

e \\( f \\) é **contínua à esquerda em** \\( a \\) se

\\[
\lim_{x \to a^{-}} = f(a)
\\]

## Intervalo

Uma função \\( f \\) é **contínua em um intervalo** se for contínua em todos os números do intervalo. Se \\( f \\) for definida somente de um lado da extremidade do intervalo, entendemos *continuidade* na extremidade como *continuidade à direita* ou *à esquerda*.

### Exemplo

Mostre que a função \\( f(x) = 1 - \sqrt{1 - x^{2}} \\) é contínua no intervalo [-1, 1].

<details>
\\[
\lim_{x \to a} f(x) = \lim_{x \to a} (1 - \sqrt{1 - x^{2}}) \\
= 1 \lim_{x \to a} \sqrt{1 - x^{2}} \\
= 1 - \sqrt{\lim_{x \to a} (1 - x^{2})} \\
= 1 - \sqrt{1 - a^{2}} \\
= f(a)
\\]

Assim, pela definição, \\( f \\) é contínua em \\( a \\) se \\( -1 < a < 1 \\). Cálculos análogos mostram que

\\[
\lim_{x \to -1^{+}} f(x) = 1 = f(-1) \text{ e } \lim_{x \to 1^{-}} f(x) = 1 = f(1)
\\]

logo, \\( f \\) é contínua à direita em -1 e contínua à esquerda em 1. Consequentemente, de acordo com a definição de continuidade em intervalo, \\( f \\) é contínua em [-1, 1].
</details>

### Teorema do Intervalo

Se \\( f \\) e \\( g \\) forem contínuas em \\( a \\) e se \\( c \\) for uma constante, então as seguintes funções também são contínuas em \\( a \\):

1. \\( f + g \\)
2. \\( f - g \\)
3. \\( cf \\)
4. \\( fg \\)
5. \\( \frac{f}{g} \\) se \\( g(a) \neq 0 \\)

### Teorema dos Conjuntos

(a) Qualquer polinômio é contínuo em toda a parte.
(b) Qualquer função racional é contínua sempre que estiver definida; ou seja, é contínua em seu domínio

#### Exemplo

Encontre \\\( \lim_{x \to - 2} \frac{x^{3} + 2x^{2} - 1}{5 - 3x} \\).

<details>
A função

\\[
f(x) = \frac{x^{3} + 2x^{2} - 1}{5 - 3x}
\\]

é racional; assim, pelo Teorema dos Conjuntos, é contínua em seu domínio, que é \\( \{x|x \neq \frac{5}{3}\} \\).

Logo

\\[
\lim_{x \to -2} \frac{x^{3} + 2x^{2} - 1}{5 - 3x} = \lim_{x \to -2} f(x) = f(-2) \\
= \frac{(-2)^{3} + 2(-2)^{2} - 1}{5 - 3(-2)} = -\frac{1}{11}
\\]
</details>

### Teorema das Operações

Se \\( f \\) e \\( g \\) froem contínuas em \\( a \\) e \\( c \\) for uma constante, então as seguintes funções também são contínuas em \\( a \\):

1. \\( f + g \\)
2. \\( f - g \\)
3. \\( cf \\)
4. \( fg \\)
5. \\( \frac{f}{g} & g(a) \neq 0 \\)

### Teorema dos Tipos de Funções Contínuas

Os seguintes tipos de funções são contínuas para todo o número de seus domínios:

- Polinômios
- Funções Trigonométricas
- Funções Trigonométricas Inversas
- Funções Exponenciais
- Funções Racionais
- Funções Logarítmicas
- Funções Raízes

#### Exemplo

Onde a função \\( f(x) = \frac{\ln x + \text{tg}^{-} x}{x^{2} - 1} \\) é contínua?

<details>
Pelo Teorema dos Tipos de Funções Contínuas, sabemos que \\( y = \ln x \\) é contínua para \\( x > 0 \\) e que \\( y = \text{tg}^{-1} x \\) é contínua em \\( \mathbb{R} \\). Assim, pelo Teorema dos Tipos de Funções Contínuas, \\( y = \ln x + \text{tg}^{-1} x \\) é contínua em \\( (0, \infty) \\).

O denominador \\( y = x^{2} - 1 \\) é um polinômio, portanto é contínuo em toda a parte.

Assim, \\( f \\) é contínua em todos os números postivos \\( x \\), exceto onde \\( x^{2} - 1 = 0 \\). Logo, \\( f \\) é contínua nos intervalos aberto \\( (0, 1) \\) e \\( (1, \infty) \\).
</details>

#### Exemplo

Calcule \\( \lim_{x \to \pi} \frac{\text{sen } x}{2 + \text{cos } x} \\).

<details>
O Teorema ods Tipos de Funções Contínuas nos diz que \\( y = \text{sen } x \\) é contínua. \\( y = 2 + \text{cos } x \\) é a soma de duas funções contínuas, e, portanto, é contínua. Logo, a razão

\\[
f(x) = \frac{\text{sen } x}{2 + \text{cos } x}
\\]

é sempre contínua. Portanto, pela definição de função contínua,

\\[
\lim_{x \to \pi} \frac{\text{sen } x}{2 + \text{cos } x} = \lim_{x \to \pi} f(x) = f(\pi) = \frac{\text{sen } \pi}{2 + \text{cos } \pi} = \frac{0}{2 - 1} = 0
\\]
</details>

### Teorema das Funções Compostas

\\[
\lim_{x \to a} f(g(x)) = f\left(\lim_{x \to a} g(x)\right)
\\]

#### Exemplo

Calcule \\( \lim_{x \to 1} \text{arcsen } \left(\frac{1 - \sqrt{x}}{1 - x}\right) \\).

<details>
Uma vez que \\( \text{arcsen} \\) é uma função contínua, podemos aplicar o Teorema das Funções Compostas:

\\[
\lim_{x \to 1} \text{arcsen } \left(\frac{1 - \sqrt{x}}{1 - x}\right) = \text{arcsen } \left(\lim_{x \to 1} \frac{1 - \sqrt{x}}{1 - x}\right) \\
= \text{arcsen } \left(\lim_{x \to 1} \frac{1 - \sqrt{x}}{(1 - \sqrt{x})(1 + \sqrt{x})}\right) \\
= \text{arcsen } \left(\lim_{x \to 1} \frac{1}{1 + \sqrt{x}}\right) \\
= \text{arcsen } \frac{1}{2} = \frac{\pi}{6}
\\]
</details>

### Teorema do Valor Intermediário

Suponha que \\( f \\) seja contínua em um intervalo fechado \\( [a, b] \\) e seja \\( N \\) um número qualquer entre \\( f(a) \\) e \\( f(b) \\), em que \\( f(a) \neq f(b) \\). Então existe um número \\( c \\) em \\( (a, b) \\) tal que \\( f(c) = N \\).

#### Exemplo

Mostre que existe uma raiz da equação

\\[
4x^{3} - 6x^{2} + 3x - 2 = 0

\\]

entre 1 e 2.

<details>
Seja \\( f(x) = 4x^{3} - 6x^{2} + 3x - 2 \\). Estamos procurando por uma solução da equação dada, isto é, um número \\( c \\) entre 1 e 2 tal que \\( f(c) = 0 \\). Portanto, tomamos \\( a = 1 \\), \\( b = 2 \\) e \\( N = 0 \\) no Teorema do Valor Intermediário. Temos

\\[
f(1) = 4 - 6 + 3 - 2 = -1 < 0 \\
f(2) = 32 - 24 + 6 - 2 = 12 > 0
\\]

Logo, \\( f(1) < 0 < f(2) \\), isto é, \\( N = 0 \\) é um número entre \\( f(1) e f(2) \\). Como \\( f \\) é contínua, por ser um polinômio, o Teorema Do Valor Intermediário afirma que existe um número \\( c \\) entre 1 e 2 tal que \\( f(c) = 0 \\). Em outras palavras, a equação \\( 4x^{3} - 6x^{2} + 3x - 2 = 0 \\) tem pelo menos uma raiz \\( c \\) no intervalo \\( (1, 2) \\).
</details>
