# O Problema da Área

*Área* é um termo fácil de ser definido para regiões com lados retos. Em um retângulo, pro exemplo, a área é o produto do comprimento e da largura. Em um triângulo, é metade da base vezes a altura. Seguindo aquele método grego de exaustão, podemos encontrar a área de outros polígonos dividindo-os em múltiplos triângulos, somando as áreas desses triângulos no final.

Isso não é tão fácil quando estamos lidando com uma região com lados curvos. Podemos fazer uma *aproximação* dessas áreas ao dividir o gráfico em retângulos e depois tomando o limite das áreas dos retângulos, a medida que o número de retângulos aumenta.

## Exemplo

Use retângulos para estimar a área sob a parábola \\( y = x^{2} \\) de 0 até 1.

<details>

Como estamos fazendo de 0 até 1, podemos imaginar um quadrado na área do gráfico de com lados de comprimento 1. Dividindo a área \\( S \\) em quatro faixas, \\( S_{1} \\), \\( S_{2} \\), \\( S_{3} \\), e \\( S_{4} \\), com as retas veticais \\( x = \frac{1}{4} \\), \\( \frac{1}{2} \\), \\( \frac{3}{4} \\) e a existente \\( 1 \\) dividindo-as.

Podemos aproximar cada faixa por um retângulo com base igual à largura da faixa e altura igual ao lado direito da faixa. As alturas dos retângulos são os valores da função \\( f(x) = x^{2} \\) nas extremidades *diretas* dos subintervalos \\( \left[0, \frac{1}{4}\right] \\), \\( \left[\frac{1}{4}, \frac{1}{2}\right] \\), \\( \left[\frac{1}{2}, \frac{3}{4}\right] \\) e \\( \left[\frac{3}{4}, 1\right] \\).

Cada retângulo tem largura de \\( \frac{1}{4} \\) e altura de \\( \left(\frac{1}{4}\right)^{2} \\), \\( \left(\frac{1}{2}\right)^{2} \\), \\( \left(\frac{3}{4}\right)^{2} \\) e \\( \left(1\right)^{2} \\). Se \\( R_{4} \\) for a soma das áreas dos retângulos aproximantes, teremos

\\[
R_{4} = \frac{1}{4} \cdot \left(\frac{1}{4}\right)^{2} + \frac{1}{4} \cdot \left(\frac{1}{2}\right)^{2} + \frac{1}{4} \cdot \left(\frac{3}{4}\right)^{2} + \frac{1}{4} \cdot 1^{2} = \frac{15}{32} = 0,46875
\\]

> ***Observação***
> Os valores aqui estão ao quadrado pois estamos aplicando a função neles!

Por ser uma aproximação, temos que a área \\( A \\) de \\( S \\) é

\\[
A < 0,46875
\\]

Fazendo retângulos menores que tocam a curva em apenas um ponto (extremidade *esquerda* dos subintervalos), descobrimos uma outra área que server ajuda a definir o intervalo de \\( A \\).

\\[
L_{4} = \frac{1}{4} \cdot 0^{2} + \frac{1}{4} \cdot \left(\frac{1}{4}\right)^{2} + \frac{1}{4} \cdot \left(\frac{1}{2}\right)^{2} + \frac{1}{4} \cdot \left(\frac{3}{4}\right)^{2} = \frac{7}{32} = 0,21875
\\]

\\[
0,21875 < A < 0,46875
\\]

Podemos repetir esse procedimento com **números maiores de faixas** para encontrar **resultados mais precisos**. Fazendo isso, podemos chegar a deduzir um resultado como foi feito em [limites](../calculo-a/limites.md).

Nesse exemplo, mil faixas nos dão

\\[
0,3328336 < A < 0,3338335
\\]

Que, por ser próximo de 0,3333..., podemos dizer que tende a \\( \frac{1}{3} \\).

</details>

## Exemplo

Para a região \\( S \\) do Exemplo 1, mostre que a soma das áreas dos retângulos aproximantes superiores tende a \\( \frac{1}{3} \\), isto é,

