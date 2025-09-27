# Cálculos Usando Propriedades dos Limites

- Propriedade da Soma: \\( \lim_{x \to a}[f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x) \\)
- Propriedade da Diferença: \\( \lim_{x \to a}[f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x) \\)
- Propriedade da Multiplicação por Constante: \\( \lim_{x \to a}[cf(x)] = c \lim_{x \to a} f(x) \\)
- Propriedade do Produto: \\( \lim_{x \to a}[f(x)g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x) \\)
- Propriedade do Quociente: \\( \lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)} \\) se \\( \lim_{x \to a} g(x) \neq 0 \\)
- Propriedade da Potência: \\( \lim_{x \to a} [f(x)]^{n} = \left[\lim_{x \to a} f(x)\right]^{n} \\)
- Propriedade da Constante: \\( \lim_{x \to a} c = c \text{ e } \lim_{x \to a} x = a \\)
- Propriedade do Expoente: \\( \lim_{x \to a} x^{n} = a^{n} \\)
- Propriedade da Raiz: \\( \lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{\lim_{x \to a} f(x)} \\)

## Exemplo

Calcule os limites.

(a) \\( \lim_{x \to 5} (2x^{2} - 3x + 4) \\)
(b) \\( \lim_{x \to -2} \frac{x^{3} + 2x^{2} - 1}{5 - 3x} \\)

<details>
(a)

\\[
\lim_{x \to 5} (2x^{2} - 3x + 4) = \lim_{x \to 5} (2x^{2}) - \lim_{x \to 5} (3x) + \lim_{x \to 5} 4
= 2 \lim_{x \to 5} x^{2} = 3 \lim_{x \to 5} x + \lim_{x \to 5} 4
= 2(5^{2}) - 3(5) + 4
= 39
\\]

(b)

\\[
\lim_{x \to -2} \frac{x^{3} + 2x^{2} - 1}{5 - 3x} = \frac{\lim_{x \to -2} (x^{3} + 2x^{2} - 1)}{\lim_{x \to -2} (5 - 3x)}
= \frac{\lim_{x \to -2} x^{3} + 2 \lim_{x \to -2} x^{2} - \lim_{x \to -2} 1}{\lim_{x \to -2} 5 - 3 \lim_{x \to -2} x}
= \frac{(-2)^{3} + 2(-2)^{2} - 1}{5 - 3(-2)}
= -\frac{1}{11}
\\]
</details>

## Propriedade de Substituição Direta

Se \\( f \\) for uma função polinomial ou racional e \\( a \\) estiver no domínio de \\( f \\), então

\\[
\lim_{x \to a} f(x) = f(a)
\\]

## Exemplo

Encontre \\( \lim_{x \to 1} \frac{x^{2} - 1}{x - 1} \\).

<details>
Não podemos encontrar o limite fazendo \\( x = 1 \\), então temos que encontrar outro jeito.

Podemos fatorar o numerador como uma diferença de quadrados para eliminar o denominador:

\\[
\frac{x^{2} - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1}
\\]

Isso é possível pois, quando \\( x \\) tende a 1, temos que \\( x \neq 1 \\) e, assim, \\( x - 1 \neq 0 \\).

\\[
= \lim_{x \to 1} (x + 1)
= 1 + 1 = 2
\\]
</details>

### Observação

Se \\( f(x) = g(x) \\) quando \\( x neq a \\), então \\( \lim_{x \to a} f(x) = \lim_{x \to a} g(x) \\), desde que o limite exista.

## Exemplo

Encontre \\( \lim_{ \to 1} g(x) \\) onde

\\[
g(x) =
\begin{cases}
x + 1 & \text{se } x \neq 1
\pi & \text{se } x = 1
\end{cases}
\\]

<details>
Aqui \\( g \\) está definida em \\( x = 1 \\), e \\( g(1) = \pi \\), mas o valor de um limite não depende do valor da função em 1. Como \\( g(x) = x + 1 \\) para x \neq 1, temos

\\[
\lim_{x \to 1} g(x) = \lim_{x \to 1} (x + 1) = 2
\\]
</details>

## Exemplo

Calcule \\( \lim_{h \to 0} \frac{(3 + h)^{2} - 9}{h} \\).

<details>
Não podemos simplesmente fazer \\( h = \\), então temos que usar um pouco de álgebra.

Expandindo o [produto notável](../../matematica-basica/produtos-notaveis.md) do numerador, obtemos

\\[
\frac{(9 + 6h + h^{2}) - 9}{h}
\\]

Que pode ser novamente simplificado

\\[
\frac{6h + h^{2}}{h} = \frac{h(6 + h)}{h} = 6 + h
\\]

Com isso, agora podemos fazer \\( h = 0 \\)

\\[
\\( \lim_{h \to 0} \frac{(3 + h)^{2} - 9}{h} \\) = \lim_{h \to 0} (6 + h) = 6
\\]
</details>

## Exemplo

