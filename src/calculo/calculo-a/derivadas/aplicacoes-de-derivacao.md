<!-- TODO: Adicionar exemplos do livro! -->

# Aplicações de Derivação

## Valores Máximos e Mínimos

\\[
c \in D(f)
\\]

- Valor máximo absoluto: \\( \forall{x} \in D(f), f(c) \geq f(x) \\)
- Valor mínimo absoluto: \\( \forall{x} \in D(f), f(c) \leq f(x) \\)

Valores extremos locais existem.

### Funções

#### Quadrada

Valor mínimo 0, nenhum máximo.

#### Cúbica

Nenhum mínimo, nenhum máximo.

### Observação

Um extremo absoluto não pode ser local se estiver no extremo do intervalo.

### Teorema dos Extremos (de Weierstrass)

Se \\( f \\) for contínua em um intervalo fechado \\( [a, b] \\), então \\( f \\) assume um valor máximo absoluto \\( f(c) \\) e um mínimo \\( f(d) \\).

### Teorema de Fermat

Se \\( f \\) tiver um máximo ou mínimo local em \\( c \\) e se \\( f'(c) \\) existir, então \\( f'(c) = 0 \\).

#### Número Crítico

\\[
c \in D(f), f'(c) = 0 \lor \not\exists f'(c)
\\]

### Método do Intervalo Fechado

1. Encontre os valores de \\( f \\) nos números críticos.
2. Encontre os valores de \\( f \\) nas extremidades.
3. O maior valor entre 1 e 2 é o máximo absoluto, e o menor o mínimo.

## O Teorema do Valor Médio

### Teorema de Rolle

Seja \\( f \\) uma função que satisfaça as seguintes hipóteses:

1. \\( f \\) é contínua no intervalo fechado \\( [a, b] \\).
2. \\( f \\) é derivável no intervalo aberto \\( (a, b) \\).
3. \\( f(a) = f(b) \\).

