f# Regras de Derivação

## Função Constante

\\[
\frac{d}{dx} (c) = 0
\\]

## Funções Potências

Se \\( n \\) for um número real qualquer, então

\\[
\frac{d}{dx} (x^{n}) = nx^{n - 1}
\\]

Logo,

\\[
\frac{d}{dx} (x) = 1 \text{(pois x^{0} = 1)}
\\]

### Exemplo

(a) Se \\( f(x) = x^{6} \\), então \\( f'(x) = 6x^{5} \\).

(b) Se \\( y = x^{1000} \\), então \\( y' = 1000x^{999} \\).

(c) Se \\( y = t^{4} \\), então \\( \frac{dy}{dt} = 4t^{3} \\).

(d) \\( \frac{d}{dr} (r^{3}) = 3r^{2} \\).

### Quando \\( n \\) não é um inteiro positivo

\\[
\frac{d}{dx} \sqrt{x} = \frac{1}{2\sqrt{x}}
\\]

pois

\\[
\frac{d}{dx} (x^{\frac{1}{2}}) = \frac{1}{2}x^{-\frac{1}{2}}
\\]

#### Exemplo

Derive:

(a) \\( f(x) = \frac{1}{x^{2}} \\)

(b) \\( y = \sqrt[3]{x^{2}} \\)

(a)

\\[
f'(x) = \frac{d}{dx} (x^{-2}) = -2x^{-2 -1} = -2x^{-3} = -\frac{2}{x^{3}}
\\]

(b)

\\[
\frac{dy}{dx} = \frac{d}{dx} (\sqrt[3]{x^{2}}) = \frac{d}{dx} (x^{\frac{2}{3}}) = \frac{2}{3} x^{(\frac{2}{3}) -1} = \frac{2}{3} x^{-\frac{1}{3}}
\\]

## Novas Derivadas a Partir de Conhecidas

### A Regra da Multiplicação por Constante

Se \\( c \\) for uma constante e \\( f \\), uma função derivável, então

\\[
\frac{d}{dx} [cf(x)] = c \frac{d}{dx} f(x)
\\]

#### Exemplo

(a) \\( \frac{d}{dx} (3x^{4}) = 3(4x^{3}) = 12x^{3} \\)

(b) \\( \frac{d}{dx} (-x) = \frac{d}{dx} [(-1)x] = (-1) \frac{d}{dx} (x) = -1(1) = -1 \\)

### A Regra da Soma

\\[
\frac{d}{dx} [f(x) + g(x)] = \frac{d}{dx} f(x) + \frac{d}{dx} g(x)
\\]

> ***Observação***
> Ela é valida para qualquer número de funções.

### A Regra da Subtração

\\[
\frac{d}{dx} [f(x) - g(x)] = \frac{d}{dx} f(x) - \frac{d}{dx} g(x)
\\]

> ***Observação***
> Ela é valida para qualquer número de funções.

#### Exemplo

\\[
\frac{d}{dx} (x^{8} + 12x^{5} - 4x^{4} + 10x^{3} - 6x + 5)
= \frac{d}{dx} (x^{8}) + 12 \frac{d}{dx} (x^{5}) - 4 \frac{d}{dx} (x^{4}) + 10 \frac{d}{dx} (x^{3}) - 6 \frac{d}{dx} (x) + \frac{d}{dx} (5)
= 8x^{7} + 12(5x^{4}) - 4(4x^{3}) + 10(3x^{2}) - 6(1) + 0
= 8x^{7} + 60x^{4} - 16x^{3} + 30x^{2} - 6
\\]

#### Exemplo

Encontre os pontos sobre a curva \\( y = x^{4} - 6x^{2} + 4 \\), onde a reta tangente é horizontal.

<details>

As tangentes horizontais ocorrem quando a derivada for zero. Temos

\\[
\frac{dy}{dx} = \frac{d}{dx} (x^{4}) - 6 \frac{d}{dx} (x^{2}) + \frac{d}{dx} (4)
= 4x^{3} - 12x + 0 = 4x(x^{2} - 3)
\\]

Assim, \\( \frac{dy}{dx} = 0 \\) se \\( x = 0 \\) ou \\( x^{2} - 3 = 0 \\), ou seja, \\( x = \pm \sqrt{3} \\). Logo, a curva dada tem tangentes horizontais quando \\( x = 0 \\), \\( \sqrt{3} \\) e \\( -\sqrt{3} \\). Os pontos correspondentes são \\( (0, 4) \\), \\( (\sqrt{3}, -5) \\) e \\( (-\sqrt{3}, -5) \\).

</details>

#### Exemplo

A equação de movimento de uma partícula é \\( s = 2t^{3} - 5t^{2} + 3t + 4 \\), onde \\( s \\) é medida em centímetros e \\( t \\), em segundos. Encontre a aceleração como uma função do tempo. Qual é a aceleração depois de 2 segundos?

<details>

A velocidade e a aceleração são

\\[
v(t) = \frac{ds}{dt} = 6t^{2} - 10t + 3
\\]

\\[
a(t) = \frac{dv}{dt} = 12t - 10
\\]

A aceleração depois de 2 segundos é \\( a(2) = 14 \text{ cm/s}^{2} \\).

</details>

### Funções Exponenciais

#### Derivada da Função Exponencial Natural

\\[
\frac{d}{dx} (e^{x}) = e^{x}
\\]

##### Exemplo

Se \\( f(x) = e^{x} - x \\), encontre \\( f' \\) e \\( f'' \\). Compare os gráficos de \\( f \\) e \\( f' \\).

<details>

\\[
f'(x) = \frac{d}{dx} (e^{x} - x) = \frac{d}{dx} (e^{x}) - \frac{d}{dx} (x) = e^{x} - 1
\\]

\\[
f''(x) = \frac{d}{dx} (e^{x} - 1) = \frac{d}{dx} (e^{x}) - \frac{d}{dx} (1) = e^{x}
\\]

Os gráficos serão feitos, algum dia :v

</details>

## As Regras de Produto e Quociente

### A Regra do Produto

\\[
\frac{d}{dx} [f(x)g(x)] = f(x) \frac{d}{dx} [g(x)] + g(x) \frac{d}{dx} [f(x)]
\\]

#### Exemplo

(a) Se \\( f(x) = xe^{x} \\), encontre \\( f'(x) \\).

(b) Encontre a *n*-ésima derivada, \\( f^{(n)}(x) \\).

<details>

(a)

\\[
f'(x) = \frac{d}{dx} (xe^{x})
= x \frac{d}{dx} (e^{x}) + e^{x} \frac{d}{dx} (x)
= xe^{x} + e^{x} \cdot 1 = (x + 1)e^{x}
\\]

(b)

\\[
f''(x) = \frac{d}{dx} [(x + 1)^{x}]
= (x + 1) \frac{d}{dx} (e^{x}) + e^{x} \frac{d}{dx} (x + 1)
= = (x + 1)x^{x} + e^{x} \cdot 1 = (x + 2)e^{x}
\\]

Aplicações subsequentes da Regra do Produto nos dão

\\[
f'''(x) = (x + 3)e^{x}
f^{(4)}(x) = (x + 4)e^{x}
\\]

Logo

\\[
f^{(n)}(x) = (x + n)e^{x}
\\]

</details>

#### Exemplo

Derive a função \\( f(t) = \sqrt[t} (a + bt) \\).

\\[
f'(t) = \sqrt{t} \frac{d}{dt} (a + bt) + (a + bt) \frac{d}{dt} (\sqrt{t})
= \sqrt{t} \cdot b + (a + bt) \cdot \frac{1}{2} t^{-\frac{1}{2}}
= b \sqrt{t} + \frac{a + bt}{2 \sqrt{t}} = \frac{a + 3bt}{2 \sqrt{3}}
\\]

#### Exemplo

Se \\( f(x) = \sqrt{x} g(x) \\), onde \\( g(4) = 2 \\) e \\( g'(4) = 3 \\), encontre \\( f'(4) \\).

##### Exemplo

<details>

\\[
f'(x) = \frac{d}{dx} [\sqrt{x} g(x)] = \sqrt{x} \frac{d}{dx} [g(x)] + g(x) \frac{d}{dx} [\sqrt{x}]
= \sqrt{x} g'(x) + g(x) \cdot \frac{1}{2} x^{-\frac{1}{2}}
= \sqrt{x} g'(x) + \frac{g(x)}{2 \sqrt{x}}
\\]

Logo

\\[
f'(4) = \sqrt{4} g'(4) + \frac{g(4)}{2 \sqrt{4}} = 2 \cdot 3 + \frac{2}{2 \cdot 2} = 6,5
\\]

</details>

### A Regra do Quociente

\\[
\frac{d}{dx} \left[\frac{f(x)}{g(x)}\right] = \frac{g(x) \frac{d}{dx} [f(x)] - f(x) \frac{d}{dx} [g(x)]}{[g(x)]^{2}}
\\]

#### Exemplo

Seja \\( y = \frac{x^{2} + x - 2}{x^{3} + 6} \\). Então

\\[
y' = \frac{(x^{3} + 6) \frac{d}{dx} (x^{2} + x - 2) - (x^{2} + x - 2) \frac{d}{dx} (x^{3} + 6)}{(x^{3} + 6)^{2}}
= \frac{(x^{3} + 6)(2x + 1) - (x^{2} + x - 2)(3x^{2})}{(x^{3} + 6)^{2}}
= \frac{(2x^{4} + x^{3} + 12x + 6) - (3x^{4} + 3x^{3} - 6x^{2})}{(x^{3} + 6)^{2}}
= \frac{-x^{4} - 2x^{3} + 6x^{2} + 12x + 6}{(x^{3} + 6)^{2}}
\\]

#### Exemplo

Encontre uma equação da reta tangente à curva \\( y = \frac{e^{x}}{(1 + x^{2})} \\) no ponto \\( (1, \frac{1}{2}e) \\).

<details>

\\[
\frac{dy}{dx} = \frac{(1 + x^{2}) \frac{d}{dx} (e^{x}) - e^{x} \frac{d}{dx} (1 + x^{2})}{(1 + x^{2})^{2}}
= \frac{(1 + x^{2})e^{x} - e^{x}(2x)}{(1 + x^{2})^{2}}
= \frac{e^{x}(1 - x)^{2}}{(1 + x^{2})^{2}}
\\]

Logo, a inclinação da reta tangente em \\( (1, \frac{1}{2}e) \\) é

\\[
\eval{\frac{dy}{dx}}_{x = 1} = 0
\\]

Isso significa que a reta tangente em \\( (1, \frac{1}{2}) \\) é horizontal, e sua equação é \\( y = \frac{1}{2}e \\).

</details>

> ***Observação***
> Não use a Regra do Quociente *toda* vez que você vir um quociente. Algumas vezes é mais fácil reescreve-lo primeiro.
> \\( f(x) = \frac{3x^{2} + 2\sqrt{x}}{x} \implies f(x) = 3x + 2x^{-\frac{1}{2}} \\)

## Derivadas de Funções Trigonométricas

### A Regra do Seno

\\[
\frac{d}{dx} (\text{sen x}) = \text{cos x}
\\]

#### Exemplo

Derive \\( y = x^{2} \text{ sen x} \\).

<details>

\\[
\frac{dy}{dx} = x^{2} \frac{d}{dx} (\text{sen x}) + \text{ sen x} \frac{d}{dx} (x^{2})
= x^{2} \text{ cos x} + 2x \text{ sen x}
\\]

</details>

### A Regra do Cosseno

\\[
\frac{d}{dx} (\text{cos x}) = -\text{sen x}
\\]

### A Regra da Tangente

\\[
\frac{d}{dx} (\text{tg x}) = \text{sec}^{2} x
\\]

### A Regra da Cossecante

\\[
\frac{d}{dx} (\text{cossec x}) = -\text{cossec x cotg x}
\\]

### A Regra da Secante

\\[
\frac{d}{dx} (\text{sec x}) = \text{sec x tg x}
\\]

### A Regra da Cotangente

\\[
\frac{d}{dx} (\text{cotg x}) = -\text{cossec}^{2} x
\\]

### Exemplo

Derive \\( f(x) = \frac{\text{sec x}}{1 + \text{ tg x}} \\). Para quais valores de \\( x \\) o gráfico de \\( f \\) tem uma reta tangente horizontal?

<details>

\\[
f'(x) = \frac{(1 + \text{ tg x}) \frac{d}{dx} (\text{sec x}) - \text{ sec x} \frac{d}{dx} (1 + \text{ tg x})}{(1 + \text{ tg x})^{2}}
= \frac{(1 + \text{ tg x}) \text{ sec x} \text{ tg x} - \text{ sec x} \cdot \text{ sec}^{2} x}{(1 + \text{ sec x})^{2}}
= \frac{\text{sec x} (\text{tg x} + \text{ tg}^{2} x - \text{ sec}^{2} x)}{(1 + \text{ tg x})^{2}}
= \frac{\text{sec x} (\text{tg x} - 1)}{(1 + \text{ tg x})^{2}}
\\]

Na simplificação da resposta, usamos a identidade \\( \text{tg}^{2} x + 1 = \text{sec}^{2} x \\).

</details>

### Exemplo

Um objeto na extremidade de uma mola vertical é esticado 4cm além de sua posição no repouso e solto no tempo \\( t = 0 \\). Sua posição no tempo é

\\[
s = f(t) = 4 \text{ cos t}
\\]

Encontre a velocidade e a aceleração no tempo \\( t \\) e use-as para analisar o movimento do objeto.

<details>

\\[
v = \frac{ds}{dt} = \frac{d}{dt} (4 \text{ cos t}) = 4 \frac{d}{dt} (\text{cos t}) = -4 \text{ sen t}
a = \frac{dv}{dt} = \frac{d}{dt} (-4 \text{ sen t}) = -4 \frac{d}{dt} (\text{ sen t}) = -4 \text{ cos t}
\\]

</details>

O objeto oscila desde o ponto mais baixo \\( (s = 4 \text{cm}) \\) até o mais alto \\( (s = -4\text{cm}) \\). O período de oscilação é \\( 2\pi \\), o período de \\( \text{cos t} \\).

A velocidade é \\( |v| = 4|\text{sen t}| \\), que é a máxima quando \\( |\text{sen t}| = 1 \\), ou seja, quando \\( \text{cos t} = 0 \\). Assim, o objeto move-se mais rapidamente quando passa por sua posição de equilíbrio \\( (s = 0) \\). Sua velocidade escalar é 0 quando \\( \text{sen t} = 0 \\), ou seja, no ponto mais alto e no mais baixo.

A aceleração \\( a = -4\text{ cos t} = 0 \\) quando \\( s = 0 \\). Ela tem seu maior módulo nos pontos mais altos e mais baixos.

### Exemplo

Encontre \\( \lim_{x \to 0} \frac{\text{sen } 7x}{4x} \\).

<details>

\\[
\frac{\text{sen } 7x}{4x} = \frac{7}{4}\left(\frac{\text{sen }7x}{7x}\right)
\\]

Se fizermos \\( \theta = 7x \\), então \\( \theta \to 0 \\) quando \\( x \to 0 \\), logo, pelo Limite Fundamental Trigonométrico, temos

\\[
\frac{\text{sen } 7x}{4x} = \lim_{x \to 0} \frac{7}{4}\left(\frac{\text{sen }7x}{7x}\right)
= \frac{7}{4} \lim_{\theta \to 0} \frac{\text{sen } \theta}{\theta} = \frac{7}{4} \cdot 1 = \frac{7}{4}
\\]

</details>

### Exemplo

Calcule \\( \lim_{x \to 0} \text{x cotg x} \\).

<details>

\\[
\lim_{x \to 0} \text{x cotg x} = \lim_{x \to 0} \frac{\text{x cos x}}{\text{sen x}}
= \lim_{x \to 0} \frac{\text{cos x}}{\frac{\text{sen x}}{x}} = \frac{\lim_{x \to 0} \text{cos x}}{\lim_{x \to 0} \frac{\text{sen x}}{x}}
= \frac{\text{cos } 0}{1} = 1
\\]

</details>

## A Regra da Cadeia

Se \\( g \\) for derivável em \\( x \\) e \\( f \\) por derivável em \\( g(x) \\), então a função composta \\( F = f \circ g \\) definida por \\( F(x) = f(g(x)) \\) é derivável em \\( x \\) e \\( F' \\) é dada pelo produto

\\[
F'(x) = f'(g(x)) \cdot g'(x)
\\]

Na notação de Leibniz, se \\( y = f(u) \\) e \\( u = g(x) \\) forem funções deriváveis, então

\\[
\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx}
\\]

#### Exemplo

Encontre \\( F'(x) \\) se \\( F(x) = \sqrt{x^{2} + 1} \\).

<details>

Aqui, \\( f(u) = \sqrt{u} \\) e \\( g(x) = x^{2} + 1 \\). Uma vez que

\\[
f'(u) = \frac{1}[2}u^{-\frac{1}{2}} = \frac{1}{2\sqrt{u}}
g'(x) = 2x
\\]

temos

\\[
F'(x) = f'(g(x)) \cdot g'(x)
= \frac{1}{2\sqrt{x^{2} + 1}} \cdot 2x = \frac{x}{\sqrt{x^{2} + 1}}
\\]

</details>

#### Exemplo

Derive

(a) \\( y = \text{sen}(x^{2}) \\)

(b) \\( y = \text{sen}^{2}x \\)

<details>

(a) Se \\( y = \tex{sen}(x^{2}) \\), então a função de fora é a função seno e a função de dentro é a função quadrática, logo, a Regra da Cadeia dá

\\[
\text{cos}(x^{2}) \cdot 2x = 2x\text{cos}(x^{2})
\\]

(b) Observe que \\( \text{sen}^{2} x = (\tex{sen x})^{2} \\). Aqui, a função de fora é a função quadrática, e a função de dentro é a função seno. Logo,

\\[
2 \cdot (\text{sen x}) \cdot \text{cos x} = \text{sen} 2x
\\]

</details>

#### A Regra da Potência Combinada com a Regra da Cadeia

Se \\( n \\) for qualquer número real e \\( u = g(x) \\) for derivável, então

\\[
\frac{d}{dx} (u^{n}) = nu^{n - 1} \frac{du}{dx}
\\]

Alternativamente,

\\[
\frac{d}{dx} [g(x)]^{n} = n[g(x)]^{n - 1} \cdot g'(x)
\\]

##### Exemplo

Derive \\( y = (x^{3} - 1)^{100} \\).

<details>

Fazendo \\( u = g(x) = x^{3} - 1 \\) e \\( n = 100 \\), temos

\\[
\frac{dy}{dx} = \frac{d}{dx} (x^{3} - 1)^{100} = 100(x^{3} - 1)^{99} \frac{d}{dx} (x^{3} - 1)
= 100(x^{3} - 1)^{99} \cdot 3x^{2} = 300x^{2} (x^{3} - 1)^{99}
\\]

</details>

##### Exemplo

Encontre \\( f'(x) \\) se \\( f(x) = \frac{1}{\sqrt[3]{x^{2} + x + 1}} \\).

<details>

Reescrevendo \\( f \\) como \\( f(x) = (x^{2} + x + 1)^{-\frac{1}{3}} \\), temos

\\[
f'(x) = -\frac{1}{3} (x^{2} + x + 1)^{-\frac{4}{3}} \frac{d}{dx} (x^{2} + x + 1)
= -\frac{1}{3} (x^{2} + x + 1)^{-\frac{4}{3}} (2x + 1)
\\]

</details>

##### Exemplo

Encontre a derivada da função

\\[
g(t) = \left(\frac{t - 2}{2t + 1}\right)^{9}
\\]

<details>

\\[
g'(t) = 9\left(\frac{t - 2}{2t + 1}\right)^{8} \frac{d}{dt} \left(\frac{t - 2}{2t + 1}\right)
= 9\left(\frac{t - 2}{2t + 1}\right)^{8} \frac{(2t + 1) \cdot 1 - 2(t - 2)}{(2t + 1)^{2}} = \frac{45(t - 2)^{8}}{(2t + 1)^{10}}
\\]

</details>

##### Exemplo

Derive \\( y = (2x + 1)^{5} (x^{3} - x + 1)^{4} \\).

<details>

\\[
\frac{dy}{dx} = (2x + 1)^{5} \frac{d}{dx} (x^{3} - x + 1)^{4} + (x^{3} - x + 1)^{4} \frac{d}{dx} (2x + 1)^{5}
= (2x + 1)^{5} \cdot 4(x^{3} - x + 1)^{3} \frac{d}{dx} (x^{3} - x + 1) + (x^{3} - x + 1)^{4} \cdot 5(2x + 1)^{4} \frac{d}{dx} (2x + 1)
= 4(2x + 1)^{5} (x^{3} - x + 1)^{3} (3x^{2} - 1) + 5(x^{3} - x + 1)^{4} (2x + 1)^{4} \cdot 2
\\]

Observando que cada termo tem o fator comum \\( 2(2x + 1)^{4} (x^{3} - x + 1)^{3} \\), podemos fatorá-lo e escrever a resposta como

\\[
\frac{dy}{dx} = 2(2x + 1)^{4} (x^{3} - x + 1)^{3} (17x^{3} + 6x^{2} - 9x + 3)
\\]

</details>

### A Regra da Função Expoencial

\\[
\frac{d}{dx} (a^{x}) = a^{x} \ln a
\\]

## Derivação Implícita

A derivada implícita é quando derivamos dos dois lados.

### Exemplo

Encontre \\( y'' \\) se \\( x^{4} + y^{4} = 16 \\).

<details>

Derivando a equação implicitamente em relação a \\( x \\), obtemos

\\[
4x^{3} + 4y^{3}y' = 0
\\]

Isolando \\( y' \\), temos

\\[
y' = -\frac{x^{3}}{y^{3}}
\\]

Para encontrar \\( y'' \\) derivamos esta expressão para \\( y' \\), usando a Regra do Quociente e lembrando que \\( y \\) é uma função de \\( x \\):

\\[
y'' = \frac{d}{dx} \left(-\frac{x^{3}}{y^{3}}\right) = -\frac{y^{3} (\frac{d}{dx}) (x^{3}) - x^{3} (\frac{d}{dx}) (y^{3})}{(y^{3})^{2}}
= -\frac{y^{3} \cdot 3x^{2} - x^{3} (3y^{2} y')}{y^{6}}
\\]

Colocando o valor de \\( y' \\) que achamos na equação, obtemos

\\[
y'' = -\frac{3x^{2}y^{3} - 3x^{3}y^{2} \left(-\frac{x^{3}}{y^{3}}\right)}{y^{6}}
= -\frac{3(x^{2}y^{4} + x^{6})}{y^{7}} = -\frac{3x^{2}(y^{4} + x^{4})}{y^{7}}
\\]

Mas os valores de \\( x \\) e \\( y \\) devem satisfazer a equação original \\( x^{4} + y^{4} = 16 \\). Assim, a resposta se simplifica para

\\[
y'' = -\frac{3x^{2}(16)}{y^{7}} = -48\frac{x^{2}}{y^{7}}
\\]

</details>

## Derivadas de Funções Trigonométricas Inversas

- \\( \frac{d}{dx} (\text{sen}^{-1} x) = \frac{1}{\sqrt{1 - x^{2}}} \\)
- \\( \frac{d}{dx} (\text{cos}^{-1} x) = -\frac{1}{\sqrt{1 - x^{2}}} \\)
- \\( \frac{d}{dx} (\text{tg}^{-1} x) = \frac{1}{1 + x^{2}} \\)
- \\( \frac{d}{dx} (\text{cossec}^{-1} x) = -\frac{1}{x \sqrt{x^{2} - 1}} \\)
- \\( \frac{d}{dx} (\text{sec}^{-1} x) = \frac{1}{x \sqrt{x^{2} - 1}} \\)
- \\( \frac{d}{dx} (\text{cotg}^{-1} x) = -\frac{1}{1 + x^{2}} \\)

## Derivadas de Funções Logarítmicas

\\[
\frac{d}{dx} (\log_{a} x) = \frac{1}{x \ln a}
\\]

\\[
\frac{d}{dx} (\ln x) = \frac{1}{x}
\\]

### Exemplo

Derive \\( y = \ln (x^{3} + 1) \\).

<details>

Para usarmos a Regra da Cadeia, vamos fazer \\( u = x^{3} + 1 \\). Então, \\( y = \ln u \\), logo

\\[
\frac{dy}{dx} = \frac{dy}{du} \frac{du}{dx} = \frac{1}{u} \frac{du}{dx}
= \frac{1}{x^{3} + 1} (3x^{2}) = \frac{3x^{2}}{x^{3} + 1}
\\]

</details>

### Combinando com a Regra da Cadeia

\\[
\frac{d}{dx} (\ln u) = \frac{1}{u} \frac{du}{dx} \text{ ou } \frac{d}{dx} [\ln g(x)] = \frac{g'(x)}{g(x)}
\\]

### Exemplo

Encontre \\( \frac{d}{dx} \ln(\text{sen x}) \\).

<details>

\\[
\frac{d}{dx} \ln(\text{sen x}) = \frac{1}{\text{sen x}} \frac{d}{dx} (\text{sen x}) = \frac{1}{\text{sen x}} \text{cos x} = \text{cotg x}
\\]

</details>

### Exemplo

Derive \\( f(x) = \sqrt{\ln x} \\).

<details>

\\[
f'(x) = \frac{1}{2}(\ln x)^{-\frac{1}{2}} \frac{d}{dx} (\ln x) = \frac{1}{2 \sqrt{\ln x}} \cdot \frac{1}{x} = \frac{1}{2x \sqrt{\ln x}}
\\]

</details>

### Exemplo

Derive \\( f(x) = \log_{10} (2 + \text{sen x}) \\).

<details>

\\[
f'(x) = \frac{d}{dx} \log_{10} (2 + \tex{sen x})
= \frac{1}{(2 + \text{sen x}) \ln 10} \frac{d}{dx} (2 + \text{sen x})
= \frac{\text{cos x}}{(2 + \text{sen x}) \ln 10}
\\]

</details>

### Exemplo

Encontre \\( \frac{d}{dx} \ln \frac{x + 1}{\sqrt{x - 2}} \\).

<details>

Podemos simplificar a função usando as propriedades do logaritmo.

\\[
\frac{d}{dx} \ln \frac{x + 1}{\sqrt{x - 2}} = \frac{d}{dx} [\ln(x + 1) - \frac{1}{2} \ln (x - 2)]
= \frac{1}{x + 1} - \frac{1}{2} \left(\frac{1}{x - 2}\right)
\\]

</details>

### A Regra do Logaritmo do Módulo

\\[
\frac{d}{x} \ln |x| = \frac{1}{x}
\\]

### Derivação Logarítmica

Funções complicadas podem muitas vezes ser simplificadas tomando-se os logaritmos.

#### Exemplo

Derive \\( y = \frac{x^{\frac{3}{4}} \sqrt{x^{2} + 1}}{(3x + 2)^{5}} \\).

<details>

Tome o logaritmo em ambos os lados da equação e use as Propriedades do Logaritmo para simplificar:

\\[
\ln y = \frac{3}{4} \ln x + \frac{1}{2} \ln(x^{2} + 1) - 5 \ln(3x + 2)
\\]

Derivando implicitamente em relação a \\( x \\), temos

\\[
\frac{1}{y} \frac{dy}{dx} = \frac{3}{4} \cdot \frac{1}{x} + \frac{1}{2} \cdot \frac{2x}{x^{2} + 1} - 5 \cdot \frac{3}{3x + 2}
\\]

Isolando \\( \frac{dy}{dx} \\), obtemos

\\[
\frac{dy}{dx} = y\left(\frac{3}{4x} + \frac{x}{x^{2} + 1} - \frac{15}{3x + 2}\right)
\\]

Como temos uma expressão explícita para \\( y \\), podemos substituí-lo por ela e escrever

\\[
\frac{dy}{dx} = \frac{x^{\frac{3}{4}} \sqrt{x^{2} + 1}}{(3x + 2)^{5}} \left(\frac{3}{4x} + \frac{x}{x^{2} + 1} - \frac{15}{3x + 2}\right)
\\]

</details>

#### Exemplo

Derive \\( y = x^{\sqrt{x}} \\).

<details>

\ln y = \ln x^{\sqrt{x}} = \sqrt{x} \ln x
\frac{y'}{y} = \sqrt{x} \cdot \frac{1}{x} + (\ln x) \frac{1}{2\sqrt{x}}
y' = y\left(\frac{1}{\sqrt{x}} + \frac{\ln x}{2 \sqrt{x}}\right) = x^{\sqrt{x}} \left(\frac{2 + \ln x}{2 \sqrt{x}}\right)

</details>

## Crescimento e Decaimento Exponenciais

Em muitos fenômenos naturais, quantidades crescem ou decaem a uma taxa proporcional a seu tamanho. Por exemplo, se \\( y = f(t) \\) for o número de indivíduos numa população animal ou de bactérias no instante \\( t \\), então parece plausível esperar que a taxa de crescimento \\( f'(t) \\) seja proporcional à população \\( f(t) \\); ou seja, \\( f'(t) = kf(t) \\) para alguma constante \\( k \\).

Em geral, se \\( y(t) \\) for o valor de uma quantidade \\( y \\) no instante \\( t \\), e se a taxa de variação de \\( y \\) com relação a \\( t \\\) for proporcional a seu tamanho \\( y(t) \\) em qualquer instante, então

\\[
\frac{dy}{dt} = ky
\\]

onde \\( k \\) é uma constante. Essa equação é às vezes chamada de **lei de crescimento natural** (se \\( k > 0 \\)) ou **lei de decaimento natural** (se \\( k < 0 \\)). Ela é chamada de **equação diferencial**, pois envolve uma função desconhecida \\( y \\) e sua derivada \\( \frac{dy}{dt} \\).

### Teorema

As únicas soluçẽos da equação diferencial \\( \frac{dy}{dt} = ky \\) são as exponenciais

\\[
y(t) = y(0)e^{kt}
\\]

### Crescimento Populacional

Nesse contexto, quando \\( P(t) \\) for o tamanho de uma população no instante \\( t \\), podemos escrever

\\[
\\frac{dP}{dt} = kP \text{ ou } \frac{1}{P} \frac{dP}{dt} = k
\\]

A quantidade

\\[
\frac{1}{P} \frac{dP}{dt}
\\]

é a taxa de crescimento dividida pelo tamanho da população; ela é chamada **taxa de crescimento relativa**. Segundo o teorema, uma população com uma taxa de crescimento relativa constante deve crescer exponencialmente. Então, se tivermos

\\[
\frac{dP}{dt} = 0,02P
\\]

Teriamos que a taxa de crescimento relativa é \\( k = 0,02 \\) e a população estará crescendo a uma taxa relativa de 2% ao ano. Se a população no tempo 0 for \\( P_{0} \\), então a expressão para a população será

\\[
P(t) = P_{0}e^{0,02t}
\\]

#### Exemplo

use o fato de que a população mundial era 2560 milhões em 1950 e 3040 milhões em 1960 para modelar a população do mundo na segunda metade do século XX. (Suponha que a taxa de crescimento seja proporcional ao tamanho da população.) Qual é a taxa de crescimento relativa? Use o modelo para estimar a população do mundo em 1993 e para prever a população no ano de 2020.

<details>

Medimos o tempo \\( t \\0 em anos e fazemos \\( t = 0 \\) no ano 1950. Medimos a população \\( P(t) \\) em milhões de pessoas. Então \\( P(0) = 2560 \\) e \\( P(10) = 3040 \\). Uma vez que estamos supondo que \\( \frac{dP}{dt} = kP \\), o teorema nos dá

\\[
P(t) = P(0)e^{kt} = 2560e^{kt}
P(10) = 2560e^{10k} = 3040
k = \frac{1}{10} \ln \frac{3040}{2560} \approx 0,017185
\\]

A taxa de crescimento relativa é cerca de 1,7% ao ano, e o modelo é

\\[
P(t) = 2560e^{0,017185t}
\\]

Estimamos que a população mundial em 1993 era

\\[
P(43) = 2560e^{0,017185(43)} \approx 5360 \text{ milhões}
\\]

O modelo prevê que a população em 2020 será

\\[
P(70) = 2560e^{0,0017185(70)} \approx 8524 \text{ milhões}
\\]

</details>

### Decaimento Radioativo

As substâncias radioativas decaem pela emissão espontânea de radiação. Se \\( m(t) \\) for a massa remanescente de uma massa inicial \\( m_{0} \\) da substância após um tempo \\( t \\), então a taxa de decaimento

\\[
-\frac{1}{m} \frac{dm}{dt}
\\]

foi analisada experimentalmente como sendo constante. (Como \frac{dm}{dt} é negativo, a taxa de decaimento relativa é positiva.) Segue que

\\[
\frac{dm}{dt} = km
\\]

em que \\( k \\) é uma constante negativa. Em outras palavras, substâncias radioativas decaem a uma taxa proporcional à sua massa restante. Isso significa que podemos usar o teorema para mostrar que a massa decai exponencialmente:

\\[
m(t) = mt_{0}e^{kt}
\\]

Os físicos expressam a taxa de decaimento radioativo como **meia-vida**, o tempo necessário para a metade de qualquer quantidade dada decair.

#### Exemplo

A meia-vida do rádio-226 é de 1590 anos.

(a) Uma amostra de rádio-226 possui uma massa de 100 mg. Encontre uma fórmula para a massa da amostra que resta após \\( t \\) anos.

(b) Encontre a massa depois de 1000 anos, com a precisão de um miligrama.

(c) Quando a massa será reduzida para 30 gramas?

<details>

(a) Seja \\( m(t) \\) a massa do rádio-226 (em miligramas) que resta depois de \\( t \\) anos. Então, \\( \frac{dm}{dt} = km \\) e \\( y(0) = 100 \\), logo, o teorema nos fornece

\\[
m(t) = m(0)e^{kt} = 100e^{kt}
\\]

Para determinarmos o valor de \\( k \\), usamos o fato de que \\( y(1590) = \frac{1}{2} (100) \\). Assim,

\\[
100e^{1590k} = 50 \text{ logo } e^{1590k} = \frac{1}{2}
\\]

e

\\[
1590k = \ln \frac{1}{2} = -\ln 2
k = -\frac{\ln 2}{1590}
\\]

Portanto,

\\[
m(t) = 100e^{-\frac{(\ln 2)t}{1590}}
\\]

Poderíamos usar o fato de que \\( e^{\ln 2} = 2 \\) para escrever a expressão para \\( m(t) \\) na forma alternativa

\\[
m(t) = 100 \times 2^{-\frac{t}{1590}}
\\]

(b) A massa depois de 1000 anos é

\\[
m(1000) = 100e^{-\frac{(\ln 2) 1000}{1590}} \approx 65 \text{ mg}
\\]

(c) Queremos encontrar o valor de \\9 t \\) tal que \\( m(t) = 30 \\), ou seja,

\\[
100e^{-\frac{(\ln 2)t}{1590}} = 30 \text{ ou } e^{-\frac{(\ln 2)t}{1590}} = 0,3
\\]

Resolvemos essa equação em \\( t \\) tomando o logaritmo natural em ambos os lados:

\\[
-\frac{\ln 2}{1590}t = \ln 0,3
\\]

Logo

\\[
t = -1590 \frac{\ln 0,3}{\ln 2} \approx 2762 \text{ anos}
\\]

</details>

### Lei de Resfriamento de Newton

A Lei de Resfriamento de Newton afirma que a taxa de resfriamento de um objeto é proporcional à diferença de temperaturas entre o objeto e o meio circundante, desde que esta diferença não seja muito grande. Se tomarmos \\( T(t) \\) como a temperatura do objeto no tempo \\( t \\) e \\( T \\), como a temperatura do meio circundante, então podemos formular a Lei de Resfriamento de Newton como uma equação diferencial:

\\[
\frac{dT}{dt} = k(T - T_{S})
\\]

Para deixá-la mais parecida com a diferencial real, podemos fazr uma mudança de variáveis \\( y(t) = T(t) - T_{S} \\). Como \\( T_{s} \\) é constante, temos \\( y'(t) = T'(t) \\) e a equação se torna

\\[
\frac{dy}{dt} = ky
\\]

#### Exemplo

Uma garrafa de refrigerante que está à temperatura ambiente (22 °C) é colocada em um refrigerador, no qual a temperatura é 7 °C. Depois de meia hora o refrigerante esfriou para 16 °C.

(a) Qual a temperatura do refrigerante depois de mais meia hora?

(b) Quanto tempo demora para o refrigerante resfriar até 10 °C?

<details>

(a) Seja \\( T(t) \\) a temperatura do refrigerante depois de \\( t \\) minutos. A temperatura ambiente é de \\( T_{S} = 7 \text{ °C} \\), logo a Lei de Resfriamento de Newton afirma que

\\[
\frac{dT}{dt} = k(T - 7)
\\]

Se tomarmos \\( y = T - 7 \\), então \\( y(0) = T(0) - 7 = 22 - 7 = 15 \\), e \\( y \\) assim é uma solução do problema de valor inicial

\\[
\frac{dy}{dt} = ky
y(0) = 15
\\]

e pelo teorema temos

\\[
y(t) = y(0)e^{kt} = 15e^{kt}
\\]

Foi-nos dado que \\( T(30) = 16 \\), assim \\( y(30) = 16 - 7 = 9 \\) e

\\[
15e^{30k} = 9
e^{30k} \frac{3}{5}
\\]

Tomando logaritmos, temos

\\[
k = \frac{\ln(\frac{3}{5})}{30} \approx -0,01703
\\]

Logo,

\\[
y(t) = 15e^{-0,01703t}
T(t) = 7 + 15e^{-0,01703t}
T(60) = 7 + 15e^{-0,01703(60)} \approx 12,4
\\]

Assim, depois de mais meia hora, o refrigerante terá resfriado para cerca de 12 °C.

(b) Teremos \\( T(t) = 10 \\) quando

\\[
7 + 15e^{-0,01703t} = 10
e^{-0,01703t} = \frac{3}{15} = \frac{1}{5}
t = \frac{\ln(\frac{1}{5})}{-0,01703} \approx 94,5
\\]

O refrigerante é resfriado para 10 °C depois de 1 hora e 35 minutos.

</details>

## Taxas Relacionadas

Cosnsite no cálculo da tada de variação de uma grandeza emtermos da taxa de variação de outra
(mais facilmente medida).
Então, achamos uma equação que relacione as duas grandezas
e usamos a Regra da Cadeia para derivar ambos os lados em relação ao tempo.

### Exemplo

Ar está sendo bombeado para um balão esférico de modo que seu volume aumenta a uma taxa de 100 \\( cm^{3}/s \\).
Quão rápido o raio do balão está aumentando quando o diâmetro for 50 cm.

<details>

Informação dada:

> [...] uma taxa de 100 \\( cm^{3}/s \\).

Incógnita:

> Quão rápido o raio do balão está aumentando quando o diâmetro for 50 cm?

Para expressarmos matemáticamente essas grandezas,
introduzimos alguma *notação* sugestiva:

\\[
\text{Seja $V$ o volume do balão e seja $r$ seu raio.}
\\]

A chave está em lembrar que taxas de variação são derivadas.
Neste problema, o volume e o raio são funções do tempo \\( t \\).
A taxa de crescimento do volume em relação ao tempo é a derivada \\( \frac{dV}{dt} \\),
e a taxa de crescimento do raio é \\( \frac{dr}{dt} \\).
Podemos, portanto, reapresentar o que foi dado e a incógnita como a seguir:

> *Dada*: \\( \frac{dV}{dt} = 100cm^{3}/s\\)

> *Incógnita*: \\( \frac{dr}{dt} \text{ quando } r = 25 cm \\)

Para conectarmos \\( \frac{dV}{dt} \\) e \\( \frac{dr}{dt} \\),
primeiro relacionamos \\( V \\) e \\( r \\) pela fórmula para o volume de uma esfera:

\\[
V = \frac{4}{3} \pi r^{3}
\\]

Para usarmos a informação dada, derivamos cada lado dessa equação em relação a \\( t \\).
Para derivarmos o lado direito preciamos usar a Regra da Cadeia:

\\[
\frac{dV}{dt} = \frac{dV}{dr} \frac{dr}{dt} = 4 \pi r^{2} \frac{dr}{dt}
\\]

Agora, isolamos a incógnita:

\\[
\frac{dr}{dt} = \frac{1}{4\pi r^{2}} \frac{dV}{dt}
\\]

Se colocarmos \\( r = 25 \\) e \\( \frac{dV}{dt} = 100 \\) nessa equação, obtemos

\\[
\frac{dr}{dt} = \frac{1}{4\pi (25)^{2}} 100 = \frac{1}{25\pi}
\\]

O raio do balão está crescendo a uma taxa de \\( \frac{1}{25\pi} \approx 0,0127 cm/s \\).

</details>

### Exemplo

Uma escada com 5 m de comprimento está apoiada em uma parede vertical.
Se a base da escada desliza, afastando-se da parede a uma taxa de 1 m/s,
quão rápido o topo da escada está escorregando para baixo na parede quando a base da escada está a 3 m da parede?

<details>

Primeiro faça o desenho do triângulo e marque as variáveis (o comprimento apoiado à parede é a hipotenusa).
\\( x \\) será os metros de distância da base da escada à parede,
e \\( y \\) a distância do topo da escada ao solo.
Ambos \\( x \\) e \\( y \\) são funções de \\( t \\)
(tempo, medido em segundos).

Temos que \\( \frac{dx}{dt} = 1 m/s \\), e nos foi pedido par encontrar \\( \frac{dy}{dt} \\) quando \\( x = 3 m \\).

Podemos encontrar usando o Teorema de Pitágoras:

\\[
x^{2} + yÇ`2^= 25
\\]

Derivando cada lado em relação a \\( t \\) usando a Regra da Cadeia, temos

\\[
2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0
\\]

e isolando a taxa desejada, obtemos

\\[
\frac{dy}{dt} = -\frac{x}{y} \frac{dx}{dt}
\\]

Quando \\( x = 3 \\), o Teorema de Pitágoras fornece \\( y = 4 \\) e,
portanto, substituindo esses valores e \\( \frac{dx}{dt} = 1 \\), temos

\\[
\frac{dy}{dt} = -\frac{3}{4} (1) = -\frac{3}{4} m/s
\\]

O fato de \\( \frac{dy}{dt} \\) ser negativo indica que a distância do topo da escada ao solo está *decrescendo*
a uma taxa de \\( \frac{3}{4} m/s\\).
Em outras palavras, o topo da scada está deslizando para baixo a uma taxa de \\( \frac{3}{4} m/s\\).

</details>

### Exemplo

Um tanque de água possui o formato de um cone circular invertido, com base de raio de 2 m e altura igual a 4 m.
Se a água está sendo bombeada para o tanque a uma taxa de 2 \\( m^{3}/min \\),
encontre a taxa na qual o nível de água está aumentando quando a água estiver a 3 m de profundidade.

<details>

Primeiro faça o desenho do cone e marque as variáveis.
Vamos usar \\( V \\) para o volume da água, \\( r \\) para o raio da superfície e \\( h \\) para a altura no instante \\( t \\),
onde \\( t \\) é medido em minutos.

Temos que \\( \frac{dV}{dt} = 2 m^{3}/min \\) e nos foi pedido para encontrar \\( \frac{dh}{dt} \\) quando \\( h \\) for 3 m. As quantidades \\( V \\) e \\( h \\) são relacionadas pela equação

\\[
V = \fac{1}{3} \pi r^{2] h
\\]

mas podemos expressar \\( V \\) como uma função apenas de \\( h \\). Para eliminar \\( r \\), usamos os triângulos similares para escrever

\\[
\frac{r}{h} = \frac{2}{4} \implies r = \frac{h}{2}
\\]

e a expressão para \\( V \\) se torna

\\[
V = \frac{1}{3} \pi \left(\frac{h}{2}\right)^{2} h = \frac{\pi}{12} h^{3}
\\]

Agora podemos derivar cada lado em relação a \\( t \\):

\\[
\frac{dV}{dt} = \frac{\pi}{4} h^{2} \frac{dh}{dt}
\\]

então

\\[
\frac{dh}{dt} = \frac{4}{\pi r^{2}} \frac{dV}{dt}
\\]

Substituindo \\( h = 3 m \\) e \\( \frac{dV}{dt} = 2 m^{3}/min \\), temos

\\[
\frac{dh}{dt} = \frac{4}{\pi (3)^{2}} \cdot 2 = \frac{8}{9\pi}
\\]

O nível da água estará subindo a uma taxa de \\( \frac{8}{9\pi} \approx 0,28 m/min \\).

</details>

### Exemplo

O carro \\( A \\) está se movimentando para o oeste a 90 km/h e o carro \\( B \\) está se movimentando para o norte a 100 km/h.
Ambos vão em direção à intersecção de duas estradas.
A que taxa os carros se aproximam um do outro quando o carro \\( A \\) está a 60 m e o carro \\( B \\) está a 80 m da intersecção?

<details>

Podemos desenhar o problema como um gráfico, que se assemelha a um triângulo
(centro na origem, \\( B \\) no eixo das ordenadadas, \\( A \\) no eixo das abcissas).

Em um dado instante \\( t \\), seja \\( x \\) a distância do carro \\( A \\) a \\( C \\), seja \\( y \\) a distância do carro \\( B \\) a \\( C \\), e seja \\( z \\) a distância entre os carros,
em que \\( x \\), \\( y \\) e \\( z \\) são medidos em quilômetros.

Foi-nos dado que \\( \frac{dx}{dt} = -90 km/h \\) e \\( \frac{dy}{dt} = -100 km/h \\).
Foi-nos pedido para encontrar \\( \frac{dz}{dt} \\).
A equação que relaciona \\( x \\), \\( y \\) e \\( z \\) é dada pelo Teorema de Pitágoras:

\\z^{2} = x^{2} + y^{2}
\\]

Derivando cada lado em relação a \\( t \\), temos

\\[
2z \frac{dz}{dt} = 2x \frac{dx}{dt} + 2y \frac{dy}{dt}
\\]

\\[
\frac{dz}{dt} = \frac{1}{z} \left(x \frac{dx}{dt} + y \frac{dy}{dt}\right)
\\]

Quando \\( x = 0,06 km \\) e \\( y = 0,08 km \\), o Teorema de Pitágoras nos dá \\( z = 0,1 km \\),
portanto

\\[
\frac{dz}{dt} = \frac{1}{0,1} [0,06(-90) + 0,08(-100)] = -134 km/h
\\]

Os carros aproximam-se um do outro a uma taxa de 134 km/h.

</details>

### Exemplo

Um homem ando ao longo de um caminho reto a uma velocidade de 1,5 m/s.
Um holofote localizado no chão a 6 m do caminho é mantido focalizado no homem.
A que taxa o holofote está girando quando o homem está a 8 m do ponto do caminho mais próximo da luz?

<details>

Também podemos representar esse problema usando um triângulo.
Seja \\( x \\) a distância entre o homem e o ponto do caminho mais próximo ao holofote.
Seja \\( \theta \\) o ângulo entre o feixe do holofote e a perpendicular ao caminho.

Foi-nos dado que \\( \frac{dx}[dt] = 1,5 m/s \\) e nos foi pedido para encontrar \\( \frac{d\theta}{dt} \\) quando \\( x = 8 \\). A equação que relaciona \\( x \\) e \\( theta \\) pode ser escrita como:

\\[
\frac{x}{6} = \text{tg } \theta & x = 6 \text{tg } \theta
\\]

Derivando cad alado em relação a \\( t \\), obtemos

\\[
\frac{dx}{dt} = 6 \text{sec}^{2} \theta \frac{d\theta}{dt}
\\]

então

\\[
\frac{d\theta}{dt} = \frac{1}{6} \text{cos}^{2} \theta \frac{dx}{dt} = \frac{1}[6} \text{cos}^{2} \theta (1,5) = \frac{1}{4} \text{cos}^{2} \theta
\\]

Quando \\( x = 8 \\), o comprimento do feixe é 10, logo \\( \text{cos} \theta = \frac{3}{5} \\) e

\\[
\frac{dx}{dt} = \frac{1}{4} \left(\frac{3}{5}\right)^{2} = \frac{9}{100} = 0,09
\\]

O holofote está girando a uma tax a de 0,09 rad/s.

</details>

## Aproximações Lineares e Diferenciais

Podemos usar a reta tangente em \\( (a, f(a)) \\) como uma aproximação para a curva \\( y = f(x) \\) quando \\( x \\) estiver próximo de \\( a \\). Uma equação dessa reta tangente é

\\[
y = f(a) + f'(a)(x - a)
\\]

e a aproximação

\\[
f(x) \approx f(a) + f'(a)(x - a)
\\]

é denominada **aproximação linear** ou **aproximação pela reta tangente** \\( f \\) em  \\( a \\). A função linear cujo gráfico é essa reta tangente, ou seja,

\\[
L(x) = f(a) + f'(a)(x - a)
\\]

é denominada **linearização** de \\( f \\) em \\( a \\).

### Exemplo

Encontre a linearização da função \\( f(x) = \sqrt{x + 3} \\) em \\( a = 1 \\) e use-a para aproximar os números \\( \sqrt{3,98} \\) e \\( \sqrt{4,05} \\). Essas aproximações estão superestimadas ou subestimadas?

<details>

A derivada de \\( f(x) = (x + 3)^{\frac{1}{2}} \\) é

\\[
f'(a) = \frac{1}{2}(x + 3)^{-\frac{1}{2}} = \frac{1}{2\sqrt{x + 3}}
\\]

e assim temos \\( f(1) = 2 \\) e \\( f'(1) = \frac{1}{4} \\). Colocando esses valores na equação de lineraização

\\[
L(x) = f(1) + f'(1)(x - 1) = 2 + \frac{1}{4}(x - 1) = \frac{7}{4} + \frac{x}{4}
\\]

A aproximação linear correspondente é

\\[
\sqrt{x + 3} \approx \frac{7}{4} + \frac{x}{4}
\\]

Em particular, temos

\\[
\sqrt{3,98} \approx \frac{7}{4} + \frac{0,98}{4} = 1,995 \text{ e } \sqrt{4,05} \approx \frac{7}{4} + \frac{1,05}{4} = 2,0125
\\]

Com isso, vemos que, realmente, a aproximação pela reta tangente é uma boa aproximação para a função dada quando \\( x \\) está próximo de 1. Vemos também que nossas aproximações são superestimadas, pois a reta tangente está acima da curva.

</details>

### Diferenciais

Se \\( y = f(x) \\), onde \\( f \\) é uma função deriváve, então a **diferencial** \\( dx \\) é uma variável independente, ou seja, a \\( dx \\) pode ser dado um valor qualquer. A **diferencial** \\( dy \\) é então definida em termos de \\( dx \\) pela equação

\\[
dy = f'(x) dx
\\]

Assim \\( dy \\) é uma variável dependente; depende dos valores de \\( x \\) e \\( dx \\). Se a \\( dx \\) for dado um valor específico e \\( x \\) for algum número específico no domínio de \\( f \\), então o valor numérico de \\( dy \\) está determinado.

Sejam \\( P(x, f(x)) \\) e \\( Q(x + \Delta{x}, f(x + \Delta{x})) \\) pontos sobre o gráfico de \\( f \\) e seja \\( dx = \Delta{x} \\). A variação corespondente me \\( y \\) é

\\[
\Delta{x} = f(x + \Delta{x}) - f(x)
\\]

A inclinação da reta tangente \\( PR \\) é a derivada \\( f'(x) \\). Assim, a distância direta de \\( R \\) para \\( R \\) é \\( f'(x)dx = dy \\). Consequentemente, \\( dy \\) representa a distância que a curva \\( y = f(x) \\) sobe ou desce quando \\( x \\) varia por uma quantidade \\( dx \\).

#### Exemplo

O raio de uma esfera foi medido e descobriu-se que possui 21 cm com uma possibilidade de erro na medida de no máximo 0,05 cm. Qual é o erro máximo usando esse valor de raio para computar o volume da esfera?

<details>

Se o raio da esfera for \\( r \\), então seu volume é \\( V = \frac{4}{3} \pi r^{3} \\). Se o error na medida do valor de \\( r \\) for denotado por \\( dr = \Delta{r} \\), então o erro correspondente no cálculo do valor de \\( V \\) é \\( \Delta{V} \\), que pode ser aproximado pela diferencial

\\[
dV = 4\pi r^{2} dr
\\]

Quando \\( r = 21 \\) e \\( dr = 0,05 \\), temos

\\[
dV = 4\pi (21)^{2} 0,05 \approx 277
\\]

O erro máximo no volume calculado é de cerca de 277 \\( cm^{3} \\).

</details>

## Funções Hiperbólicas

### Seno

- Função: \\( \text{senh x} = \frac{e^{x} - e^{-x}}{2} \\)
- Identidades
  - \\( senh(-x) = -\text{senh x} \\)
  - \\( senh(x + y) = \text{senh x cosh y} + \text{cosh x senh y} \\)
- Derivada: \\( \frac{d}{dx} (\text{senh x}) = \text{cosh x} \\)
- Inversa: \\( senh^{-1}x = \ln (x + \sqrt{x^{2} + 1}), x \in \mathbb{R} \\)
- Derivada da inversa: \\( \frac{d}{dx} (senh^{-1}x) = \frac{1}{\sqrt{1 + x^{2}}} \\)

### Cosseno

- Função: \\( \text{cosh x} = \frac{e^{x} + e^{-x}}{2} \\)
- Identidades
  - \\( cosh(-x) = \text{cosh x}
  - \\( cosh(x + y) = \text{cosh x cosh y} + \text{senh x senh y} \\)
  - \\( cosh^{2}x - senh^{2}x = 1 \\)
- Derivada: \\( \frac{d}{dx} (\text{cosh x}) = \text{senh x} \\)
- Inversa: \\( cosh^{-1}x = \ln (x + \sqrt{x^{2} - 1}), x \geq 1 \\)
- Derivada da inversa: \\( \frac{d}{dx}(cosh^{-1}x) = \frac{1}{\sqrt{x^{2} - 1}} \\)

### Tangente

- Função: \\( \text{tgh x} = \frac{\text{senh x}{cosh x}} \\)
- Identidade: \\( 1 - tgh^{2}x = sech^{2}x \\)
- Derivada: \\( \frac{d}{dx} (\text{tgh x}) = sech^{2}x \\)
- Inversa: \\( tgh^{-1}x = \frac{1}{2} \ln \left(\frac{1 + x}{1 - x}\right), -1 < x < 1 \\)
- Derivada da inversa: \\( \frac{d}{dx} (tgh^{-1}x) = \frac{1}{1 - x^{2}} \\)

### Cossecante

- Função: \\( \text{cossech x} = \frac{1}{\text{senh x}} \\)
- Derivada: \\( \frac{d}{dx} \text{(cossech x) = -\text{cossech x cotgh x}} \\)
- Inversa: \\( cossech^{-1}x \ln \left(\frac{1}{x} + \sqrt{\frac{1}{x^{2}} + 1}\right) \\)
- Derivada da inversa: \\( \frac{d}{dx} (cossech^{-1}x) = -\frac{1}{|x| \sqrt{x^{2} + 1}} \\)

### Secante

- Função: \\( \text{sech x} = \frac{1}{\tet{cosh x}} \\)
- Derivada: \\( \frac{d}{dx} (\text{sech x}) = -\text{sech x tgh x} \\)
- Inversa: \\( sech^{-1}x = \ln \left(\frac{1}{x} + \sqrt{\frac{1}{x^{2}} - 1}\right) \\)
- Derivada da inversa: \\( \frac{d}{dx} (sech^{-1}x) = -\frac{1}{x \sqrt{1 - x^{2}}} \\)

### Cotangente

- Função: \\( \text{cotgh x} = \frac{\text{cosh x}}{\text{senh x}} \\)
- Derivada: \\( \frac{d}{dx} (\text{cotgh x}) = -cossech^{2}x \\)
- Inversa: \\( cotgh^{-1}x = \frac{1}{2} \ln \left(\frac{x + 1}{x - 1}\right) \\)
- Derivada da inversa: \\( \frac{d}{dx} (cotgh^{-1}x) = \frac{1}{1 - x^{2}} \\)
