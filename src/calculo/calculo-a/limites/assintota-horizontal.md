# Assíntotas Horizontais

A reta \\( y = L \\) é chamada **assíntota horizontal** da curva \\( y = f(x) \\) se

\\[
\lim_{x \to \infty} f(x) = L \text{ ou } \lim_{x \to -\infty} f(x) = L
\\]

Uma função pode ter mais de uma assíntota horizontal.

## Postivo

Seja \\( f \\) uma função definida em algum intervalo, \\( (a, \infty) \\). Então

\\[
\lim_{x \to \infty} f(x) = L
\\]

significa que os valores de \\( f(x) \\) ficam arbitrariamente próximos de \\( L \\) tomando \\( x \\) suficientemente grande.

Lembrando que \\( \infty \\) não é um número.

## Negativo

Mesma coisa que o positivo, só que em vez de tomar valores arbitrariamente grandes, os valores tecnicamente seriam "arbitrariamente pequenos", por serem negativos.

## Exemplo

Encontre \\( \lim_{x \to \infty} \frac{1}{x} \\) e \\( \lim_{x \to -\infty} \frac{1}{x} \\).

<details>

Observe que quando \\( x \\) é grande, \\( \frac{1}{x} \\) é pequeno. Com isso, podemos fazer \\( \frac{1}{x} \\) tão próximo de 0 quanto quisermos. Portanto, segundo a definição, temos

\\[
\lim_{x \to \infty} \frac{1}{x} = 0
\\]

E também

\\[
\lim_{x \to -\infty} \frac{1}{x} = 0
\\]

