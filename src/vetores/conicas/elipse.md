### Elipse

Quando apenas um dos cones é cortado de uma forma não paralela.

#### Definição

Sejam \\( F_{1} \\) e \\( F_{2} \\) pontos distintos do plano. Denote \\( d(F_{1}, F_{2}) = 2c > 0 \\). A elipse \\( \mathcal{E} \\) de focos \\( F_{1} \\) e \\( F_{2} \\) é o conjunto do plano que consiste de todos os pontos \\( P \\), cuja soma das distâncias a \\( F_{1} \\) e \\( F_{2} \\) é igual a uma constante \\( 2a > 0 \\), onde \\( a > c \\), ou seja,

\\[
\mathcal{E} = \\{P; d(P, F_{1}) + d(P, F_{2}) = 2a\\}, a > c
\\]

- Uma elipse possui dois focos, \\( F_{1} e F_{2} \\)
- A *distância focal* ( \\( d(F_{1}, F_{2}) \\) ) da elipse é a distância \\( 2c \\) entre os focos
- A *reta focal* é a reta \\( l \\) que passa pelos focos \\( F_{1} \\) e \\( F_{2} \\)
- O *centro* da elipse é o ponto médio \\( C \\) do segmento \\( F_{1}F_{2} \\)
- Os *vértices* da elipse são os pontos \\( A_{1} \\), \\( A_{2} \\), \\( B_{1} \\) e \\( B_{2} \\)
- O *eixo maior* é o segmento \\( A_{1}A_{2} \\)
- O *eixo menor* é o segmento \\( B_{1}B_{2} \\)

#### Observação

\\[
d(A_{1}, C) = d(A_{2}, C) = a
\\]

\\[
d(B_{1}, C) = d(B_{2}, C) = b
\\]

\\[
d(F_{1}, C) = d(F_{2}, C) = c
\\]

\\[
d(A_{1}, F_{1}) = d(A_{2}, F_{2}) = a - c
\\]

#### Observação

O comprimento do eixo maior da elipse é igual a \\( 2a \\), enquando o do eixo menor é \\( 2b \\).

#### Observação

\\[
b^{2} = a^{2} - c^{2}
\\]

#### Equação Reduzida

##### Elipse com centro na origem e eixo focal coincidente com o eixo \\( y \\)

- \\( A_{1} = (0, -a) \\)
- \\( A_{2} = (0, a) \\)
- \\( B_{1} = (-b, 0) \\)
- \\( B_{2} = (b, 0) \\)
- \\( C = (0, 0) \\)
- \\( F_{1} = (0, -c) \\)
- \\( F_{2} = (0, c) \\)
- \\( P = (x, y) \in \mathcal{E} \iff \frac{x^{2}}{b^{2}} \frac{y^{2}}{a^{2}} = 1\\)

##### Elipse com centro na origem e eixo focal coincidente com o eixo \\( x \\)

- \\( A_{1} = (-a, 0) \\)
- \\( A_{2} = (a, 0) \\)
- \\( B_{1} = (0, b) \\)
- \\( B_{2} = (0, -b) \\)
- \\( C = (0, 0) \\)
- \\( F_{1} = (-c, 0) \\)
- \\( F_{2} = (c, 0) \\)
- \\( P = (x, y) \in \mathcal{E} \iff \frac{x^{2}}{a^{2}} \frac{y^{2}}{b^{2}} = 1\\)

##### Observação

Um jeito fácil de descobrir com qual eixo o eixo focal coincide é olhando os valores dos denominadores, e lembrando que \\( a > b \\).

##### Elipse com centro \\( C = (x_{0}, y_{0}) \\) e eixo focal paralelo ao eixo \\( y \\)

- \\( A_{1} = (x_{0}, y_{0} - a) \\)
- \\( A_{2} = (x_{0}, y_{0} + a) \\)
- \\( B_{1} = (x_{0} - b, y_{0}) \\)
- \\( B_{2} = (x_{0} + b, y_{0}) \\)
- \\( C = (x_{0}, x_{0}) \\)
- \\( F_{1} = (x_{0}, y_{0} - c) \\)
- \\( F_{1} = (x_{0}, y_{0} + c) \\)
- \\( l : x = x_{0} \\)
- \\( P = (x, y) \in \mathcal{E} \iff \frac{(x - x_{0})^{2}}{b^{2}} + \frac{(y - y_{0})^{2}}{a^{2}} = 1\\)

##### Elipse com centro \\( C = (x_{0}, y_{0}) \\) e eixo focal paralelo ao eixo \\( x \\)

- \\( A_{1} = (x_{0} - a, y_{0}) \\)
- \\( A_{2} = (x_{0} + a, y_{0}) \\)
- \\( B_{1} = (x_{0}, y_{0} - b) \\)
- \\( B_{2} = (x_{0}, y_{0} + b) \\)
- \\( C = (x_{0}, x_{0}) \\)
- \\( F_{1} = (x_{0} - c, y_{0}) \\)
- \\( F_{1} = (x_{0} + c, y_{0}) \\)
- \\( l : y = y_{0} \\)
- \\( P = (x, y) \in \mathcal{E} \iff \frac{(x - x_{0})^{2}}{a^{2}} + \frac{(y - y_{0})^{2}}{b^{2}} = 1\\)

##### Observação

Para ver com que eixo o eixo focal é paralelo, basta ver o denominador da equação. Se o que tem \\( x \\) em cima é maior, então é paralelo com o eixo \\( x \\), e se o que tem \\( y \\) é maior, então é paralelo com \\( y \\).

#### Excentricidade

Diz o quão achatada a elipse é.

\\[
e = \frac{c}{a}, (0 < e < 1)
\\]

Quanto mais próximo de 0 a excentricidade é, mais arredondada é a elipse.

#### Equação Geral

\\[
Ax_{2} + By^{2} + Cx + Dy + E = 0
\\]