Então, \\( \exists{c} \in (a, b), f'(c) = 0 \\).

### Definição

Seja \\( f \\) uma função que satisfaça as seguintes hipóteses:

1. \\( f \\) é contínua no intervalo fechado \\( [a, b] \\).
2. \\( f \\) é derivável no intervalo aberto \\( (a, b) \\).

Então, \\( \exists{c} \in (a, b), f'(c) = \frac{f(b) - f(a)}{b - a} \lor f(b) - f(a) = f'(c)(b - a) \\).

### Teorema

Se \\( f'(x) = 0 \forall{x} \in (a, b) \\), então \\( f \\) é constante em \\( (a, b) \\).

### Corolário

Se \\( f'(x) = g'(x) \forall{x} \in (a, b) \\), então \\( f - g \\) é constante em \\( (a, b) \\); isto é, \\( f(x) = g(x) + c \\), em que \\( c \\) é uma constante.

## Como as Derivadas Afetam a Forma de Um Gráfico

### O que \\( f' \\) diz sobre \\( f \\)?

\\( f \\) cresce quando \\( f' \\) é positivo e decresce quando é negativo.

### Exemplo

Encontre onde a função \\( f(x) = 3x^{4} - 4x^{3} - 12x^{2} + 5 \\) é crescente e onde ela é decrescente.

<details>

\\[
f'(x) = 12x^{3} - 12x^{2} - 24 \implies f'(x) = 12x(x - 2)(x + 1)
\\]

1. Ache os números críticos

-1, 0, 2.

2. Faça uma tabela

| Intervalo  | 12x | x - 2 | x + 1 | f'(x) | f                                   |
|============|=====|=======|=======|=======|=====================================|
| x < -1     | -   | -     | -     | -     | descrescente em (-\\(\infty\\), -1) |
| -1 < x < 0 | -   | -     | +     | +     | crescente em (-1, 0)                |
| 0 < x < 2  | +   | -     | +     | -     | descrescente em (0, 2)              |
| x > 2      | +   | +     | +     | +     | crescente em (2, \\( \infty \\)     |

</details>

### Teste da Primeira Derivada

(a) Se o sinal de \\( f' \\) mudar de positivo para negativo em \\( c \\), então \\( f \\) tem um máximo local em \\( c \\).

(b) Se o sinal de \\( f' \\) mudar de negativo para positivo em \\( c \\), então \\( f \\) tem um mínimo local em \\( c \\).

### Definição

Se o gráfico de \\( f \\) estiver acima de todas as suas tangentes no intervalo \\( I \\), então \\( f \\) é chamada **côncava para cima** em \\( I \\). Se o gráfico de \\( f \\) estiver abaixo de todas as suas tangentes em \\( I \\), então \\( f \\) é chamada **côncava para baixo** em \\( I \\).

### Teste da Concavidade

(a) Se \\( f''(x) > 0 \forall{x} \in I \\), então o gráfico de \\( f \\) é **côncavo para cima** em \\( I \\).

## Regra de l'Hôspital

Se \\( \lim_{x \to a} f(x) = 0 \\) e \\( \lim_{x \to a} g(x) = 0 \\) ou \\( \lim_{x \to a} f(x) = \infty \\) e \\( \lim_{x \to a} g(x) =  \infty \\), então

\\[
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g(x)}
\\]

### Produto Indeterminado

\\( fg = \frac{f}{\frac{1}{g}} \\) ou \\( fg = \frac{g}{\frac{1}{f}} \\).

### Potência Indeterminada

\\[
\lim_{x \to a} f(x)^{g(x)} = \lim_{x \to a} g(x) \ln f(x)
\\]

## Resumo do Esboço de Curvas

### Roteiro para Esboçar uma Curva

1. Domínio (Ex: \\( \mathbb{R}\\\{0\} \\) )
2. Simetria
- Se \\( f(-x) = f(x) \\), a função é par e a curva é simétrica em relação ao eixo \\( y \\).
- Se \\( f(-x) = -f(x) \\), a função é ímpar e a curva é simétrica em relação à origem.
3. Assíntotas
- Horizontais: \\( \lim_{x \to \infty} f(x) = \text{valor qualquer exceto $\infty$} \\)
- Verticais: \\( \lim_{x \to a} f(x) = \infty \\)
4. Intervalos de Crescimento ou Decrescimento
- Intervalos de \\( f'(x) \\).
5. Valores Máximos e Mínimos Locais
- Encontre os números críticos (onde \\( f'(c) = 0 \\) ou \\( f' \\) não existe).
- Se \\( f' \\) muda de positiva para negativa em \\( c \\), então \\( f(c) \\) é um máximo local, e a inversa para o mínimo local.
6. Concavidade
- Se \\( f''(x) > 0 \\), a curva é côncava para cima e a inversa para baixo.
7. Pontos de Inflexão

Onde a direção da concavidade muda.

## Problemas de Otimização

O Teorema do Valor Extremo permite resolver problemas de otimização, ao determinar pontos da função onde "lucros", por exemplo, podem ser maximizados e "custos" reduzidos.

### Passos na Resolução dos Problemas de Otimização

1. Interprete o problema.
2. Faça um diagrama.
3. Introduza uma notação.
4. Pela notação do passo 3, cria uma função de uma variável.

## Primitivas

\\( F \\) é primitiva de \\( f \\) num intervalo \\( I \\) se \\( F'(x) = f(x) \forall{x} \in I \\).

### Exemplo

\\[
F(x) = \frac{1}{3}x^{3}, f(x) = x^{2} \vDash F'(x) = x^{2} = f(x)
\\]

\\[
G(x) = \frac{1}{3x}x^{3}, f(x) = x^{2} \vDash G'(x) = x^{2} = f(x)
\\]

Portanto, \\( F(x) \\) e \\( G(x) \\) sãpo primitivas de \\( f(x) \\).

### Teorema

Se \\( F \\) é uma primitiva de \\( f \\) num intervalo \\( I \\), então a primitiva mais geral de \\( f \\) em \\( I \\) é \\( F(x) + C \\), onde \\( C \\) é uma constante qualquer.

### Movimento Retilíneo

\\[
a(t) = v'(t), v(t) = s'(t)
\\]
