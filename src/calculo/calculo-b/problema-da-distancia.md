# O Problema da Distância

A tarefa neste problema é encontrar a distância percorrida por um objeto durante um certo período de tempo, sendo que a velocidade é conhecida em todos os instantes. Se a velocidade permanece constante, então o problema é fácil de resolver por meio da fórmula

\\[
\text{distância} = \text{velocidade} \times \text{tempo}
\\]

Mas se a velocidade variar, não é tão fácil assim.

## Exemplo

Suponha que queiramos estimar a distância percorrida por um carro durante um intervalo de tempo de 30 segundos. A cada 5 segundos registramos a leitura do velocímetro na seguinte tabela:

|      Tempo(s)     | 0  | 5  | 10 | 15 | 20 | 25 | 30 |
|-------------------|----|----|----|----|----|----|----|
| Velocidade (km/h) | 27 | 34 | 38 | 46 | 51 | 50 | 45 |

Para termos o tempo e a velocidade em unidades constantes, podemos a velocidade para metros por segundo:

|      Tempo(s)     |  0  |  5  |  10  |  15  |  20  |  25  |  30  |
|-------------------|-----|-----|------|------|------|------|------|
|  Velocidade (m/s) | 7,5 | 9,4 | 10,6 | 12,8 | 14,2 | 13,9 | 12,5 |

Multiplicando as velocidades pelos tempos podemos fazer estimativas das distâncias percorridas nos intervalos

\\[
\text{De 0 a 5 segundos}
7,5 \text{ m/s } \times 5 \text{ s } = 37,5 \text{ m}
\text{De 5 a 10 segundos}
9,4 \text{ m/s } \times 5 \text{ s } = 47 \text{ m}
\text{Fazendo o resto...}
(7,5 \times 5) + (9,4 \times 5) + (10,6 \times 5) + (12,8 \times 5) + (14,2 \times 5) + (13,9 \times 5) = 342 \text{ m}
\\]

Podemos, da mesma forma, usar a velocidade no *fim* de cada intervalo de tempo em vez de no começo como a velocidade constante.

\\[
(9,4 \times 5) + (10,6 \times 5) + (12,8 \times 5) + (14,2 \times 5) + (13,9 \times 5) + (12,5 \times 5) = 367 \text{ m}
\\]

Para **aumentar a precisão**, podemos **reduzir os segundos feitos entre leituras**.

Que nem no problema da área, podemos fazer os retângulos nos gráfico. Os resultados que conseguimos são as áreas dos triângulos (o primeiro triângulo teem área 37,5).

Em geral, suponha que o objeto se mova com velocidade \\( v = f(t) \\), em que \\( a \leq t \leq b \\) e \\( f(t) \geq 0 \\) (logo, o objeto move-se sempre no sentido positivo). Vamos registrar as velocidades nos instantes \\( t_{0} (= a) \\), \\( t_{1} \\), \\( t_{2} \\), ..., \\( t_{n} (= b) \\), de forma que a velocidade seja aproximadamente constante em cada subintervalo. Se esses tempos forem igualmente espaçados, então entre duas leituras consecutivas temos o período de tempo \\( \Delta{t} = \frac{b - a}{n} \\). Durante o primeiro intervalo de tempo a velocidade é aproximadamente \\( f(t_{0}) \\) e, portanto, a distância percorrida é de aproximadamente \\( f(t_{0}) \Delta{t} \\). Analogamente, a distância percorrida durante o segundo intervalo de tempo é cerca de \\( f(t_{1}) \Delta{t} \\) e a distância total percorrida durante o intervalo de tempo \\( [a, b] \\) é de aproximadamente

\\[
f(t_{0}) \Delta{t} + f(t_{1}) \Delta{t} + ... + f(t_{n} - 1) \Delta{t} = \sum_{i = 1}^{n} f(t_{i - 1}) \Delta{t}
\\]

Se uarmos as velocidades nas extremidades direitas em vez de nas extremidades esquerdas, nossa estimativa para a distância total ficará

\\[
t(t_{1}) \Delta{t} + f(t_{2}) \Delta{t} + ... + f(t_{n}) \Delta{t} = \sum_{i = 1}^{n} f(t_{i}) \Delta{t}
\\]

Quanto mais frequentemente medirmos a velocidade, mais precisa será nossa estimativa, então parece plausível que a distância *exata d* percorrida é o *limite* de tais expressões:

\\[
d = \lim_{n \to \infty} \sum_{i = 1}^{n} f(t_{i - 1}) \Delta{t} = \lim_{n \to \infty} \sum_{i = 1}^{n} f(t_{i}) \Delta{t}
\\]

Com isso, temos que a distância percorrida é igual à área sob o gráfico da função velocidade.