Com isso, também temos a informação de que a reta \\( y = 0 \\) (o eixo \\( x \\) é uma assíntota horizontal de \\( y = \frac{1}{x} \\).

</details>

## Teorema

Se \\( r > 0 \\) for um número racional, então

\\[
\lim_{x \to \infty} \frac{1}{x^{r}} = 0
\\]

Se \\( r > 0 \\) for um número racional tal que \\( x^{r} \\) seja definida para todo \\( x \\), então

\\[
\lim_{x \to -\infty} \frac{1}{x^{r}} = 0
\\]

### Exemplo

Calcule

\\[
\lim_{x \to \infty} \frac{3x^{2} - x - 2}{5x^{2} + 4x + 1}
\\]

e indique quais propriedades de limites foram usadas em cada etapa.

<details>

Para calcular o limite no infinito de uma função racional, primeiro dividimos ela pela maior potência de \\( x \\) que ocorre no denominador

\\[
\lim_{x \to \infty} \frac{3x^{2} - x - 2}{5x^{2} + 4x + 1} = \lim_{x \to \infty} \frac{\frac{3x^{2} - x - 2}{x^{2}}}{\frac{5x^{2} + 4x + 1}{x^{2}}} = \lim_{x \to \infty} \frac{3 - \frac{1}{x} - \frac{2}{x^{2}}}{5 + \frac{4}{x} + \frac{1}{x^{2}}}
= \frac{\lim_{x \to \infty} \left(3 - \frac{1}{x} - \frac{2}{x^{2}}\right)}{\lim_{x \to \infty} \left(5 + \frac{4}{x} + \frac{1}{x^{2}}\right)}
= \frac{\lim_{x \to \infty} 3 - \lim_{x \to \infty} \frac{1}{x} - 2 \lim_{x \to \infty} \frac{1}{x^{2}}}{\lim_{x \to \infty} 5 + 4 \lim_{x \to \infty} \frac{1}{x} + \lim_{x \to \infty} \frac{1}{x^{2}}}
= \frac{3 - 0 - 0}{5 + 0 + 0}
= \frac{3}{5}
\\]

</details>

### Exemplo

Determine as assíntotas horizontais e verticais do gráfico da função

\\[
f(x) = \frac{\sqrt{2x^{2} + 1}}{3x - 5}
\\]

<details>

Dividindo o numerador e o denominador por \\( x \\) temos

\\[
\lim_{x \to \infty} \frac{\sqrt{2x^{2} + 1}}{3x - 5} = \lim_{x \to \infty} \frac{\sqrt{2 + \frac{1}{x^{2}}}}{3 - \frac{5}{x}}
= \frac{\lim_{x \to \infty} \sqrt{2 + \frac{1}{x^{2}}}}{\lim_{x \to \infty} \left(3 - \frac{5}{x}\right)} = \frac{\sqrt{\lim_{x \to \infty} 2 + \lim_{x \to \infty} \frac{1}{x^{2}}}}{\lim_{x \to \infty} 3 - 5 \lim_{x \to \infty} \frac{1}{x}} = \frac{\sqrt{2 + 0}}{3 - 5 \cdot 0} = \frac{\sqrt{2}}{3}
\\]

Portanto, a reta \\( y = \frac{\sqrt{2}}{3} \\) é uma assíntota horizontal do gráfico de \\( f \\).

No cálculo do limite quando \\( x \to -\infty \\), devemos lembrar que, para \\( x < 0 \\), temos \\( \sqrt{x^{2}} = |x| = -x \\). Logo, quando dividimos o numerador por \\( x \\), para \\( x < 0 \\), obtemos

\\[
\frac{1}{x}\sqrt{2x^{2} + 1} = -\frac{1}{\sqrt{x^{2}}} \sqrt{2x^{2] + 1} = -\sqrt{2 + \frac{1}{x^{2}}}
\\]

Logo

\\[
\lim_{x \to -\infty} \frac{\sqrt{2x^{2} + 1}}{3x - 5} = \lim_{x \to -\infty} \frac{-\sqrt{2 + \frac{1}{x^{2}}}}{3 - \frac{5}{x}} = \frac{-\sqrt{2 + \lim_{x \to -\infty} \frac{1}{x^{2}}}}{3 - 5 \lim_{x \to -\infty} \frac{1}{x}} = -\frac{\sqrt{2}}{3}
\\]

Assim, a reta \\( y = -\frac{\sqrt{2}}{3} \\) é também uma assíntota horizontal.

A assíntota vertical ocorre quando a função dá numa indeterminação. Com uma função racional, podemos fazer isso facilmente ao igualar o denominador a zero. Isso é possível com \\( \frac{5}{3} \\)

> [!TIP]
> Lembrando que tem que fazer dos dois lados para ter certeza!

\\[
\lim_{x \to \frac{5}{3}} \frac{\sqrt{2x^{2} + 1}}{3x - 5} = \infty
\\]

</details>

### Exemplo

Calcule \\( \lim_{x \to \infty} (\sqrt{x^{2} + 1} - x) \\).

<details>

Multiplicamos o numerador e o denominador pelo conjugado radical:

\\[
\lim_{x \to \infty} (\sqrt{x^{2} + 1} - x) = \lim_{x \to \infty} (\sqrt{x^{2} + 1} - x) \cdot \frac{\sqrt{x^{2} + 1} + x}{\sqrt{x^{2} + 1} + x}
= \lim_{x \to \infty} \frac{(x^{2} + 1) - x^{2}}{\sqrt{x^{2} + 1} + x} = \lim_{x \to \infty} \frac{1}{\sqrt{x^{2} + 1} + x} = 0
\\]

</details>

## Limite da Função Exponencial Natural

\\[
\lim_{x \to -\infty} e^{x} = 0
\\]

### Exemplo

Calcule \\( \lim_{x \to 0^{-}} e^{\frac{1}{x}}.

<details>

\\[
\lim_{x \to 0^{-}} e^{\frac{1}{x}} = \lim_{t \to -\infty} e^{t} = 0
\\]

</details>

## Exemplo

Calcule \\( \lim_{x \to \infty} \text{sen } x \\).

<details>

Quando \\( x \\) cresce, os valores de \\( \text{sen } x \\) oscilam entre 1 e -1 um número infinito de vezes; logo, eles não tendem a qualquer número definido. Portanto, \\( \lim_{X \to \infty} \text{sen } x \\) não existe.

</details>

## Limites Infinitos no Infinito

### Exemplo

Encontre \\( \lim_{x \to \infty} x^{3} \\) e \\( \lim_{x \to -\infty} x^{3} \\).

Quando \\( x \\0 torna-se grande, \\( x^{3} \\) também fica grande. Então

\\[
\lim_{x \to \infty} x^{3} = \infty
\\]

### Exemplo

Encontre \\( \lim_{x \to \infty} (x^{2} - x) \\).

<details>

Não podemos escrever

\\[
\lim_{x \to \infty} (x^{2} - x) = \lim_{x \to \infty} x^{2} - \lim_{x \to \infty} x = \infty - \infty
\\]

Pois \\( \infty \\) não é um número. Contudo, *podemos* escrever

\\[
\lim_{x \to \infty} (x^{2} - x) = \lim_{x \to \infty} x(x - 1) = \infty
\\]

</details>