\\[
\lim_{n \to \infty} R_{n} = \frac{1}{3}
\\]

<details>

\\( R_{n} \\) é a soma das áreas dos retângulos. Cada retângulo tem uma largura \\( \frac{1}{n} \\), e as alturas são os valores da função \\( f(x) = x^{2} \\) nos pontos \\( \frac{1}{n} \\), \\( \frac{2}{n} \\), \\( \frac{3}{n} \\), ..., \\( \frac{n}{n} \\). Logo

\\[
R_{n} = \frac{1}{n} \cdot \left(\frac{1}{n}\right)^{2} + \frac{1}{n} \cdot\left(\frac{2}{n}\right)^{2} + \frac{1}{n} \cdot \left(\frac{3}{n}\right)^{2} + ... + \frac{1}{n} \cdot \left(\frac{n}{n}\right)^{2}
= \frac{1}{n} \cdot \frac{1}{n^{2}} (1^{2} + 2^{2} + 3^{2} + ... + n^{2})
= \frac{1}{n^{3}} (1^{2} + 2^{2} + 3^{2} + ... n^{2})
\\]

Utilizamos aqui a fórmula para a soma dos quadrados dos \\( n \\) primeiros inteiros positivos:

\\[
1^{2} + 2^{2} + 3^{2} + ... + n^{2} = \frac{n(n + 1)(2n + 1)}{6}
\\]

Colocando essa fórmula em \\( R_{n} \\), temos

\\[
R_{n} = \frac{1}{n^{3}} \cdot \frac{n(n + 1)(2n + 1)}{6} = \frac{(n + 1)(2n + 1)}{6n^{2}}
\\]

Então, temos

\\[
\lim_{n \to \infty} R_{n} = \lim_{n \to \infty} \frac{(n + 1)(2n + 1)}{6n^{2}}
= \lim_{n \to \infty} \frac{1}{6} \left(\frac{n + 1}{n}\right)\left(\frac{2n + 1}{n}\right)
\text{Dividindo os termos em parênteses por $n$...}
= \lim_{n \to \infty} \frac{1}{6} \left(1 + \frac{1}{n}\right)\left(2 + \frac{1}{n}\right)
\text{Lembrando que $\lim_{n \to \infty} \frac{1}{n} = 0$ e que o limite de uma constante é a própria constante...}
= \frac{1}{6} \cdot 1 \cdot 2 = \frac{1}{3}
\\]

Com isso, podemos definir a área de \\( S \\)

\\[
A = \lim_{n \to \infty} R_{n} = \lim_{n \to \infty} L_{n} = \frac{1}{3}
\\]

</details>

## Área

A **área** \\( A \\) da região \\( S \\) que está sob o gráfico de uma função contínua \\( f \\) é o limite da soma das áreas dos retângulos aproximantes:

\\[
A = \lim_{n \to \infty} R_{n} = \lim_{n \to \infty}\left[f(x_{1})\Delta{x} + f(x_{2})\Delta{x} + ... + f(x_{n})\Delta{x}\right]
\Delta{x} = \frac{b - a}{n},
b = \text{fim do intervalo},
a = \text{início do intervalo}
\\]

Tomando a extremidade esquerda chegamos no mesmo valor, só que com um \\( n \\) diferente

\\[
A = \lim_{n \to \infty} L_{n} = \lim_{n \to \infty}\left[f(x_{0})\Delta{x} + f(x_{1})\Delta{x} + ... + f(x_{n - 1})\Delta{x}\right]
\Delta{x} = \frac{b - a}{n},
b = \text{fim do intervalo},
a = \text{início do intervalo}
\\]

Devido a essa igualdade, em vez de usarmos as extremidades, podemos usar outras partes dos intervalos onde a curva toca os retângulos primeiro. Esses pontos, representados por \\( x_{n}^{\*} \\) são chamados de **pontos amostrais**.

\\[
A = \lim_{n \to \infty} \left[f(x_{1}^{\*})\Delta{x} + f(x_{2}^{*})\Delta{x} + ... + f(x_{n}^{\*})\Delta{x}\right]
\\]

Um jeito de reescrever isso é usando somatório:

\\[
A = \lim_{n \to \infty} \sum_{i = 1}^{n} f(x_{i}^{*}) \Delta{x}
\\]

### Exemplo

Seja \\( A \\) a área da região que está sob o gráfico de \\( f(x) = e^{-x} \\) entre \\( x = 0 \\) e \\( x = 2 \\).

(a) Usando as extremidades direitas, encontre uma expressão para \\( A \\) como um limite. Não calcule o limite.

(b) Estime a área tomando como pontos amostrais os pontos médios e usando quatro e depois dez subintervalos.

<details>

(a) Uma vez que \\( a = 0 \\) e \\( b = 2 \\), a largura de um subintervalo é

\\[
\Delta{x} = \frac{2 - 0}{n} = \frac{2}{n}
\\]

Portanto, \\( x_{1} = \frac{2}{n} \\), \\( x_{2} = \frac{4}{n} \\), \\( x_{3} = \frac{6}{n} \\), \\( x_{i} = \frac{2i}{n} \\). A soma dos retângulos aproximantes é

\\[
R_{n} = f(x_{1})\Delta{x} + f(x_{2})\Delta{x} + ... + f(x_{n})\Delta{x}
= e^{-x_{1}}\Delta{x} + e^{-x_{2}}\Delta{x} + ... + e^{-x_{n}}\Delta{x}
= e^{\frac{-2}{n}}\left(\frac{2}{n}\right) + e^{\frac{-4}{n}}\left(\frac{2}{n}\right) + ... + e^{\frac{-2n}{n}}\left(\frac{2}{n}\right)
\\]

Segundo a nossa definição, a área é

\\[
A = \lim_{n \to \infty} R_{n} = \lim_{n \to \infty} \frac{2}{n} (e^{\frac{-2}{n}} + e^{\frac{-4}{n}} + e^{\frac{-6}{n}} + ... + e^{\frac{-2n}{n}})
\\]

Usando somatório teríamos

\\[
A = \lim_{n \to \infty} \frac{2}{n} \sum_{i = 1}^{n} e^{\frac{-2i}{n}}
\\]

(b) Com \\( n = 4 \\), os subintervalos com mesma largura \\( \Delta{x} = 0,5 \\) são \\( [0; 0,5] \\), \\( [0,5; 1] \\), \\( [1; 1,5] \\), e \\( [1,5;2] \\). Os pontos médios desses intervalos são \\( x_{1}^{\*} = 0,25 \\), \\( x_{2}^{*} = 0,75 \\), \\( x_{3}^{\*} = 1,25 \\) e \\( x_{4}^{\*} = 1,75 \\), e a soma das áreas dos quatro retângulos aproximantes é

\\[
M_{4} = \sum_{i = 1}^{4} f(x_{1}^{*}) \Delta{x}
= f(0,25) \Delta{x} + f(0,75) \Delta{x} + f(1,25) \Delta{x} + f(1,75) \Delta{x}
= e^{-0,25} (0,5) + e^{-0,75} (0,5) + e^{-1,25} (0,5) + e^{-1,75} (0,5)
= \frac{1}{2} (e^{-0,25} + e^{-0,75} + e^{-1,25} + e^{-1,75}) \approx 0,8557
\\]

Logo, uma estimativa para a área é

\\[
A \approx 0,8557
\\]

Com \\( n = 10 \\), os subintervalos são \\( [0; 0,2] \\), \\( [0,2; 0,4], ..., [1,8; 2] \\) e os pontos médios são \\( x_{1}^{\*} = 0,1 \\), \\( x_{2}^{\*} = 0,3 \\), \\( x_{3}^{\*} = 0,5 \\), ..., \\( x_{10}^{\*} = 1,9 \\). Assim

\\[
A \approx M_{10} = f(0,1) \Delta{x} + f(0,3) \Delta{x} + f(0,5) \Delta{x} + ... + f(1,9) \Delta{x}
= 0,2(e^{-0,1} + e^{-0,3} + e^{-0,5} + ... + e^{-1,9}) \approx 0,8632
\\]

</details>
