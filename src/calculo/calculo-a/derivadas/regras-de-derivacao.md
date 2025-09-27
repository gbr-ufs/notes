# Regras de Derivação

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

> [!NOTE]
> Ela é valida para qualquer número de funções.

### A Regra da Subtração

\\[
\frac{d}{dx} [f(x) - g(x)] = \frac{d}{dx} f(x) - \frac{d}{dx} g(x)
\\]

> [!NOTE]
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

#### Observação

Não use a Regra do Quociente *toda* vez que você vir um quociente. Algumas vezes é mais fácil reescreve-lo primeiro.

\\[
f(x) = \frac{3x^{2} + 2\sqrt{x}}{x} \imples f(x) = 3x + 2x^{-\frac{1}{2}}
\\]

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
k = \frac{1}{10} \ln \frac{3040}{2560} \sim 0,017185
\\]

A taxa de crescimento relativa é cerca de 1,7% ao ano, e o modelo é

\\[
P(t) = 2560e^{0,017185t}
\\]

Estimamos que a população mundial em 1993 era

\\[
P(43) = 2560e^{0,017185(43)} \sim 5360 \text{ milhões}
\\]

O modelo prevê que a população em 2020 será

\\[
P(70) = 2560e^{0,0017185(70)} \sim 8524 \text{ milhões}
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
m(1000) = 100e^{-\frac{(\ln 2) 1000}{1590}} \sim 65 \text{ mg}
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
t = -1590 \frac{\ln 0,3}{\ln 2} \sim 2762 \text{ anos}
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
k = \frac{\ln(\frac{3}{5})}{30} \sim -0,01703
\\]

Logo,

\\[
y(t) = 15e^{-0,01703t}
T(t) = 7 + 15e^{-0,01703t}
T(60) = 7 + 15e^{-0,01703(60)} \sim 12,4
\\]

Assim, depois de mais meia hora, o refrigerante terá resfriado para cerca de 12 °C.

(b) Teremos \\( T(t) = 10 \\) quando

\\[
7 + 15e^{-0,01703t} = 10
e^{-0,01703t} = \frac{3}{15} = \frac{1}{5}
t = \frac{\ln(\frac{1}{5})}{-0,01703} \sim 94,5
\\]

O refrigerante é resfriado para 10 °C depois de 1 hora e 35 minutos.
</details>

## Taxas Relacionadas
