# Derivadas e Taxas de Variação

## Tangentes

A **reta tangente** à curva \\( y = f(x) \\) em um ponto \\( P(a, f(a)) \\) é a reta passando por \\( P \\) com a inclinação

\\[
m = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
\\]

desde que esse limite exista.

### Exemplo

Encontre uma equação da reta tangente à parábola \\( y = x^{2} \\) no ponto \\( P(1, 1) \\).

<details>
\\[
m = \lim_{x \to 1} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1} \frac{x^{2} - 1}{x - 1} \\
= \lim_{x \to 1} \frac{(x - 1)(x + 1)}{x - 1} \\
= \lim_{x \to 1} (x + 1) = 1 + 1 = 2
\\]

Usando a forma ponto-inclinação da reta (\\( y - y_{0} = m(x - x_{0}) \\)), encontramos que uma equação da reta tangente em \\( (1, 1) \\) é

\\[
y = 2x - 1
\\]
</details>

### Outra definição

O livro diz que essa pode ser mais fácil de ser usada. Fazendo \\(h = x - a \\), temos

\\[
m = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
\\]

#### Exemplo

Encontre uma equação da reta tangente à hipérbole \\( y = \frac{3}{x} \\) no ponto \\( (3, 1) \\).

<details>
\\[
m = \lim_{x \to 0} \frac{f(3 + h) - f(3)}{h} = \lim_{h \to 0} \frac{\frac{1}{3 + h} - 1}{h} = \lim_{h \to 0} \frac{\frac{3 - (3 + h)}{3 + h}}{h} \\
= \lim_{h \to 0} \frac{-h}{h(3 + h)} = \lim_{h \to 0} -\frac{1}{3 + h} = -\frac{1}{3}
\\]

Portanto, uma equação da reta tangente no ponto \\( (3, 1) \\) é

\\[
x + 3y - 6 = 0
\\]
</details>

## Velocidades

\\[
v(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
\\]

### Exemplo

Suponha que uma bola foi deixada cair do posto de observação de uma torre, 450m acima do solo.

(a) Qual a velocidade da bola após 5 segundos?
(b) Com qual velocidade a bola chega ao solo?

<details>
\\[
v(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} = \lim_{h \to 0} \frac{4,9(a + h)^{2} - 4,9a^{2}}{h} \\
= \lim_{h \to 0} \frac{4,9(a^{2} + 2ah + h^{2} - a^{2})}{h} = \lim_{h \to 0} \frac{4,9(2ah + h^{2})}{h} \\
= \lim_{h \to 0} 4,9(2a + h) = 9,8a
\\]

(a) A velocidade após 5s é de \\( v(5) = (9,8)(5) = 49 \text{m/s} \\).
(b) Uma vez que o posto de observação está 450m acima do solo, a bola vai atingir o chão em \\( t_{1} \\), quando \\( s(t_{1}) = 450 \\), isto é,

\\[
4,9t_{1}^{2} = 450
\\]

Isso fornece

\\[
t_{1}^{2} = \frac{450}{4,9} \text{ e } t_{1} \sqrt{\frac{450}{4,9}} \sim 9,6s
\\]

A velocidade com que a bola atinge o chão é, portanto,

\\[
v(t_{1}) = 9,8t_{1} = 9,8 \sqrt{\frac{450}{4,9}} \sim 94 \text{ m /s}
\\]
</details>

## Derivadas

A **derivada de uma função** \\( f \\) **em um número** \\( a \\), denotada por \\( f'(a) \\), é

\\[
f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}
\\]

> [!NOTE]
> Isso é o que chamamos de **definição** da derivada.
> Existem métodos mais simples de descobrir a derivada de uma função, como as regras de derivação.

Por causa dessa definição, podemos usar a derivada como a reta tangente à uma curva.

\\[
y - f(a) = f'(a)(x - a)
\\]

> [!TIP]
> É possível determinar a derivada analisando o gráfico.
> Onde a reta tangente à curva é uma, bem, reta, temos que a derivada é igual a zero.

### Exemplo

Encontre a derivada da função \\( f(x) = x^{2} - 8x + 9 \\) em um número \\( a \\).

<details>
\\[
f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h} \\
= \lim_{h \to 0} \frac{[(a + h)^{2} - 8(a + h) + 9] - [a^{2} - 8a + 9]}{h} \\
= \lim_{h \to 0} \frac{a^{2} + 2ah + h^{2} - 8a - 8h + 9 - a^{2} + 8a - 9}{h} \\
= lim_{h \to 0} \frac{2ah + h^{2} - 8h}{h} = \lim_{h \to 0} (2a + h - 8) \\
= 2a - 8
\\]
</details>

