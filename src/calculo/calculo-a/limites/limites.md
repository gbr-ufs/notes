# O Limite de uma Função

Suponha que \\( f(x) \\) seja definido quando está próximo de \\( a \\) (\\( f \\) é definido num *intervalo aberto* com \\( a \\)). Então escrevemos

\\[
\lim_{x \to a} f(x) = L
\\]

e dizemos "o limite de \\( f(x) \\), quando \\( x \\) tende a \\( a \\), é igual A \\( L \\)" se pudermos tornar os valores de \\( f(x) \\) arbitrariamente próximos de \\( L \\), ao tornar \\( x \\) suficientemente próximo de \\( a \\) (por ambos os lados de \\( a \\)) mas não igual a \\( a \\).

Em termos matemáticos

\\[
x \to a \implies \lim_{x \to a} f(x) = L \implies f(x) \to L, x \neq a
\\]

## Exemplo

Estime o valor de \\( \lim_{x \to 1} \frac{x - 1}{x^{2} - 1} \\).

<details>

Observe que \\( f(x) \\) não está definida quando \\( x = 1 \\), mas isso não importa, pois a definição diz que devemos considerar os valores *próximos*, não iguais.

Pegando alguns valores próximos de 1

| \\( x < 1 \\) | \\( f (x) \\)  |
|---------------|----------------|
| 0,5           | 0,666667       |
| 0,9           | 0,526316       |
| 0,99          | 0,502513       |
| 0,999         | 0,500250       |
| 0,9999        | 0,500025       |

| \\( x > 1 \\) | \\( f (x) \\)  |
|---------------|----------------|
| 1,5           | 0,400000       |
| 1,1           | 0,476190       |
| 1,01          | 0,497512       |
| 1,001         | 0,499750       |
| 1,0001        | 0,499975       |

podemos concluir que

\\[
\lim_{x \to 1} = \frac{x - 1}{x^{2} - 1} = 0,5
\\]


</details>

## Exemplo

Estime o valor de \\( \lim_{t \to 0} \frac{\sqrt{t^{2} + 9} - 3}{t^{2}} \\).

<details>

Divisão por zero é impossível, então \\( f(t) \\) não está definida quando \\( t = 0 \\), por isso, devemos usar aquele mesmo método de exaustão anterior.

|        t         | \\( \\frac{\sqrt{t^{2} + 9}}{t^{2}} \\) |
|------------------|---------------------------------|
| \\( \pm 1,0 \\)  | 0,16228                         |
| \\( \pm 0,5 \\)  | 0,16553                         |
| \\( \pm 0,1 \\)  | 0,16662                         |
| \\( \pm 0,05 \\) | 0,16666                         |
| \\( \pm 0,01 \\) | 0,16667                         |

Com a tabela acima, podemos concluir que

\\[
\frac{\sqrt{t^{2} + 9}}{t^{2}} = \frac{1}{6}
\\]

</details>

## Exemplo

Faça uma estimativa de \\( \lim_{x \to 0} \frac{\text{sen x}}{x} \\).

<details>

Fazendo aquele mesmo esquema da tabela, notariamos que o valor de \\( f(x) \\) se aproxima cada vez mais de 1, e com isso podemos supor que

\\[
\lim_{\theta \to 0} \frac{\text{sen \theta}}{\theta} = 1
\\]

Que é o limite fundamental trigonométrico, importante de ser lembrado.

Outro limite do tipo é

\\[
\lim_{\theta \to 0} \frac{\text{cos \theta} - 1}{\theta} = 0
\\]

</details>

## Exemplo

Analise \\( \lim_{x \to 0} \text{sen} \frac{\pi}{x} \\).

<details>

Tentando vários valores aqui, o resultado é zero, então podemos estimar que

\\[
\lim_{x \to 0} \text{sen} \frac{\pi}{x} = 0
\\]

Mas isto está **errado**, demonstrando que não podemos só tentar advinhando, precisamos de ferramentas reais para descobrir os limites.

</details>
