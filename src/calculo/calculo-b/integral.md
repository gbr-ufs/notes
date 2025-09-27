# Integral

Se \\( f \\) é uma função contínua definida em \\( a \leq x \leq b \\), dividimos o intervalo \\( [a, b] \\) em \\( n \\) subintervalos de comprimentos iguais \\( \Delta{x} = \frac{(b - a)}{n} \\). Sejam \\( x_{0} (= a) \\), \\( x_{1} \\), \\( x_{2} \\), ..., \\( x_{n} (= b) \\) as extremidades desses subintervalos, e sejam \\( x_{1}^{*} \\), \\( x_{2}^{\*} \\), ..., \\( x_{n}^{*} \\) **pontos amostrais arbitrários** nesses subintervalos, de forma que \\( x_{i}^{*} \\) esteja no i-ésimo subintervalo \\( [x_{i - 1}, x_{i}] \\). Então a **integral definida de** \\( f \\) **de** \\( a \\) a \\( b \\) é

\\[
\int_{a}^{b} f(x)dx = \lim_{n \to \infty} \sum_{i = 1}^{n} f(x_{i}^{*}) \Delta{x}
\\]

E dizemos que \\( f \\) é **integrável** em \\( [a, b] \\).

## Legenda

- \\( \int \\) é o **sinal de integral**
- \\( f(x) \\) é o **integrando**
- \\( a \\) e \\( b \\) são os **limites de integração**
  - \\( a \\) é o **limite inferior**
  - \\( b \\) é o **limite superior**