## Taxas de Variação

A derivada \\( f'(a) \\) é a taxa instantânea de variação de \\( y = f(x) \\0 em relação a \\( x \\) quando \\( x = a \\).

# A Derivada como uma Função

Em vez de usar um valor fixo \\( a \\) como fizemos, podemos usar a variável da função para criar uma nova função usando a derivada (a **derivada de** \\( f \\)).

\\[
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
\\]

## Exemplo

(a) Se \\( f(x) = x^{3} - x \\), encontre uma fórmula para \\( f'(x) \\).
(b) Ilustre, comparando os gráficos de \\( f \\)  \\( f' \\).

<details>
(a)

\\[
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \to 0} \frac{[(x + 3)^{3} - (x + h)] - [x^{3} - x]}{h} \\
= \lim_{h \to 0} \frac{x^{3} + 3x^{2}h + 3xh^{2} + h^{3} - x - h - x^{3} + x}{h} \\
= \lim_{h \to 0} \frac{3x^{2}h + 3xh^{2} + h^{3} - h}{h} = \lim_{h \to 0} (3x^{2} + 3xh + h^{2} - 1) = 3x^{2} - 1
\\]

(b) A ser feito algum dia :v
</details>

## Exemplo

Se \\( f(x) = \sqrt{x} \\), encontre a derivada de \\( f \\). Diga qual é o domínio de \\( f' \\).

<details>
\\[
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \to 0} \frac{\sqrt{x + h} - \sqrt{x}}{h} \\
= \lim_{h \to 0} \left(\frac{\sqrt{x + h} - \sqrt{x}}{h} \cdot \frac{\sqrt{x + h} + \sqrt{x}}{\sqrt{x + h} + \sqrt{x}}\right) \\
= \lim_{h \to 0} \frac{(x + h) - x}{h(\sqrt{x + h} + \sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x + h} + \sqrt{x}} \\
= \frac{1}{\sqrt{x} + \sqrt{x}} = \frac{1}{2\sqrt{x}}
\\]

Vemos que \\( f'(x) \\) existe se \\( x > 0 \\); logo, o domínio de \\( f' \\) é \\( (0, \infty \\).
</details>

## Exemplo

Encontre \\( f' \\) se \\( f(x) = \frac{1 - x}{2 + x} \\).

<details>
\\[
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h} = \lim_{h \to 0} \frac{\frac{1 - (x + h)}{2 + (x + h)} - \frac{1 - x}{2 + x}}{h} \\
= \lim_{h \to 0} \frac{(1 - x - h)(2 + x) - (1 - x)(2 + x + h)}{h(2 + x + h)(2 + x)} \\
= \lim_{h \to 0} \frac{(2 - x - 2h - x^{2} - xh) - (2 - x + h - x^{2} - xh)}{h(2 + x + h)(2 + x)} \\
= lim_{h \to 0} \frac{-3h}{j(2 + x + h)(2 + x)} = \lim_{h \to 0} \frac{-3}{(2 + x + h)(2 + x)} = -\frac{3}{(2 + x)^{2}}
\\]
</details>

## Outras Notações

\\[
f'(x) = y' = \frac{dy}{dx} = \frac{df}{dx} = \frac{d}{dx}f(x) = Df(x) = D_{x}f(x)
\\]

Os símbolos \\( D \\) e \\( \frac{d}{dx} \\) são chamados **operadores diferenciais**, pois indicam a operação de **diferenciação**, que é o processo de cálculo de uma derivada.

O símbolo \\( \frac{dy}{dx} \\) foi introduzido por Leibniz. Para indicar oo valor de uma derivada nesse tipo, usamos a notação

\\[
\eval{\frac{dy}{dx}}_{x = a}
\\]

## Exemplo

Onde a função \\( f(x) = |x| \\) é diferenciável?

<details>
Se \\( x > 0 \\), então \\( |x| = x \\) e podemos escolher \\( h \\) suficientemente pequeno para \\( x + h > 0 \\) e portanto \\( |x + h| = x + h \\). Consequentemente, para \\( x > 0 \\) temos

\\[
f'(x) = \lim_{h \to 0} \frac{|x + h| - |x|}{h} = \lim_{h \to 0} \frac{(x + h) - x}{h} \\
= \lim_{h \to 0} \frac{h}{h} = \lim_{h \to 0} 1 = 1
\\]

e, dessa forma, \\( f \\) é diferenciável para qualquer \\( x > 0 \\).

Analogamente, para \\( x < 0 \\) temos \\( |x| = -x \\) e podemos escolher \\( h \\) suficientemente pequeno para que \\( x + h < 0 \\), e assim \\( |x + h| = -(x + h) \\). Portanto, para \\( x < 0 \\),

\\[
f'(x) = \lim_{h \to 0} \frac{|x + h| - |x|}{h} \lim_{h \to 0} \frac{-(x + h) - (-x)}{h} \\
= \lim_{h \to 0} \frac{-h}{h} = \lim_{h \to 0} (-1) = -1
\\]

e, dessa forma, \\( f \\) é diferenciável para qualquer \\( x < 0 \\).

Para \\( x = 0 \\) temos de averiguar

\\[
f'(0) = \lim_{h \to 0} \frac{(0 + h) - f(0)}{h} \\
= \lim_{h \to 0} \frac{|0 + h| - |0|}{h} \text{(se existir)}
\\]

Vamos calcular os limites à esquerda e à direita:

\\[
\lim_{h \to 0^{+}} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^{+}} \frac{|h|}{h} = \lim_{h \to 0^{+}} \frac{h}{h} = \lim_{h \to 0^{+}} 1 = 1 \\
\lim_{h \to 0^{-}} \frac{|0 + h| - |0|}{h} = \lim_{h \to 0^{-}} \frac{|h|}{h} = \lim_{h \to 0^{-}} \frac{-h}{h} = \lim_{h \to 0^{-}} (-1) = -1
\\]

Por esses limites serem diferentes, temos que \\( f('0) \\) não existe.

Logo, a derivada de \\( f(x) = |x| \\) é

\\[
f(x) =
\begin{cases}
1 & \text{se } x > 0 \\
-1 & \text{se } x < 0
\end{cases}
\\]
</details>

## Teorema

Se \\( f \\) for diferenciável em \\( a \\), então \\( f \\) é contínua em \\( a \\).

## Como uma Função Pode Não Ser Diferenciável?

Se o gráfico de uma função \\( f \\) tiver uma "quina" ou "dobra", então o gráfico de \\( f \\) não terá tangente nesse ponto e \\( f \\) não será diferenciável ali. E, pelo teorema anterior, temos que em qualquer discontinuidade \\( f \\) deixa de ser diferenciável.

Uma terceira possibilidade surge quando a curva tem uma **reta tangente vertical** quando \\( x = a \\), isto é, \\( f \\) é contínua em \\( a \\) e

\\[
\lim_{x \to a} |f'(x)| = \infty
\\]

## Derivadas de Ordem Superior

Pela derivada resultar numa função, podemos fazer a derivada da derivada. Esta resultaria noutra função, que poderíamos derivar, fazendo a terceira derivada, e assim por diante.

Na notação de Leibniz temos

\\[
\frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{d^{2}y}{dx^{2}}
\\]

### Exemplo

Se \\( f(x) = x^{3} - x \\), encontre e interprete \\( f''(x) \\).

<details>
Em um exemplo anterior, descobrimos que a derivada é \\( f'(x) = 3x^{2} - 1 \\). Assim, a segunda derivada é

\\[
f''(x) = (f')'(x) = \lim_{h \to 0} \frac{f'(x + h) - f'(x)}{h} \\
= \lim_{h \to 0} \frac{[3(x + h^)^{2} - 1] - [3x^{2} - 1]}{h} \\
= \lim_{h \to 0} \frac{3x^{2} + 6xh + 3h^{2} - 1 - 3x^{2} + 1}{h} \\
= \lim_{h \to 0} (6x + 3h) = 6x
\\]

Podemos interpretar \\( f''(x) \\) como a taxa de variação da inclinação da curva original \\( y = f(x) \\).

É a taxa de variação de uma taxa de variação.
</details>

### Interpretando uma Segunda Derivada

 O exemplo mais familiar disso é a *aceleração*, que é definida desta maneira:

Se \\( s = s(t) \\) for a função da posição de um objeto que se move em uma reta, sabemos que sua primeira derivada representa a velocidade \\( v(t) \\) do objeto como uma função do tempo:

\\[
v(t) = s'(t) = \frac{ds}{dt}
\\]

A taxa instantânea de variação da velocidade com relaçã ao tempo é chamada **aceleração** \\( a(t) \\) do objeto. Assim, a função aceleração é a derivada da função velocidade, e, portanto, é a segunda derivada da função posição:

\\[
a(t) = v'(t) = s''(t)
\\]