Encontre \\(lim_{t \to 0} \frac{\sqrt{t^{2} + 9} - 3}{t^{2}} \\).

<details>
\\[
\lim_{t \to 0} \frac{\sqrt{t^{2} + 9} - 3}{t^{2}} = \lim_{t \to 0} \frac{\sqrt{t^{2} + 9} - 3}{t^{2}} \cdot \frac{\sqrt{x^{2} + 9} + 3}{\sqrt{x^{2} + 9} + 3}
= \lim_{t \to 0} \frac{(t^{2} + 9) - 9}{t^{2}(\sqrt{t^{2} + 9} + 3)}
= \lim_{t \to 0} \frac{t^{2}}{t^{2}(\sqrt{t^{2} + 9} + 3)}
= \lim_{t \to 0} \frac{1}{\sqrt{t^{2} + 9} + 3}
= \lim_{t \to 0} \frac{1}{\sqrt{\lim_{t \to 0} (t^{2} + 9)} + 3}
= \frac{1}{3 + 3} = \frac{1}{6}
\\]
</details>

## Exemplo

Mostre que \\( \lim_{x \to 0} |x| = 0 \\).

<details>
\\[
|x| =
\begin{cases}
x & \text{se } \geq 0
-x & \text{se } < 0
\end{cases}
\\]

Uma vez que \\( |x| = x \\) para \\( x > 0 \\), temos

\\[
\lim_{x \to 0^{+}} |x| = \lim_{x \to 0^{+}} = 0
\\]

Para \\( x < 0 \\), temos \\( |x| = -x \\) e, assim,

\\[
\lim_{x \to 0^{-}} |x| = \lim_{x \to 0^{-}} (-x) = 0
\\]

Pela conclusão de limites laterais, temos que

\\[
\lim_{x \to 0} |x| = 0
\\]
</details>

## Exemplo

Demonstre que \\( \lim_{x \to 0} \frac{|x|}{x} \\) não existe.

<details>
Fazendo pela esquerda

\\[
\lim_{x \to 0^{-}} \frac{|x|}{x} = \lim_{x \to 0^{-}} \frac{-x}{x} = \lim_{x \to 0^{-}} -1 = -1
\\]

Agora pela direita

\\[
\lim_{x \to 0^{+}} \frac{|x|}{x} = \lim_{x \to 0^{+}} \frac{x}{x} = \lim_{x \to 0^{+}} 1 = 1
\\]

Como \\( -1 \neq 1 \\), o limite não existe.
</details>

## Exemplo

Se

\\[
f(x) =
\begin{cases}
\sqrt{x - 4} & \text{se } x > 4
8 - 2x & \text{se } x < 4
\end{cases}
\\]

determine se \\( \lim_{x \to 4} f(x) \\) existe.

<details>
Fazendo pela esquerda

\\[
\lim_{x \to 4^{-}} f(x) = \lim_{x \to 4^{-}} (8 - 2x) = 8 - 2 \cdot 4 = 0
\\]

Fazendo pela direita

\\[
\lim_{x to 4^{+}} f(x) = \lim_{x \to 4^{+}} \sqrt{x - 4} = \sqrt{4 - 4} = 0
\\]

Como \\( 0 = 0 \\), o limite existe.
</details>

## Igualdade de Limites

Se \\( f(x) \leq g(x) \\) quando \\( x \\) está próximo a \\( a \\) (exceto possivelmente em \\( a \\)) e os limites de \\( f \\) e \\( g \\), ambos existem quando \\( x \\) tende a \\( a \\), então

\\[
\lim_{x \to a} f(x) \leq \lim_{x \to a} g(x)
\\]

## Teorema do Confronto (Teorema do Sanduíche)

Se \\( f(x) \leq g(x) \leq h(x) \\) quando \\( x \\) está próximo a \\( a \\) (exceto possívelmente em \\( a \\)) e

\\[
\lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L
\\]

então

\\[
\lim_{x \to a} g(x) = L
\\]

### Exemplo

Mostre que \\( \lim_{x \to 0} x^{2} \tex{sen } \frac{1}{x} = 0 \\).

<details>
Como os valores de \\( \text{sen} \\) estão sempre -1 e 1, podemos escrever

\\[
-1 \leq \text{sen } \frac{1}{x} \leq 1
\\]

Como qualquer inequação permanece verdadeira quando multiplicada por um número positivo, pdemos multiplicar essa inequação por \\( x^{2} \\) (visto que \\( x^{2} \geq 0 \forall x \\))

\\[
-x^{2} \leq x^{2} \text{sen } \frac{1}{x} \leq x^{2}
\\]

Sabemos que

\\[
\lim_{x \to 0} x^{2} = 0 \text{ e } \lim_{x \to 0} (-x^{2}) = 0
\\]

Usando o Teorema do Confronto, então temos que

\\[
\\( \lim_{x \to 0} x^{2} \tex{sen } \frac{1}{x} = 0 \\)
\\]
</details>
